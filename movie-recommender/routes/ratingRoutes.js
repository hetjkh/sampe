import express from 'express';
import { requireAuth } from '../config/middleware.js';
import { rateMedia, getUserRatings, getRatingsByScore } from '../controllers/ratingController.js';

const router = express.Router();

router.use(requireAuth);

router.post('/', rateMedia);
router.get('/', getUserRatings);
router.get('/grouped', getRatingsByScore);

export default router;
