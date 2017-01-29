# esri-angular-cli-example

[View it live](https://tomwayson.github.io/esri-angular-cli-example/)

## Goal

The goal of this repository is to demonstrate how to use the [ArcGIS API for JavaScript](https://developers.arcgis.com/javascript/) in an application generated with [angular-cli](https://github.com/angular/angular-cli).

Unfortunately, you can't simply `npm install` the ArcGIS API and then `import` esri modules directly from the modules in your application. To understand why, see [Using the ArcGIS API for JavaScript in Applications built with webpack](http://tomwayson.com/2016/11/27/using-the-arcgis-api-for-javascript-in-applications-built-with-webpack/).

Instead this application uses the [angular2-esri4-components](https://github.com/kgs916/angular2-esri4-components) component library, which in turn uses the service exposed by the [angular2-esri-loader](https://github.com/tomwayson/angular2-esri-loader) library to lazy load the ArcGIS API for JavaScript and then require the modules needed to create and work with a map.

Note that you also need to [load the CSS for the ArcGIS API for JavaScript](src/index.html#L14). 

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
