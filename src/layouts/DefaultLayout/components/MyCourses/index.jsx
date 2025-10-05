import { useEffect, useState } from "react";
import registerOutsideClick from "../../../../utils/registerOutsideClick";
import styles from "./MyCourses.module.css";

const DROPDOWN_KEY = "my-courses";

const MY_COURSES = [
  {
    id: "js-basic",
    name: "Lap trinh JavaScript co ban",
    thumb: "https://files.fullstack.edu.vn/f8-prod/courses/1.png",
    progress: 45,
  },
  {
    id: "js-advanced",
    name: "JavaScript nang cao",
    thumb: "https://files.fullstack.edu.vn/f8-prod/courses/3.png",
    progress: 10,
  },
  {
    id: "react-pro",
    name: "Lap trinh React tu co ban den nang cao",
    thumb: "https://files.fullstack.edu.vn/f8-prod/courses/3.png",
    progress: 0,
  },
];

function MyCourses() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const cleanup = registerOutsideClick(DROPDOWN_KEY, () => setIsOpen(false));
    return cleanup;
  }, []);

  return (
    <div data-dropdown={DROPDOWN_KEY} className={styles.wrapper}>
      <button
        type="button"
        className={styles.toggle}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        Khoá Học Của Tôi
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          <div className={styles.dropdownHeader}>
            <div>Khoá Học Của Tôi</div>
            <div>Xem tất cả</div>
          </div>
          <ul className={styles.courseList}>
            {MY_COURSES.map((course) => (
              <li key={course.id} className={styles.courseItem}>
                <img
                  className={styles.courseThumb}
                  src={course.thumb}
                  alt=""
                  aria-hidden="true"
                />
                <div className={styles.courseContent}>
                  <p className={styles.courseName}>{course.name}</p>
                  <div className={styles.progressBar}>
                    <div
                      className={styles.progressValue}
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                  <span className={styles.progressText}>
                    Đã hoàn thành {course.progress}%
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default MyCourses;
