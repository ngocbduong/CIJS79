import classNames from "classnames/bind";
import styles from "./Style.module.scss";

const cx = classNames.bind(styles);

const HomeWork = () => {
    return (
      <div className={cx('wrapper')}>
        <input type="text" placeholder="Enter your task here ..." />
      </div>
    );
  }
  
  export default HomeWork;