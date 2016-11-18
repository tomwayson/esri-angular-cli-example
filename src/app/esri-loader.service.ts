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

  // wrap bootstrap in a promise
  load(options?: Object): Promise<Function> {
    return new Promise((resolve) => {
      bootstrap(resolve, options);
    });
  }

  // wrap Dojo require in a promise
  loadModules(modules: string[]): Promise<any> {
    return new Promise((resolve) => {
      dojoRequire(modules, resolve);
    });
  }

  // convenience function to allow calling Dojo require w/ callback
  require(modules: string[], callback: Function) {
    return dojoRequire(modules, callback);
  }
}
