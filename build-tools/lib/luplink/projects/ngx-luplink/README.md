

# ngx-luplink

<!-- ![Angular v11.2.1](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white) -->
![Angular version required](https://img.shields.io/badge/@angular/core-^11-green.svg)<!-- ?style=flat-square) -->
[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)

<!-- ## Intro -->

Luplink is a front-end for link budget calculations. It has been made into a library in order to be able to integrate Luplink inside other angular projects.

See luplink-app for an example of how to use ngx- luplink

## Installation:

```bash
npm i @luplink/ngx-luplink
```
## Developper:

### **Making changes to the application**:
This process requires some explanation since the original application has been made into a library in order to facilitate integration. In the case of a classic app, you would simply run `ng serve` and each code change would cause a rebuild.

When working with a library, the built library is installed inside `node_modules` and only changes to the applications are taken into account. We need to add a dynamic link


Here are the steps that allow to make quick changes to our library without the need to build, deploy & install it each time.

  1. Link the `ngx-luplink` library to the `luplink-app` : 
       1. Inside the `projects/ngx-luplink` folder, run `npm link`. This creates the first hook of our dynamic link
       2. Inside the `projects/luplink-app` folder, run `npm link ngx-luplink`. This creates the symlink between your node installation and the library source folder.
  2. Build the library in watch-mode: `ng build --watch=true`. The library will be rebuilt on each change.
  3. Serve the application: `ng serve --project=luplink-app`. Thanks to our dynamic link, each time the library is rebuilt, the application will also be allowing us to make changes to our library 

```bash
#Activate npm-link
cd project/ngx-luplink
npm link
cd ../luplink-app
npm link ngx-luplink
```
> **Notes:** 
>  - the link is not commited with git so you might need to re-link the library to the app sometimes. There is a small script you can use to do the above steps using the following command: `bash link.sh`
>  - If you start building the library after serving the app, this last one might crash. Simply serve the application again

See : https://medium.com/dailyjs/how-to-use-npm-link-7375b6219557 


### **Deployment**

In order to use the library on local NPM, you first have to build it: 

```bash
ng build --project=ngx-luplink
```

You can then pack it by going to ```dist/ngx-luplink``` and executing ```npm pack```.
```bash
cd dist/ngx-luplink
npm pack
```
 This creates a package that can be install using 
 
 ```bash
 npm install path/to/ngx-luplink.tgz
 ```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.1.