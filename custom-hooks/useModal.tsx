import { useState } from "react";

export default function useModal() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModalButton = () => {
    setModalOpen(false);
  };

  const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    if (!target.closest(".modal-content")) {
      setModalOpen(false);
      console.log(modalOpen);
    }
  };

  return { modalOpen, openModal, closeModal, closeModalButton };
}
