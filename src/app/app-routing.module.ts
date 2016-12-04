import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EsriMapComponent } from './esri-map/esri-map.component';
import { HomeComponent } from './home/home.component';

// import { EsriMapResolveService } from './esri-map/esri-map-resolve.service';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'map', component: EsriMapComponent
    // , resolve: {
    //   esriModules: EsriMapResolveService
    // }
  },
  { path: '**', redirectTo: '/home' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }