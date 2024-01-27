# CSS Basis

The basis.css provides basic formatting styles for web applications.

## Table of Contents

- [Getting started](#getting-started)
	- [Import CSS](#import-css)
    - [Browser support](#browser-support)
- [Documentation](#documentation)
    - [Links](#links)
    - [Typography](#typography)
    - [Colors](#colors)
    - [Buttons](#buttons)
    - [Icons](#icons)
    - [Lists](#lists)
    - [Menu](#menu)
    - [Form](#form)
    - [Helpers](#helpers)
    - [Sizing](#sizing)
    - [Spacing](#spacing)
        - [Margin](#margin)
        - [Padding](#padding)
    - [Columns](#columns)
        - [Column Sizes](#column-sizes)
        - [Column Options](#column-options)
        - [Column Gaps](#column-gaps)
        - [Column Responsiveness](#column-responsiveness)
    - [Responsiveness](#responsiveness)
        - [Mobile First Breakpoints](#mobile-first-breakpoints)
        - [Desktop First Breakpoints](#desktop-first-breakpoints)
- [Credits](#credits)
___

# Getting started

## Import CSS

```html
<link href="basis.css" rel="stylesheet" type="text/css">
```

## Browser support

Modern browser only.

# Documentation

## Links

Anchor tags will be styled with the defined "click colors" css custom properties.

```html
<a href="#">A Tag</a>
```

You may use the <code>link</code> class for any other elements.

```html
<span class="link">Link</span>
```

You may use the <code>active</code> class indicating that the link is active.

```html
<a class="active" href="#">A Tag</a>
<span class="link active">Link</span>
```

## Typography

You may visit the [Demo Page](demo/typography.html) too.

### Text Sizes

| Class | Font-size |
| --- | --- |
| ```text-xxs``` | ```0.75rem``` |
| ```text-xs``` | ```1rem``` |
| ```text-s``` | ```1.25rem``` |
| ```text-m``` | ```1.5rem``` |
| ```text-l``` | ```2rem``` |
| ```text-xl``` | ```2.5rem``` |
| ```text-xxl``` | ```3rem``` |
| ```text-body``` | ```1.125rem``` |

### Text Weight

| Class | Weight |
| --- | --- |
| ```text-100``` | 100/thin |
| ```text-300``` | 300/light |
| ```text-400``` | 400/regular |
| ```text-500``` | 500/medium |
| ```text-700``` | 700/bold |
| ```text-900``` | 900/black |

### Text Alignment

| Class | Description |
| --- | --- |
| ```text-left``` | Makes the text aligned to the left |
| ```text-right``` | Makes the text aligned to the right |
| ```text-center``` | Makes the text centered |
| ```text-justify``` | Makes the text justified |

### Text Transformation

| Class | Description |
| --- | --- |
| ```text-capitalize``` | Transforms the first letter of each word to uppercase |
| ```text-uppercase``` | Transforms all characters to uppercase |
| ```text-lowercase``` | Transforms all characters to lowercase |
| ```text-underline``` | Makes the text underlined |
| ```text-italic``` | Transforms all characters to italic |
| ```text-truncate``` | Truncates text with ellipsis |

### Fonts

| Class | Example Code |
| --- | --- |
| ```font-primary``` | ```<p class="font-primary">Lorem ipsum</p>``` |
| ```font-secondary``` | ```<p class="font-secondary">Lorem ipsum</p>``` |

### Titles

| Class | Example Code |
| --- | --- |
| ```title``` | ```<p class="title">Lorem ipsum</p>``` |
| ```subtitle``` | ```<p class="subtitle">Lorem ipsum</p>``` |

### @font-face

Example of importing font families with its weight range corresponding to the basis.css weights.

```css
@font-face {
  font-family: "FuturaBT";
  src: url("/fonts/FUTURAL.woff") format("woff"),
    url("/fonts/FUTURAL.woff2") format("woff2");
  font-weight: 100 300;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "FuturaBT";
  src: url("/fonts/FUTURAM.woff") format("woff"),
    url("/fonts/FUTURAM.woff2") format("woff2");
  font-weight: 400 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "FuturaBT";
  src: url("/fonts/FUTURAH.woff") format("woff"),
    url("/fonts/FUTURAH.woff2") format("woff2");
  font-weight: 700 900;
  font-style: normal;
  font-display: swap;
}

/* Define in root var */
:root {
  --font-secondary: "FuturaBT";  
}
```

## Colors

Visit the [Demo Page](demo/colors.html) for documentation.

## Buttons

You may visit the [Demo Page](demo/buttons.html) too.

### Button Types

The button class can be used on the following tags:

```html
<a class="button" href="#">A Tag</a>
<button class="button">Button tag</button>
<input class="button" type="submit" value="Submit input">
<input class="button" type="reset" value="Reset input">
```

### Button Sizes

**Text Sizes**

You may use the [Text Sizes](#text-sizes) for the button size.

```html
<a class="button text-s" href="#">Link</a>
<button class="button text-xl">Button</button>
```

**fit**

```html
<button class="button fit">Button</button>
```

### Button Styles

```html
<button class="button">Button default</button>
<button class="button primary">Button primary</button>
<button class="button raw">Button raw</button>
```

### Button States

```html
<button class="button active">Active Button</button>
<button class="button" disabled>Disabled Button</button>
<button class="button loading">Loading Button</button>
```

### List Of Buttons

You can create a list of buttons by using the buttons container. 

**spaced**

```html
<div class="buttons spaced">
    <button class="button">Button</button>
    <button class="button">Button</button>
    <button class="button">Button</button>
</div>
```

**grouped**

```html
<div class="buttons grouped">
    <button class="button">Button</button>
    <button class="button">Button</button>
    <button class="button">Button</button>
</div>
```

**expanded**

```html
<div class="buttons">
    <button class="button expanded">Button</button>
    <button class="button expanded">Button</button>
</div>
```

## Icons

You may check out the [Icon Service](https://github.com/tobento-ch/service-icon) to easily manage your icons for your application.

**SVG Icon**

```html
<span class="icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 100 100"><path d="M0,100H100V90H0ZM100,50H66.67V0H33.33V50H0L50,83.33Z"/></svg>
    <span>Download</span>
</span>

<span class="icon">
    <span>Download</span>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 100 100"><path d="M0,100H100V90H0ZM100,50H66.67V0H33.33V50H0L50,83.33Z"/></svg>
</span>

<span class="icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 100 100"><path d="M0,100H100V90H0ZM100,50H66.67V0H33.33V50H0L50,83.33Z"/></svg>
</span>
```

**Font Awesome and others**

```html
<span class="icon">
    <i class="fas fa-download"></i>
    <span>Download</span>
</span>
```

### Icon Sizes

You may use the [Text Sizes](#text-sizes) for the icon size. Only svg or text icons scales though.

```html
<span class="icon text-xl">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 100 100"><path d="M0,100H100V90H0ZM100,50H66.67V0H33.33V50H0L50,83.33Z"/></svg>
    <span>Download</span>
</span>
```

## Lists

Visit the [Demo Page](demo/lists.html) for documentation.

## Menu

Visit the [Demo Page](demo/menu.html) for documentation.

## Form

Visit the [Demo Page](demo/form.html) for documentation.

## Helpers

### Position

| Class | Css |
| --- | --- |
| ```position-sticky``` | ```position: sticky;``` |
| ```position-absolute``` | ```position: absolute;``` |
| ```position-relative``` | ```position: relative;``` |
| ```position-fixed``` | ```position: fixed;``` |

### Display

| Class | Css |
| --- | --- |
| ```display-none``` | ```display: none;``` |
| ```display-block``` | ```display: block;``` |
| ```display-inline-block``` | ```display: inline-block;``` |
| ```display-flex``` | ```display: flex;``` |
| ```display-inline-flex``` | ```display: inline-flex;``` |

### Float

| Class | Css |
| --- | --- |
| ```float-left``` | ```float: left;``` |
| ```float-right``` | ```float: right;``` |

### Overflow

| Class | Css |
| --- | --- |
| ```overflow-hidden``` | ```overflow: hidden;``` |
| ```overflow-auto``` | ```overflow: auto;``` |
| ```overflow-x-auto``` | ```overflow-x: auto;``` |
| ```overflow-y-auto``` | ```overflow-y: auto;``` |

### Cursor

| Class | Css |
| --- | --- |
| ```cursor-pointer``` | ```cursor: pointer;``` |
| ```cursor-move``` | ```cursor: move;``` |

### Misc

| Class | Css |
| --- | --- |
| ```scroll-behavior-smooth``` | ```scroll-behavior: smooth;``` |

## Sizing

### Max Width

* ```max-width-xxs``` is of size ```4rem```
* ```max-width-xs``` is of size ```8rem```
* ```max-width-s``` is of size ```16rem```
* ```max-width-m``` is of size ```32rem```
* ```max-width-l``` is of size ```48rem```
* ```max-width-xl``` is of size ```64rem```
* ```max-width-xxl``` is of size ```80rem```
* ```max-width-min``` is equal to css ```max-width: min-content```
* ```max-width-max``` is equal to css ```max-width: max-content```
* ```max-width-fit``` is equal to css ```max-width: fit-content```
* ```max-width-full``` is equal to css ```max-width: 100%```

## Spacing

### Margin

Available margin directions:

* ```m``` for top, right, bottom, left
* ```mt``` for top
* ```mr``` for right
* ```mb``` for bottom
* ```ml``` for left
* ```mx``` horizontally for both left and right
* ```my``` vertically for both top and bottom

Available sizes to be appended to margin directions like ```mt-s```:

* ```0``` is ```0```
* ```xxs``` is of size ```0.25rem```
* ```xs``` is of size ```0.5rem```
* ```s``` is of size ```1rem```
* ```m``` is of size ```2rem```
* ```l``` is of size ```4rem```
* ```xl``` is of size ```6rem```
* ```xxl``` is of size ```8rem```
* ```auto```

### Padding

Available padding directions:

* ```p``` for top, right, bottom, left
* ```pt``` for top
* ```pr``` for right
* ```pb``` for bottom
* ```pl``` for left
* ```px``` horizontally for both left and right
* ```py``` vertically for both top and bottom

Available sizes to be appended to padding directions like ```pt-s```:

* ```0``` is ```0```
* ```xxs``` is of size ```0.25rem```
* ```xs``` is of size ```0.5rem```
* ```s``` is of size ```1rem```
* ```m``` is of size ```2rem```
* ```l``` is of size ```4rem```
* ```xl``` is of size ```6rem```
* ```xxl``` is of size ```8rem```

## Columns

Columns is a simple grid system based on CSS flexbox. It is a desktop-first approach.

You may visit the [Demo Page](demo/columns.html) too.

### Column Sizes

Compose column by column with class like ```col-1``` to ```col-12```.

```html
<div class="cols">
    <div class="col-3">col-3</div>
    <div class="col-6">col-6</div>
    <div class="col-3">col-3</div>
</div>
```

Auto width column. Keep in mind that in this way, your columns will only be a row!:

```html
<div class="cols">
    <div class="col">first col</div>
    <div class="col">second col</div>
    <div class="col">third col</div>
</div>
```

### Column Options

Options for columns to be appended like ```cols center```:

| Class | Description |
| --- | --- |
| ```nowrap``` | Does not wrap columns. Columns will only be a row. |
| ```center``` | Centers columns. |
| ```right``` | Right align columns. |
| ```top``` | Top align columns. |
| ```middle``` | Centers columns vertically. |
| ```bottom``` | Bottom align columns. |
| ```baseline``` | Baseline align columns. |
| ```reverse``` | Reverses columns order. |
| ```column``` | Single row per column. |
| ```columnReverse``` | Single row per column in reversed order. |
| ```spaceBetween``` | Space between columns. |
| ```spaceAround``` | Space around columns. |
| ```equalHeight``` | Equal height columns. |

```html
<div class="cols middle">
    <div class="col-3">col-3</div>
    <div class="col-6">col-6</div>
    <div class="col-3">col-3</div>
</div>
```

Options for column to be appended like ```col middle```:

| Class | Description |
| --- | --- |
| ```top``` | Top align column. |
| ```middle``` | Centers column vertically. |
| ```bottom``` | Bottom align column. |

```html
<div class="cols">
    <div class="col-3 top">col-3</div>
    <div class="col-6 middle">col-6</div>
    <div class="col-3 bottom">col-3</div>
</div>
```

### Column Gaps

You may use the [Padding Spacing](#padding) for gaps.

```html
<div class="cols">
    <div class="col-3 p-xs">col-3</div>
    <div class="col-6 p-xs">col-6</div>
    <div class="col-3 p-xs">col-3</div>
</div>
```

### Column Responsiveness

**Column Sizes**

* ```widescreen-1``` to ```widescreen-12```
* ```desktop-1``` to ```desktop-12```
* ```tablet-1``` to ```tablet-12```
* ```mobile-1``` to ```mobile-12```

Check out the [Desktop First Breakpoints](#desktop-first-breakpoints) for its sizes.

```html
<div class="cols">
    <div class="col-4 tablet-6 mobile-12">col</div>
    <div class="col-4 tablet-6 mobile-12">col</div>
    <div class="col-4 tablet-6 mobile-12">col</div>
</div>
```

**Options for columns**

Use ```widescreen-*```, ```desktop-*```, ```tablet-*```, ```mobile-*``` with the following alignment classes like ```tablet-middle```.

* ```*-nowrap```
* ```*-center```
* ```*-right```
* ```*-top```
* ```*-middle```
* ```*-bottom```
* ```*-reverse```

```html
<div class="cols tablet-middle">
    <div class="col-3">col-3</div>
    <div class="col-6">col-6</div>
    <div class="col-3">col-3</div>
</div>
```

**Options for column**

Use ```widescreen-*```, ```desktop-*```, ```tablet-*```, ```mobile-*``` with the following alignment classes like ```tablet-middle```.

* ```*-top```
* ```*-middle```
* ```*-bottom```

```html
<div class="cols">
    <div class="col-3 tablet-top">col-3</div>
    <div class="col-6 tablet-middle">col-6</div>
    <div class="col-3 tablet-bottom">col-3</div>
</div>
```

## Responsiveness

Basis.css uses the following breakpoints for its core classes.

### Mobile First Breakpoints

```css
/* mobile */    
    
/* tablet */        
@media screen and (min-width: 769px), print {}
    
/* desktop */    
@media screen and (min-width: 1024px), print {}
    
/* widescreen */
@media screen and (min-width: 1216px), print {}
    
/* fullhd */
@media screen and (min-width: 1408px), print {}
```

### Desktop First Breakpoints

```css
/* fullhd */

/* widescreen */
@media screen and (max-width: 1407px), print {}

/* desktop */
@media screen and (max-width: 1215px), print {}

/* tablet */ 
@media screen and (max-width: 1023px), print {}

/* mobile */ 
@media screen and (max-width: 768px), print {}
```

# Credits

- [Tobias Strub](https://www.tobento.ch)
- [All Contributors](../../contributors)