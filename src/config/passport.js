import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { User } from '../models/index.js';

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `${process.env.BACKEND_URL || 'http://localhost:3001'}/api/auth/google/callback`,
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Check if user already exists
        let user = await User.findOne({
          where: { email: profile.emails[0].value }
        });

        if (user) {
          // Update user info if they log in again
          await user.update({
            name: profile.displayName,
            google_id: profile.id,
            avatar_url: profile.photos[0]?.value
          });
        } else {
          // Create new user
          user = await User.create({
            email: profile.emails[0].value,
            name: profile.displayName,
            google_id: profile.id,
            avatar_url: profile.photos[0]?.value,
            email_verified: true
          });
        }

        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findByPk(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

export default passport;
