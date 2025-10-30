import jwt from 'jsonwebtoken';
import { User } from '../models/index.js';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';

export async function register(email, password, name) {
  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) {
    throw new Error('User already exists');
  }

  const user = await User.create({ email, password, name });
  const token = generateToken(user);

  return {
    user: sanitizeUser(user),
    token
  };
}

export async function login(email, password) {
  const user = await User.findOne({ where: { email } });
  if (!user) {
    throw new Error('Invalid credentials');
  }

  const isValidPassword = await user.comparePassword(password);
  if (!isValidPassword) {
    throw new Error('Invalid credentials');
  }

  const token = generateToken(user);

  return {
    user: sanitizeUser(user),
    token
  };
}

export async function getUserFromToken(token) {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findByPk(decoded.userId);
    if (!user) {
      throw new Error('User not found');
    }
    return sanitizeUser(user);
  } catch (error) {
    throw new Error('Invalid token');
  }
}

export function generateToken(user) {
  return jwt.sign(
    { userId: user.id, email: user.email },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  );
}

function sanitizeUser(user) {
  const userData = user.toJSON();
  delete userData.password;
  return userData;
}

export default {
  register,
  login,
  getUserFromToken
};
