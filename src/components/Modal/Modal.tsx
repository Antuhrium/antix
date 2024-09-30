import { ReactNode } from "react";
import styles from "./Modal.module.scss";
import ReactDOM from "react-dom";

export interface ModalProps {
  visible?: boolean;
  onClose?: () => void;
  children: ReactNode;
}

export const Modal = ({ visible = false, onClose, children }: ModalProps) => {
  if (!visible) return null;

  return ReactDOM.createPortal(
    <div className={styles.wrapper} onClick={() => onClose && onClose()}>
      {children}
    </div>,
    document.body
  );
};
