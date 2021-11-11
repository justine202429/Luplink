# Upgrading JSatOrb from Angular 8 to Angular 11

## Updating Angular core and CLI
This contains some of the main steps  and issues encountered while upgrading but you might need to do some research depending on the issues you face.

```bash
ng update @angular/cli@^11 @angular/core@^11 --force
```
#

## Replacing Cesium deprecated functions
You then need to update some of Cesium functions calls such as in `cesium.directive.ts`
```ts
const viewer = new Cesium.Viewer(this.el.nativeElement, {
      skyBox: false,
      shouldAnimate: true,
      //imageryProvider : Cesium.createTileMapServiceImageryProvider({
      //  url : Cesium.buildModuleUrl('Assets/Textures/NaturalEarthII')
      //}), DEPRECATED
      imageryProvider : new Cesium.UrlTemplateImageryProvider({
        url:  Cesium.buildModuleUrl('Assets/Textures/NaturalEarthII')
      }),
      baseLayerPicker: false,
      geocoder: false,
      homeButton: false
    });
```
(Notice the `UrlTemplateImageryProvider` replacing the deprecated `createTileMapServiceImageryProvider` and `hasHomeButton` becoming `homeButton`)

#

I also had to delete some ng-material function calls. Better check what is their purpose next time

## Updating cesium imports

Importing Cesium directly raises an error, we need to update `tsconfig.json` by adding
```json
"paths": {
    "cesium": ["node_modules/cesium/Build/cesium/cesium.js"]
}
```
The reason being that the module can't be imported directly without raising build errors so we are giving the direct path.

#

Add some cesium imports in the necessary files :
```ts
import * as Cesium from 'cesium';
```

## Fixing the 'can't resolve' error
Fixing *Module not found: Error: Can't resolve 'http'|'https'|'zlib' in '/home/julien/git/jsatorb-dev/jsatorb/JSatOrb/repos/git/jsatorb-frontend/node_modules/cesium/Build/Cesium'*

This is due to the use of webpack trying to interfer with the contents of node_modules/cesium. 
The solution is to add the following to `package.json` :

```json
"browser": {
    "http": false,
    "https": false,
    "zlib": false
}
"dev-server": {
    "http": false,
    "https": false,
    "zlib": false,        
}
```
