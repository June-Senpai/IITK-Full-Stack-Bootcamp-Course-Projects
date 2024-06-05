const SocialMediaForm = () => {
  return (
    <form className="flex flex-col items-center p-4 rounded-lg">
      <button type="submit" className="flex items-center gap-2">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGIvGsYYBcM3T5XC9z6FIu1E7toWB0dR4krQ&s"
          alt=""
          width={32}
          height={32}
        />
        Sign in using google
      </button>
    </form>
  )
}
export default SocialMediaForm
