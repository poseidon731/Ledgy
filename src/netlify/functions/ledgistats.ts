import type { Handler } from '@netlify/functions';
import fetch, { RequestInit } from 'node-fetch';
import crypto from 'crypto';

const bobApiToken = process.env.BOB_API_TOKEN || '';
const ledgistatsToken = crypto.createHash('sha256').update(bobApiToken).digest('hex').slice(0, 32);

const bobApiUrl = 'https://api.hibob.com/v1/';
const options: RequestInit = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    Authorization: bobApiToken,
  },
};

const fetchBob = async (endpoint: string) => {
  const url = `${bobApiUrl}${endpoint}`;
  try {
    const res = await fetch(url, options);
    return await res.json();
  } catch (error) {
    return null;
  }
};

const getAggregateField =
  (employees: UntypedObject[]) =>
  (getField: (employees: DisableTypeScript) => DisableTypeScript) => {
    const entries = employees
      .map(getField)
      .map((v) => (v ? v.split(',') : []))
      .flat();

    const words: Record<string, number> = {};
    entries.forEach((v) => {
      words[v] = (words[v] || 0) + 1;
    });
    return words;
  };

const getFunFacts = (employees: UntypedObject[]) => {
  const funFacts = employees
    .map((v) => {
      const facts = v.about.custom.field_1649271427667;
      return facts ? facts.split('\n') : [];
    })
    .flat()
    .filter(Boolean)
    .map((v) => [v, 1]);
  return Object.fromEntries(funFacts);
};

const handler: Handler = async (event) => {
  if (event.headers.authorization !== ledgistatsToken)
    return { statusCode: 401, body: 'not-authorized' };

  const data = await fetchBob('people?humanReadable=true');
  if (!data) return { statusCode: 503, body: 'service-unavailable' };

  const { employees } = data;
  const aggregateField = getAggregateField(employees);

  const nationalities = aggregateField((v) => v.personal.nationality);
  const hobbies = aggregateField((v) => v.about.hobbies);
  const superpowers = aggregateField((v) => v.about.superpowers);
  const languages = aggregateField((v) => v.personal.custom.field_1640782705253);
  const backgrounds = aggregateField((v) => v.about.custom.field_1640792007488);
  const funfacts = getFunFacts(employees);

  return {
    statusCode: 200,
    body: JSON.stringify({ nationalities, hobbies, superpowers, languages, backgrounds, funfacts }),
  };
};

export { handler };
