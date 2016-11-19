import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { EsriLoaderService } from './../esri-loader.service';

@Injectable()
export class EsriMapResolveService implements Resolve<any> {

  constructor(private esriLoader: EsriLoaderService) { }

  resolve() {
    this.esriLoader.load();
  }

}
