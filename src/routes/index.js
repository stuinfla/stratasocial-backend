import express from 'express';
import { authenticateToken } from '../middleware/auth.middleware.js';
import { registerUser, loginUser, getCurrentUser, updateCurrentUser, googleAuth, googleCallback } from '../controllers/auth.controller.js';
import { invokeLLM, generateImage } from '../controllers/llm.controller.js';
import {
  socialPostController,
  postIterationController,
  companyController,
  socialMediaStrategyController,
  strategyConversationController,
  postPerformanceController,
  trendingTopicsController,
  algorithmLearningController,
  socialMediaScoreController,
  localListingController
} from '../controllers/entity.controller.js';

const router = express.Router();

// Auth routes (public)
router.post('/auth/register', registerUser);
router.post('/auth/login', loginUser);

// Google OAuth routes
router.get('/auth/google', googleAuth);
router.get('/auth/google/callback', googleCallback);

// Auth routes (protected)
router.get('/auth/me', authenticateToken, getCurrentUser);
router.patch('/auth/me', authenticateToken, updateCurrentUser);

// LLM integration routes (protected)
router.post('/integrations/invoke-llm', authenticateToken, invokeLLM);
router.post('/integrations/generate-image', authenticateToken, generateImage);

// Helper function to create entity routes
function createEntityRoutes(path, controller) {
  router.post(`/entities/${path}`, authenticateToken, controller.create.bind(controller));
  router.get(`/entities/${path}/:id`, authenticateToken, controller.findById.bind(controller));
  router.get(`/entities/${path}`, authenticateToken, controller.filter.bind(controller));
  router.patch(`/entities/${path}/:id`, authenticateToken, controller.update.bind(controller));
  router.delete(`/entities/${path}/:id`, authenticateToken, controller.delete.bind(controller));
}

// Entity routes (all protected)
createEntityRoutes('social-posts', socialPostController);
createEntityRoutes('post-iterations', postIterationController);
createEntityRoutes('companies', companyController);
createEntityRoutes('social-media-strategies', socialMediaStrategyController);
createEntityRoutes('strategy-conversations', strategyConversationController);
createEntityRoutes('post-performance', postPerformanceController);
createEntityRoutes('trending-topics', trendingTopicsController);
createEntityRoutes('algorithm-learning', algorithmLearningController);
createEntityRoutes('social-media-scores', socialMediaScoreController);
createEntityRoutes('local-listings', localListingController);

export default router;
