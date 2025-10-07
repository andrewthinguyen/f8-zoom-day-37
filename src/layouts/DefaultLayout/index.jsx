import { Outlet } from "react-router";
import Header from "./components/Header";
import styles from "./DefaultLayout.module.css";
import Navigation from "../../components/Navigation";

function DefaultLayout() {
  return (
    <div className={styles.container}>
      <Header />
      <Navigation />
      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
}

export default DefaultLayout;
