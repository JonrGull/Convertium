import { connectToDatabase } from "../../lib/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();

  switch (req.method) {
    case "GET":
      const userEntries = await db
        .collection("ConvertiumData")
        .find({})
        .limit(20)
        .toArray();

      res.json(userEntries);
      break;

    case "POST":
      try {
        const userEntry = await db.collection("ConvertiumData").insertOne({
          input: req.body.input,
          createdAt: new Date(),
        });

        res.json(userEntry);
      } catch (error) {}

      break;
  }
};
