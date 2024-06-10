const SurveyForm = () => {
  return (
    <section className="flex h-screen items-center justify-center">
      <form action="" className="">
        <fieldset className="flex flex-col gap-4 border-2 border-black p-5">
          <legend className="text-center">
            <h1 className="text-center">Survey Form</h1>
          </legend>
          <label>
            Enter Full name
            <br />
            <input type="text" className="w-full border-2 border-gray-300" required />
          </label>
          <label>
            Enter your Email
            <br />
            <input type="email" className="w-full border-2 border-gray-300" required />
          </label>
          <label>
            Choose your favorite color
            <br />
            <select className="w-full border-2 border-gray-300" required>
              <option value="">Select...</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
            </select>
          </label>
          <label>
            Choose your hobbies
            <br />
            <input type="checkbox" name="hobby" value="reading" /> Reading
            <br />
            <input type="checkbox" name="hobby" value="traveling" /> Traveling
            <br />
            <input type="checkbox" name="hobby" value="cooking" /> Cooking
          </label>
          <label>
            Choose your gender
            <br />
            <input type="radio" name="gender" value="male" required /> Male
            <br />
            <input type="radio" name="gender" value="female" /> Female
            <br />
            <input type="radio" name="gender" value="other" /> Other
          </label>
          <button type="submit" className="bg-blue-500">
            Submit
          </button>
        </fieldset>
      </form>
    </section>
  )
}

export default SurveyForm
