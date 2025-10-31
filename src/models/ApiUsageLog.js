import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const ApiUsageLog = sequelize.define('ApiUsageLog', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  user_id: {
    type: DataTypes.UUID,
    allowNull: false
  },
  endpoint: {
    type: DataTypes.STRING,
    allowNull: false
  },
  method: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status_code: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  response_time_ms: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  tokens_used: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  cost_usd: {
    type: DataTypes.DECIMAL(10, 6),
    allowNull: true
  },
  integration_type: {
    type: DataTypes.STRING,
    allowNull: true
  },
  error_message: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  tableName: 'api_usage_logs',
  timestamps: true,
  underscored: true
});

export default ApiUsageLog;
