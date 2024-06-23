const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const tokenStore = require("../utils/tokenStore");
const { startPolling } = require("../controllers/gmailController");

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

/**
 * Configures the Google OAuth 2.0 strategy for Passport.
 *
 * @function
 * @param {string} accessToken - The access token provided by Google.
 * @param {string} refreshToken - The refresh token provided by Google.
 * @param {Object} profile - The user's profile information provided by Google.
 * @param {Function} done - The callback to indicate completion.
 */

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.CALLBACK_URL,
    },
    (accessToken, refreshToken, profile, done) => {
      profile.tokens = { accessToken, refreshToken };
      tokenStore.accessToken = accessToken;
      tokenStore.refreshToken = refreshToken;
      startPolling();
      return done(null, profile);
    }
  )
);

module.exports = passport;
