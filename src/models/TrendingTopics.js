import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const TrendingTopics = sequelize.define('TrendingTopics', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  company_id: {
    type: DataTypes.UUID
  },
  topic: {
    type: DataTypes.STRING,
    allowNull: false
  },
  platform: {
    type: DataTypes.STRING
  },
  business_relevance_score: {
    type: DataTypes.INTEGER
  },
  humor_potential: {
    type: DataTypes.INTEGER
  },
  trending_duration: {
    type: DataTypes.STRING
  },
  source: {
    type: DataTypes.STRING
  }
}, {
  tableName: 'trending_topics',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

export default TrendingTopics;
