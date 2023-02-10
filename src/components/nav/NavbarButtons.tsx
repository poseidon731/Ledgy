import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import { Trans } from '@lingui/macro';

import {
  appUrl,
  demoPage,
  DEMO_NAVBAR,
  hasLedgyAccount,
  SIGNUP_LOGIN_BUTTON,
  trackClick,
} from '../../helpers';

import { Button } from '../utils';
import { formatUrl, removeOverlay } from '../lib';

const LOGIN = 'login';
const SIGNUP = 'signup';

const SignupLoginButton = () => {
  const [buttonType, setButtonType] = useState(null as string | null);
  useEffect(() => {
    const hasAccount = hasLedgyAccount();
    setButtonType(hasAccount ? LOGIN : SIGNUP);
  });

  const isLogin = buttonType === LOGIN;
  const url = isLogin ? appUrl : appUrl + '/signup';
  return (
    <Button
      inverted
      outline
      href={url}
      className={`px-3 py-1 ${buttonType ? 'visible' : 'invisible'}`}
      onClick={() => trackClick(SIGNUP_LOGIN_BUTTON, { text: isLogin ? LOGIN : SIGNUP, url })}
    >
      {isLogin ? <Trans>Log In</Trans> : <Trans>Sign Up</Trans>}
    </Button>
  );
};

export const NavbarButtons = ({ className = '', prefix }: Prefix & { className?: string }) => (
  <div className={`d-flex align-items-center ${className}`}>
    <SignupLoginButton />
    <Link to={formatUrl(prefix, demoPage)} onClick={removeOverlay}>
      <Button className="ml-2 px-3 py-1" onClick={() => trackClick(DEMO_NAVBAR)}>
        <Trans>Book a Demo</Trans>
      </Button>
    </Link>
  </div>
);
