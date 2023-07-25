"use client";
import { useState, createContext } from "react";

export const ModalContext = createContext({
  isModalOpen: false,
  setModalOpen: (open: boolean) => {},
});

function ModalContextProvider({ children }: { children: React.ReactNode }) {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ isModalOpen, setModalOpen }}>
      {children}
    </ModalContext.Provider>
  );
}

export default ModalContextProvider;
