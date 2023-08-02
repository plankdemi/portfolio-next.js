import AnotherContainer from "./anotherContainer";
import axios from "axios";

const API_ENDPOINT = "/api";

const getAbsoluteURL = (relativeURL: String) => {
  const vercelURL = process.env.NEXT_PUBLIC_VERCEL_URL;
  return `${vercelURL}${relativeURL}`;
};

export default async function FetchDatabaseItems(props: any) {
  const absoluteURL = getAbsoluteURL(API_ENDPOINT);
  const response = await axios.get(absoluteURL);

  if (response.status === 200) {
    const projects = response.data;
    const filteredProjects = projects.filter(
      (project: any) => project.type === props.type
    );

    return <AnotherContainer projects={filteredProjects}></AnotherContainer>;
  } else {
    console.log("Error fetching projects");
  }
}
