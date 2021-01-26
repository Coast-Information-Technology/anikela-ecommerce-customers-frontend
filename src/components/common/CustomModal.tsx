import React, { CSSProperties } from "react";
import Icon from "./icon/Icon";

interface ModalProps {
  handleClose?: () => void;
  show: boolean;
  showCloseBtn?: boolean;
  style?: CSSProperties;
  children?: React.ReactNode;
}

// The state of them modal is not handled inside the
// component
export const Modal: React.FC<ModalProps> = ({
  handleClose,
  show,
  children,
  showCloseBtn = true,
  style,
}) => {
  const styles = {
    ...style,
    display: show ? "block" : "none",
  };
  return (
    <div style={styles} className="custom-modal" onTouchStart={handleClose}>
      {showCloseBtn ? (
        <button
          style={{ display: "block" }}
          className="custom-modal__btn"
          type="button"
          onClick={handleClose}
        >
          <Icon icon="close" title="close" fill="rgb(255,255,255)" size={20} />
        </button>
      ) : undefined}
      {children ? (
        <section
          style={show ? { display: "block" } : { display: "none" }}
          className="custom-modal__main"
        >
          {children}
        </section>
      ) : undefined}
    </div>
  );
};
