"use client";

import { useContext } from "react";
import { ModalContext } from "./modal-context";

export default function Body({ children }: { children: React.ReactNode }) {
  const context = useContext(ModalContext);

  return (
    <body className={context.isModalOpen ? "overflow-hidden" : ""}>
      {children}
    </body>
  );
}
