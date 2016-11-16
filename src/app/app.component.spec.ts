/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { EsriMapComponent } from './esri-map/esri-map.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

describe('App: AngularCliEsri', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        EsriMapComponent,
        HomeComponent,
        HeaderComponent
      ],
      imports: [
        MaterialModule.forRoot(),
        RouterTestingModule.withRoutes([
          { path: 'fakeRoute', redirectTo: '/fakeRoute' }
        ])
      ]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));
});
