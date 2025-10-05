import AppLogo from "../AppLogo";
import SearchForm from "../SearchForm";
import styles from "./Header.module.css";
import MyCourses from "../MyCourses";
import Notification from "../Notification";
import UserMenu from "../UserMenu";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <AppLogo />
      </div>

      <div className={styles.center}>
        <SearchForm />
      </div>

      <div className={styles.actions}>
        <MyCourses />
        <Notification />
        <UserMenu />
      </div>
    </header>
  );
}

export default Header;
