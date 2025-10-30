import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const PostPerformance = sequelize.define('PostPerformance', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  company_id: {
    type: DataTypes.UUID,
    allowNull: false
  },
  post_id: {
    type: DataTypes.UUID
  },
  platform: {
    type: DataTypes.STRING
  },
  impressions: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  engagement: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  clicks: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  shares: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  comments: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  likes: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  engagement_rate: {
    type: DataTypes.FLOAT
  },
  posted_date: {
    type: DataTypes.DATE
  }
}, {
  tableName: 'post_performance',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

export default PostPerformance;
