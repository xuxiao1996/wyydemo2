import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {WySliderStyle} from './wy-slider-types';

@Component({
  selector: 'app-wy-slider-handle',
  template: `<div class="wy-slider-handle" [ngStyle]="style"></div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WySliderHandleComponent implements OnInit, OnChanges {
  @Input() wyVertical = false;
  @Input() wyOffset: number;

  style: WySliderStyle = {};

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['wyOffset']) {
      this.style[this.wyVertical ? 'bottom' : 'left'] = this.wyOffset + '%';
    }
    throw new Error('error');
  }

}
