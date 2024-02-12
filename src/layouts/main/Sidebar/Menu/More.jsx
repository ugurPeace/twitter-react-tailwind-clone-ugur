import { Popover, Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import { CiCircleMore } from "react-icons/ci";
import { FiAtSign } from "react-icons/fi";
import { CiMoneyBill } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { IoStatsChartSharp } from "react-icons/io5";
import { CgArrowTopRightR } from "react-icons/cg";
import { IoIosSettings } from "react-icons/io";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { IoBrushSharp } from "react-icons/io5";
import { CgShortcut } from "react-icons/cg";

function More() {
  return (
    <Popover className="relative">
      <Popover.Button className="py-1 block group outline-none">
        <div className="p-2 transition-colors rounded-full inline-flex items-center gap-4  group-hover:bg-[#eff3f41a]">
          <span>
            <CiCircleMore size={26} />
          </span>
          <span className="pr-4 text-lg tracking-wide">More</span>
        </div>
      </Popover.Button>
      <Popover.Panel className="w-[318px] absolute bottom-0 left-0 bg-black  shadow-box rounded-xl overflow-hidden">
        <button className="px-4 h-14 transition-colors w-full  inline-flex items-center gap-5  hover:bg-[#eff3f41a]">
          <span>
            <FiAtSign size={26} />
          </span>
          <span className="pr-4 text-lg tracking-wide font-semibold">
            Connect
          </span>
        </button>
        <button className="px-4 h-14 transition-colors w-full  inline-flex items-center gap-5 hover:bg-[#eff3f41a]">
          <span>
            <CiMoneyBill size={26} />
          </span>
          <span className="pr-4 text-lg tracking-wide font-semibold">
            Monetization
          </span>
        </button>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="h-[52px] flex items-center justify-between transition-colors w-full hover:bg-[#eff3f41a] px-4 font-semibold">
                Content creator studio
                <span>
                  <IoIosArrowDown
                    size={20}
                    className={classNames("transition-all", {
                      "rotate-180": open,
                    })}
                  />
                </span>
              </Disclosure.Button>

              <Disclosure.Panel className="text-white">
                <Link
                  to="/"
                  className="flex items-center px-3 h-11 gap-3 text-[15px] font-medium hover:bg-[#eff3f41a] transition-colors"
                >
                  <span>
                    <IoStatsChartSharp />
                  </span>
                  <span>Statistics</span>
                </Link>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure>
          <Disclosure.Button className="h-[52px] flex items-center justify-between transition-colors w-full hover:bg-[#eff3f41a] px-4 font-semibold">
            Professional tools
            <span className="">
              <IoIosArrowDown size={20} />
            </span>
          </Disclosure.Button>
          <Disclosure.Panel className="text-white">
            <Link
              to="/"
              className="flex items-center px-3 h-11 gap-3 text-[15px] font-medium hover:bg-[#eff3f41a] transition-colors"
            >
              <span>
                <CgArrowTopRightR />
              </span>
              <span>Ads</span>
            </Link>
          </Disclosure.Panel>
        </Disclosure>
        <Disclosure>
          <Disclosure.Button className="h-[52px] flex items-center justify-between transition-colors w-full hover:bg-[#eff3f41a] px-4 font-semibold">
            Settings and support
            <span className="">
              <IoIosArrowDown size={20} />
            </span>
          </Disclosure.Button>
          <Disclosure.Panel className="text-white">
            <Link
              to="/"
              className="flex items-center px-3 h-11 gap-3 text-[15px] font-medium hover:bg-[#eff3f41a] transition-colors"
            >
              <span>
                <IoIosSettings />
              </span>
              <span>Settings and privacy</span>
            </Link>
            <Link
              to="/"
              className="flex items-center px-3 h-11 gap-3 text-[15px] font-medium hover:bg-[#eff3f41a] transition-colors"
            >
              <span>
                <IoMdHelpCircleOutline />
              </span>
              <span>Help center</span>
            </Link>
            <Link
              to="/"
              className="flex items-center px-3 h-11 gap-3 text-[15px] font-medium hover:bg-[#eff3f41a] transition-colors"
            >
              <span>
                <IoBrushSharp />
              </span>
              <span>Display</span>
            </Link>
            <Link
              to="/"
              className="flex items-center px-3 h-11 gap-3 text-[15px] font-medium hover:bg-[#eff3f41a] transition-colors"
            >
              <span>
                <CgShortcut />
              </span>
              <span>Keyboard shortcuts</span>
            </Link>
          </Disclosure.Panel>
        </Disclosure>
      </Popover.Panel>
    </Popover>
  );
}

export default More;
