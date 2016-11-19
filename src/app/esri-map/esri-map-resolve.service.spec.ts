/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EsriMapResolveService } from './esri-map-resolve.service';
import { EsriLoaderService } from './../esri-loader.service';

describe('Service: EsriMapResolve', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EsriMapResolveService, EsriLoaderService]
    });
  });

  it('should ...', inject([EsriMapResolveService], (service: EsriMapResolveService) => {
    expect(service).toBeTruthy();
  }));
});
