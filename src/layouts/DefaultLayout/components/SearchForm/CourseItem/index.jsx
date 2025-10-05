import styles from "./CourseItem.module.css";
function CourseItem({ itemAvatar, nameOfItem }) {
  return (
    <div className={styles.item}>
      <img src={itemAvatar} alt="" />
      <p>{nameOfItem}</p>
    </div>
  );
}

export default CourseItem;
