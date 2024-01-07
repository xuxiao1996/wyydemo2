import {Component, OnInit, ViewChild} from '@angular/core';
import {HomeService} from '../../service/home.service';
import {Banner, HotTag, SongSheet} from '../../service/data-types/common.types';
import {NzCarouselComponent} from 'ng-zorro-antd';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  carouselActiveIndex = 0;
  banners: Banner[];
  hotTags: HotTag[];
  songSheetList: SongSheet[];
  @ViewChild(NzCarouselComponent, { static: true })
  private nzCarousel: NzCarouselComponent;

  constructor(
    private homeService: HomeService,
  ) {
    this.getBanners();
    this.getHotTags();
    this.getPersonalizedSheetList();
  }

  private getBanners() {
    this.homeService.getBanners().subscribe(banners => {
      this.banners = banners;
    });
  }

  private getHotTags() {
    this.homeService.getHotTags().subscribe(banners => {
      this.hotTags = banners;
    });
  }

  private getPersonalizedSheetList() {
    this.homeService.getPersonalSheetList().subscribe(banners => {
      this.songSheetList = banners;
    });
  }

  ngOnInit() {
  }

  onBeforeChange({ to }) {
    this.carouselActiveIndex = to;
  }

  onChangeSlide(type: 'pre' | 'next') {
    this.nzCarousel[type]();
  }
}
