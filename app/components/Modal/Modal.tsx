// components/Modal/Modal.tsx
import React from "react";
import styles from "./Modal.module.scss";
import { useModalStore } from "../../store/useModalStore";

const Modal = () => {
  const { isOpen, content, closeModal } = useModalStore();

  // isOpen이 false일 경우에는 null을 반환하여 모달을 렌더링하지 않음
  if (!isOpen) return null;

  return (
    <div className={styles.modalback} onClick={closeModal}>
      {/** e.stopPropagation은 이벤트가 상위 엘리먼트에 전달되지 않도록 막아주는 역할 */}
      <div className={styles.modalcontent} onClick={(e) => e.stopPropagation()}>
        {content}
        <button onClick={closeModal}>모달 닫기</button>
      </div>
    </div>
  );
};

export default Modal;
