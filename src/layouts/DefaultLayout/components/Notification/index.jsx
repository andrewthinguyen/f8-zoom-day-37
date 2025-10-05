import { useEffect, useState } from "react";
import registerOutsideClick from "../../../../utils/registerOutsideClick";
import styles from "./Notification.module.css";

const DROPDOWN_KEY = "notification";

const NOTIFICATIONS = [
  {
    id: "noti-1",
    img: "https://fullstack.edu.vn/assets/images/f8_avatar.png",
    body: "Bài học tóm tắt vừa được thêm vào khóa học.",
    time: "1 tháng trước",
  },
  {
    id: "noti-2",
    img: "https://fullstack.edu.vn/assets/images/f8_avatar.png",
    body: "Bài học lập trình OOP vừa được thêm vào",
    time: "2 tháng trước",
  },
  {
    id: "noti-3",
    img: "https://fullstack.edu.vn/assets/images/f8_avatar.png",
    body: "Bài học lập trình C# vừa được thêm vào",
    time: "1 năm trước",
  },
];

function Notification() {
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
        🔔
        <span className={styles.badge}>3</span>
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          <div className={styles.header}>
            <span>Thông báo mới</span>
            <button
              type="button"
              className={styles.closeButton}
              onClick={() => setIsOpen(false)}
            >
              Đóng
            </button>
          </div>
          {NOTIFICATIONS.length === 0 ? (
            <div className={styles.empty}>Chưa có thông báo nào.</div>
          ) : (
            <ul className={styles.list}>
              {NOTIFICATIONS.map((item) => (
                <li key={item.id} className={styles.item}>
                  <img
                    className={styles.avatar}
                    src={item.img}
                    alt=""
                    aria-hidden="true"
                  />
                  <div className={styles.content}>
                    <p className={styles.body}>{item.body}</p>
                    <span className={styles.time}>{item.time}</span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default Notification;
