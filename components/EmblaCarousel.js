import React, { useState, useEffect, useCallback } from "react"
import { PrevButton, NextButton } from "./EmblaCarouselButtons"
import { useRecursiveTimeout } from "./useRecursiveTimeout"
import { useEmblaCarousel } from "embla-carousel/react"

const AUTOPLAY_INTERVAL = 9000;

const EmblaCarousel = ({ slides }) => {
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const autoplay = useCallback(() => {
    if (!embla) return;
    if (embla.canScrollNext()) {
      embla.scrollNext();
    } else {
      embla.scrollTo(0);
    }
  }, [embla]);

  const { play, stop } = useRecursiveTimeout(autoplay, AUTOPLAY_INTERVAL);

  const scrollNext = useCallback(() => {
    if (!embla) return;
    embla.scrollNext();
    stop();
  }, [embla, stop]);

  const scrollPrev = useCallback(() => {
    if (!embla) return;
    embla.scrollPrev();
    stop();
  }, [embla, stop]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
    embla.on("pointerDown", stop);
  }, [embla, onSelect, stop]);

  useEffect(() => {
    play();
  }, [play]);

  return (
    <div className="embla">
	  <div className="embla__viewport" ref={viewportRef}>
      <div className="embla__container">
        <div className="embla__slide" style={{background:"url(/assets/slides/photo_2021-08-06_14-10-28.jpg)"}}><img src="/assets/slides/photo_2021-08-06_14-10-28.jpg" /></div>
        <div className="embla__slide" style={{background:"url(/assets/slides/photo_2021-08-06_14-10-32.jpg)"}}></div>
        <div className="embla__slide" style={{background:"url(/assets/slides/photo_2021-08-06_14-10-33.jpg)"}}></div>
	    <div className="embla__slide" style={{background:"url(/assets/slides/photo_2021-08-06_14-10-35.jpg)"}}></div>
	    <div className="embla__slide" style={{background:"url(/assets/slides/photo_2021-08-06_14-10-38.jpg)"}}></div>
	    <div className="embla__slide" style={{background:"url(/assets/slides/photo_2021-08-06_14-10-40.jpg)"}}></div>
      </div>
	  </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
  );
	
};

export default EmblaCarousel;