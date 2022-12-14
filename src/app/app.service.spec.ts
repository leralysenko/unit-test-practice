import { TestBed } from '@angular/core/testing';

import { AppService, DataResponse } from './app.service';
import { TestScheduler } from 'rxjs/testing';
import { mapRxJs } from './functions-observable';
import { Data } from './mock-data';

describe('AppService', () => {
  let service: AppService;
  let testScheduler: TestScheduler;
  const data = Data;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppService);

    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getData() should return array of objects', (done: DoneFn) => {

    service
      .getData()
      .subscribe((response) => {
        expect(response.length).toEqual(data.length);
        done();
      });
  })

  it('getNames() should return array of string', () => {
    const names = ['Vasya', 'Kolya'];
    testScheduler.run(({cold, expectObservable}) => {
      const source$ = cold('a|', {a: data});
      const expected = 'b|';

      const destination$ = source$.pipe(
				mapRxJs()
			);

      expectObservable(destination$).toBe(expected, {b: names});
    });
  })
})
