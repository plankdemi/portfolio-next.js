import Container from "../Components/container";

export default function Projects() {
  return (
    <ul className="md:flex md:justify-between">
      <li className="md:inline-block md:w-[29%] bg-slate-800 text-slate-100 m-4 pt-4 rounded-3xl">
        <Container
          title="FRONTEND APPLICATIONS"
          imageLink="/images/images/Shutterstock_2261449337.png"
          navigation="/Projects/Front-End-Applications"
        ></Container>
      </li>
      <li className="md:inline-block md:w-[29%] bg-slate-800 text-slate-100 m-4 pt-4 rounded-3xl ">
        <Container
          title="PRACTICE PROJECTS"
          imageLink="/images/images/pankaj-patel-_SgRNwAVNKw-unsplash.jpg"
          navigation="/Projects/Practice-Projects"
        ></Container>
      </li>
      <li className="md:inline-block md:w-[29%] bg-slate-800 text-slate-100 m-4 pt-4 rounded-3xl ">
        <Container
          title="GAMES"
          imageLink="/images/images/Shutterstock_1777292972.png"
          navigation="/Projects/Games"
        ></Container>
      </li>
    </ul>
  );
}
