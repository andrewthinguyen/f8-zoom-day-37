import { NavLink } from "react-router";
import styles from "./Navigation.module.css";

const NavItems = [
  { to: "/", title: "Home" },
  { to: "/modal", title: "Modal" },
  { to: "/profile", title: "Profile" },
  { to: "/scroll", title: "Scroll" },
];

function Navigation() {
  return (
    <ul className={styles.container}>
      {NavItems.map((item, index) => {
        return (
          <li key={index}>
            <h2>
              <NavLink to={item.to}>{item.title}</NavLink>
            </h2>
          </li>
        );
      })}
    </ul>
  );
}

export default Navigation;
