import { TranslationServiceClient } from "@google-cloud/translate";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const translationClient = new TranslationServiceClient();

  const projectId = process.env.GOOGLE_PROJECT_ID;
  const location = "global";

  async function translateText() {
    const request = {
      parent: `projects/${projectId}/locations/${location}`,
      contents: [req.body.text],
      mimeType: "text/plain",
      sourceLanguageCode: "en",
      targetLanguageCode: "ja",
    };

    const [response] = await translationClient.translateText(request);

    res.json(response.translations[0].translatedText);
  }
  translateText();
};
