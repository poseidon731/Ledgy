import React, { ReactNode } from 'react';
import { Trans } from '@lingui/macro';

import { FORM_STATUSES } from './lib';

export const Label = ({ text }: { text: ReactNode }) => <span>{text}</span>;

export const Input = ({
  state,
  setState,
  placeholder,
  setFormStatus,
  name,
  wrapperClassName,
  className = '',
  ...props
}: {
  state: string;
  setState: (state: string) => void;
  placeholder: string;
  setFormStatus: (status: FormStatus) => void;
  name: string;
  wrapperClassName: string;
  className?: string;
  type?: string;
}) => (
  <div className={`input-group ${wrapperClassName}`}>
    <input
      {...props}
      className={`form-control ${className}`}
      placeholder={placeholder}
      onChange={(e) => {
        setState(e.target.value);
        setFormStatus(FORM_STATUSES.IDLE as FormStatus);
      }}
      value={state}
      name={name}
    />
  </div>
);

export const InvalidFieldHints = ({
  formStatus,
  className = '',
}: {
  formStatus: string;
  className?: string;
}) => {
  const { INVALID_FIELDS, INVALID_SIZE, INVALID_REQUIRED_FIELDS, INVALID_EMAIL, FETCH_ERROR } =
    FORM_STATUSES;
  return (
    <small className={`text-danger form-error-message ${className}`}>
      {formStatus === INVALID_FIELDS && <Trans>Please fill in all fields</Trans>}
      {formStatus === INVALID_SIZE && <Trans>Please enter a number larger than 0</Trans>}
      {formStatus === INVALID_REQUIRED_FIELDS && <Trans>* Please fill in required fields</Trans>}
      {formStatus === INVALID_EMAIL && <Trans>Please enter a valid company email.</Trans>}
      {formStatus === FETCH_ERROR && <Trans>Something went wrong, please try again.</Trans>}
    </small>
  );
};

export const InputWithOptions = ({
  state,
  setState,
  setFormStatus,
  name,
  placeholder,
  wrapperClassName,
  listOfOptions,
  className = '',
  ...props
}: {
  state: string;
  setState: (state: string) => void;
  setFormStatus: (status: FormStatus) => void;
  name: string;
  placeholder: string;
  wrapperClassName: string;
  listOfOptions: string[];
  className?: string;
}) => (
  <div className={`input-group ${wrapperClassName}`}>
    <input
      type="text"
      list="list"
      placeholder={placeholder}
      required
      {...props}
      className={`form-control ${className}`}
      onChange={(e) => {
        setState(e.target.value);
        setFormStatus(FORM_STATUSES.IDLE as FormStatus);
      }}
      value={state}
      name={name}
    />

    <datalist id="list">
      {listOfOptions.map((option, ind) => (
        <option key={`option ${ind}`} value={option} />
      ))}
    </datalist>
  </div>
);
