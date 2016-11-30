import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-esri-map',
  templateUrl: './esri-map.component.html',
  styleUrls: ['./esri-map.component.css']
})
export class EsriMapComponent implements OnInit {
  @ViewChild('map') mapEl: ElementRef;

  map: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    if (this.map) {
      // map is already initialized
      return;
    }
    // get the required esri classes from the route
    const esriModules = this.route.snapshot.data['esriModules'];
    this._createMap(esriModules);
  }

  // create a map at the root dom node of this component
  _createMap([Map]) {
    this.map = new Map(this.mapEl.nativeElement, {
      center: [-118, 34.5],
      zoom: 8,
      basemap: 'dark-gray'
    });
  }
}
