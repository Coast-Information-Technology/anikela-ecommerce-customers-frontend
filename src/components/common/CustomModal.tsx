import React, { useEffect } from "react";
import Icon from "./icon/Icon";

interface ModalProps {
  handleClose?: () => void;
  show: boolean;
  showCloseBtn?: boolean;
  children?: React.ReactNode;
}

// The state of them modal is not handled inside the
// component
export const Modal: React.FC<ModalProps> = ({
  handleClose,
  show,
  children,
  showCloseBtn = true,
}) => {
  // remove scrolling from <body></body> when show is true
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [show]);

  return (
    <div
      style={show ? { display: "block" } : { display: "none" }}
      className="custom-modal"
    >
      <button
        style={showCloseBtn ? { display: "block" } : { display: "none" }}
        className="custom-modal__btn"
        type="button"
        onClick={handleClose}
      >
        <Icon icon="close" title="close" fill="rgb(255,255,255)" size={20} />
      </button>
      <section className="custom-modal__main">{children}</section>
    </div>
  );
};
