"use client";
import images from "@/app/constants/images";
import Modal from "@/app/utils/Modal";
import useModal from "@/custom-hooks/useModal";
import Image from "next/image";

export default function WorkExperienceCard({
  name,
  logo,
  children,
}: {
  name: string;
  logo: string;
  children: React.ReactNode;
}) {
  const { openModal, modalOpen, closeModal } = useModal();
  return (
    <>
      <div
        className="border-brightBorder border-[1px] flex items-center gap-2 h-[50px] cursor-pointer rounded-md p-4 text-sm w-[280px]"
        onClick={openModal}
      >
        <div>
          <Image src={logo} width={36} height={36} alt={name} />
        </div>
        <div className="flex items-center gap-2 justify-between w-full">
          <div className="text-sm max-sm:text-xs">{name}</div>
          <div>{images.View}</div>
        </div>
      </div>
      {modalOpen ? (
        <Modal title={name} icon={logo} closeModalHandler={closeModal}>
          {children}
        </Modal>
      ) : null}
    </>
  );
}
