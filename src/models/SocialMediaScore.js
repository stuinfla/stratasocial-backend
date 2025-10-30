import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const SocialMediaScore = sequelize.define('SocialMediaScore', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  company_id: {
    type: DataTypes.UUID,
    allowNull: false
  },
  overall_score: {
    type: DataTypes.INTEGER
  },
  consistency_score: {
    type: DataTypes.INTEGER
  },
  content_quality_score: {
    type: DataTypes.INTEGER
  },
  platform_strategy_score: {
    type: DataTypes.INTEGER
  },
  business_impact_score: {
    type: DataTypes.INTEGER
  },
  growth_trajectory_score: {
    type: DataTypes.INTEGER
  },
  detailed_analysis: {
    type: DataTypes.TEXT
  },
  top_3_improvements: {
    type: DataTypes.JSONB,
    defaultValue: []
  },
  predicted_roi: {
    type: DataTypes.STRING
  },
  estimated_website_traffic: {
    type: DataTypes.INTEGER
  },
  follower_growth_rate: {
    type: DataTypes.FLOAT
  },
  total_posts: {
    type: DataTypes.INTEGER
  },
  viral_posts_count: {
    type: DataTypes.INTEGER
  },
  average_viral_score: {
    type: DataTypes.FLOAT
  },
  created_date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'social_media_scores',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

export default SocialMediaScore;
