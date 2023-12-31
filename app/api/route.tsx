import clientPromise from "../../lib/mongodb";
import cors from "cors";

export async function GET(req: Request) {
  const client = await clientPromise;
  const db = client.db("Portfolio");

  const movies = await db.collection("Projects").find().toArray();

  const json = JSON.stringify(movies);

  const response = new Response(json, {});

  return response;
}
