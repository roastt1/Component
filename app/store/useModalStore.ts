// stores/modalStore.ts
import { create } from "zustand";

type ModalState = {
  isOpen: boolean;
  content: React.ReactNode;
  openModal: (content: React.ReactNode) => void;
  closeModal: () => void;
};

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false, //모달의 열림 여부
  content: null, //모달의 내용물
  openModal: (content) => set({ isOpen: true, content }), //모달 여는 함수
  closeModal: () => set({ isOpen: false, content: null }), //모달 닫는 함수
}));
