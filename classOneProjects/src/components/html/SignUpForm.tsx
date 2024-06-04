const SignUpForm = () => {
  return (
    <form className="flex flex-col mx-auto w-48 text-center gap-3 border-2 border-black p-4">
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        className="border-2 border-gray-300 rounded-md p-1 "
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        className="border-2 border-gray-300 rounded-md p-1 "
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        className="border-2 border-gray-300 rounded-md p-1 "
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
        Sign Up
      </button>
    </form>
  )
}
export default SignUpForm
