import AnotherContainer from "./anotherContainer";

async function getData() {
  const res = await fetch("srv964.hstgr.io");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function FetchDatabaseItems() {
  //receives info through props for database connection
  //those items are passed as a prameter object to the another container
  const data = await getData();
  console.log(data);
  return <AnotherContainer></AnotherContainer>;
}
