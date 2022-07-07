
import { NavLink } from "react-router-dom";
import { Bio } from "../Bio";

export function Navbar() {



  return (
    <>
    <nav className="w-80 h-[100vh] flex flex-col bg-gray-900 fixed rounded-tr-[13rem]
      sm:w-full sm:h-[60%] sm:rounded-none sm:absolute
    ">
      <ul className="flex justify-center gap-6 text-base text-slate-50 w-30 rounded-br-full 
      bg-gray-900
      h-10 items-center rounded-l-full sm:text-xl">
        <li>
          <NavLink to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/repo">Repository</NavLink>
        </li>
      </ul>
      <Bio />
    </nav>
    </>
  )
}