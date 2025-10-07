import logo from "../../../../assets/images/f8-logo.png";
import styles from "./AppLogo.module.css";
import { Link } from "react-router";

function AppLogo() {
  return (
    <div className={styles.logo}>
      <Link to={"/"}>
        <img src={logo} alt="F8 Logo" />
      </Link>

      <div className={styles.textGroup}>
        <p className={styles.brandName}>Học Lập Trình Để Đi Làm</p>
      </div>
    </div>
  );
}

export default AppLogo;
