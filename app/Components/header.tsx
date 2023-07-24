"use client";

import HeaderContextMenuMobile from "./headerContextMenu";
import HeaderNav from "./headerNav";
import HeaderTitle from "./headerTitle";
import HeaderModalNav from "./headerModalNav";
import { useState } from "react";

export default function Header() {
  const [isModalOpen, setModalOpen] = useState(true);

  function headerModalNavClickHandler() {
    setModalOpen((set) => !set);
  }

  return (
    <header>
      {isModalOpen && (
        <section className="absolute w-full h-full bg-slate-700 text-slate-100 px-4 my-4 text-3xl z-40 pt-14 overflow-hidden">
          <HeaderModalNav setModalOpen={setModalOpen}></HeaderModalNav>
        </section>
      )}

      <section className="flex justify-between relative items-center px-4 my-4 shadow-md text-3xl bg-slate-800 text-slate-100 py-2 z-50 ">
        <HeaderTitle></HeaderTitle>
        <HeaderContextMenuMobile
          clickHandler={headerModalNavClickHandler}
        ></HeaderContextMenuMobile>
        <HeaderNav></HeaderNav>
      </section>
    </header>
  );
}
