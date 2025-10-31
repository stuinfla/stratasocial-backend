# StrataSocial Backend

Node.js + Express + PostgreSQL backend for StrataSocial application.

## Deployment to Render

### Quick Deploy

1. Go to https://render.com/
2. Click "New +" → "Web Service"
3. Connect this GitHub repository: `stuinfla/stratasocial-backend`
4. Configure:
   - **Name**: stratasocial-backend
   - **Runtime**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free

### Environment Variables

Add these in Render dashboard:

```
NODE_ENV=production
GOOGLE_CLIENT_ID=your_google_client_id_from_console
GOOGLE_CLIENT_SECRET=your_google_client_secret_from_console
FRONTEND_URL=https://stratasocial-qc2b6xwco-stuart-kerrs-projects.vercel.app
BACKEND_URL=https://stratasocial-backend.onrender.com
JWT_SECRET=generate_secure_32_char_random_string
PORT=3001
```

**Get OAuth credentials from**: https://console.cloud.google.com/apis/credentials
**Generate JWT Secret**: `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`

Note: `BACKEND_URL` should be set to your actual Render deployment URL after deployment completes.

### Database

Render will automatically create a PostgreSQL database based on `render.yaml` configuration.

## After Deployment

1. Copy your Render deployment URL (e.g., `https://stratasocial-backend-xxxx.onrender.com`)
2. Update the `BACKEND_URL` environment variable with this URL
3. Add the callback URL to Google OAuth:
   - Go to https://console.cloud.google.com/
   - Navigate to OAuth 2.0 Client credentials
   - Add `https://stratasocial-backend-xxxx.onrender.com/api/auth/google/callback` to Authorized redirect URIs
4. Update frontend Vercel environment variables:
   - `VITE_API_URL`: `https://stratasocial-backend-xxxx.onrender.com/api`
   - `VITE_BACKEND_URL`: `https://stratasocial-backend-xxxx.onrender.com`

## Local Development

```bash
npm install
npm run dev
```

Server runs on http://localhost:3001

## Tech Stack

- Node.js + Express
- PostgreSQL with Sequelize ORM
- Passport.js for OAuth
- JWT authentication
- Google OAuth 2.0

