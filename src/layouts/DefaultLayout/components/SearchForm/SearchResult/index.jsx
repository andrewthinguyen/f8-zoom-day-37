import styles from "./SearchResult.module.css";
import CourseItem from "../CourseItem";

function SearchResult() {
  return (
    <div
      className={styles.coursesWrapper}
      onMouseDown={(event) => event.preventDefault()}
    >
      <div className={styles.header}>
        <p>Khoá Học</p>
        <span>Xem thêm</span>
      </div>
      <div className={styles.detail}>
        <CourseItem
          itemAvatar={"https://files.fullstack.edu.vn/f8-prod/courses/1.png"}
          nameOfItem={"JavaScript Cơ Bản"}
        />
        <CourseItem
          itemAvatar={"https://files.fullstack.edu.vn/f8-prod/courses/3.png"}
          nameOfItem={"Lập trình Javascript nâng cao"}
        />
        <CourseItem
          itemAvatar={"https://files.fullstack.edu.vn/f8-prod/courses/12.png"}
          nameOfItem={"Javascript Pro"}
        />
      </div>
    </div>
  );
}
export default SearchResult;
