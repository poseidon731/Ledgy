import React, { ReactNode } from 'react';
import { appUrl, INVESTOR_FEATURES } from '../../helpers';
import { RequestDemoButton } from '../RequestDemoButton';
import { DynamicTrans, Button } from '../utils';

const { angelFeatures, fundFeatures } = INVESTOR_FEATURES;

const InvestorTypeCard = ({
  type,
  price,
  features,
  button,
  highlight = false,
}: {
  type: ReactNode;
  price: ReactNode;
  features: string[];
  button: ReactNode;
  highlight?: boolean;
}) => (
  <div className="col-12 col-md-6 col-lg-5 mb-4">
    <div
      className={`investor-pricing-plan h-100 d-flex flex-column align-items-center justify-content-between text-center py-5 px-4 ${
        highlight ? 'border-energetic-blue' : ''
      }`}
    >
      <div>
        <h3 className="font-weight-bold">{type}</h3>
        <div className="text-xl font-weight-light mb-4 mt-2">{price}</div>
        <ul className="p-0 mb-3 list-style-none">
          {features.map((feature, i) => (
            <li className="mb-4" key={`${feature}-${i}`}>
              <DynamicTrans>{feature}</DynamicTrans>
            </li>
          ))}
        </ul>
      </div>
      {button}
    </div>
  </div>
);

export const InvestorPricing = ({ prefix }: Prefix) => (
  <div className="container my-4 mb-lg-6">
    <div className="row justify-content-center">
      <InvestorTypeCard
        type={<DynamicTrans>Business Angel</DynamicTrans>}
        price={<DynamicTrans>Free</DynamicTrans>}
        features={angelFeatures}
        button={
          <Button inverted outline href={`${appUrl}/signup`}>
            <DynamicTrans>Sign up</DynamicTrans>
          </Button>
        }
      />
      <InvestorTypeCard
        highlight
        type={<DynamicTrans>Fund</DynamicTrans>}
        price={<DynamicTrans>Contact us</DynamicTrans>}
        features={fundFeatures}
        button={<RequestDemoButton buttonClassName="" prefix={prefix} />}
      />
    </div>
  </div>
);
