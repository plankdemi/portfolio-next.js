import AnotherContainer from "./anotherContainer";
import axios from "axios";
import clientPromise from "../../lib/mongodb";

// const API_ENDPOINT = "api";

// const getAbsoluteURL = (relativeURL: String) => {
//   const vercelURL =
//     process.env.NEXT_PUBLIC_VERCEL_URL1 || process.env.NEXT_PUBLIC_VERCEL_URL2;
//   return `${vercelURL}${relativeURL}`;
// };

export default async function FetchDatabaseItems(props: any) {
  // const absoluteURL = getAbsoluteURL(API_ENDPOINT);
  // const response = await axios.get(absoluteURL);

  // if (response.status === 200) {
  //   const projects = response.data;
  //   const filteredProjects = projects.filter(
  //     (project: any) => project.type === props.type
  //   );

  //   return <AnotherContainer projects={filteredProjects}></AnotherContainer>;
  // } else {
  //   console.log("Error fetching projects");
  // }.

  const client = await clientPromise;
  const db = client.db("Portfolio");

  const projects = await db.collection("Projects").find().toArray();

  const filteredProjects = projects.filter(
    (project: any) => project.type === props.type
  );

  return <AnotherContainer projects={filteredProjects}></AnotherContainer>;
}
