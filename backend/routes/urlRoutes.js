// basic routes for URL shortening service
import express from 'express';
import { shortenUrl, getOriginalUrl } from '../controllers/urlController.js';

const router = express.Router();

// POST /api/urls/shorten
router.post('/shorten', shortenUrl);

// GET /api/urls/:shortCode
router.get('/:shortCode', getOriginalUrl);


export default router;
