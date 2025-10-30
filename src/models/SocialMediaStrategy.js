import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const SocialMediaStrategy = sequelize.define('SocialMediaStrategy', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  company_id: {
    type: DataTypes.UUID,
    allowNull: false
  },
  strategy_version: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'draft'
  },
  platforms: {
    type: DataTypes.JSONB,
    defaultValue: []
  },
  content_pillars: {
    type: DataTypes.JSONB,
    defaultValue: []
  },
  posting_frequency: {
    type: DataTypes.JSONB,
    defaultValue: {}
  },
  target_audience_details: {
    type: DataTypes.TEXT
  },
  tone_and_voice: {
    type: DataTypes.TEXT
  },
  key_messages: {
    type: DataTypes.JSONB,
    defaultValue: []
  },
  hashtag_strategy: {
    type: DataTypes.TEXT
  },
  content_calendar_notes: {
    type: DataTypes.TEXT
  }
}, {
  tableName: 'social_media_strategies',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

export default SocialMediaStrategy;
