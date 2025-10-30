import {
  SocialPost,
  PostIteration,
  Company,
  SocialMediaStrategy,
  StrategyConversation,
  PostPerformance,
  TrendingTopics,
  AlgorithmLearning,
  SocialMediaScore,
  LocalListing
} from '../models/index.js';
import { Op } from 'sequelize';

// Generic CRUD operations for all entities
export class EntityController {
  constructor(Model) {
    this.Model = Model;
  }

  async create(req, res) {
    try {
      const entity = await this.Model.create(req.body);
      res.status(201).json(entity);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async findById(req, res) {
    try {
      const entity = await this.Model.findByPk(req.params.id);
      if (!entity) {
        return res.status(404).json({ error: 'Not found' });
      }
      res.json(entity);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async filter(req, res) {
    try {
      const { where, orderBy, limit } = req.query;

      const queryOptions = {};

      if (where) {
        queryOptions.where = typeof where === 'string' ? JSON.parse(where) : where;
      }

      if (orderBy) {
        // Handle ordering like "-created_date" means DESC
        const isDesc = orderBy.startsWith('-');
        const field = isDesc ? orderBy.substring(1) : orderBy;
        queryOptions.order = [[field, isDesc ? 'DESC' : 'ASC']];
      }

      if (limit) {
        queryOptions.limit = parseInt(limit);
      }

      const entities = await this.Model.findAll(queryOptions);
      res.json(entities);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const entity = await this.Model.findByPk(req.params.id);
      if (!entity) {
        return res.status(404).json({ error: 'Not found' });
      }

      await entity.update(req.body);
      res.json(entity);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const entity = await this.Model.findByPk(req.params.id);
      if (!entity) {
        return res.status(404).json({ error: 'Not found' });
      }

      await entity.destroy();
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

// Create controllers for each entity
export const socialPostController = new EntityController(SocialPost);
export const postIterationController = new EntityController(PostIteration);
export const companyController = new EntityController(Company);
export const socialMediaStrategyController = new EntityController(SocialMediaStrategy);
export const strategyConversationController = new EntityController(StrategyConversation);
export const postPerformanceController = new EntityController(PostPerformance);
export const trendingTopicsController = new EntityController(TrendingTopics);
export const algorithmLearningController = new EntityController(AlgorithmLearning);
export const socialMediaScoreController = new EntityController(SocialMediaScore);
export const localListingController = new EntityController(LocalListing);
