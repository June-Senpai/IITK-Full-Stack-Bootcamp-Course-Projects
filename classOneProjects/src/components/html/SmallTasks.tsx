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
    </main>
  )
}
export default SmallTasks
