"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const router = useRouter();
  const modelRef = useRef(null);
  useEffect(() => {
    if (!modelRef.current?.open) {
      modelRef.current.showModal();
    }
  }, []);

  function onHide() {
    router.back();
  }
  return createPortal(
    <dialog onClose={onHide} ref={modelRef} className="rounded-md border ">
      <span onClick={onHide} className="flex justify-end cursor-pointer">
        <Image src="/xmark.svg" alt="close" width={30} height={30} />
      </span>
      {children}
    </dialog>,
    document.getElementById("modal-content")
  );
};

export default Modal;
