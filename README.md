# Recipe Book and Shopping List

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.6.

## Project Description

> A web application built using Angular 4 that allows users to manage their recipe book and shopping lists.

## Credit

Initial Project came from a tutorial I followed along with which can be accessed by clicking this [link](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/overview). The tutorial was written by Maximilian Schwarzmüller.

## To Do List (Version 1.0)

### Overall

- [x] Convert navigation to use Routes
- [ ] Implement MySQL Database (or choose alternative database)
- [ ] Close dropdown in navbar is opened and another dropdown is selected

### HTML Components/Pages

- [ ] Add footer
- [ ] Finalize navbar
- [ ] Add contact page

### Design

- [ ] Finish Page CSS Layouts
- [ ] Design Splash Page
- [ ] Choose and implement color scheme

### Recipe Book

- [x] Edit a Recipe
- [x] Add a new Recipe
- [x] Delete a Recipe
- [ ] Allow user to decide whether they want to make recipe private or public (viewable by other users)
- [ ] Add search functionality for public recipes
- [x] Allow user to add all ingredients for recipe to shopping list
- [ ] Allow user to select ingredients to add from recipe to shopping list
- [ ] Add functionality to group same incredients into one list item and increase amount
- [ ] If user deletes ingredients from recipe, ask if they would also like to remove from shopping list

### Shopping List

- [x] Clear input field when ingredient is added to shopping list
- [x] Delete Items from Shopping List
- [ ] Add favorites list to easily update shopping list
- [ ] Convert shopping list forms to Reactive Angular Forms

### Account

- [x] Allow users to sign up with email and password
- [ ] Allow users to create accounts/sign in with Google, Facebook, and Github
- [x] Allow users to sign into application
- [x] Allow users to logout and end session
- [ ] Email address (account) verification (email)
- [ ] Reset Password Functionality (email)
- [ ] Email reset/change (email)
- [ ] Add form validation to signup form
- [ ] Add form validation to signin form
- [ ] Account Profile
- [ ] Account Settings

### Testing
  
- [ ] Test Cases
- [ ] Mock Objects

### Deployment

- [ ] Setup S3 bucket
- [ ] Deploy V1.0

### Misc

- [ ] Update Wiki

-----------------------------------------


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

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
