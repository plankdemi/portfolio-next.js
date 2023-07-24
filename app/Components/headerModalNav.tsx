
import { Dispatch } from "redux";

import Link from "next/link";

export default function HeaderModalNav(props) {
  return (
    <nav>
      <ul>
        <li
          className="text-center py-4 my-4 rounded-2xl bg-slate-800"
          onClick={() => {
            props.setModalOpen(
              (set) => !set
            );
          }}
        >
          <Link href="/">Home</Link>
        </li>
        <li
          className="text-center py-4 my-4 rounded-2xl bg-slate-800"
          onClick={() => {
            props.setModalOpen((set) => !set);
          }}
        >
          <Link href="/Projects">Projects</Link>
        </li>
      </ul>
    </nav>
  );
}
