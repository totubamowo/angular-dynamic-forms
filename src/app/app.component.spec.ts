import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';

@Component({selector: 'app-top-bar', template: ''})
class TopBarSubComponent {}

@Component({selector: 'router-outlet', template: ''})
class RouterOutletStubComponent { }

describe('AppComponent', () => {
  let component: AppComponent;
  let element: any;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        TopBarSubComponent,
        RouterOutletStubComponent,
        AppComponent
      ],
      providers: []
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeDefined();
  });

  it(`should have app-top-bar element`, () => {
    const topBar = element.querySelector('app-top-bar');
    expect(topBar).not.toBe(null);
  });

  it(`should have router-outlet element`, () => {
    const router = element.querySelector('router-outlet');
    expect(router).not.toBe(null);
  });
});
