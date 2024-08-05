"use client"
import useModal from "@/custom-hooks/useModal";
import { HTMLAttributes } from "react";
import Modal from "./Modal";

interface IProps extends HTMLAttributes<HTMLDivElement> {
  icon: JSX.Element | string;
  title: string;
  isModal?: boolean;
  modalContents?: React.ReactNode;
}

export default function PrimaryCard({
  icon,
  title,
  className,
  isModal = false,
  modalContents,
  ...rest
}: IProps) {
  const { openModal, modalOpen, closeModal } = useModal();

  return (
    <>
      <div
        {...rest}
        className={`rounded-md bg-bgGradient flex items-center p-2 border-brightBorder border-[1px] cursor-pointer gap-2 w-full  h-[58px] transition-all duration-500 ease-in-out`}
        onClick={isModal ? openModal : undefined}
      >
        <div> {icon}</div>
        <div className="text-white text-sm">{title}</div>
      </div>
      {isModal &&
        (modalOpen ? (
          <Modal title={title} icon={icon} closeModalHandler={closeModal}>
            {modalContents}
          </Modal>
        ) : null)}
    </>
  );
}
