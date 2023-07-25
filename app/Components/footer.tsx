import Link from "next/link";

import { FaDiscord, FaFacebookSquare, FaLinkedin } from "react-icons/fa";

export default function Footer({ className }: { className?: string }) {
  return (
    <footer className={className}>
      <ul className="flex justify-center items-center gap-x-4 min-w-full">
        <li>
          <Link href="https://www.linkedin.com/in/vladislavas-baradulinas-7a79171b3/">
            <FaLinkedin></FaLinkedin>
          </Link>
        </li>
        <li>
          <Link href="https://www.facebook.com/vladas.baradulinas">
            <FaFacebookSquare></FaFacebookSquare>
          </Link>
        </li>
        <li>
          <Link href="https://discord.com/users/444558927388999682">
            <FaDiscord></FaDiscord>
          </Link>
        </li>
      </ul>
    </footer>
  );
}
