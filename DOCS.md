# Documentation

## Fonts

### Size

Control the font size of any element using a range between `1` and `10`.

- `f-<integer:1-10>`
<!-- - `f-<unit>` -->

### Color

- `f-<color>`

### Types

Font types allow you to apply several styles at once to maintain consistency within your typography without being too restrictive. Combine with `font size` to maintain varied visuals without creating inconsistencies.

- `f-text`
- `f-heading`
- `f-link`
- `f-code`
- `f-quote`

<!-- ###### Example

```js
token: {
  font: {
    style: {
      heading: {
        fontFamily: 'Arial',
        lineHeight: "1.5",
        letterSpacing: "0.3em"
      }
    }
  }
}
``` -->

### Letter Spacing

Set the spacing between letters.

- `ls-<integer>`
- `ls-<unit>`

### Line Height

Set the line height of text.

- `lh-<integer>`
- `lh-<unit>`


## Background

### Color

- `bg-<name>`


## Color

### Theme

Color schemes are useful when a design alternates between blocks of colour because often when a background colour changes other colours much change to accomodate that color.

- `c` Applies the default colour theme
<!-- - `c-reverse` Reverses the background and text colours of the default color theme -->
<!-- - `c-constrast` Applies a contrasting color theme based on the default color theme.
- `c-<name>` Create your own color themes -->


## Layout

### Flex

The easiest way to apply layout using the following _parts_.

- `flex` Applies default flex layout behaviour
<!-- - `flex-block` Makes all child elements behave like block elements and wraps them
- `flex-inline` Males all child elements behave like inline elements and wraps them
- `flex-column` Changes direction of layout
- `flex-wrap` -->

To change the default flex behaviour pass an option through the plugin `flex({default: 'flex-block'})`.

## Sizing

### Width

Specify width of an element.

- `w-<integer:1-20>`<!-- - `w-<unit>` -->
- `w-content` Sets to width of content
- `w-flex` Sets width to available space
- `w-viewport` Forces to width of viewport

### Height

Specify height of an element.

- `h-<integer:1-20>`
<!-- - `h-<unit>` -->


## Spacing

### Margin

Specify margin on an element.

- `m<side>?-<integer:1-20>#{1,4}`
- `m<side>?-<unit>#{1,4}`
- `m<side>?-auto` 

<!-- - `m[t|r|b|l|s|e]-<integer:1-20>`
- `m[t|r|b|l|s|e]-<unit>`


- `m[x|y|i|bl]-<integer:1-20>`
- `m[x|y|i|bl]-<unit>` -->


### Padding

Specify padding on an element.

- `p<side>?-<integer:1-20>#{1,4}`
- `p<side>?-<unit>#{1,4}`

The padding property allows you to use negative values when you want to apply the same negative margin as padding. Useful when you need to compensate for a parent that has padding or margins or to increase the hit area of a link.

<!-- To specify different sides use any of the following formats

- `p-[<length>|<percentage>|auto]{1,4}`
- `p[t|r|b|l]-[<length>|<percentage>|auto]`
- `p[bl|i]-[<length>|<percentage>|auto]{1,2}`

Use negative values to compensate for a parent that has padding or margins or to increase the hit area of a link.

- `-p-<integer:1-20>`
- `-p-<unit>` -->

## Border

Specify a border on an element

- `b<side>?-[<width>|<style>|<color>|<align>]#{1,3}`


<!-- To specify different sides use any of the following formats

- `p-[<length>|<percentage>|auto]{1,4}`
- `p[t|r|b|l]-[<length>|<percentage>|auto]`
- `p[bl|i]-[<length>|<percentage>|auto]{1,2}`

Use negative values to compensate for a parent that has padding or margins or to increase the hit area of a link.

- `-p-<integer:1-20>`
- `-p-<unit>` -->
 

<!-- ## Configure

```js
{
    color: {
        theme: {
            default: {
                text: '',
                heading: '',
                link: '',
                border: '',
                background: ''
            },
            contrast: {},
            reverse: {}
        }
    },
    font: {
        family: {
            arial: {}
        },
        style: {
            text: {
                'font family': '',
                'line height': '',
                'letter spacing': '',
                'font weight': ''
            },
            heading: {},
            link: {},
            code: {},
            quote: {}  
        }
    }
}
``` -->