import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const AlgorithmLearning = sequelize.define('AlgorithmLearning', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  company_id: {
    type: DataTypes.UUID
  },
  platform: {
    type: DataTypes.STRING,
    allowNull: false
  },
  pattern_description: {
    type: DataTypes.TEXT
  },
  confidence_score: {
    type: DataTypes.INTEGER
  },
  success_rate: {
    type: DataTypes.FLOAT
  },
  sample_size: {
    type: DataTypes.INTEGER
  },
  pattern_data: {
    type: DataTypes.JSONB,
    defaultValue: {}
  }
}, {
  tableName: 'algorithm_learning',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

export default AlgorithmLearning;
