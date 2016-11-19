import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EsriLoaderService } from '../esri-loader.service';

@Component({
  selector: 'app-esri-map',
  templateUrl: './esri-map.component.html',
  styleUrls: ['./esri-map.component.css']
})
export class EsriMapComponent implements OnInit {
  @ViewChild('map') mapEl: ElementRef;

  map: any;

  constructor(private esriLoader: EsriLoaderService) {}

  ngOnInit() {
    if (this.map) {
      // map is already initialized
      return;
    }
    if (this.esriLoader.isLoaded()) {
      this._createMap();
    } else {
      // must load ArcGIS API for JavaScript on the page before creating the map
      this.esriLoader.load()
        .then(() => {
          this._createMap();
        })
        .catch(err => {
          console.error(err);
        });
    }
  }

  // load the map module and then
  // create a map at the root dom node of this component
  _createMap() {
    this.esriLoader.loadModules(['esri/map'])
      .then((Map) => {
        this.map = new Map(this.mapEl.nativeElement, {
          center: [-118, 34.5],
          zoom: 8,
          basemap: 'dark-gray'
        });
      });
  }
}