import { NavLink } from "react-router-dom"

const navLinks = [
  { name: "Home", to: "/" },
  { name: "DigitalClock", to: "/digitalClock" },
  { name: "Calculator", to: "/calculator" },
  { name: "Weather", to: "/weather" },
  { name: "Todo", to: "/todo" },
  { name: "HTML", to: "/html" },
]

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul className="flex gap-4 p-2">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                className={({ isActive }) => {
                  return isActive ? "bg-blue-500 text-white p-2 rounded-lg" : ""
                }}
                to={link.to}>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
export default Navbar
