import { createShortUrl, getLongUrl } from '../services/urlService.js';

// Controller for URL shortening and retrieval
export const shortenUrl = async (req, res, next) => {
  try {
    const { originalUrl } = req.body;
    const shortUrl = await createShortUrl(originalUrl);
    res.status(201).json({ shortUrl });
  } catch (error) {
    next(error);
  }
};

// Controller to redirect the original URL from a short URL
export const getOriginalUrl = async (req, res, next) => {
  try {
    const { shortCode } = req.params;
    const originalUrl = await getLongUrl(shortCode);
    if (originalUrl) {
      res.status(200).json({ originalUrl });
    } else {
      res.status(404).json({ message: 'URL not found' });
    }
  } catch (error) {
    next(error);
  }
};
