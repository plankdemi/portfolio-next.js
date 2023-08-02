import AnotherContainer from "./anotherContainer";
import axios from "axios";

export default async function FetchDatabaseItems(props: any) {
  const response = await axios.get("http://localhost:3000/api");

  if (response.status === 200) {
    const projects = response.data;
    const filteredProjects = projects.filter(
      (project) => project.type === props.type
    );

    return <AnotherContainer projects={filteredProjects}></AnotherContainer>;
  } else {
    console.log("Error fetching projects");
  }
}
