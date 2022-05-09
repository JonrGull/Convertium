import { connectToDatabase } from "../../lib/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();

  const userNames = await db
    .collection("convertJP")
    .find({})
    .limit(20)
    .toArray();

  res.json(userNames);
};
