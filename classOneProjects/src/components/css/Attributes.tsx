const Attributes = () => {
  return (
    <div>
      <h1>Attributes</h1>
      so u can select all the classes by saying
      <img src="\css\Screenshot 2024-06-08 203038.png" alt="" width={500} height={500} />
      <h2>Positional Selectors</h2>
      <ul>
        <li>Fixed:</li>
        <p>
          is positioned relative to the viewport, which means it always stays in the same place even
          if the page is scrolled
        </p>
        <li>Static:</li>
        <p>nothing special it keeps the element in the flow</p>
        <li>Absolute:</li>
        <li>Relative:</li>
        <li>Sticky:</li>
        <p>is positioned based on the user's scroll position.</p>
      </ul>
      <h2>Colors</h2>
      <ul>
        <li>Rgb</li>
        <p>red, green, blue 0 to 255 but u can give it in % for each </p>
      </ul>
      <li>Rgba</li>
      <p>
        similar to rgb but with an alpha value -alpha is basically the opacity of the color 0 to 1
      </p>
      <li>hex</li>
      <p>
        starts with # and is a 6 digit hexadecimal number and starting 2 digits are red then green
        then blue and if lets say we write ffffff it means white n can be written as #fff
      </p>
      <li>hsl</li>
      <p>hue 0 to 360 saturation 0 to 100% lightness 0 to 100% </p>
      <li>hsla</li>
      <p>hue saturation lightness alpha 0 to 1</p>
    </div>
  )
}
export default Attributes
