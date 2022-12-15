import classNames from "classnames/bind";
import styles from "./StyleB.module.scss";

const cx = classNames.bind(styles);

const toDoList = [{
    id: 1, 
    name: "Clean up bedroom"
},
{
    id: 2,
    name: "Buy some milk"
},
{
    id: 3,
    name: "Jogging"
},
{
    id: 4,
    name: "Learn React"
},
{
    id: 5,
    name: "Doing Excercises"
}
]

const HomeWorkBody = () => {
  return (
    <div className={cx("wrapper")}>
        {toDoList.map(list => (
            <div key={list.id} className={cx("content")}>
                <input type="radio" name="list"/>
                <span className={cx("description")}>{list.name}</span>
            </div>
        ) )}
    </div>
  );
};

export default HomeWorkBody;
