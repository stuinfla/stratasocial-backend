import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const PostIteration = sequelize.define('PostIteration', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  post_id: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'social_posts',
      key: 'id'
    }
  },
  iteration_number: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  post_content: {
    type: DataTypes.TEXT
  },
  virality_score: {
    type: DataTypes.FLOAT
  },
  evaluator_feedback: {
    type: DataTypes.TEXT
  },
  relevance_score: {
    type: DataTypes.FLOAT
  },
  relevance_feedback: {
    type: DataTypes.TEXT
  },
  brand_voice_score: {
    type: DataTypes.FLOAT
  },
  brand_voice_feedback: {
    type: DataTypes.TEXT
  },
  improvements_made: {
    type: DataTypes.TEXT
  }
}, {
  tableName: 'post_iterations',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

export default PostIteration;
