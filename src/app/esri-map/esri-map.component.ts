import { Component, OnInit, ElementRef } from '@angular/core';
import { EsriLoaderService } from '../esri-loader.service';

@Component({
  selector: 'app-esri-map',
  templateUrl: './esri-map.component.html',
  styleUrls: ['./esri-map.component.css'],
  providers: [EsriLoaderService]
})
export class EsriMapComponent implements OnInit {
  map: any;

  constructor(private elRef: ElementRef, private esriLoader: EsriLoaderService) {}

  ngOnInit() {
    if (this.map) {
      // map is already initialized
      return;
    }
    const esriLoaderOptions = {
      // use a specific version of the API instead of the latest
      url: '//js.arcgis.com/3.18/'
    };
    if (this.esriLoader.isLoaded()) {
      this._createMap();
    } else {
      // must load ArcGIS API for JavaScript on the page before creating the map
      this.esriLoader.init((err, require) => {
        if (err) {
          console.error(err);
          return;
        }
        this._createMap();
      }, esriLoaderOptions);
    }
  }

  // load the map module and then
  // create a map at the root dom node of this component
  _createMap() {
    this.esriLoader.require(['esri/map'], (Map) => {
      this.map = new Map(this.elRef.nativeElement.firstChild, {
        center: [-118, 34.5],
        zoom: 8,
        basemap: 'topo'
      });
    });
  }
}
