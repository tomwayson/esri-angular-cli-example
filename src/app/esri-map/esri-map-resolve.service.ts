import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { EsriMapService } from './esri-map.service';

@Injectable()
export class EsriMapResolveService implements Resolve<any> {

  constructor(private mapService: EsriMapService) { }

  resolve() {
    this.mapService.bootstrapEsri();
  }

}
