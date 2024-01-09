import {Injectable, Inject} from '@angular/core';
import {ServiceModule, API_CONFIG} from './service.module';
import {HttpClient, HttpParams} from '@angular/common/http';
import {SongSheet} from './data-types/common.types';
import {Observable} from 'rxjs';
import {map} from 'rxjs/internal/operators';


@Injectable({
  providedIn: ServiceModule,
})
export class SheetService {

  // @ts-ignore
  constructor(
    private http: HttpClient,
    @Inject(API_CONFIG) private uri: string,
  ) {
  }

  getSongSheetDetail(id: number): Observable<SongSheet> {
    const params = new HttpParams().set('id', id.toString());
    return this.http.get(this.uri + 'playlist/detail', { params })
      .pipe(map((res: { playlist: SongSheet }) => res.playlist));
  }


}
