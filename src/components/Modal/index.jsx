import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./Modal.module.css";

function Modal({
  isOpen = false,
  children,
  shouldCloseOnOverlayClick = true,
  shouldCloseOnEsc = true,
  closeTimeOutMS = 0,
  onAfterOpen,
  onAfterClose,
  onRequestClose = () => {},
  bodyOpenClassName,
  htmlOpenClassName,
  overlayClassName,
  className,
}) {
  const [isClosing, setIsClosing] = useState(false);
  const [wasOpen, setWasOpen] = useState(false);

  const handleRequestClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onRequestClose();
      setIsClosing(false);
    }, closeTimeOutMS);
  };

  useEffect(() => {
    if (isOpen && !wasOpen) {
      setWasOpen(true);
      setIsClosing(false);
      return;
    }

    if (!isOpen && wasOpen) {
      onAfterClose?.();
      setWasOpen(false);
    }
  }, [isOpen, onAfterClose, wasOpen]);

  const handleOpenAnimationEnd = (e) => {
    if (e.target !== e.currentTarget) return;
    if (!isOpen || isClosing) return;
    onAfterOpen?.();
  };

  useEffect(() => {
    if (!shouldCloseOnEsc) return undefined;

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
  }, [isOpen, shouldCloseOnEsc]);

  useEffect(() => {
    if (bodyOpenClassName && isOpen) {
      document.body.classList.add(bodyOpenClassName);
    }

    return () => {
      if (bodyOpenClassName) {
        document.body.classList.remove(bodyOpenClassName);
      }
    };
  }, [bodyOpenClassName, isOpen]);

  useEffect(() => {
    if (htmlOpenClassName && isOpen) {
      document.documentElement.classList.add(htmlOpenClassName);
    }

    return () => {
      if (htmlOpenClassName) {
        document.documentElement.classList.remove(htmlOpenClassName);
      }
    };
  }, [htmlOpenClassName, isOpen]);

  if (!isOpen && !isClosing) return null;

  return (
    <div className={clsx(styles.modal, isClosing && styles.closing)}>
      <div
        className={clsx(styles.content, className)}
        onAnimationEnd={handleOpenAnimationEnd}
      >
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
