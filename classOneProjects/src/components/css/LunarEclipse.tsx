import "./lunarEclipse.css"

const LunarEclipse = () => {
  return (
    <div className="bg-black h-screen">
      <div className="sun h-32 w-32 bg-white rounded-full relative top-1/2 left-1/2 shadow-2xl shadow-white ">
        <div className="moon h-32 w-32 bg-black rounded-full absolute left-1 shadow-2xl shadow-slate-500"></div>
      </div>
    </div>
  )
}
export default LunarEclipse
