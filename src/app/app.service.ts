import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { mapRxJs } from './functions-observable';

@Injectable({
  providedIn: 'root'
})

export class AppService {

  public data: DataResponse[] = [
    {
      name: 'Vasya',
      surname: 'Pashin'
    },
    {
      name: 'Kolya',
      surname: 'Mishin'
    }
  ];

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
