/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EsriMapResolveService } from './esri-map-resolve.service';

describe('Service: EsriMapResolve', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EsriMapResolveService]
    });
  });

  it('should ...', inject([EsriMapResolveService], (service: EsriMapResolveService) => {
    expect(service).toBeTruthy();
  }));
});
