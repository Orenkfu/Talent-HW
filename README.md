# TalentHW

Homework for JS async programming. Angular version.

## Angular version

clone the repo, open angular folder with vs code, and run the npm command "npm install" to install dependencies.
then deploy webpack with "ng serve".

## Features
```
Angular project is a bit different from HW requirements, though it is connected to the API specified.

```
Using Bootstrap and ng router module, I've implemented a navbar to navigate between different components.
```
In the users tab, you can browse a table containing data obtained from API.
```
A reusable pagination component is implemented, which you can use to view the different pages of "users" provided by API.
```
Clicking on a user's name in the users table will navigate to a new component in which you can currently view his "avatar"(image).
```
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Known issues:
There is a storage service that is currently not implemented in the application. it's purpose is to cache current page in browser memory, but is not currently functional.
