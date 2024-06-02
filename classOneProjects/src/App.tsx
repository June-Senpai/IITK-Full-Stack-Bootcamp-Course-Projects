import { Route, Routes } from "react-router-dom"
import Hello from "./components/hello"
import DigitalClock from "./components/DigitalClock"
import Navbar from "./components/Navbar"

export default function App() {
  return (
    <main className="px-4 py-10 bg-gray-50 min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hello />}>
          hello
        </Route>
        <Route path="/digitalClock" element={<DigitalClock />}>
          Digital Clock
        </Route>
      </Routes>
    </main>
  )
}
