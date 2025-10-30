import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const SocialPost = sequelize.define('SocialPost', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  company_id: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'companies',
      key: 'id'
    }
  },
  platform: {
    type: DataTypes.STRING,
    allowNull: false
  },
  input_content: {
    type: DataTypes.TEXT
  },
  final_post_text: {
    type: DataTypes.TEXT
  },
  final_score: {
    type: DataTypes.FLOAT
  },
  image_url: {
    type: DataTypes.STRING
  },
  iteration_count: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'pending'
  },
  relevance_summary: {
    type: DataTypes.TEXT
  },
  relevance_keywords: {
    type: DataTypes.JSONB,
    defaultValue: []
  },
  created_date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'social_posts',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

export default SocialPost;
