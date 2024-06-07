const FullForm = () => {
  return (
    <section className="flex h-screen items-center justify-center">
      <form action="" className="">
        <fieldset className="flex flex-col gap-4 border-2 border-black p-5">
          <legend className="text-center">
            <h1 className="text-center">Login Form</h1>
          </legend>
          <label>
            Enter Full name
            <br />
            <input type="text" className="w-full border-2 border-gray-300" />
          </label>
          <label>
            Enter your Email
            <br />
            <input type="email" className="w-full border-2 border-gray-300" />
          </label>
          <label>
            Enter your Password
            <br />
            <input type="password" className="w-full border-2 border-gray-300" />
          </label>
          <label>
            Confirm Password
            <br />
            <input type="password" className="w-full border-2 border-gray-300" />
          </label>
          <label>
            Date of Birth
            <input type="date" className="w-full border-2 border-gray-300 p-1" />
          </label>
          <label>
            Date of Birth
            <input type="datetime" className="w-full border-2 border-gray-300 p-1" />
          </label>
          <section>
            <label>
              Choose your car <br />
              <input
                list="cars"
                name=""
                id="carsInput"
                className="w-full border-2 border-gray-300"
              />
              <datalist id="cars">
                <option value="Tesla"></option>
                <option value="Bugatti"></option>
                <option value="BMW"></option>
                <option value="Lumbo"></option>
                <option value="Rols"></option>
              </datalist>
            </label>
          </section>
          <h2>Choose your gender</h2>
          <section className="flex flex-wrap gap-4">
            <label className="flex items-center gap-1">
              Male <input type="radio" name="gender" value="male" />
            </label>
            <label className="flex items-center gap-1">
              Female <input type="radio" name="gender" value="female" />
            </label>
            <label className="flex items-center gap-1">
              Other <input type="radio" name="gender" value="other" />
            </label>
          </section>
          <button type="submit" className="bg-blue-500">
            Login
          </button>
        </fieldset>
      </form>
    </section>
  )
}
export default FullForm
