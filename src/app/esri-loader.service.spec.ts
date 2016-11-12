/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EsriLoaderService } from './esri-loader.service';

describe('Service: EsriLoader', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EsriLoaderService]
    });
  });

  it('should ...', inject([EsriLoaderService], (service: EsriLoaderService) => {
    expect(service).toBeTruthy();
  }));
});
