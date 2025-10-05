import { useEffect, useState } from "react";
import SearchResult from "./SearchResult";
import styles from "./SearchForm.module.css";
import registerOutsideClick from "../../../../utils/registerOutsideClick";

const DROPDOWN_KEY = "search-form";

function SearchForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const cleanup = registerOutsideClick(DROPDOWN_KEY, () => setIsOpen(false));
    return cleanup;
  }, []);

  return (
    <div data-dropdown={DROPDOWN_KEY}>
      <form className={styles.searchForm}>
        <p>🔍</p>
        <input
          onFocus={() => setIsOpen(true)}
          className={styles.searchInput}
          placeholder="Tìm kiếm khóa học, bài viết, video,..."
        />
        {isOpen && <SearchResult />}
      </form>
    </div>
  );
}

export default SearchForm;
