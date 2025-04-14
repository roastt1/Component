"use client";
import { useModalStore } from "@/app/store/useModalStore";
import Modal from "./Modal";

export default function Home() {
  const openModal = useModalStore((state) => state.openModal);
  const content = useModalStore();

  const handleOpen = () => {
    console.log(content);
    openModal(
      <div>
        <h2>모달 제목</h2>
        <p>여기 모달 내용이 들어갑니다!</p>
      </div>
    );
  };

  return (
    <>
      <button onClick={handleOpen}>모달 열기</button>
      <Modal />
    </>
  );
}
