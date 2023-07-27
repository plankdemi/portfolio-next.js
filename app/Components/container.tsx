import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";

export default function Container(props) {
  return (
    <Link href={props.navigation}>
      <div className={props.className ?? ""}>
        <h1 className="text-center pb-4">{props.title}</h1>
        <Image
          src={props.imageLink}
          alt="myphoto"
          width="3860"
          height="1440"
          className="h-48 w-full md:h-96 md:w-full object-fit"
          loading="lazy"
        />
      </div>
    </Link>
  );
}
