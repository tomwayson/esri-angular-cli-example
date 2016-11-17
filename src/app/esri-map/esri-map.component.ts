import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { EsriMapService } from './esri-map.service';

@Component({
  selector: 'app-esri-map',
  templateUrl: './esri-map.component.html',
  styleUrls: ['./esri-map.component.css'],
  providers: [EsriMapService]
})
export class EsriMapComponent implements OnInit {
  map: any;

  @ViewChild('map') mapEl: ElementRef;

  constructor(private mapService: EsriMapService) { }

  ngOnInit() {
    if (this.map) {
      // map is already initialized
      return;
    }
    this.mapService.loadMap(this.mapEl).subscribe(map => this.map = map);
  }
}
