import { Navigate, Route, Routes } from "react-router-dom"
import Hello from "./components/hello"
import DigitalClock from "./components/DigitalClock"
import Navbar from "./components/Navbar"
import LoginForm from "./components/html/LoginForm"
import HtmlNavbar from "./components/html/HtmlNavbar"
import SignUpForm from "./components/html/SignUpForm"
import SocialMediaForm from "./components/html/SocialMediaForm"
import Table from "./components/html/Table"

export default function App() {
  return (
    <main className="px-4 py-10 bg-gray-50 min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/Clock" element={<DigitalClock />} />
        <Route path="/html" element={<HtmlNavbar />}>
          <Route index element={<Navigate to="loginForm" />} />
          <Route path="signUpForm" element={<SignUpForm />} />
          <Route path="socialMediaForm" element={<SocialMediaForm />} />
          <Route path="loginForm" element={<LoginForm />} />
          <Route path="table" element={<Table />} />
        </Route>
      </Routes>
    </main>
  )
}
