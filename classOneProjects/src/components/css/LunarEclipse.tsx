const LunarEclipse = () => {
  return (
    <div className="bg-black h-screen">
      <div className="sun h-32 w-32 bg-white rounded-full shadow-2xl shadow-white relative top-1/2 left-1/2 ">
        <div className="moon h-32 w-32 bg-black rounded-full shadow-2xl shadow-black absolute left-1 "></div>
      </div>
    </div>
  )
}
export default LunarEclipse
