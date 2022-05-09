import { connectToDatabase } from "../../lib/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();
  // console.log(req.method);

  //switch case for get and post
  switch (req.method) {
    case "GET":
      
      console.log("GET");
      const userNames = await db
        .collection("convertJP")
        .find({})
        .limit(20)
        .toArray();

      res.json(userNames);
      break;

    case "POST":
      console.log("POST");
      break;
  }
};
