import sequelize from '../config/database.js';
import User from './User.js';
import Company from './Company.js';
import SocialPost from './SocialPost.js';
import PostIteration from './PostIteration.js';
import SocialMediaStrategy from './SocialMediaStrategy.js';
import StrategyConversation from './StrategyConversation.js';
import PostPerformance from './PostPerformance.js';
import TrendingTopics from './TrendingTopics.js';
import AlgorithmLearning from './AlgorithmLearning.js';
import SocialMediaScore from './SocialMediaScore.js';
import LocalListing from './LocalListing.js';

// Define associations
Company.hasMany(SocialPost, { foreignKey: 'company_id' });
SocialPost.belongsTo(Company, { foreignKey: 'company_id' });

SocialPost.hasMany(PostIteration, { foreignKey: 'post_id' });
PostIteration.belongsTo(SocialPost, { foreignKey: 'post_id' });

Company.hasMany(SocialMediaStrategy, { foreignKey: 'company_id' });
SocialMediaStrategy.belongsTo(Company, { foreignKey: 'company_id' });

Company.hasMany(StrategyConversation, { foreignKey: 'company_id' });
StrategyConversation.belongsTo(Company, { foreignKey: 'company_id' });

Company.hasMany(PostPerformance, { foreignKey: 'company_id' });
PostPerformance.belongsTo(Company, { foreignKey: 'company_id' });

Company.hasMany(TrendingTopics, { foreignKey: 'company_id' });
TrendingTopics.belongsTo(Company, { foreignKey: 'company_id' });

Company.hasMany(AlgorithmLearning, { foreignKey: 'company_id' });
AlgorithmLearning.belongsTo(Company, { foreignKey: 'company_id' });

Company.hasMany(SocialMediaScore, { foreignKey: 'company_id' });
SocialMediaScore.belongsTo(Company, { foreignKey: 'company_id' });

Company.hasMany(LocalListing, { foreignKey: 'company_id' });
LocalListing.belongsTo(Company, { foreignKey: 'company_id' });

export {
  sequelize,
  User,
  Company,
  SocialPost,
  PostIteration,
  SocialMediaStrategy,
  StrategyConversation,
  PostPerformance,
  TrendingTopics,
  AlgorithmLearning,
  SocialMediaScore,
  LocalListing
};
