function registerOutsideClick(key, handler) {
  const selector = `[data-dropdown="${key}"]`;

  const handlePointerDown = (event) => {
    if (event.target.closest(selector)) {
      return;
    }

    handler(event);
  };

  document.addEventListener("mousedown", handlePointerDown);
  document.addEventListener("touchstart", handlePointerDown);

  return () => {
    document.removeEventListener("mousedown", handlePointerDown);
    document.removeEventListener("touchstart", handlePointerDown);
  };
}

export default registerOutsideClick;
