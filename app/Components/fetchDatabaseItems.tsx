import AnotherContainer from "./anotherContainer";

export default function FetchDatabaseItems(props:any) {
  //receives info through props for database connection
  //those items are passed as a prameter object to the another container

  const projects = [
    {
      name: "Portfolio Website",
      type: "APPLICATION",
      imageLink: "/images/images/project10_1.PNG",
      gitHubLink: "https://github.com/plankdemi/PortoflioWebsite",
      demoLink: "https://vladislavas.dev/",
    },
    {
      name: "Basic Calculator",
      type: "PRACTICE",
      imageLink: "/images/images/project2_1.PNG",
      gitHubLink: "https://github.com/plankdemi/AngularCalculator",
      demoLink: "https://basicangularcalculator.netlify.app/",
    },

    {
      name: "Basic Weather APP",
      type: "PRACTICE",
      imageLink: "/images/images/project3_1.PNG",
      gitHubLink: "https://github.com/plankdemi/weathersearcherapp",
      demoLink: "https://basicsimpleweatherapp.netlify.app/",
    },

    {
      name: "Random Quote Generator APP",
      type: "PRACTICE",
      imageLink: "/images/images/project4_1.PNG",
      gitHubLink: "https://github.com/plankdemi/Random-Quote-Generator",
      demoLink: "https://genericrandomquotegenerator.netlify.app/",
    },

    {
      name: "Rock Paper Scizors APP",
      type: "GAME",
      imageLink: "/images/images/project5_1.PNG",
      gitHubLink: "https://github.com/plankdemi/Rock-Paper-Scizors",
      demoLink: "https://rockpaperscizors.netlify.app/",
    },

    {
      name: "A simple to do APP",
      type: "PRACTICE",
      imageLink: "/images/images/project6_1.PNG",
      gitHubLink: "https://github.com/plankdemi/Simple-TODO-APP",
      demoLink: "https://genericsimpletodoapp.netlify.app/",
    },
  ];

  const filteredProjects = projects.filter(
    (project) => project.type === props.type
  );

  return <AnotherContainer projects={filteredProjects}></AnotherContainer>;
}
