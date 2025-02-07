import PropTypes from "prop-types";
import { useRef } from "react";

function Tab({ children, setPosition }) {
  const ref = useRef(null);
  console.log(children);
  return (
    <a
      href={`/#${children}`}
      ref={ref}
      onClick={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        console.log(width);
        setPosition({ width, opacity: 1, left: ref.current.offsetLeft });
      }}
      className="link-list"
    >
      {children}
    </a>
  );
}

export default Tab;
Tab.propTypes = {
  children: PropTypes.string,
  setPosition: PropTypes.func,
};
