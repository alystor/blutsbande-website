import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {MenstruationArchiveDataRecord} from '../models/menstruation-archive-data-record';
import {MenstruationArchiveDataViewPositionData} from '../models/menstruation-archive-data-view-position-data';

const RECORD_URL: string = "menstruation-archive-data.json"
const POSITION_URL: string = "menstruation-archive-data-view-position-data.json"
const POSITION_P_URL: string = "position-p.json"

@Injectable({
  providedIn: 'root',
})
export class MenstruationArchiveDataService {

  httpClient = inject(HttpClient)

  getMenstruationArchiveDataRecords(): Observable<MenstruationArchiveDataRecord[]> {
    return this.httpClient.get<MenstruationArchiveDataRecord[]>(RECORD_URL).pipe(
      map(data => data.sort((a, b) => {
        const intensityComparison = a.intensity.localeCompare(b.intensity);
        if (intensityComparison !== 0) {
          return intensityComparison;
        }
        return a.case.localeCompare(b.case);
      }))
    );
  }

  getPositionData(): Observable<MenstruationArchiveDataViewPositionData[]> {
    return this.httpClient.get<MenstruationArchiveDataViewPositionData[]>(POSITION_URL);
  }

  getPositionDataP(): Observable<MenstruationArchiveDataViewPositionData[]> {
    return this.httpClient.get<MenstruationArchiveDataViewPositionData[]>(POSITION_P_URL);
  }

}
