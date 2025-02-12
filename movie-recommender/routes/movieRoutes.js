import express from 'express';
import { getRandomMedia, getMediaReviews, getRecommendations } from '../controllers/movieController.js';

const router = express.Router();

router.get('/random', getRandomMedia);
router.get('/:mediaId/reviews', getMediaReviews);
router.get('/:mediaId/recommendations', getRecommendations);

export default router;