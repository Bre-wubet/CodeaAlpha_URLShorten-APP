import Url from "../model/Url.js";
import { generateShortCode } from "../utils/generateShortCode.js";

// Service for URL shortening and retrieval
const BASE_URL = process.env.BASE_URL || "http://localhost:3000";

export const createShortUrl = async (originalUrl) => {
  const shortCode = generateShortCode();
  const shortUrl = `${BASE_URL}/${shortCode}`;

  const url = new Url({
    originalUrl,
    shortUrl
  });

  await url.save();
  return shortUrl;
};

//to redirect to the original URL
export const getLongUrl = async (shortCode) => {
  const url = await Url.findOne({ 
    shortUrl: new RegExp(`/${shortCode}$`) 
  });
  return url ? url.originalUrl : null;
};
