# IIT PROJECTS

## try

- [] grid 1fr
  - try to do tat autofit thing
    -[] display properties

min-width 1000px in media query means w>1000px
while max-width 1000px in media query means w<1000px

we can combine these two to get a min-max width

and u can do the new syntax width> 600px and width<1000px
combine these two to get a min-max width @media (600px>width<1000px)
we can even put <= here

```css
@media (min-width: 1000px) and (max-width: 2000px) {
  .class {
    width: 100%;
  }
}

media screen and (min-width: 1000px) and (max-width: 2000px)
so media screen means show this for the screen only not the print
```

cursor--
it is like cursor:pointer
other useful which i found was cursor: wait

direction:
direction: ltr; //left to right
direction: rtl; //right to left

build a responsive website which has heading para images colors fonts margins positions using media queries
