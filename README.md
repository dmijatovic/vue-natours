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

## Lessons learned

In this section I will note specific items from the course I find useful.

- clip-path: [clipping squared image into shape](https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path)

- specficity rule (calculation) and pseudo classes like :hover. :hover counts as for one class in the specificity calculation. When :hover does not work check more specific styles of that element and adjust because these win the specificity calculation from you :hover styling.

- em & rem units. rem calculates from the root font size. em calculates different for font-size and other props (length). For example, 2em applied to font-size will calculate 2 x parent font-size. The padding or margin of 2em will result in 2 x current element font-size! So you can use rem and em for defining size of other elements than font, but remember that ratio is based on the font-size. Rem is more stabile because it always uses root font-size.

- inheritance: not all CSS properties are inherited from parent. In general props related to text are inherited. To know whone are check element specification on MDN, [example backgound](https://developer.mozilla.org/en-US/docs/Web/CSS/background)

- BEM (Block-Element-Modifier) approach. Enables use of low(er) importance classes by making class names more specific. There are 3 parts to use in className: component/block, element, modifier.

- display "inline-block" is used when you need padding on inline element.

- filters: for image manipulation like blur(), brigthness() etc.

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
  //MIXIN - use it
  @include main-font;
}

//ATTRIBUTE selector and partial value matching
//select all elements with attribute class THAT...
//^ => start with "col-"
//* => contains "col-"
//$ => ends with "col-"
[class^="col-"]{
  background-color: red;
}
```

### Sibling selectors, ( + and ~ )

```scss
  //NOTE element order is important! in this example img comes BEFORE span in the html
  //select span that comes immediatelly after image at the same 'height' (sibling elements)
  img + span {
    //do something here to span
  }

  //select first (sibling) span element that comes AFTER img element
  img ~ span{
    //do something here
  }
```

### Animations

```scss
.parent{
  //prevents shaking of flyin animation of child element(s)
  backface-visibility: hidden;
}
```

### Responsive images

- resolution switching: large vs small screen
- density switching: 2x screen (hi-res mobile devices) vs 1x screen (traditional desktop). 
- art direction: different image on different devices (portrait vs. landscape)

Different approach for html (img tags) and scss styles. In html use srcset instead of src.

```html
  <!-- 
    density swithing in html 
    use srcset instead src html tag
  -->
  <img srcset="img/logo-green-1x.png 1x, img/logo-green-2x.png 2x" />

  <!-- ard direction 
    define different images for one image based on media query
  -->
  <picture class="logo">
    <!-- for small screens -->
    <source srcset="img/logo-green-small-1x.png 1x, img/logo-green-small-2x.png 2x" 
            media="(max-width: 37.5em)" />
    <!-- other screen sizes -->
    <img  srcset="img/logo-green-1x.png 1x, img/logo-green-2x.png 2x" alt="image" />
  </picture>

  <!--RESOLUTION SWITHING-->
  <!-- 
    srcset = inform browser about image width 
    sizes = inform browser what space the image takes of the viewport width, lastone is default
    src = 'old' src info for older browser
  -->
  <img srcset="img/nat-1.jpg 300w, img/nat-1-large.jpg 1000w"
      sizes="(max-width: 900px) 20vw, (max-width: 600px) 30vw, 300px"
      src="img/nat-1.jpg" 
      alt="Just an image"
  />
```

Using media queries in SCSS
```scss
  //default image
  background-image: url('img/hero-small.jpg');
  // if resolution dpi is high (2x) and width > 600px/16 (not mobile),
  // OR safari has different version for pixel ratio
  // OR screen size > 2000px (4K in em)
  @media (min-resolution: 192dpi) and (min-width: 37.5em),
    (-webkit-min-device-pixel-ratio: 2) and (min-width: 37.5em),
    (min-width:125em){
    background-image: url('img/hero-large.jpg');
  } 

```

### Graceful degradation

Using @supports feature query

```scss
  //if browser supports clip-path - use it
  //default set-up is then without this feature
  @supports(clip-path:polygon(0 0)){
    //clip-path to create image cut effect
    //polygoon (x-left-top y-left-top, x-right-top y-right-top, x-bottom-right y-bottom-right)
    clip-path: polygon(0 0, 100% 0, 100% 80vh, 0 100%);
  }

```

### Identify touch devices using media query

```scss
  //apply this css when device does not support hover
  @media only screen and (hover: none){
    //your styles for touch devices here! 
  }

```