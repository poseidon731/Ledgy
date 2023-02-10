import React from 'react';
import { helpUrl, targetBlank } from '../../helpers';
import { Trans } from '@lingui/macro';

export const Emails = () => (
  <div className="col-6 p-0 mb-3 text-nowrap">
    <div className="mb-4">
      <h6>
        <Trans>Support Questions</Trans>
      </h6>
      <a href={helpUrl} {...targetBlank} className="kb__text-link">
        <Trans>Help Center</Trans>
      </a>
      <br />
      <a href="mailto:support@ledgy.com">support@ledgy.com</a>
    </div>
    <div className="mb-4">
      <h6>
        <Trans>Sales</Trans>
      </h6>
      <a href="mailto:sales@ledgy.com">sales@ledgy.com</a>
    </div>
    <div className="mb-4">
      <h6>
        <Trans>Partners & Integrations</Trans>
      </h6>
      <a href="mailto:partnerships@ledgy.com">partnerships@ledgy.com</a>
    </div>
    <div className="mb-4">
      <h6>
        <Trans>Careers</Trans>
      </h6>
      <a href="mailto:work@ledgy.com">work@ledgy.com</a>
    </div>
    <div>
      <h6>
        <Trans>General</Trans>
      </h6>
      <a href="mailto:contact@ledgy.com">contact@ledgy.com</a>
    </div>
  </div>
);
