import { connectToDatabase } from "../../lib/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();

  switch (req.method) {
    case "POST":
      try {
        const userEntry = await db.collection("ConvertiumData").insertOne({
          input: req.body.input,
          createdAt: new Date(),
        });

        res.json(userEntry);
      } catch (error) {
        res.status(500).json({ error });
      }

      break;
  }
};
