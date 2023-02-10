import React from 'react';
import { Button, DynamicTrans } from '.';

export const ButtonGroup = ({
  buttonTexts,
  onClick,
  tag,
}: {
  buttonTexts: string[];
  onClick: (arg: string) => void;
  tag: string;
}) => (
  <div className="d-flex justify-content-center flex-wrap mb-4 mb-md-6">
    {buttonTexts.map((buttonText) => (
      <div key={buttonText} className="p-1 p-md-0">
        <Button
          className={`button-group mb-2 mx-1 ${tag === buttonText ? 'selected' : ''}`}
          onClick={() => onClick(buttonText)}
        >
          <DynamicTrans>{buttonText}</DynamicTrans>
        </Button>
      </div>
    ))}
  </div>
);
