import React, { useRef, useEffect } from "react";

function Modal({ isOpen, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      closeButtonRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div role="dialog" aria-labelledby="dialogTitle">
      <h2 id="dialogTitle">Modal Title</h2>
      <button ref={closeButtonRef} onClick={onClose}>
        Close
      </button>
    </div>
  );
}

export default Modal;
