import type { MutableRefObject } from 'react';

export const handleCardClick =
  (
    anchorRef: MutableRefObject<HTMLElement | null>,
    interval: number,
    setActiveIndex: (index: number) => void
  ) =>
  (i: number): void => {
    const { current } = anchorRef;
    window.onscroll = () => null;
    if (current) {
      const offset = current.offsetTop + i * interval;
      window.scrollTo({
        top: offset,
        left: 0,
        behavior: 'smooth',
      });
    }
    setTimeout(() => {
      setActiveIndex(i);
    }, 300);
  };
