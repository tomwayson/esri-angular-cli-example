/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EsriMapComponent } from './esri-map.component';
import { EsriLoaderService } from '../esri-loader.service';

describe('EsriMapComponent', () => {
  let component: EsriMapComponent;
  let fixture: ComponentFixture<EsriMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsriMapComponent ],
      providers: [EsriLoaderService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsriMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
