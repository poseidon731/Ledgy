import React, { ReactNode } from 'react';
import { DynamicTrans } from '../utils';

type CompanyPricingCTAProps = { title: React.ReactNode; description: React.ReactNode };

const companyPricingCTAs: CompanyPricingCTAProps[] = [
  {
    title: (
      <>
        <DynamicTrans>Do you tackle the climate crisis?</DynamicTrans>{' '}
        <span role="img" aria-label="earth">
          🌍
        </span>
      </>
    ),
    description: (
      <>
        <DynamicTrans>
          You get a 20% discount on Growth if your startup helps reduce carbon emissions.
        </DynamicTrans>{' '}
        <a href="mailto:sales@ledgy.com?subject=Eco-Friendly Discount Application">
          <DynamicTrans>Tell us about your impact!</DynamicTrans>
        </a>
      </>
    ),
  },
  {
    title: (
      <>
        <DynamicTrans>Do you have less than €2m in funding?</DynamicTrans>{' '}
        <span role="img" aria-label="rocket">
          🚀
        </span>
      </>
    ),
    description: (
      <>
        <DynamicTrans>Only pay half the price during your first year on Ledgy.</DynamicTrans>{' '}
        <a href="mailto:sales@ledgy.com?subject=Startup Discount Application">
          <DynamicTrans>Send us a message</DynamicTrans>
        </a>{' '}
        <DynamicTrans> and you’ll receive a discount.</DynamicTrans>
      </>
    ),
  },
  {
    title: (
      <>
        <DynamicTrans>Are you crowdfunded?</DynamicTrans>{' '}
        <span role="img" aria-label="unicorn">
          🦄
        </span>
      </>
    ),
    description: (
      <>
        <DynamicTrans>
          Pay much less if you have many non-voting stakeholders on your cap table.
        </DynamicTrans>{' '}
        <a href="mailto:sales@ledgy.com?subject=Crowdfunded Startup on Ledgy">
          <DynamicTrans>Contact us</DynamicTrans>
        </a>{' '}
        <DynamicTrans>to get a quote.</DynamicTrans>
      </>
    ),
  },
];

const CompanyPricingCTA = ({
  title,
  description,
}: {
  title: ReactNode;
  description: ReactNode;
}) => (
  <div className="col-12 col-lg-6 col-xl-4">
    <h5>{title}</h5>
    <p className="pb-5">{description}</p>
  </div>
);

export const CompanyPricingCTAs = () => (
  <div className="container my-4 mb-lg-6">
    <div className="row text-center justify-content-center my-7">
      {companyPricingCTAs.map((v) => {
        const { title, description } = v;
        return (
          <CompanyPricingCTA
            title={title}
            description={description}
            key={`company-pricing-cta-${title}`}
          />
        );
      })}
    </div>
  </div>
);
