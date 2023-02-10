import React from 'react';
import { Link } from 'gatsby';
import {
  FINANCE_ACCOUNTING,
  FINANCE_ACCOUNTING_TITLE,
  helpUrl,
  LEGAL_OPERATIONS,
  LEGAL_OPERATIONS_TITLE,
  targetBlank,
} from '../helpers';
import {
  HR_AND_COMPENSATION,
  HR_AND_COMPENSATION_TITLE,
  VCS_BUSINESS_ANGELS,
  VCS_BUSINESS_ANGELS_TITLE,
} from '../helpers';

const NotFoundPage = () => (
  <div>
    <header className="header py-40" style={{ backgroundColor: '#29363d' }} />

    <div className="container py-200">
      <header className="section-header">
        <h1 className="mt-4">Page not found</h1>
        <hr />
        <p className="lead">Oh no! We couldn’t find that page.</p>
        <p className="lead">
          Were you looking for features for{' '}
          <Link to={`/${HR_AND_COMPENSATION}/`}> {HR_AND_COMPENSATION_TITLE}</Link>,{' '}
          <Link to={`/${FINANCE_ACCOUNTING}/`}>{FINANCE_ACCOUNTING_TITLE}</Link>, or{' '}
          <Link to={`/${LEGAL_OPERATIONS}/`}>{LEGAL_OPERATIONS_TITLE}</Link>, or{' '}
          <Link to={`/${VCS_BUSINESS_ANGELS}/`}>{VCS_BUSINESS_ANGELS_TITLE}</Link>? Maybe need some{' '}
          <a href={helpUrl} {...targetBlank}>
            help
          </a>
          ?
        </p>
      </header>
    </div>
  </div>
);

export default NotFoundPage;
