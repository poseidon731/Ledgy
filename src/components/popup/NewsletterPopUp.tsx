import React, { useState } from 'react';
import { SubscriptionForm } from '../forms';
import { ClosingButton } from '../PublicityBanner';
import { CustomFade } from '../utils';
const HIDE_MESSAGE_DELAY = 4000;

export const NewsletterPopUp = ({ hide }: { hide: () => void }) => {
  const [isSubmited, setSubmited] = useState(false);
  const subscribe = () => {
    setSubmited(true);
    setTimeout(() => {
      hide();
    }, HIDE_MESSAGE_DELAY);
  };
  return (
    <CustomFade translate="0, 100px" className="position-relative z-index-base">
      <div className="popup-cont p-4">
        <div className="popup p-4 pb-0 col-lg-5 col-sm-12 offset-lg-7 col-md-6 offset-md-3 bg-blue border border-white position-relative">
          <div className="popup-close">
            <ClosingButton hide={hide} classNames={'close--button-light'} />
          </div>
          {!isSubmited && (
            <>
              <h5 className="m-0 my-0 d-inline-block text-gray-light">Stay up to date! 🎉</h5>
              <p className=" mb-2 d-block font-weight-light">
                Subscribe to our <b>newsletter</b> and recieve the latest insights on the{' '}
                <b>equity world</b> 🌍
              </p>
              <SubscriptionForm trackingEvent="newsletter" callback={subscribe} />
            </>
          )}
          {isSubmited && (
            <>
              <h5 className="m-2 text-gray-light text-center">
                Thank you for your subscription 🎉
              </h5>
            </>
          )}
        </div>
      </div>
    </CustomFade>
  );
};
