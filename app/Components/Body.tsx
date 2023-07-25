"use client";

import { useContext } from "react";
import { ModalContext } from "./Contexts/modal-context";

export default function Body({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const context = useContext(ModalContext);

  return (
    <body
      className={
        context.isModalOpen ? `overflow-hidden ${className}` : className
      }
    >
      {children}
    </body>
  );
}
