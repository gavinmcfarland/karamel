## TODO

- Move `mole.config.js` and theme into `scr/` (need to update `mole` to accept different path for config file)
- Complete the following parts
  - `border` 
  - `max-width` DONE
  - `width` DONE
  - `height` DONE
  - `margin` DONE
  - `padding` DONE
  - `line-height`
  - `letter-spacing`
  - `flex`
  - `color theme` DONE
  - `font size` DONE
- Create or use a plugin to apply parts to css
- Move parts/property definitions to separate file from theme
- Separate files into `karamel` (index.css), `karamel/typography`, `karamel/reset`, `karamel/functions`.
- Test custom config from another package (app might have to be moved into a postcss plugin)
- Consider moving logic for creating parts into PostCSS styles (using mole to output json or js object which is imported by PostCSS)
- Fix bug when styles are build and utilities file is empty. Think it has something to do with mole.build() not being done before postCSS starts parsing

## Abbreviations

- `f`
- `ff`
- `fs`
- `fst`
- `ls`
- `lh`
- `bg`
- `w`
- `max-w`
- `m`
- `p`
- `b`
- `flex`


## Variables

Looking to update framework to be founded on a set of variables.

```css
.css {
  /* Colors */
  --silver: ;
  --green: ;
  --blue: ;
  --red: ;
  --black: ;
  ...

  /* Fonts */
  --roboto: ;
  --miriam-libre: ;
  ...

  /* Numbers */
  --number-minor-second: 1.067;
  --number-major-second: 1.125;
  --number-minor-third: 1.2;
  --number-major-third: 1.25;
  ...

  /* Borders */
  --border: var(--border-width) var(--border-style) var(--border-color);
  --border-width: <unit>;
  --border-style: solid;
  --border-color: var(--color-border);

  /* Colors */
  --color-text: var(--black);
  --color-background: var(--white);
  --color-border: var(--red);
  --color-link: var(--blue);
  --color-heading: var(--red);
  --color-code: var(--color-text);
  --color-highlight: var(--red);

  --color: ; /* --theme */

  --color-hover: var(--color-text); /* darken this color */

  /* Fonts */
  --font-family-text: var(--roboto);
  --font-family-display: var(--miriam-libre);
  --font-family-code: var(--miriam-libre);
  

  --font-style-text: ;
  --font-style-display: ;
  --font-style-heading: ;
  --font-style-link: ;
  --font-style-code: ;
  --font-style-caps: ;

  /* Elements/Components */
  --link-color: var(--color-link);
  --link-hover-background: var(--color-hover);

  --heading-color: var(--color-heading);
  --heading-font-family: ;

  link {
    color: var(--color-link);
    @extent %font-style-link;

    &:hover {
        background-color: var(--color-hover);
    }
  }
}
```

Perhaps in combination with placeholders

```css
--font-style-heading {
    font-family: --font-family-display;
	font-weight: --font-weight-bold;
    line-height: 1.4;
}

:--heading {
    ...--font-style-heading;
}

/* doing the same thing */

%font-family-display: "Roboto";
%font-weight-bold: 500;

%font-style-heading {
    font-family: %font-family-display;
	font-weight: %font-weight-bold;
    line-height: 1.4;
}

h1, h2, h3, h4 {
    ...%font-style-heading;
}

/* or */

:root {
    --font-family-display: "Roboto";
    --font-weight-bold: 500;
}


--font-style-heading {
    font-family: var(--font-family-display);
    font-weight: var(--font-weight-bold);
    line-height: 1.4;
}

:--heading {
    @extend --font-style-heading;
}

:root {
    --font-family-display: "Roboto";
    --font-weight-bold: 500;
}


%font-style-heading {
    font-family: var(--font-family-display);
    font-weight: var(--font-weight-bold);
    line-height: 1.4;
}

:--heading {
    @extend --font-style-heading;
}
```

New syntax?

```css

{
    %number {
        golden-ratio: 1.168;
        octave: 2;
    }

    %color {
        silver: "";
        green: "";
        blue: "";
        red: "";
        black: "";
    }

    %font {
        family: {
            text: "Roboto";
            display: "Miriam Libre";
        }
    }

    %border {
        color: %red;
    }
    
    :text {
      font-family: %text;
      line-height: 1.4;
      color: $black;
    }

    :heading + self:text {
        font-weight bold;
    }

    :link + self:text {
        text-decoration: underline;
        color: %blue;

        &:hover {
            background: $.color.red.100;
        }
    }

    button + self:heading {
        border: %border;
    }
}

