# esri-angular-cli-example Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## Unreleased

### Changed
- update to latest angular-esri-loader and angular-esri-components

## 0.4.1

### Changed
- upgrade angular, angular cli (to v1), and angular material

## 0.4.0

### Added
- more compelling map

## 0.3.2
### Changed
- remove local dependency on @types/arcgis-js-api

## 0.3.1
### Changed
- moved css imports to styles.css and out of index.html

## 0.3.0
### Added
- use angular2-esri4-components library for generating the ESRI map
### Changed
- split map route code into own bundle which is lazy loaded
### Support
- added npm deploy script

## 0.2.0
## Changed
- exracted EsriLoaderService into own repo angular2-esri-loader
- extracted module loading code into esri-loader
- EsriLoaderService functions return promises

## 0.1.0
### Added
- lazy load ArcGIS API for JavaScript
- material design layout w/ nav links to routes
