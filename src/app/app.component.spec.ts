import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { AppService, DataResponse } from './app.service';
import { Data } from './mock-data';

describe('AppComponent', () => {
  // let appServiceSpy = jasmine.createSpyObj('AppService', ['getData']);;

  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  const data:  DataResponse[] = Data;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [{ provide: AppService }]
    }).compileComponents();
  });

  it('should create the app', () => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it(`should have as title 'unit-test-practice'`, () => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    expect(component.title).toEqual('unit-test-practice');
  });

  it('should h1 contain Hello', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const h1 = compiled.querySelector('h1');
    expect(h1?.textContent).toContain('Hello');
  });

  it('getData should be called during initialization', async () => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    const appService = fixture.debugElement.injector.get(AppService);
    let spy = spyOn(appService, "getData").and.returnValue(
      of(data)
    );
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.users).toBe(data);
    });
  })
});
