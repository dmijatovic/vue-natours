# Natours - advanced CSS/SCSS training - as Vuejs app

This repo is based on [advanced CSS/SCSS training](https://www.udemy.com/advanced-css-and-sass/) which is then integrated in Vue.js app.
I recently completed [vuejs training](https://www.udemy.com/vuejs-2-the-complete-guide/) and I am testing my vuejs knowledge here :-).

The original github project created by instructor Jonas Schmedtmann [can be found here](https://github.com/jonasschmedtmann/advanced-css-course).

**Note, the project setup in this repo is advanced. It assumes you are familiair with number of technologies (webpack, node, npm, sass, vuejs). If you are new to front-end development and mentioned technologies I recommend following both trainings mentioned above first. That will help your better distinct between web-design tools and front-end framework-technology used and the specific choices/preferences I used in this repo.**

## NPM scripts

After cloning project, run `npm install` to install all dependencies. Then use following scripts to (further) develop or build app.

- `npm run dev:` runs webpack and vue in development mode
- `npm run build:` it will complete solution and store it in dist folder. if dist folder does not exist it will create it. Note! if dist folder exists it will DELETE all content before creating new output.

## Vue components

The difference between `original` SCSS training and this repo is that all `parts` are Vuejs components. In addition, webpack is used for developement (webpack-dev-server) and deployment (production build).

The following vue components are created for this website demo.

- heroPage: 