import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import "../../Styles/Button.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = (
    <>
      {/* Parallax  */}
      <NavLink
        to="/Parallax"
        className={({ isActive, isPending }) =>
          ` ${
            isPending
              ? "pending"
              : isActive
              ? "text-orange-500 active"
              : "bg-black bg-clip-text text-transparent hover:text-myColor "
          }`
        }
      >
        Parallax
      </NavLink>
      {/* dummy */}
      <NavLink
        to="/dummy-1"
        className={({ isActive, isPending }) =>
          ` ${
            isPending
              ? "pending"
              : isActive
              ? "text-myColor active"
              : "bg-black bg-clip-text text-transparent hover:text-myColor "
          }`
        }
      >
        Dummy-1
      </NavLink>
      <NavLink
        to="/dummy-2"
        className={({ isActive, isPending }) =>
          ` ${
            isPending
              ? "pending"
              : isActive
              ? "text-myColor active"
              : "bg-black bg-clip-text text-transparent hover:text-myColor "
          }`
        }
      >
        Dummy-2
      </NavLink>
    </>
  );

  return (
    <div className="relative flex justify-center items-center h-16">
      <Link
        to={"/"}
        className="flex justify-center space-x-3 lg:justify-start bg-orange-100 h-full rounded-br-3xl"
      >
        {/* <img src={logo} alt="logo" className="w-40 h-16" /> */}
        <p className="self-center text-2xl font-semibold whitespace-nowrap px-2">
          Subscribe to <span className="text-orange-500">WebCraft With Hossain</span>
        </p>
      </Link>
      <div className="flex grow flex-col justify-center items-center ">
        {/* nav buttons for sm:flex  */}
        <div className="w-full hidden sm:flex justify-between items-center p-1 bg-white">
          <div className="flex">
            <ul className="flex justify-center items-center gap-3 font-medium text-base">
              {navLinks}
            </ul>
          </div>
          <div>
            <button className="myBtn hover:myBtn focus:myBtn">
              <div className="flex justify-center items-center gap-2">
                <div className="text-base">Subscribe</div>
              </div>
            </button>
          </div>
        </div>

        {/* dropdown menu for nav buttons for small screen */}
        <div className="w-full flex justify-end items-end p-1 mt-10 sm:hidden bg-white">
          <button
            onClick={toggleDropdown}
            data-collapse-toggle="navbar-hamburger"
            type="button"
            className="myBtn2 absolute z-30"
            aria-controls="navbar-hamburger"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  /* Path to create an 'X' shape */
                  d="M1 1l15 12M1 13L16 1"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            )}
          </button>
        </div>

        {/* todo: transition effect should not take space  */}

        <div
          className={` w-full absolute z-20 top-0 left-0 transition-transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          style={{
            transitionDuration: "0.3s",
          }}
          id="navbar-hamburger"
        >
          <ul
            onClick={toggleDropdown}
            className="flex flex-col font-medium px-4 pt-12 pb-4 gap-4 bg-gray-50 text-xl"
          >
            {navLinks}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
