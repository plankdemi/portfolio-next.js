import Link from "next/link";

export default function HeaderNav() {
  return (
    <nav className="hidden md:contents">
      <ul className="flex justify-center items-center gap-x-4">
        <li className="hover:text-slate-500">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-slate-500">
          <Link href="/Projects">Projects</Link>
        </li>
      </ul>
    </nav>
  );
}
