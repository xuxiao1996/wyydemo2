import {Inject, Injectable} from '@angular/core';
import {API_CONFIG, ServiceModule} from './service.module';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/internal/operators';
import {Singer} from './data-types/common.types';
import qs from 'qs';

interface SingerParams {
  offset: number;
  limit: number;
  cat?: string;
}

const defaultParams: SingerParams = {
  offset: 0,
  limit: 9,
  cat: '5001',
};

@Injectable({
  providedIn: ServiceModule,
})
export class SingerService {

  constructor(
    private http: HttpClient,
    @Inject(API_CONFIG) private uri: string,
  ) {
  }

  getEnterSingers(args: SingerParams = defaultParams): Observable<Singer[]> {
    const params = new HttpParams({ fromString: qs.stringify(args) });
    return this.http.get(this.uri + 'artist/list', { params })
      .pipe(map((res: { artists: Singer[] }) => res.artists));
  }


}
