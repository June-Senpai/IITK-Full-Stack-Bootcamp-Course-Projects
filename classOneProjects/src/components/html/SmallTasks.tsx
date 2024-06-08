const SmallTasks = () => {
  return (
    <main className="flex flex-col p-4 gap-4">
      <h1>Small Tasks</h1>
      <section>
        <h2>Html Elements</h2>
        <p>
          15 semantic html elements -h1 to h6 main section article aside footer header nav progress
          time
        </p>
      </section>
      <section>
        <h2>Sub Formulas</h2>
        <div>
          h<sub>2</sub>o
        </div>
        <div>
          ba<sub>2</sub>+na<sub>2</sub>={">"} banana
        </div>
        <div>
          CO<sub>2</sub>
        </div>
        <div>
          MgCl<sub>2</sub>
        </div>
      </section>
      <h2>Output tag</h2>
      <pre className="p-4 bg-gray-200 rounded-lg mx-auto">
        <code>
          {`
        <section>
          <form oninput="x.value=parseInt(a.value)+parseInt(b.value)">
            <input type="number" id="a" value="50" />
            +<input type="number" id="b" value="25" /> =<output name="x" for="a b"></output>
          </form>
        </section>
        `}
        </code>
      </pre>
      <h2>Lists</h2>
      <p>There are 3 types of lists</p>
      <ul>
        <li>Unordered</li>
        <li>Unordered</li>
        <li>Unordered</li>
      </ul>
      <ol>
        <li>Ordered</li>
        <li>Ordered</li>
        <li>Ordered</li>
      </ol>
      <dl>
        <dt>Definition</dt>
        <dd>A definition list is a list of terms and their associated definitions.</dd>
        <dt>Definition</dt>
        <dd>A definition list is a list of terms and their associated definitions.</dd>
      </dl>
      <h2>Image usemap and map</h2>
      <p>
        it is like a {"<"}a{">"} tag wrapping image <br />
        to use usemap you need to add a map tag to the image tag and add the area tag inside the map
        tag <br />
        the area tag has the shape of the image and the coords of the image <br />
      </p>
      <img
        src="https://picsum.photos/200/300"
        alt="A random image"
        useMap="#myMap"
        width={200}
        height={300}
      />
      <map name="myMap">
        <area
          shape="rect"
          coords="0,0,100,100"
          href="https://picsum.photos/200/300"
          alt="A random image"
        />
        <area shape="rect" coords="34,44,270,350" alt="Computer" href="/css/lunarEclipse" />
      </map>
      so if u click way below u go to lunar Eclipse and if top then u go to new image
      <h1 className="text-red-500">
        DON'T USE IT, IT IS CACHING THE OLD LINK AND STUFF IT SEEMS UNSTABLE
      </h1>
    </main>
  )
}
export default SmallTasks
