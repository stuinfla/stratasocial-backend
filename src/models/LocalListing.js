import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const LocalListing = sequelize.define('LocalListing', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  company_id: {
    type: DataTypes.UUID,
    allowNull: false
  },
  platform_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  listing_url: {
    type: DataTypes.STRING
  },
  listing_status: {
    type: DataTypes.STRING,
    defaultValue: 'not_listed'
  },
  priority: {
    type: DataTypes.STRING
  },
  estimated_traffic: {
    type: DataTypes.INTEGER
  },
  notes: {
    type: DataTypes.TEXT
  }
}, {
  tableName: 'local_listings',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

export default LocalListing;
