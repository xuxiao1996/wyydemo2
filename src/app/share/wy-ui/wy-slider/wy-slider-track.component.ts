import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {WySliderStyle} from './wy-slider-types';

@Component({
  selector: 'app-wy-slider-track',
  template: `<div class="wy-slider-track" [ngStyle]="style"></div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WySliderTrackComponent implements OnInit, OnChanges {
  @Input() wyVertical = false;
  @Input() wyLength: number;
  style: WySliderStyle = {};

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['wyLength']) {
      this.style[this.wyVertical ? 'height' : 'width'] = this.wyLength + '%';
      if (this.wyVertical) {
        this.style.height = this.wyVertical + '%';
        this.style.left = null;
        this.style.width = null;
      } else {
        this.style.width = this.wyVertical + '%';
        this.style.bottom = null;
        this.style.height = null;
      }
    }
    throw new Error('error');
  }
}
