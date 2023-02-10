type InvestorProps = { name: string; description: string };

export const getInvestorDescriptions = (): {
  [key: string]: InvestorProps;
} => ({
  sequoia: {
    name: 'Sequoia Capital',
    description: 'From idea to IPO and beyond, Sequoia helps the daring build legendary companies',
  },
  visionariesClub: {
    name: 'Visionaries Club',
    description:
      'Berlin-based VC fund backed by leading digital founders and family business entrepreneurs',
  },
  btov: {
    name: 'btov Partners',
    description: 'Europe’s symbiosis of early-stage VC funds and private investor network',
  },
  creathor: {
    name: 'Creathor Ventures',
    description: 'Backing the creators of our future since 1984',
  },
  viPartners: {
    name: 'VI Partners',
    description: 'Healthcare & technology venture capital since 2001',
  },
  luciana: {
    name: 'Luciana Lixandru',
    description:
      'Looking to partner with exceptional founders in Europe. The creative spirits. The underdogs.',
  },
  andreas: {
    name: 'Andreas Göldi',
    description: 'Internet technologist, entrepreneur and investor. Partner at btov.',
  },
  harry: {
    name: 'Harry Stebbings',
    description: 'Creator of The Twenty Minute VC',
  },
  xavier: {
    name: 'Xavier Niel',
    description:
      'Funding ambitious, cohesive teams with stellar learning & execution curves at Kima Ventures',
  },
  daniel: {
    name: 'Daniel Dines',
    description: 'CEO & Founder at UiPath',
  },
  mathilde: {
    name: 'Mathilde Collin',
    description: 'CEO & Co-founder of Front',
  },
  paul: {
    name: 'Dr. Paul E. Sevinç',
    description: 'Entrepreneur, technologist, founder of Doodle.com',
  },
  myke: {
    name: 'Myke Näf',
    description: 'Entrepreneur, business angel, founder of Doodle.com',
  },
});
