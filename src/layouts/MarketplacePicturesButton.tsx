import React from 'react';
import { Icon } from '../components';

export const MarketplacePicturesButton = ({
  totalImageCount,
  currentImage,
  setCurrentImage,
  isNext = false,
}: {
  totalImageCount: number;
  currentImage: number;
  setCurrentImage: (args: number) => void;
  isNext?: boolean;
}) => {
  const icon = (isNext ? 'next' : 'previous') as IconType;
  const isHidden = currentImage === (isNext ? totalImageCount - 1 : 0);
  return (
    <div className={'col-12 col-lg-1 d-flex justify-content-center my-4 my-lg-0'}>
      {!isHidden && (
        <a
          onClick={() => {
            setCurrentImage(currentImage + (isNext ? 1 : -1));
          }}
        >
          <Icon icon={icon} height={20} width={20} className="marketplace-picture-button" />
        </a>
      )}
    </div>
  );
};
