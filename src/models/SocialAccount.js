import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const SocialAccount = sequelize.define('SocialAccount', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  user_id: {
    type: DataTypes.UUID,
    allowNull: false
  },
  company_id: {
    type: DataTypes.UUID,
    allowNull: true
  },
  platform: {
    type: DataTypes.STRING,
    allowNull: false
  },
  account_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  account_handle: {
    type: DataTypes.STRING,
    allowNull: true
  },
  access_token: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  refresh_token: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  token_expires_at: {
    type: DataTypes.DATE,
    allowNull: true
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  profile_data: {
    type: DataTypes.JSON,
    defaultValue: {}
  }
}, {
  tableName: 'social_accounts',
  timestamps: true,
  underscored: true
});

export default SocialAccount;
