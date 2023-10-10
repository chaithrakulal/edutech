import { Link } from "react-router-dom";
import eduTechLogo from "../../../Assets/Icons/edutechLogo.png";
import { NavBarLink } from "../data/NavBarLink";

const Navbar = () => {
  return (
    <div className="flex h-15 items-center justify-center border-b-[1px] border-b-richblack-700">
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
        <Link to="/">
          <img
            src={eduTechLogo}
            alt="Logo"
            width={100}
            height={150}
            loading="lazy"
          />
        </Link>
        <nav className="hidden md:block">
          <ul className="flex gap-x-6 text-richblack-25">
            {NavBarLink.map((link, index) => (
              <li key={index}>
                <div className="group relative flex cursor-pointer items-center gap-1 text-richblack-25">
                  <Link to={link.path}>
                    <p>{link.title}</p>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden items-center gap-x-4 md:flex">
          <Link to="/signup">
            <button className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded-[8px]">
              Sign Up
            </button>
          </Link>
          <Link to="login">
            <button className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded-[8px]">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
