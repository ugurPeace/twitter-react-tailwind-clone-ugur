import { IoHomeSharp } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { PiBellRingingBold } from "react-icons/pi";
import { PiBellRinging } from "react-icons/pi";
import { LuMail } from "react-icons/lu";
import { LuMailCheck } from "react-icons/lu";
import { PiListBullets } from "react-icons/pi";
import { PiListBulletsBold } from "react-icons/pi";
import { LiaBookmarkSolid } from "react-icons/lia";
import { LiaBookmark } from "react-icons/lia";
import { CgTwitter } from "react-icons/cg";
import { CgProfile } from "react-icons/cg";

import { NavLink } from "react-router-dom";
import classNames from "classnames";
import Button from "../../../../components/Button";
import More from "./More";

function Menu() {
  const notification = 2;
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
      <NavLink to="/notifications" className="py-1 block group">
        {({ isActive }) => (
          <div
            className={classNames(
              "p-2 transition-colors rounded-full inline-flex items-center gap-4  group-hover:bg-[#eff3f41a]",
              { "font-semibold": isActive }
            )}
          >
            <span className="relative">
              {notification && (
                <span className="w-[18px] h-[18px] rounded-full bg-[#1d9bf0] absolute -top-1.5 -right-1 flex items-center justify-center text-[11px]">
                  {notification}
                </span>
              )}
              {!isActive && <PiBellRinging size={26} />}
              {isActive && <PiBellRingingBold size={26} />}
            </span>
            <span className="pr-4 text-lg tracking-wide">Notifications</span>
          </div>
        )}
      </NavLink>
      <NavLink to="/messages" className="py-1 block group">
        {({ isActive }) => (
          <div
            className={classNames(
              "p-2 transition-colors rounded-full inline-flex items-center gap-4  group-hover:bg-[#eff3f41a]",
              { "font-semibold": isActive }
            )}
          >
            <span>
              {!isActive && <LuMail size={26} />}
              {isActive && <LuMailCheck size={26} />}
            </span>
            <span className="pr-4 text-lg tracking-wide">Messages</span>
          </div>
        )}
      </NavLink>
      <NavLink to="/lists" className="py-1 block group">
        {({ isActive }) => (
          <div
            className={classNames(
              "p-2 transition-colors rounded-full inline-flex items-center gap-4  group-hover:bg-[#eff3f41a]",
              { "font-semibold": isActive }
            )}
          >
            <span>
              {!isActive && <PiListBullets size={26} />}
              {isActive && <PiListBulletsBold size={26} />}
            </span>
            <span className="pr-4 text-lg tracking-wide">Lists</span>
          </div>
        )}
      </NavLink>
      <NavLink to="/bookmarks" className="py-1 block group">
        {({ isActive }) => (
          <div
            className={classNames(
              "p-2 transition-colors rounded-full inline-flex items-center gap-4  group-hover:bg-[#eff3f41a]",
              { "font-semibold": isActive }
            )}
          >
            <span>
              {!isActive && <LiaBookmark size={26} />}
              {isActive && <LiaBookmarkSolid size={26} />}
            </span>
            <span className="pr-4 text-lg tracking-wide">Bookmarks</span>
          </div>
        )}
      </NavLink>
      <NavLink to="/premium" className="py-1 block group">
        {({ isActive }) => (
          <div
            className={classNames(
              "p-2 transition-colors rounded-full inline-flex items-center gap-4  group-hover:bg-[#eff3f41a]",
              { "font-semibold": isActive }
            )}
          >
            <span>
              {!isActive && <CgTwitter size={26} />}
              {isActive && <CgTwitter size={26} />}
            </span>
            <span className="pr-4 text-lg tracking-wide">Premium</span>
          </div>
        )}
      </NavLink>
      <NavLink to="/profile" className="py-1 block group">
        {({ isActive }) => (
          <div
            className={classNames(
              "p-2 transition-colors rounded-full inline-flex items-center gap-4  group-hover:bg-[#eff3f41a]",
              { "font-semibold": isActive }
            )}
          >
            <span>
              {!isActive && <CgProfile size={26} />}
              {isActive && <CgProfile size={26} />}
            </span>
            <span className="pr-4 text-lg tracking-wide">Profile</span>
          </div>
        )}
      </NavLink>
      <More />
      <div className="py-4 w-[90%]">
        <Button size="large">Post</Button>
        {/*Instead of New Component / Ugur */}
      </div>
    </nav>
  );
}

export default Menu;
