import React from 'react';
import { TeamMembers } from './teamMembers';
import { InvestorsList } from './investorsList';
import { CompanyPricing, CompanyPricingCTAs, InvestorPricing } from './pricing';
import { BlogsList } from './BlogsList';
import { UpdatesList } from './UpdatesList';
import { CustomerStoriesList } from './customerStories';
import { WebinarsList } from './WebinarsList';
import { JobBoard } from './JobBoard';
import { ContactUs } from './ContactUs';
import { Ledgistats } from './Ledgistats';
import { Marketplaces } from './marketplace/marketplaces';

export const StaticBlockPicker = ({ block, prefix }: StaticBlockProps & Prefix) => {
  if (!block) return null;
  switch (block) {
    case 'teamMembers':
      return <TeamMembers />;
    case 'investorsList':
      return <InvestorsList />;
    case 'companyPricing':
      return <CompanyPricing prefix={prefix} />;
    case 'companyPricingCtas':
      return <CompanyPricingCTAs />;
    case 'investorPricing':
      return <InvestorPricing prefix={prefix} />;
    case 'blogsList':
      return <BlogsList prefix={prefix} />;
    case 'updatesList':
      return <UpdatesList prefix={prefix} />;
    case 'customerStoriesList':
      return <CustomerStoriesList prefix={prefix} />;
    case 'webinarsList':
      return <WebinarsList prefix={prefix} />;
    case 'jobBoard':
      return <JobBoard prefix={prefix} />;
    case 'ledgistats':
      return <Ledgistats />;
    case 'marketplace':
      return <Marketplaces prefix={prefix} />;
    case 'contactUs':
      return <ContactUs />;
    default:
      throw new Error('static block not recognized');
  }
};
