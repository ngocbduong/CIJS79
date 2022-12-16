import classNames from "classnames/bind";
import styles from "./StyleF.module.scss";

const cx = classNames.bind(styles);

const HomeWorkF = () => {
    return (
      <div className={cx("wrapper")}>
        <div className={cx("components")}>
        <span>5 tasks left !</span>
        <span>MindX todolist</span>
        </div>
      </div>
    );
  }
  
  export default HomeWorkF;