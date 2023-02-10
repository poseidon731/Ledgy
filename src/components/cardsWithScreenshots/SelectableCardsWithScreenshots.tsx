import React, { useEffect, useRef, useState } from 'react';
import { throttle } from 'lodash';

import { isBrowser } from '../../helpers';

import { handleCardClick, handleScroll, getEntriesHeight } from './lib';
import { SelectableCard } from './SelectableCard';
import { MobileCardsWithScreenshots } from './MobileCardsWithScreenshots';
import { Image, Section, SectionHeader } from '../utils';

export const SelectableCardsWithScreenshots = (props: SelectableCardsWithScreenshotsProps) => {
  const { header, content } = props;
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardHeight, setCardHeight] = useState(0);
  const [componentHeight, setComponentHeight] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(isBrowser ? window.innerHeight : 1000);
  const wrapperRef = useRef(null);
  const anchorRef = useRef(null);

  const stickyStyle = { top: windowHeight / 2 - componentHeight / 2 - 90 };
  const spanStyle = { height: `${cardHeight}px`, transform: `translateY(${translateY}px)` };
  const scrollDistance = 2000;
  const interval = scrollDistance / content.length;

  const observer = isBrowser
    ? new ResizeObserver((entries: ResizeObserverEntry[]) => {
        const activeEntry = entries[activeIndex];
        if (activeEntry) setCardHeight(activeEntry.target.clientHeight);
        const entriesToEvaluate = entries.slice(0, activeIndex);
        const pxToTranslate = getEntriesHeight(entriesToEvaluate);
        setTranslateY(pxToTranslate);
        const totalHeight = getEntriesHeight(entries);
        setComponentHeight(totalHeight);
      })
    : null;

  useEffect(() => {
    if (isBrowser) {
      const handleResize = () => setWindowHeight(window.innerHeight);
      window.onresize = () => {
        throttle(handleResize, 150);
      };
      window.onscroll = () => {
        handleScroll({ wrapperRef, interval, activeIndex, setActiveIndex });
      };
      return () => {
        window.onresize = () => null;
        window.onscroll = () => null;
      };
    }
  }, [isBrowser, activeIndex]);

  return (
    <Section>
      <div ref={anchorRef} />
      <MobileCardsWithScreenshots {...props} />
      <div ref={wrapperRef} className="d-none d-lg-block" style={{ height: `${scrollDistance}px` }}>
        <div className="position-sticky" style={stickyStyle}>
          <SectionHeader header={header} className="text-center" />
          <div className="row">
            <div className="col-8 pr-0">
              {content.map((v, i) => {
                const isActive = activeIndex === i;
                return (
                  <div
                    key={`img-${v.title}`}
                    className={`screenshot mx-lg-0 ${isActive ? '' : 'd-none'}`}
                  >
                    <Image image={v.screenshot} />
                  </div>
                );
              })}
            </div>
            <div className="col-4 pl-0">
              <div className="fluid-border-right h-100">
                <span style={spanStyle} />
                <div className="d-flex flex-column h-100 mt-0">
                  {content.map((v, i) => (
                    <SelectableCard
                      {...v}
                      key={v.title}
                      index={i}
                      activeIndex={activeIndex}
                      observer={observer}
                      onClick={handleCardClick(anchorRef, interval, setActiveIndex)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
