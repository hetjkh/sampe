import express from 'express';
import { requireAuth } from '../config/middleware.js';
import { createPlaylist, getUserPlaylists, addToPlaylist, removeFromPlaylist } from '../controllers/playlistController.js';

const router = express.Router();

router.use(requireAuth);

router.post('/', createPlaylist);
router.get('/', getUserPlaylists);
router.post('/:playlistId/items', addToPlaylist);
router.delete('/:playlistId/items/:itemId', removeFromPlaylist);

export default router;
