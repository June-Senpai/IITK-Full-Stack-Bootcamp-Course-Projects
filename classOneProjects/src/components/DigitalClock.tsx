import { useState } from "react"
const DigitalClock = () => {
  // const date = new Date()
  // console.log(date.toString())
  // const time = Date().toLocaleTimeString()
  let time = new Date().toLocaleTimeString()
  const seconds = new Date().getSeconds()
  // console.log(seconds)
  const [timeState, setTimeState] = useState(time)
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString()
    setTimeState(time)
  }
  setInterval(UpdateTime, 1000)

  console.log()
  return (
    <div className="flex gap-8 items-center justify-center h-screen flex-col">
      DigitalClock
      <div className="text-4xl font-bold">{timeState}</div>
      <section className="w-96 h-96 border-2 border-black rounded-full relative">
        <div className="absolute left-1/2 top-1/2 bg-black h-2 w-2 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div
          className={`absolute h-[40%] -translate-x-1/2 rotate-0 w-2 bg-red-500 left-1/2 top-1/2 `}></div>
        <div
          className={`absolute h-[40%] -translate-x-1/2 rotate-0 w-2 bg-red-500 left-1/2 top-1/2 `}></div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
        <div>11</div>
        <div>12</div>
      </section>
    </div>
  )
}
export default DigitalClock
