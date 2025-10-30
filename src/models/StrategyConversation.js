import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const StrategyConversation = sequelize.define('StrategyConversation', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  company_id: {
    type: DataTypes.UUID,
    allowNull: false
  },
  user_message: {
    type: DataTypes.TEXT
  },
  ai_response: {
    type: DataTypes.TEXT
  },
  conversation_step: {
    type: DataTypes.STRING
  },
  metadata: {
    type: DataTypes.JSONB,
    defaultValue: {}
  }
}, {
  tableName: 'strategy_conversations',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

export default StrategyConversation;
