import { NavLink, Outlet } from "react-router-dom"

const htmlLinks = [
  { name: "login form", to: "/html/loginForm" },
  { name: "signup form", to: "/html/signUpForm" },
  { name: "social media form", to: "/html/socialMediaForm" },
  { name: "table", to: "/html/table" },
  //   { name: "hi", to: "/html/loginForm/hi" },
]

const HtmlNavbar = () => {
  return (
    <header>
      <nav>
        <ul className="flex gap-4 p-2 uppercase ml-2">
          {htmlLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                className={({ isActive }) => {
                  return isActive ? "bg-orange-500 text-white p-2 rounded-lg" : ""
                }}
                to={link.to}>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Outlet />
    </header>
  )
}
export default HtmlNavbar
