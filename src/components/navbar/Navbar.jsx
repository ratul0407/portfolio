import { useState } from "react";
import Tab from "./Tab";
import Cursor from "../motion/Cursor";
import { AnimatePresence, motion } from "motion/react";
import { IoIosMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [position, setPosition] = useState({
    left: 0,
    width: 77.484375,
    opacity: 1,
  });
  console.log(menuOpen);
  return (
    <div className="flex items-center justify-between">
      <h3 className="text-3xl font-bold italic lg:w-full">Ratul</h3>
      {/* mobile nav */}

      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            className="absolute top-0 right-0 flex min-h-[100vh] w-[60vw] flex-col gap-8 bg-black pt-40 text-white *:pl-8 *:text-2xl"
            initial={{ translateX: "100%", opacity: 0.3 }}
            animate={{ translateX: "0%", opacity: 1 }}
            exit={{ translateX: "100%", opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
          >
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </motion.ul>
        )}
      </AnimatePresence>
      <nav>
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
        <ul className="relative hidden items-center gap-8 rounded-full border-2 lg:flex">
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
