import React, { useEffect, useRef } from 'react';
import { DynamicTrans } from '../utils';

export const SelectableCard = ({
  title,
  description,
  index,
  activeIndex,
  observer,
  onClick,
}: {
  title: string;
  description: string;
  index: number;
  activeIndex: number;
  observer: ResizeObserver | null;
  onClick: (i: number) => void;
}) => {
  const ref = useRef(null);
  const isActive = activeIndex === index;
  const backgroundColor = isActive ? 'bg-gray-light' : 'bg-transparent';

  useEffect(() => {
    const card = ref.current;
    if (card && observer) observer.observe(card);
  }, [activeIndex]);
  return (
    <div
      ref={ref}
      onClick={() => onClick(index)}
      className={`selectable-card flex-1 d-flex flex-column justify-content-center p-2 pl-4 pt-lg-3 pr-lg-3 pb-lg-3 ${backgroundColor}`}
    >
      <h5>
        <DynamicTrans>{title}</DynamicTrans>
      </h5>
      <p className="m-0">
        <DynamicTrans>{description}</DynamicTrans>
      </p>
    </div>
  );
};
