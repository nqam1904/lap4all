"use client";
import { CloseIcon } from "@/components/icons/svgIcons";
// import Button from "../button";
import { Button } from "antd";
import styles from "./popup.module.scss";

interface IProps {
  title?: string;
  width?: string;
  confirmBtnText?: string;
  cancelBtnText?: string;
  onClose: () => void;
  onCancel: () => void;
  onSubmit: () => void;
  isLoading: boolean;
  content: React.ReactNode;
  isDelete?: boolean;
}

const Popup = ({
  title,
  width,
  confirmBtnText,
  cancelBtnText,
  onClose,
  onCancel,
  onSubmit,
  isLoading,
  content,
  isDelete = false,
}: IProps) => {
  return (
    <div className={styles.popup}>
      <div className={styles.background} onClick={onClose} />
      <div className={styles.window} style={width ? { width: width } : {}}>
        {title && (
          <div className={styles.header}>
            {title}
            <button onClick={onClose}>
              <CloseIcon width={12} />
            </button>
          </div>
        )}
        {content}
        <div className={styles.windowControl}>
          <Button
            loading={isLoading}
            onClick={onSubmit}
            color={isDelete ? "danger" : "primary"}
            variant="solid"
          >
            {confirmBtnText || "OK"}
          </Button>
          <Button onClick={onCancel}>Hủy bỏ</Button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
