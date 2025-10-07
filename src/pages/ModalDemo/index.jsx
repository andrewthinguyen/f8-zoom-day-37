import { useState } from "react";
import Modal from "../../components/Modal";
import styles from "./ModalDemo.module.css";

function ModalDemo() {
  const [basicOpen, setBasicOpen] = useState(false);
  const [animatedOpen, setAnimatedOpen] = useState(false);
  const [overlayLockedOpen, setOverlayLockedOpen] = useState(false);
  const [escLockedOpen, setEscLockedOpen] = useState(false);
  const [customOpen, setCustomOpen] = useState(false);
  const [callbackOpen, setCallbackOpen] = useState(false);

  return (
    <section className={styles.wrapper}>
      <h1 className={styles.heading}>Modal Playground</h1>
      <p className={styles.description}>
        Thử nghiệm các biến thể của component Modal dưới đây.
      </p>

      <div className={styles.grid}>
        <article className={styles.card}>
          <h2>Basic Modal</h2>
          <button className={styles.trigger} onClick={() => setBasicOpen(true)}>
            Open Basic Modal
          </button>
          <Modal isOpen={basicOpen} onRequestClose={() => setBasicOpen(false)}>
            <h3>Basic Modal</h3>
            <p>Modal cơ bản với behavior mặc định.</p>
          </Modal>
        </article>

        <article className={styles.card}>
          <h2>Modal with Animation</h2>
          <button
            className={styles.trigger}
            onClick={() => setAnimatedOpen(true)}
          >
            Open Animated Modal
          </button>
          <Modal
            isOpen={animatedOpen}
            onRequestClose={() => setAnimatedOpen(false)}
            closeTimeOutMS={300}
            bodyOpenClassName="modal-open"
            htmlOpenClassName="modal-open"
          >
            <h3>Animated Modal</h3>
            <p>Đóng với animation dài 300ms.</p>
          </Modal>
        </article>

        <article className={styles.card}>
          <h2>Lock Overlay Close</h2>
          <button
            className={styles.trigger}
            onClick={() => setOverlayLockedOpen(true)}
          >
            Open Overlay Locked Modal
          </button>
          <Modal
            isOpen={overlayLockedOpen}
            onRequestClose={() => setOverlayLockedOpen(false)}
            shouldCloseOnOverlayClick={false}
          >
            <h3>Overlay Locked</h3>
            <p>Click overlay không đóng modal này.</p>
          </Modal>
        </article>

        <article className={styles.card}>
          <h2>Lock ESC Close</h2>
          <button
            className={styles.trigger}
            onClick={() => setEscLockedOpen(true)}
          >
            Open ESC Locked Modal
          </button>
          <Modal
            isOpen={escLockedOpen}
            onRequestClose={() => setEscLockedOpen(false)}
            shouldCloseOnEsc={false}
          >
            <h3>ESC Locked</h3>
            <p>Nhấn ESC không đóng modal này.</p>
          </Modal>
        </article>

        <article className={styles.card}>
          <h2>Custom Class</h2>
          <button
            className={styles.trigger}
            onClick={() => setCustomOpen(true)}
          >
            Open Custom Styled Modal
          </button>
          <Modal
            isOpen={customOpen}
            onRequestClose={() => setCustomOpen(false)}
            className={styles.customModal}
            overlayClassName={styles.customOverlay}
          >
            <h3>Custom Styled Modal</h3>
            <p>Modal với className và overlay riêng.</p>
          </Modal>
        </article>

        <article className={styles.card}>
          <h2>Callbacks</h2>
          <button
            className={styles.trigger}
            onClick={() => setCallbackOpen(true)}
          >
            Open Callback Modal
          </button>
          <Modal
            isOpen={callbackOpen}
            onRequestClose={() => setCallbackOpen(false)}
            onAfterOpen={() => console.log("Modal đã mở (callback)")}
            onAfterClose={() => console.log("Modal đã đóng (callback)")}
          >
            <h3>Callback Modal</h3>
            <p>
              Kiểm tra console để theo dõi onAfterOpen và onAfterClose khi bạn
              mở/đóng modal.
            </p>
          </Modal>
        </article>
      </div>
    </section>
  );
}

export default ModalDemo;
