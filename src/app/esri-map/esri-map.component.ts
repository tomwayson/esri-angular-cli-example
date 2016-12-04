import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// import { EsriLoaderService } from 'angular2-esri-loader';
// import { Esri4MapComponent } from 'angular2-esri4-components';

@Component({
  selector: 'app-esri-map',
  templateUrl: './esri-map.component.html',
  styleUrls: ['./esri-map.component.css']
})
export class EsriMapComponent implements OnInit {
  // @ViewChild('map') mapEl: ElementRef;

  mapProperties: __esri.MapProperties = {
    basemap: 'dark-gray'
  };
  mapViewProperties: __esri.MapViewProperties = {
    center: [-118, 34.5],
    zoom: 8,
  };
  map: __esri.Map;
  mapView: __esri.MapView;

  constructor() { }

  ngOnInit() {
    // if (this.map) {
    //   // map is already initialized
    //   return;
    // }
    // // get the required esri classes from the route
    // const esriModules = this.route.snapshot.data['esriModules'];
    // this._createMap(esriModules);
  }

  // create a map at the root dom node of this component
  // _createMap([Map]) {
  //   this.map = new Map(this.mapEl.nativeElement, {
  //   });
  // }

  onMapInit(mapInfo: {map: __esri.Map, mapView: __esri.MapView}) {
    this.map = mapInfo.map;
    this.mapView = mapInfo.mapView;
  }
}
