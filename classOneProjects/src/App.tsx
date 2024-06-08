import { Navigate, Route, Routes } from "react-router-dom"
import Hello from "./components/hello"
import DigitalClock from "./components/DigitalClock"
import Navbar from "./components/layout/Navbar"
import LoginForm from "./components/html/LoginForm"
import HtmlNavbar from "./components/layout/HtmlNavbar"
import SignUpForm from "./components/html/SignUpForm"
import SocialMediaForm from "./components/html/SocialMediaForm"
import Table from "./components/html/Table"
import NavbarForm from "./components/layout/NavbarForm"
import Calculator from "./components/Calculator"
import Todo from "./components/Todo"
import "./App.css"
import SmallTasks from "./components/html/SmallTasks"
import FullForm from "./components/html/FullForm"
import CssNavbar from "./components/layout/CssNavbar"
import LunarEclipse from "./components/css/LunarEclipse"

export default function App() {
  return (
    <main className="px-4 py-10 bg-gray-50 min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/Clock" element={<DigitalClock />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/Todo" element={<Todo />} />
        <Route path="/html" element={<HtmlNavbar />}>
          <Route index element={<Navigate to="form/loginForm" />} />
          <Route path="form" element={<NavbarForm />}>
            <Route index element={<Navigate to="loginForm" />} />
            <Route path="loginForm" element={<LoginForm />} />
            <Route path="signUpForm" element={<SignUpForm />} />
            <Route path="socialMediaForm" element={<SocialMediaForm />} />
            <Route path="fullForm" element={<FullForm />} />
          </Route>
          <Route path="smallTasks" element={<SmallTasks />} />
          <Route path="table" element={<Table />} />
        </Route>
        <Route path="/css" element={<CssNavbar />}>
          <Route index element={<Navigate to="lunarEclipse" />} />
          <Route path="lunarEclipse" element={<LunarEclipse />} />
        </Route>
      </Routes>
    </main>
  )
}

{
  /* <Route path="signUpForm" element={<SignUpForm />} />
<Route path="socialMediaForm" element={<SocialMediaForm />} />
<Route path="loginForm" element={<LoginForm />} /> */
}
