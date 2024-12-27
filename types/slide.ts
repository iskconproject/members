export interface SlideTheme {
  primary?: string;
  secondary?: string;
  accent?: string;
  textColor?: string;
}

export interface Slide {
  id: string;
  sevaId: number;
  sevaName?: string;
  sevaTitle?: string;
  memberName: string;
  relation?: string;
  address?: string;
  imageUrl?: string;
  layout?: 'default' | 'centered' | 'fullscreen';
  theme?: SlideTheme;
  customComponent?: React.ComponentType<any>;
  customProps?: Record<string, any>;
}

export interface CarouselConfig {
  autoplay?: boolean;
  interval?: number;
  randomize?: boolean;
  transition?: {
    duration: number;
    ease: string;
  };
  showIndicators?: boolean;
  pauseOnHover?: boolean;
}