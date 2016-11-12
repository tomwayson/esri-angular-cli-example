import { Injectable } from '@angular/core';

let _require;

@Injectable()
export class EsriLoaderService {

  constructor() { }

  isLoaded() {
    // was window.require, but fucking typescript
    return typeof window['require'] !== 'undefined';
  }

  bootstrap(callback, options) {
    // Default options object to empty hash
    var opts = options || {};

    // Don't reload API if it is already loaded
    if (this.isLoaded()) {
      callback(new Error('ArcGIS API for JavaScript is already loaded.'));
      return;
    }

    // Create Script Object to be loaded
    var script    = document.createElement('script');
    script.type   = 'text/javascript';
    script.src    = opts.url || window.location.protocol + '//js.arcgis.com/4.1';

    // Set onload callback to resolve promise
    script.onload = () => {
      // fucking TypeScript
      _require = window['require'];
      callback(null, _require);
    };

    document.body.appendChild(script);
  }

  require(modules, callback) {
    return _require(modules, callback);
  }
}
