import Container from "./container";
import { Fragment } from "react";
import Link from "next/link";
export default function AnotherContainer(props: any) {
  //receives item through props as objects and sen

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* eslint-disable-next-line react/jsx-key */}
      {props.projects.map((project: any) => (
        <div key={project.name}>
          <Container
            title={project.name}
            imageLink={project.imageLink}
            navigation="/Projects/Practice-Projects"
            className="bg-slate-800 text-slate-100 m-4 pt-4 rounded-3xl inline-table w-11/12"
          ></Container>
          <div className="flex flex-col md:flex-row  md:justify-around bg-slate-800 mx-4 py-4 w-11/12 rounded-b-3xl">
            <Link
              target="_blank"
              href="https://github.com/plankdemi/AngularCalculator"
              className="my-2 md:my-0 text-slate-800 bg-slate-100 rounded-full py-2 px-3 w-1/2 md:w-auto mx-auto hover:bg-slate-950 hover:text-slate-50"
            >
              GitHub
            </Link>
            <Link
              target="_blank"
              href={project.demoLink}
              className="my-2 md:my-0 text-slate-800 bg-slate-100 rounded-full py-2 px-3 w-1/2 md:w-auto mx-auto hover:bg-slate-950 hover:text-slate-50"
            >
              DEMO
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
