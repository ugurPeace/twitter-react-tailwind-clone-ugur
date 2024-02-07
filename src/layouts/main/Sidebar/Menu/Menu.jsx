import { IoHomeSharp } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";

import { NavLink } from "react-router-dom";
import classNames from "classnames";

function Menu() {
  return (
    <nav className="mt-0.5 mb-1">
      <NavLink to="/" className="py-1 block group">
        {({ isActive }) => (
          <div
            className={classNames(
              "p-2 transition-colors rounded-full inline-flex items-center gap-4  group-hover:bg-[#eff3f41a]",
              { "font-semibold": isActive }
            )}
          >
            <span>
              {!isActive && <IoHomeOutline size={26} />}
              {isActive && <IoHomeSharp size={26} />}
            </span>
            <span className="pr-4 text-lg tracking-wide">Home</span>
          </div>
        )}
      </NavLink>
      <NavLink to="/explore" className="py-1 block group">
        {({ isActive }) => (
          <div
            className={classNames(
              "p-2 transition-colors rounded-full inline-flex items-center gap-4  group-hover:bg-[#eff3f41a]",
              { "font-semibold": isActive }
            )}
          >
            <span>
              {!isActive && <IoIosSearch size={26} />}
              {isActive && <IoSearch size={26} />}
            </span>
            <span className="pr-4 text-lg tracking-wide">Explore</span>
          </div>
        )}
      </NavLink>
    </nav>
  );
}

export default Menu;
