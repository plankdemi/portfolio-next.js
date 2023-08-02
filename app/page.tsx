import Image from "next/image";


import Link from "next/link";
import {
  TbBrandCSharp,
  TbBrandNextjs,
  TbBrandTailwind,
  TbBrandReact,
  TbBrandUnity,
  TbBrandHtml5,
  TbBrandTypescript,
} from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";

export default function Home() {



  return (
    <main>
      <section className="px-8 flex flex-col content-center">
        <div className="md:w-3/4 md:items-center text-center md:text-left flex flex-col md:flex-row md:justify-center md:mx-auto">
          <Image
            src="/images/images/unnamed.jpg"
            alt="myphoto"
            width="3024"
            height="4032"
            className="w-48 object-cover rounded-full block mx-auto mt-4 "
            loading="lazy"
          />
          <ul className="flex flex-col h-full justify-between md:ml-8">
            <li className="pb-8">
              <h2 className="text-center text-2xl px-8 mt-4 rounded-full bg-slate-800 text-slate-100 p-4">
                About me
              </h2>
              <br></br>
              <p>
                As an aspiring front-end web developer, I'm excited about the
                opportunity to apply my skills and creativity to develop
                engaging and user-friendly websites. With a strong foundation in
                HTML, CSS, and JavaScript, I'm eager to gain real-world
                experience and expand my skill set in the industry.
                <br></br>I have experience building websites and web
                applications through online courses, coding challenges, and
                personal projects. I have learned to create responsive layouts,
                incorporate user-friendly interfaces, and develop clean and
                maintainable code. I am passionate about using technology to
                solve problems and make a positive impact.
                <br></br>I am a dedicated learner and am constantly seeking to
                enhance my skills and knowledge in the field. I am enthusiastic
                about collaborating with others and believe that teamwork is
                essential to creating high-quality products. In addition to
                front-end web development, I am interested in game development.
                I am excited to explore this field and continue to learn and
                grow as a developer.
                <br></br>
                If you are looking for a motivated and hardworking developer
                with a passion for creating engaging digital experiences, please
                do not hesitate to connect with me. I would love to discuss how
                I can contribute to your team and grow as a developer.
              </p>
            </li>
            <li className="text-center md:text-right">
              <TbBrandHtml5 className="inline w-10 h-10 hover:"></TbBrandHtml5>
              <TbBrandTailwind className="inline w-10 h-10"></TbBrandTailwind>
              <TbBrandTypescript className="inline w-10 h-10"></TbBrandTypescript>
              <TbBrandReact className="inline w-10 h-10"></TbBrandReact>
              <TbBrandNextjs className="inline w-10 h-10"></TbBrandNextjs>
              <TbBrandUnity className="inline w-10 h-10"></TbBrandUnity>
              <TbBrandCSharp className="inline w-10 h-10  "></TbBrandCSharp>
              <SiCplusplus className="inline w-10 h-10"></SiCplusplus>
              <FaJava className="inline w-10 h-10"></FaJava>
            </li>

            <br></br>
            <Link href="/cv/My CV 2023-07.pdf" target="_blank">
              <strong className="underline">CLICK HERE FOR MY CV</strong>
            </Link>
          </ul>
        </div>
      </section>
    </main>
  );
}
