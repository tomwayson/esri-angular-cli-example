import { Injectable } from '@angular/core';
// TODO: why doesn't this work?
// import { isLoaded, bootstrap, dojoRequire } from 'esri-loader';
import { isLoaded, bootstrap, dojoRequire } from '../../node_modules/esri-loader/src/index';

@Injectable()
export class EsriLoaderService {

  constructor() { }

  isLoaded() {
    return isLoaded();
  }

  // TODO: return a promise instead of taking callback
  init(callback: Function, options?: Object) {
    return bootstrap(callback, options);
  }

  // TODO: return a promise instead of taking callback
  require(modules: string[], callback: Function) {
    return dojoRequire(modules, callback);
  }
}
