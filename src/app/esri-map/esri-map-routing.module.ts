import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EsriMapComponent } from './esri-map.component';

export const MAP_ROUTES: Routes = [
  { path: '', component: EsriMapComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(MAP_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class EsriMapRoutingModule { }