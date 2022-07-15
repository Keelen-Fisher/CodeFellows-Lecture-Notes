# Images, Color, and Text

## HTML Media

- In order to put a simple image on a webpage, you can use the img element. it's an empty element which means that it has no text content or closing tag, and this tag requires a minimum of one attribute to be useful. And using src.

- There is alt, where the value is supposed to be textual description of the image, A real world use case for the alt attribute being used in a website is when there is a situation where the image cannot be seen nor displayed or takes a long time to render because of a slow internet connection. The user could also be visually impaired, and a screen reader can read the information to them.

- You can improve accessibility of images in an HTML document by adding an alt text and title and minimize text.

- The figure element in HTML represents self-contained content, potentially with an optional caption, which is specified using the figcaption element. Usually a figure element is an image, illustration, diagram, code snippet, etc.

- For a gif image, it is an animated image and can be coded in the image tag. svg element is a container that defines a new coordinate system and viewport. Can be applied with the svg tag.

## Learn CSS

- foreground colors of an HTML element, can change the color of a text on your website. Background colors are used in on the background of your page or section of your page.

### Absolute Units

- Are not recommended for responsive sites!

- In a colorless webpage, you can implement color in the text, background color in sections, background colors in the main page, along with text shadow. You can also add border color.

- You should consider web safe fonts, which are available across all systems.

- font-size: sets the size of the font.

- font-weight: Setting of how bold the text should be according to preference.

- font-style: can set the font to normal, italic, oblique.

- 2 ways you could add spacing around the charachters displayed in an h1 element is:

- Margin change

- line-height

### Relative

**Relative Units** are used for styling responsive sites. They scale relative to the parent element or to the window size.

#### `%` - percentages

- Percentages are always relative to some other value.
- Sometimes it's a value from the parent and other times it's a value from the element itself.
- `width: 50%` - half the width of the parent
- `line-height: 50%` - half the font-size of the element itself
- Usually more appropriate for layout-related properties.

```css
   p {
     font-size: 20px;
     /* using % here the line height would be half of the element itself */
     line-height: 50%;
   }
```

#### `em`

- `font-size: 1em` - equals the font-size of the parent
- `font-size: 2em` - twice the font-size of the parent, etc
- With other properties, 1em is equal to the computed font-size of the element itself... like with `line-height`.

- Defining font-size using `em` can cause problems when you have nested elements which all define font-size using `em`. This is because the inherited font-size is calculated from parent elements font-size value and passed down to child elements. Nested elements could have ever decreasing font-sizes.

#### `rem` - root em

- Relative to the **root `<html>` element**'s font size. Often easier to work with.
- Browers genereally set the root font size at `16 pixels`
  - If the root font size is 16px, 1 rem is 16px, 2rem is 32px, etc.

#### `vw` & `vh` - view height & view width

- `1vw` is 1% of the width of the viewport(area of the window in which web content can be seen)
- `1vh` is 1% of the height of the viewport
- `height: 100vh` - would make that element take up the full height on the screen
- Because you never know what screen size will access your code, this unit allows you to set exactly how much of the screen will be occupied by a given element.

## Things I want to Know About

[Home](https://keelen-fisher.github.io/new-repository/)