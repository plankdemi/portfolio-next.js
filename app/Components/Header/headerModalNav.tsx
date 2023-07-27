import { Dispatch } from "redux";
import { useContext } from "react";
import { ModalContext } from "../Contexts/modal-context";

import Link from "next/link";

export default function HeaderModalNav() {
  const context = useContext(ModalContext);

  return (
    <nav>
      <ul>
        <Link href="/">
          <li
            className="text-center py-4 my-4 rounded-2xl bg-slate-800"
            onClick={() => {
              context.setModalOpen(!context.isModalOpen);
            }}
          >
            Home
          </li>
        </Link>

        <Link href="/Projects">
          <li
            className="text-center py-4 my-4 rounded-2xl bg-slate-800"
            onClick={() => {
              context.setModalOpen(!context.isModalOpen);
            }}
          >
            Projects
          </li>
        </Link>
      </ul>
    </nav>
  );
}
