"use client";

import HeaderContextMenuMobile from "./headerContextMenu";
import HeaderNav from "./headerNav";
import HeaderTitle from "./headerTitle";
import HeaderModalNav from "./headerModalNav";
import { useState, createContext, useContext } from "react";
import { ModalContext } from "../Contexts/modal-context";

export default function Header({ className }: { className?: string }) {
  const modalContext = useContext(ModalContext);

  function headerModalNavClickHandler() {
    modalContext.setModalOpen((set: boolean) => !set);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <header className={!modalContext.isModalOpen ? "sticky top-0" : ""}>
      {modalContext.isModalOpen && (
        <section className="absolute w-full h-full bg-slate-700 text-slate-100 px-4 my-4 text-3xl z-40 pt-14 overflow-hidden">
          <HeaderModalNav></HeaderModalNav>
        </section>
      )}

      <section className={`${className} relative`}>
        <HeaderTitle></HeaderTitle>
        <HeaderContextMenuMobile
          clickHandler={headerModalNavClickHandler}
        ></HeaderContextMenuMobile>
        <HeaderNav></HeaderNav>
      </section>
    </header>
  );
}
