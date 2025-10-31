import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const CalendarEvent = sequelize.define('CalendarEvent', {
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
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  event_type: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'post'
  },
  scheduled_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'scheduled'
  },
  related_post_id: {
    type: DataTypes.UUID,
    allowNull: true
  }
}, {
  tableName: 'calendar_events',
  timestamps: true,
  underscored: true
});

export default CalendarEvent;
