export interface BaseSlide {
  id: string;
  templateType: 'founder' | 'seva' | 'historical' | 'default';
  imageUrl?: string;
  memberName?: string;
  address?: string;
}

export interface FounderSlide extends BaseSlide {
  templateType: 'founder';
}

export interface SevaSlide extends BaseSlide {
  templateType: 'seva';
}

export interface HistoricalSlide extends BaseSlide {
  templateType: 'historical';
}

export type Slide = FounderSlide | SevaSlide | HistoricalSlide | BaseSlide;

export type TemplateType = 'founder' | 'seva' | 'historical' | 'default';

export type CarouselConfig = {
  autoplay: boolean;
  interval: number;
  randomize: boolean;
  transition: {
    duration: number;
    ease: string;
  };
  showIndicators: boolean;
  pauseOnHover: boolean;
};