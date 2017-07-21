# ClientPanel

This project **Angular 4** project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.1. The 

This project manages customers balances stored in Google's Firebase Realtime Database. Settings are stored in browser's localStorage. Routes for non authenticated users are handled service classes that provide [`CanActivate`](https://blog.thoughtram.io/angular/2016/07/18/guards-in-angular-2.html) (acting as Navigation Guard for each route).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Dependencies

Hereunder some dependencies used in this project

- https://console.firebase.google.com
- https://github.com/angular/angularfire2
- https://www.npmjs.com/package/angular2-flash-messages

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
