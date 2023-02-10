import type { MutableRefObject } from 'react';

export const handleScroll = ({
  wrapperRef,
  interval,
  activeIndex,
  setActiveIndex,
}: {
  wrapperRef: MutableRefObject<null | HTMLElement>;
  interval: number;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}): void => {
  const { current } = wrapperRef || {};
  if (!current) return;

  const bounding = current.getBoundingClientRect();
  const { top } = bounding;
  const correctedTop = Math.round(top) - 300;

  if (correctedTop > 0) {
    setActiveIndex(0);
    return;
  }

  const roundedIndex = Math.round(Math.abs(correctedTop) / interval);
  const currentIndex = Math.min(roundedIndex, 2);
  if (activeIndex !== currentIndex) setActiveIndex(currentIndex);
};
