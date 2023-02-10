import React, { useState } from 'react';
import { CustomFade, Image } from '../components';
import { MarketplacePicturesButton } from './MarketplacePicturesButton';

export const MarketplacePictures = ({ pictures }: { pictures: ImageProps[] }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const totalImageCount = pictures.length;
  const imageLocationText = `${currentImage + 1}/${totalImageCount}`;
  return (
    <div>
      <div className={`row align-items-center mt-2`}>
        <MarketplacePicturesButton
          currentImage={currentImage}
          setCurrentImage={setCurrentImage}
          totalImageCount={totalImageCount}
        />
        <div className={`col-12 col-lg-10`}>
          <CustomFade translate="0, 100px" delay={100}>
            <Image image={pictures[currentImage]} className="screenshot" />
          </CustomFade>
        </div>
        <MarketplacePicturesButton
          currentImage={currentImage}
          setCurrentImage={setCurrentImage}
          totalImageCount={totalImageCount}
          isNext
        />
      </div>
      <div className="row justify-content-center mt-lg-2 mb-6">
        <div className="text-muted text-sm">{imageLocationText}</div>
      </div>
    </div>
  );
};
