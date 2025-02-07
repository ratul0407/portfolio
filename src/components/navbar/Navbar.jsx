import { useState } from "react";
import Tab from "./Tab";
import Cursor from "../motion/Cursor";
import { AnimatePresence, motion } from "motion/react";
import { IoIosMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
function Navbar() {
  const links = ["Home", "About", "Projects", "Contact"];
  const [menuOpen, setMenuOpen] = useState(false);
  const [position, setPosition] = useState({
    left: 0,
    width: 85.484375,
    opacity: 1,
  });
  console.log(menuOpen);
  return (
    <div className="mx-auto flex w-11/12 items-center justify-between">
      <h3 className="text-3xl font-bold italic lg:w-full">Ratul</h3>
      {/* mobile nav */}

      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            className="absolute top-0 right-0 z-20 flex min-h-full w-[60vw] flex-col gap-8 bg-black pt-40 text-white *:pl-8 *:text-2xl"
            initial={{ translateX: "100%", opacity: 0.3 }}
            animate={{ translateX: "0%", opacity: 1 }}
            exit={{ translateX: "100%", opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
          >
            {links.map((item, index) => {
              return (
                <li key={index}>
                  <a href={`#${item}`}>{item}</a>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
      <nav>
        {/* mobile button */}
        <div className="relative lg:hidden">
          <button
            className="relative z-50"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {!menuOpen ? (
              <IoIosMenu
                className="rounded-full border border-white bg-black p-1 text-white"
                size={35}
              />
            ) : (
              <RxCross1
                className="rounded-full border border-white p-1 text-white"
                size={35}
              />
            )}
          </button>
        </div>
        {/* desktop nav */}
        <ul className="relative hidden items-center rounded-full border-2 lg:flex">
          <Tab setPosition={setPosition}>Home</Tab>
          <Tab setPosition={setPosition}>About</Tab>
          <Tab setPosition={setPosition}>Projects</Tab>
          <Tab setPosition={setPosition}>Contact</Tab>
          <Cursor position={position} />
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
