import { NavLink, Outlet } from "react-router-dom"

const htmlLinks = [{ name: "Lunar Eclipse", to: "/css/lunarEclipse" }]

const CssNavbar = () => {
  return (
    <header>
      <nav>
        <ul className="flex gap-4 p-2 uppercase ml-2">
          {htmlLinks.map((link) => (
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
      <Outlet />
    </header>
  )
}
export default CssNavbar
