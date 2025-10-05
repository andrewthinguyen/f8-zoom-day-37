import { useEffect, useState } from "react";
import registerOutsideClick from "../../../../utils/registerOutsideClick";
import styles from "./UserMenu.module.css";

const DROPDOWN_KEY = "user-menu";

const MENU_ITEMS = [
  { id: "profile", label: "Trang cá nhân" },
  { id: "settings", label: "Cài đặt" },
  { id: "logout", label: "Đăng xuất" },
];

function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const cleanup = registerOutsideClick(DROPDOWN_KEY, () => setIsOpen(false));
    return cleanup;
  }, []);

  return (
    <div data-dropdown={DROPDOWN_KEY} className={styles.wrapper}>
      <button
        type="button"
        className={styles.trigger}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <img
          className={styles.avatar}
          src="https://fullstack.edu.vn/assets/images/f8_avatar.png"
          alt="avatar người dùng"
        />
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          <div className={styles.userInfo}>
            <img
              className={styles.menuAvatar}
              src="https://fullstack.edu.vn/assets/images/f8_avatar.png"
              alt="avatar người dùng"
            />
            <div className={styles.infoText}>
              <p className={styles.displayName}>Nguyễn Văn A</p>
              <span className={styles.email}>nguyenvana@example.com</span>
            </div>
          </div>

          <ul className={styles.menuList}>
            {MENU_ITEMS.map((item) => (
              <li key={item.id} className={styles.menuItem}>
                <button type="button" className={styles.menuButton}>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default UserMenu;
