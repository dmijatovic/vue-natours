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

- heroPage: component to cover hero section of single 'smooth' scroll website (we are making here)
- 

## My learnings (things to remember)

In this section I will note specific items from the course I find useful.

- clip-path: [clipping squared image into shape](https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path)

- specficity rule (calculation) and pseudo classes like :hover. :hover counts as for one class in the specificity calculation. When :hover does not work check more specific styles of that element and adjust because these win the specificity calculation from you :hover styling.

- em & rem units. rem calculates from the root font size. em calculates different for font-size and other props (length). For example, 2em applied to font-size will calculate 2 x parent font-size. The padding or margin of 2em will result in 2 x current element font-size! So you can use rem and em for defining size of other elements than font, but remember that ratio is based on the font-size. Rem is more stabile because it always uses root font-size.

- inheritance: not all CSS properties are inherited from parent. In general props related to text are inherited. To know whone are check element specification on MDN, [example backgound](https://developer.mozilla.org/en-US/docs/Web/CSS/background)

- BEM (Block-Element-Modifier) approach. Enables use of low(er) importance classes by making class names more specific. There are 3 parts to use in className: component/block, element, modifier.

- display "inline-block" is used when you need padding on inline element.

- SCSS 'operators'

``` scss

$color: #efefef;

.parent{
  // & wil repeat slector name.
  //stands for parent:hover
  &:hover{
    //darken wil make color darker
    background-color: darken($color, 15%);
  }
  // & wil repeat slector name.
  //stands for parent:active
  &:active{
    //darken wil make color ligter ca. 10%
    background-color: lighten($color, 10%);
  }
  //scss can calculate colors
}

// MIXIN - define
@mixin main-font{
  font-family: Arial;
  font-size:400;
}
body{
  margin:0, padding:0;
  //MIXIN use it
  @include main-font;
}

```

### Animations

```scss
.parent{
  //prevents shaking of flyin animation of child element(s)
  backface-visibility: hidden;
}
```
