import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Company = sequelize.define('Company', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  company_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  website_url: {
    type: DataTypes.STRING
  },
  business_type: {
    type: DataTypes.STRING
  },
  market_scope: {
    type: DataTypes.ENUM('local', 'regional', 'national', 'international')
  },
  target_audience: {
    type: DataTypes.TEXT
  },
  services_products: {
    type: DataTypes.JSONB,
    defaultValue: []
  },
  brand_personality: {
    type: DataTypes.TEXT
  },
  location_info: {
    type: DataTypes.JSONB,
    defaultValue: {}
  },
  languages_supported: {
    type: DataTypes.JSONB,
    defaultValue: []
  },
  recommended_platforms: {
    type: DataTypes.JSONB,
    defaultValue: []
  },
  platform_reasoning: {
    type: DataTypes.TEXT
  },
  analysis_confidence: {
    type: DataTypes.INTEGER
  },
  additional_questions_needed: {
    type: DataTypes.JSONB,
    defaultValue: []
  },
  strategic_insights: {
    type: DataTypes.TEXT
  },
  analysis_status: {
    type: DataTypes.STRING,
    defaultValue: 'pending'
  },
  onboarding_completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  created_by: {
    type: DataTypes.STRING
  }
}, {
  tableName: 'companies',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

export default Company;
