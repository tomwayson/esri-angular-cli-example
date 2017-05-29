import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EsriMapComponent } from './esri-map.component';
import { EsriMapRoutingModule } from './esri-map-routing.module';

import { EsriLoaderModule } from 'angular-esri-loader';
import { AngularEsriModule } from 'angular-esri-components';

@NgModule({
  imports: [
    CommonModule,
    AngularEsriModule,
    EsriMapRoutingModule,
    EsriLoaderModule
  ],
  declarations: [EsriMapComponent],
  exports: [EsriMapComponent]
})
export class EsriMapModule { }
