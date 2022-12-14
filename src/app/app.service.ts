import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mapRxJs } from './functions-observable';
import { Data } from './mock-data';

@Injectable({
  providedIn: 'root'
})

export class AppService {

  public data: DataResponse[] = Data;

  constructor() { }

  getData(): Observable<DataResponse[]> {
    return of(this.data);
  }

  getNames(): Observable<string[]> {
    return of(this.data).pipe(mapRxJs());
  }

  getArray(): DataResponse[] {
    return this.data;
  }
}

export interface DataResponse {
  name: string;
  surname: string; 
}
