import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-between items-center px-4 my-4 shadow-md text-3xl bg-slate-800 text-slate-100 py-2">
      <ul className="flex justify-center items-center gap-x-4 min-w-full">
        <li>
          <Link href="https://www.linkedin.com/in/vladislavas-baradulinas-7a79171b3/">
            <Image
              src="/images/icons/linkedin.png"
              alt="linkedin"
              width="25"
              height="25"
              className="w-10 h-10 !important"
              loading="lazy"
            ></Image>
          </Link>
        </li>
        <li>
          <Link href="https://www.facebook.com/vladas.baradulinas">
            <Image
              src="/images/icons/facebook.png"
              alt="facebook"
              width="25"
              height="25"
              className="w-10 h-10 !important"
              loading="lazy"
            ></Image>
          </Link>
        </li>
        <li>
          <Link href="https://discord.com/users/444558927388999682">
            <Image
              src="/images/icons/discord.png"
              alt="discord"
              width="25"
              height="25"
              className="w-10 h-10 !important"
              loading="lazy"
            ></Image>
          </Link>
        </li>
      </ul>
    </footer>
  );
}
