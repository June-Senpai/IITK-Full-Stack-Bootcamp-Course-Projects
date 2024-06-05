import { useState } from "react"

// const numbers = [
//   { number: "1", rotate: "80" },
//   { number: "2", rotate: "60" },
//   { number: "3", rotate: "90" },
//   { number: "4", rotate: "120" },
//   { number: "5", rotate: "150" },
//   { number: "6", rotate: "180" },
//   { number: "7", rotate: "210" },
//   { number: "8", rotate: "240" },
//   { number: "9", rotate: "270" },
//   { number: "10", rotate: "300" },
//   { number: "11", rotate: "330" },
//   { number: "12", rotate: "0" },
// ]
const DigitalClock = () => {
  // getting time
  let time = new Date().toLocaleTimeString()
  const hours = new Date().getHours()
  const minutes = new Date().getMinutes()
  const seconds = new Date().getSeconds()

  // setting degree for each time
  const hourRotation = (hours % 12) * 30 + minutes * 0.5
  const minuteRotation = minutes * 6
  const secondRotation = seconds * 6

  const [timeState, setTimeState] = useState(time)
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString()
    setTimeState(time)
  }
  setInterval(UpdateTime, 1000)

  return (
    <div className="flex gap-8 items-center justify-center h-screen flex-col text-2xl">
      <span className="text-2xl"> Clock</span>
      <div className="text-4xl font-bold">{timeState}</div>
      <section className="w-96 h-96 border-2 border-black rounded-full relative">
        <div className="absolute left-1/2 top-1/2 bg-black h-2 z-50 w-2 rounded-full -translate-y-1/2"></div>
        <div
          style={{ transform: `rotate(${hourRotation}deg)` }}
          className={`absolute rounded-t-lg h-[30%] -translate-x-1/2 w-2 origin-bottom bg-green-500 left-1/2 bottom-1/2 `}></div>

        <div
          style={{ transform: `rotate(${minuteRotation}deg)` }}
          className={`hour-hand absolute rounded-t-lg h-[40%] origin-bottom w-2 bg-black left-1/2 bottom-1/2 `}></div>

        <div
          style={{ transform: `rotate(${secondRotation}deg)` }}
          className={`absolute h-[43%] rounded-t-lg -translate-x-1/2 w-1 origin-bottom bg-red-500 left-1/2 bottom-1/2 `}></div>
        {/* {numbers.map(({ number, rotate }) => {
          return (
            <div
              key={number}
              style={{ transform: `rotate(${rotate}deg)` }}
              className={`absolute w-full h-full rotate-[${rotate}deg] text-center `}>
              {number}
            </div>
          )
        })} */}
        <div className="absolute h-full w-full rotate-[30deg] text-center">1</div>
        <div className="absolute h-full w-full rotate-[60deg] text-center">2</div>
        <div className="absolute h-full w-full rotate-[90deg] text-center">3</div>
        <div className="absolute h-full w-full rotate-[120deg] text-center">4</div>
        <div className="absolute h-full w-full rotate-[150deg] text-center">5</div>
        <div className="absolute h-full w-full rotate-[180deg] text-center">6</div>
        <div className="absolute h-full w-full rotate-[210deg] text-center">7</div>
        <div className="absolute h-full w-full rotate-[240deg] text-center">8</div>
        <div className="absolute h-full w-full rotate-[270deg] text-center">9</div>
        <div className="absolute h-full w-full rotate-[300deg] text-center">10</div>
        <div className="absolute h-full w-full rotate-[330deg] text-center">11</div>
        <div className="absolute h-full w-full rotate-[0deg] text-center">12</div>
      </section>
    </div>
  )
}
export default DigitalClock
