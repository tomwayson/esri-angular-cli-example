/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EsriMapComponent } from './esri-map.component';
import { ActivatedRoute, Data } from '@angular/router';

describe('EsriMapComponent', () => {
  let component: EsriMapComponent;
  let fixture: ComponentFixture<EsriMapComponent>;
  let MockMapClass;

  beforeEach(async(() => {
    // provide a mock map class to the component via a mock route
    MockMapClass = jasmine.createSpy('Map');
    TestBed.configureTestingModule({
      declarations: [ EsriMapComponent ],
      providers: [{
        provide: ActivatedRoute,
        useValue: {
          snapshot: {
            data: {
              esriModules: [MockMapClass]
            }
          }
        }
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsriMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // verify that the map was initialized with expected options
    expect(MockMapClass.calls.mostRecent().args[1]).toEqual({
      center: [-118, 34.5],
      zoom: 8,
      basemap: 'dark-gray'
    });
  });
});
