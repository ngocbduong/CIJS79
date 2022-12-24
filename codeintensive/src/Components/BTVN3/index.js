import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./BTVN3.module.scss";

const cx = classNames.bind(styles);

const App2 = () => {
  const [color, setColor] = useState(cx("green"));

  const handleChange = () => {
    if (color === cx("green")) {
      setColor(cx("yellow"));
    } else if (color === cx("yellow")) {
      setColor(cx("red"));
    } else if (color === cx("red")) {
      setColor(cx("green"));
    }
  };

  return (
    <div>
      <button onClick={handleChange}>Next</button>
      <div>
        <div
          className={`${cx("circle1")} ${
            color === cx("green") ? cx("green") : ""
          }`}
        ></div>
        <div
          className={`${cx("circle2")} ${
            color === cx("yellow") ? cx("yellow") : ""
          }`}
        ></div>
        <div
          className={`${cx("circle3")} ${color === cx("red") ? cx("red") : ""}`}
        ></div>
      </div>
    </div>
  );
};

export default App2;
