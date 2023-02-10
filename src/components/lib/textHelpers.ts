import {
  faTwitter,
  faFacebook,
  faLinkedin,
  faAngellist,
  faYoutube,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons';
import {
  helpUrl,
  youtubeUrl,
  twitterUrl,
  linkedinUrl,
  angelUrl,
  facebookUrl,
  HR_AND_COMPENSATION,
  VCS_BUSINESS_ANGELS,
  HR_AND_COMPENSATION_TITLE,
  VCS_BUSINESS_ANGELS_TITLE,
  DATA_PROTECTION,
  CAP_TABLE,
  EQUITY_PLAN_AUTOMATION,
  SCENARIO_MODELING,
  EMPLOYEE_ENGAGEMENT_TITLE,
  CAP_TABLE_MANAGEMENT_TITLE,
  EQUITY_PLAN_AUTOMATION_TITLE,
  SCENARIO_MODELING_TITLE,
  EMPLOYEE_ENGAGEMENT,
  MARKETPLACE,
  MARKETPLACE_TITLE,
  ESOP_TEMPLATES_TITLE,
  ESOP_TEMPLATES,
  CALCULATOR_TITLE,
  CALCULATOR,
  SECONDARIES,
  SECONDARIES_TITLE,
  LEGAL_OPERATIONS_TITLE,
  FINANCE_ACCOUNTING_TITLE,
  FINANCE_ACCOUNTING,
  LEGAL_OPERATIONS,
} from '../../helpers';

export const getUnderlineHtml = (text: string): string =>
  text.replace('_', '<u>').replace('_', '</u>').replace('_', '<u>').replace('_', '</u>');

export type FooterLink = [string, string];

const companyLinks: FooterLink[] = [
  ['Team', 'team'],
  ['Sustainability', 'sustainability'],
  ['Careers', 'careers'],
  ['Contact', 'contact'],
];

const legalLinks: FooterLink[] = [
  ['Data protection', DATA_PROTECTION],
  ['Terms of service', 'legal/terms'],
  ['Privacy policy', 'legal/privacy-policy'],
  ['Cookie policy', 'legal/cookie-policy'],
  ['GDPR', 'legal/gdpr'],
];

const productLinks: FooterLink[] = [
  ['For human resources', HR_AND_COMPENSATION],
  ['For finance', FINANCE_ACCOUNTING],
  ['For investors', VCS_BUSINESS_ANGELS],
  ['Cap table management', CAP_TABLE],
  ['Equity plan automation', EQUITY_PLAN_AUTOMATION],
  ['Scenario & exit modeling', SCENARIO_MODELING],
  ['Pricing for companies', 'company-pricing'],
  ['Pricing for investors', 'investor-pricing'],
];

const resourceLinks: FooterLink[] = [
  ['Help', helpUrl],
  ['Marketplace', 'marketplace'],
  ['Webinars', 'webinars'],
  ['Blog', 'blog'],
  ['Customer stories', 'customer-stories'],
  ['Updates', 'updates'],
  ['Lawyer partners', 'partners'],
  ['Financing calculator', 'calculator'],
  ['ESOP templates', 'employee-participation-plan-templates'],
];

type SocialLink = [string, IconDefinition, string];

const socialLinks: SocialLink[] = [
  [linkedinUrl, faLinkedin, 'LinkedIn'],
  [twitterUrl, faTwitter, 'Twitter'],
  [facebookUrl, faFacebook, 'Facebook'],
  [youtubeUrl, faYoutube, 'YouTube'],
  [angelUrl, faAngellist, 'AngelList'],
];

export const FOOTER_LINKS = { companyLinks, legalLinks, productLinks, resourceLinks, socialLinks };

export const NAVBAR_TITLES = {
  solutionsTitle: 'Solutions',
  resourcesTitle: 'Resources',
  pricingTitle: 'Pricing',
  dataProtectionTitle: 'Data protection',
  companyTitle: 'Company',
};

export type NavbarMenuItem = { icon: IconType; title: string; description: string; link: string };
export type NavbarMenuColumn = { items: NavbarMenuItem[]; header?: string };

const teams: NavbarMenuColumn = {
  header: 'Teams',
  items: [
    {
      link: HR_AND_COMPENSATION,
      title: HR_AND_COMPENSATION_TITLE,
      description: 'Automated equity plans, employee dashboards',
      icon: 'hr',
    },
    {
      link: FINANCE_ACCOUNTING,
      title: FINANCE_ACCOUNTING_TITLE,
      description: 'Cap table, scenario modeling, funding rounds',
      icon: 'financeLegalAccounting',
    },
    {
      link: LEGAL_OPERATIONS,
      title: LEGAL_OPERATIONS_TITLE,
      description: 'Compliant contracts, reporting and e-signatures',
      icon: 'company',
    },
    {
      link: VCS_BUSINESS_ANGELS,
      title: VCS_BUSINESS_ANGELS_TITLE,
      description: 'Portfolio management, real-time company insights',
      icon: 'rocket',
    },
  ],
};

const features: NavbarMenuColumn = {
  header: 'Use Cases',
  items: [
    {
      link: CAP_TABLE,
      title: CAP_TABLE_MANAGEMENT_TITLE,
      description: 'Your cap table: accurate, visual, built to scale',
      icon: 'documents',
    },
    {
      link: EQUITY_PLAN_AUTOMATION,
      title: EQUITY_PLAN_AUTOMATION_TITLE,
      description: 'Your company’s equity on auto pilot',
      icon: 'robot',
    },
    {
      link: SCENARIO_MODELING,
      title: SCENARIO_MODELING_TITLE,
      description: 'Map out complex funding rounds, dilution, and exits',
      icon: 'chart',
    },
    {
      link: EMPLOYEE_ENGAGEMENT,
      title: EMPLOYEE_ENGAGEMENT_TITLE,
      description: 'Make their ownership clear at every stage',
      icon: 'employees',
    },
    {
      link: SECONDARIES,
      title: SECONDARIES_TITLE,
      description: 'Liquidity events for your team',
      icon: 'handshake',
    },
  ],
};

const learn: NavbarMenuColumn = {
  header: 'Learn',
  items: [
    {
      link: helpUrl,
      title: 'Help',
      description: 'Get quickly started with Ledgy or dive deeper into how the features work',
      icon: 'help',
    },
    {
      link: 'webinars',
      title: 'Webinars',
      description:
        'Regular short webinars give a quick introduction in many equity and Ledgy-related topics',
      icon: 'video',
    },
    {
      link: 'data-protection',
      title: 'Data Protection',
      description: 'GDPR, security, privacy',
      icon: 'lock',
    },
  ],
};

const explore: NavbarMenuColumn = {
  header: 'Explore',
  items: [
    {
      link: 'blog',
      title: 'Blog',
      description:
        'Background stories about equity topics, founder and investor interviews and more to explore',
      icon: 'blog',
    },
    {
      link: 'customer-stories',
      title: 'Customer Stories',
      description: 'Learn what Ledgy’s customers have to say',
      icon: 'story',
    },
    {
      link: 'updates',
      title: 'Updates',
      description: 'Feature releases, improvements and all things new at Ledgy',
      icon: 'updates',
    },
  ],
};

const tools: NavbarMenuColumn = {
  header: 'Tools',
  items: [
    {
      link: MARKETPLACE,
      title: MARKETPLACE_TITLE,
      description: 'Integrations and partnerships',
      icon: 'handshake',
    },
    {
      link: ESOP_TEMPLATES,
      title: ESOP_TEMPLATES_TITLE,
      description:
        'Access employee participation plan templates developed with leading law firms for free',
      icon: 'template',
    },
    {
      link: CALCULATOR,
      title: CALCULATOR_TITLE,
      description: 'The calculator you need if you’re raising capital, no signup required',
      icon: 'calculator',
    },
  ],
};

const pricingTypes: NavbarMenuColumn = {
  items: [
    {
      link: 'company-pricing',
      title: 'For Companies',
      description:
        'Free for early-stage startups and powerful for scaling companies, choose the plan that suits your company',
      icon: 'company',
    },
  ],
};

const companyTypes: NavbarMenuColumn = {
  items: [
    {
      link: 'about-us',
      title: 'About Us',
      description: 'Our values and our why',
      icon: 'aboutUs',
    },
    {
      link: 'team',
      title: 'Team',
      description: 'Get to know the Ledgistas',
      icon: 'team',
    },
    {
      link: 'careers',
      title: 'Careers',
      description: 'Join us on our mission',
      icon: 'careers',
    },
    {
      link: 'sustainability',
      title: 'Sustainability',
      description: 'Our commitments to the world',
      icon: 'investor',
    },
  ],
};

const solutions: NavbarMenuColumn[] = [teams, features];
const resources: NavbarMenuColumn[] = [learn, explore, tools];
const pricing: NavbarMenuColumn[] = [pricingTypes];
const company: NavbarMenuColumn[] = [companyTypes];

export const NAVBAR_LINKS = { solutions, resources, pricing, company };
