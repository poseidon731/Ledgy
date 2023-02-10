import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

import { Section } from './utils';
import { formatUrl } from './lib';

const JOB_BOARD_LOCATION = 'Zurich';

const getSearchString = () => (typeof window === 'object' ? window.location.search : '');

const getJobs = () =>
  useStaticQuery(graphql`
    query {
      allGreenhouseDepartment(sort: { fields: name }) {
        nodes {
          id
          gh_Id
          name
          jobs {
            ...GreenhouseJobFragment
          }
        }
      }
    }
  `);

const Job = ({ title, gh_Id, prefix }: GreenhouseJobProps & Prefix) => {
  const page = `/careers/${gh_Id}`;
  const url = `${formatUrl(prefix, page)}${getSearchString()}`;

  return (
    <li key={gh_Id} className="list-style-none">
      <Link to={url}>{title}</Link>
    </li>
  );
};

const byTitle = (a: GreenhouseJobProps, b: GreenhouseJobProps) =>
  a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1;

const Department = ({ name, jobs: allJobs, prefix }: GreenhouseDepartmentProps & Prefix) => {
  if (!allJobs) return null;

  const jobs = allJobs.filter((v) => v.location.name.includes(JOB_BOARD_LOCATION));
  if (!jobs.length) return null;

  return (
    <div className="col-12 col-md-4">
      <h4>{name}</h4>
      <ul className="pl-0">
        {jobs.sort(byTitle).map((job) => (
          <Job key={job.id} prefix={prefix} {...job} />
        ))}
      </ul>
    </div>
  );
};

export const JobBoard = ({ prefix }: Prefix) => {
  const blogs = getJobs();
  const { nodes: departments } = blogs.allGreenhouseDepartment;
  return (
    <Section noPadding>
      <h2 className="text-center mb-5">Open Positions</h2>
      <div className="row justify-content-center mb-9">
        {departments.map((department: GreenhouseDepartmentProps) => (
          <Department key={department.id} prefix={prefix} {...department} />
        ))}
      </div>
    </Section>
  );
};
