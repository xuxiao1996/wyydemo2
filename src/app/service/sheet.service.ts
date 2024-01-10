import {Injectable, Inject} from '@angular/core';
import {ServiceModule, API_CONFIG} from './service.module';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Song, SongSheet} from './data-types/common.types';
import {Observable} from 'rxjs';
import {map, pluck, switchMap} from 'rxjs/internal/operators';
import {SongService} from './song.service';


@Injectable({
  providedIn: ServiceModule,
})
export class SheetService {

  // @ts-ignore
  constructor(
    private http: HttpClient,
    @Inject(API_CONFIG) private uri: string,
    private songServe: SongService,
  ) {
  }

  getSongSheetDetail(id: number): Observable<SongSheet> {
    const params = new HttpParams().set('id', id.toString());
    return this.http.get(this.uri + 'playlist/detail', { params })
      .pipe(map((res: { playlist: SongSheet }) => res.playlist));
  }

  onPlaySheet(id: number): Observable<Song[]> {
    return this.getSongSheetDetail(id)
      .pipe(pluck('tracks'), switchMap(tracks => this.songServe.getSongList(tracks)));
  }


}
