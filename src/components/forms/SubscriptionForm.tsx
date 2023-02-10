import React, { Component, ChangeEvent, FormEvent } from 'react';
import { Trans, t } from '@lingui/macro';
import 'isomorphic-fetch';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { navigate } from 'gatsby';

import { Button } from '../utils';
import { trackOnMixpanel, FORM_STATUSES, submitToHubspotNewsletter } from './lib';
import { InvalidFieldHints } from './Fields';
import { NEWSLETTER } from './lib/constants';
import { identifyOrAlias } from '../../helpers';

const { FETCH_ERROR, IDLE, INVALID_EMAIL, LOADING } = FORM_STATUSES;

export class SubscriptionForm extends Component<
  { toggle?: () => void; trackingEvent: string; callback?: () => void },
  { email: string; status: FormStatus | string }
> {
  state = { email: '', status: IDLE };
  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    this.setState({ email: e.target.value, status: IDLE });
  };
  handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.setState({ status: LOADING });
    const { toggle, trackingEvent, callback } = this.props;
    const { email } = this.state;

    const parsedFormValues = {
      email,
      lead_form_source: NEWSLETTER,
    };

    try {
      const signupResponse = await submitToHubspotNewsletter(parsedFormValues);
      identifyOrAlias(email);
      if (signupResponse.status === 200) {
        trackOnMixpanel(email, trackingEvent);
        this.setState({ email: '', status: IDLE });
        if (toggle) toggle();
        callback ? callback() : navigate('/subscribed');
      }
    } catch (error) {
      if (error.message === INVALID_EMAIL) {
        this.setState({ status: INVALID_EMAIL });
      } else {
        setTimeout(() => {
          this.setState({ status: FETCH_ERROR });
        }, 1000);
      }
      return;
    }
  };
  render = () => {
    const { state } = this;
    const { status } = state;
    const invalid = status === INVALID_EMAIL;
    const error = status === FETCH_ERROR;
    const loading = status === LOADING;
    return (
      <>
        <form method="post" className="input-round py-2" onSubmit={this.handleSubmit} noValidate>
          <div className="form-group input-group position-relative">
            <input
              type="email"
              className="form-control"
              placeholder={t`Enter your email…`}
              onChange={this.handleChange}
              value={this.state.email}
              style={{ height: 'inherit' }}
            />
            <Button
              inverted={!!this.props.callback}
              type="submit"
              className="button-embedded min-width-110px will-change-unset"
              disabled={invalid || error || loading}
            >
              {loading ? (
                <FontAwesomeIcon icon={faSpinner} className="fa-lg spin" />
              ) : (
                <Trans>Subscribe</Trans>
              )}
            </Button>
            <InvalidFieldHints formStatus={status} className="position-absolute" />
          </div>
        </form>
      </>
    );
  };
}
