const SocialMediaForm = () => {
  return (
    <form className="flex flex-col w-56 items-center border-2 border-black p-4 rounded-lg">
      <button type="submit" className="flex gap-2">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGIvGsYYBcM3T5XC9z6FIu1E7toWB0dR4krQ&s"
          alt=""
          width={32}
          height={32}
        />
        Sign in using google{" "}
      </button>
    </form>
  )
}
export default SocialMediaForm
