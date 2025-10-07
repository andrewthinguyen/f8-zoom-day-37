import { useEffect, useState } from "react";
import avatar from "../../assets/images/df.jpg";
import styles from "./Profile.module.css";

function Profile() {
  const [previewUrl, setPreviewUrl] = useState(null);

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  const handleChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const fileUrl = URL.createObjectURL(file);
    setPreviewUrl(fileUrl);
  };

  return (
    <div className={styles.container}>
      <label className={styles.avatarUploader}>
        <input
          className={styles.input}
          type="file"
          accept="image/*"
          onChange={handleChange}
        />
        <img
          className={styles.avatar}
          src={previewUrl || avatar}
          alt="Ảnh đại diện"
        />
        <span className={styles.helperText}>Nhấp để thay đổi ảnh đại diện</span>
        <span className={styles.hint}>Hỗ trợ định dạng JPG, PNG, GIF.</span>
      </label>
    </div>
  );
}

export default Profile;
