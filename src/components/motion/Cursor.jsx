import { motion } from "motion/react";
import PropTypes from "prop-types";
function Cursor({ position }) {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-11 rounded-full bg-black"
    ></motion.li>
  );
}

export default Cursor;

Cursor.propTypes = {
  position: PropTypes.object,
};
