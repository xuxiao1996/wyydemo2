import {Observable} from 'rxjs';

export interface WySliderStyle {
  width?: string | null;
  height?: string | null;
  left?: string | null;
  bottom?: string | null;
}

export interface SliderEventObserverCobfig {
  start: string;
  move: string;
  end: string;
  filter: (e: Event) => boolean;
  pluckKey: string[];
  startPlucked$?: Observable<number>;
  moveResolved$?: Observable<number>;
  end$?: Observable<Event>;
}
