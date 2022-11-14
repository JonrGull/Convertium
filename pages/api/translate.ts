import { TranslationServiceClient } from "@google-cloud/translate";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const credentials = JSON.parse(
    Buffer.from(process.env.GOOGLE_APPLICATION_CREDENTIALS, "base64").toString()
  );

  const translationClient = new TranslationServiceClient({
    credentials,
  });

  const projectId = credentials.project_id;
  const location = "global";

  const request = {
    parent: `projects/${projectId}/locations/${location}`,
    contents: [req.body.text],
    mimeType: "text/plain",
    sourceLanguageCode: "en",
    targetLanguageCode: "ja",
  };

  const [response] = await translationClient.translateText(request);
  const translation = response.translations[0].translatedText;

  res.json(translation);
};
