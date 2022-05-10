import { connectToDatabase } from "../../lib/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();
  // console.log(req.method);

  switch (req.method) {
    case "GET":
      console.log("GET");
      const userEntries = await db
        .collection("ConvertiumData")
        .find({})
        .limit(20)
        .toArray();

      res.json(userEntries);
      break;

    case "POST":
      console.log("POST");
      break;
  }
};
