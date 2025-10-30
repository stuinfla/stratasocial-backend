import { register, login, generateToken } from '../services/auth.service.js';
import { User } from '../models/index.js';
import passport from 'passport';

export async function registerUser(req, res) {
  try {
    const { email, password, name } = req.body;
    const result = await register(email, password, name);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function loginUser(req, res) {
  try {
    const { email, password } = req.body;
    const result = await login(email, password);
    res.json(result);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}

export async function getCurrentUser(req, res) {
  try {
    const user = req.user.toJSON();
    delete user.password;
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function updateCurrentUser(req, res) {
  try {
    await req.user.update(req.body);
    const user = req.user.toJSON();
    delete user.password;
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Google OAuth handlers
export function googleAuth(req, res, next) {
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })(req, res, next);
}

export function googleCallback(req, res, next) {
  passport.authenticate('google', { session: false }, async (err, user, info) => {
    try {
      if (err || !user) {
        const errorMessage = err?.message || 'Authentication failed';
        return res.redirect(`${process.env.FRONTEND_URL}?error=${encodeURIComponent(errorMessage)}`);
      }

      // Generate JWT token
      const token = generateToken(user);
      const userJson = user.toJSON();
      delete userJson.password;

      // Redirect to frontend with token
      res.redirect(`${process.env.FRONTEND_URL}?token=${token}&user=${encodeURIComponent(JSON.stringify(userJson))}`);
    } catch (error) {
      res.redirect(`${process.env.FRONTEND_URL}?error=${encodeURIComponent(error.message)}`);
    }
  })(req, res, next);
}
