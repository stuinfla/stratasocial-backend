import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const PostTemplate = sequelize.define('PostTemplate', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  user_id: {
    type: DataTypes.UUID,
    allowNull: false
  },
  template_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  platform: {
    type: DataTypes.STRING,
    allowNull: false
  },
  template_content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  variables: {
    type: DataTypes.JSON,
    defaultValue: []
  },
  category: {
    type: DataTypes.STRING,
    allowNull: true
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
}, {
  tableName: 'post_templates',
  timestamps: true,
  underscored: true
});

export default PostTemplate;
