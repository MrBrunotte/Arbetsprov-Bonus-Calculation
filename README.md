# Gisys Arbetsprov - Konsultberäkning

## Objective
Build a webbapplication that calculates bonuses for a small consultant company. The bonus is based on the company's net result and is calculated individually for every consultant based on their individual hourly input. The bonus is also based on a lojalty factor depending on number of years the consultant have worked for the company

### Webbapplication 

  - Startingpage - Information and navigation to the other pages
  - Consultants - List of consultants with CRUD functionality
  - Bonus calculation - Calculates the different bonuses for each consultant

#### Startpage

Starting page with navigation to the other two pages

#### Consultants

CRUD functionality. The constultants name and employment date should be saved in a database

#### Bonus calculation

Functionality to calculate all consultants individual bonuses. You should be able to add each consultants work hours, the companies net result.

## start the program

  1. start the JSON server with the command: 
      - [JSON server installation instructions](https://www.npmjs.com/package/json-server)
      - npm install -g json-server
      - json-server --watch db.json
      - go to: http://localhost:3000/posts
  2. Open a terminal and run the program
      - npm start
      - open your browser and go to: http://localhost:3000/ (or whatever port you are using)


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


# JSON-SERVER

[json-server npm](https://www.npmjs.com/package/json-server)

## run the server

To run the json-server type the command: json-server --watch db.jason

it will run on http://localhost:3000/

### Create Service for api (s = service)

Command to create service: ng g s shared/api

Command to create component: ng g c <nameOfComponent>
