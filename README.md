# esri-angular-cli-example

[View it live](https://tomwayson.github.io/esri-angular-cli-example/)

## Goal

This repository is an example of one way to use the [ArcGIS API for JavaScript](https://developers.arcgis.com/javascript/) in an application generated with [angular-cli](https://github.com/angular/angular-cli).

The application uses the [angular-esri-components](https://github.com/TheKeithStewart/angular-esri-components) component library to lazy load the ArcGIS API for JavaScript and then require the modules needed to create and work with a map.
 
## Adding the ArcGIS API to your own angular-cli application

You should **not** use this repository as a starting point for your own application. This application was generated with an early beta of the angular-cli, and while it has been updated to v1 (thanks to [@TheKeithStewart](https://github.com/TheKeithStewart)), _I do **not** intend to keep it up to date w/ newer versions of Angular, the CLI, nor the ArcGIS API going forward_.

Rather than clone this repository, you should create your own application with the [angular-cli](https://github.com/angular/angular-cli) and then follow the instructions below to add the above libraries:
 - [esri-loader](https://github.com/Esri/esri-loader#usage) - a low level service needed to load and use ArcGIS modules (v3.x or v4.x) in non-Dojo applications
 - [angular-esri-components](https://github.com/TheKeithStewart/angular-esri-components#setup) - a set of reusable components for use with v4.x (only) of the ArcGIS API

## Running this application

You can clone or download this application and then use the instructions below to run it and/or the tests to get a better sense of how it works.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

### Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

### Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
