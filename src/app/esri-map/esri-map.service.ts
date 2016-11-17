import { Injectable, ElementRef } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { EsriLoaderService } from '../esri-loader.service';

@Injectable()
export class EsriMapService {
  private _map: BehaviorSubject<any> = new BehaviorSubject({});
  public map: Observable<any> = this._map.asObservable();

  constructor(private esriLoader: EsriLoaderService) { }

  public loadMap(mapEl: ElementRef): Observable<any> {
    const esriLoaderOptions = {
      // use a specific version of the API instead of the latest
      url: '//js.arcgis.com/3.18/'
    };
    if (this.esriLoader.isLoaded()) {
      this._createMap(mapEl)
    } else {
      // must load ArcGIS API for JavaScript on the page before creating the map
      this.esriLoader.init((err, require) => {
        if (err) {
          console.error(err);
          return;
        }
        this._createMap(mapEl)
      }, esriLoaderOptions);
    }

    return this.map;
  }

  private _createMap(mapEl: ElementRef) {
    this.esriLoader.require(['esri/map'], (Map) => {
      this._map.next(
        new Map(mapEl.nativeElement, {
          center: [-118, 34.5],
          zoom: 8,
          basemap: 'dark-gray'
        })
      )
    });
  }

}
