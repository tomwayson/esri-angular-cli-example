/* tslint:disable:no-unused-variable */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EsriMapComponent } from './esri-map.component';

@Component({
  selector: 'esri4-map',
  template: ''
})
class Esri4MapSubComponent {
  @Input() mapProperties;
  @Input() mapViewProperties;
  @Output() mapInit = new EventEmitter();
}

describe('EsriMapComponent', () => {
  let component: EsriMapComponent;
  let fixture: ComponentFixture<EsriMapComponent>;
  let MockMapClass;

  beforeEach(async(() => {
    // provide a mock map class to the component via a mock route
    TestBed.configureTestingModule({
      declarations: [
        EsriMapComponent,
        Esri4MapSubComponent
      ]
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

  it('should have the expected options', () => {
    expect(component.mapProperties).toEqual({
      basemap: 'dark-gray'
    });
    expect(component.mapViewProperties).toEqual({
      center: [-118, 34.5],
      zoom: 8,
    });
  })
});
