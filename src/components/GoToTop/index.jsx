import { useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./GoToTop.module.css";

function GoToTop({ size = 300 }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > size);

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [size]);

  return (
    <button
      type="button"
      className={clsx(styles.button, visible && styles.visible)}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Về đầu trang"
    >
      ↑
    </button>
  );
}

export default GoToTop;
