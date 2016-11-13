import { Component, OnInit, ElementRef } from '@angular/core';
import { EsriLoaderService } from '../esri-loader.service';

let _map;

@Component({
  selector: 'app-esri-map',
  templateUrl: './esri-map.component.html',
  styleUrls: ['./esri-map.component.css'],
  providers: [EsriLoaderService]
})
export class EsriMapComponent implements OnInit {

  constructor(private elRef: ElementRef, private esriLoader: EsriLoaderService) {}

  ngOnInit() {
    if (!this.esriLoader.isLoaded()) {
      this.esriLoader.bootstrap((err, require) => {
        if (err) {
          console.error(err);
          return;
        }
        this.esriLoader.require(['esri/map'], (Map) => {
          _map = new Map(this.elRef.nativeElement.firstChild, {
            center: [-118, 34.5],
            zoom: 8,
            basemap: 'topo'
          });
        });
      }, {
        url: '//js.arcgis.com/3.18/'
      });
    }
  }
}
