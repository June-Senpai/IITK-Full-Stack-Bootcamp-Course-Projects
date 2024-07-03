import "./display.css"

const Display = () => {
  return (
    <div>
      <h1>The display Property</h1>

      <h2>display: none:</h2>
      <div>
        Lorem ipsum dolor.... <p className="ex1">HELLO WORLD!</p> Vestibulum volutpat tellus
        diam....
      </div>

      <h2>display: inline:</h2>
      <div>
        Lorem ipsum dolor.... <p className="ex2">HELLO WORLD!</p> Vestibulum volutpat tellus
        diam....
      </div>

      <h2>display: block:</h2>
      <div>
        Lorem ipsum dolor.... <p className="ex3">HELLO WORLD!</p> Vestibulum volutpat tellus
        diam....
      </div>

      <h2>display: inline-block:</h2>
      <div>
        Lorem ipsum dolor.... <p className="ex4">HELLO WORLD!</p> Vestibulum volutpat tellus
        diam....
      </div>
    </div>
  )
}
export default Display
