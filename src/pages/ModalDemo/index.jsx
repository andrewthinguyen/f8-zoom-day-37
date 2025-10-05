import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./ModalDemo.module.css";

function Modal({
  isOpen = false,
  children,
  shouldCloseOnOverlayClick = true,
  shouldCloseOnEsc = true,
  closeTimeOutMS = 0,
  onAfterOpen,
  onAfterClose,
  onRequestClose,
  bodyOpenClassName,
  htmlOpenClassName,
  overlayClassName,
  className,
}) {
  const [isClosing, setIsClosing] = useState(false);

  const handleRequestClose = () => {
    setIsClosing(true);
    setTimeout(onRequestClose, closeTimeOutMS);
  };

  useEffect(() => {
    if (isOpen) {
      setIsClosing(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!shouldCloseOnEsc) return;
    const handleClose = (event) => {
      if (event.code === "Escape") {
        handleRequestClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keyup", handleClose);
    }

    return () => {
      document.removeEventListener("keyup", handleClose);
    };
  }, [handleRequestClose, isOpen, onRequestClose, shouldCloseOnEsc]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add(bodyOpenClassName);
    }

    return () => {
      document.body.classList.remove(bodyOpenClassName);
    };
  }, [bodyOpenClassName, isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.documentElement.classList.add(htmlOpenClassName);
    }

    return () => {
      document.documentElement.classList.remove(htmlOpenClassName);
    };
  }, [htmlOpenClassName, isOpen]);

  if (!isOpen) return null;

  return (
    <div className={clsx(styles.modal, isClosing && styles.closing)}>
      <div className={clsx(styles.content, className)}>
        <button className={styles.closeBtn} onClick={handleRequestClose}>
          &times;
        </button>
        <div className={styles.body}>{children}</div>
      </div>
      <div
        className={clsx(styles.overlay, overlayClassName)}
        onClick={() => {
          if (shouldCloseOnOverlayClick) {
            handleRequestClose();
          }
        }}
      />
    </div>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onRequestClose: PropTypes.func,
  onAfterOpen: PropTypes.func,
  onAfterClose: PropTypes.func,
  closeTimeOutMS: PropTypes.number,
  overlayClassName: PropTypes.string,
  className: PropTypes.string,
  bodyOpenClassName: PropTypes.string,
  htmlOpenClassName: PropTypes.string,
  shouldCloseOnOverlayClick: PropTypes.bool,
  shouldCloseOnEsc: PropTypes.bool,
};

export default Modal;
