# StrataSocial Backend Server

This is the backend API server for StrataSocial, replacing the base44 dependency.

## Quick Start

### 1. Install Dependencies
```bash
cd server
npm install
```

### 2. Set Up Database
Make sure you have PostgreSQL installed and running.

Create a database:
```bash
createdb stratasocial
```

### 3. Configure Environment
Copy the example environment file and update with your values:
```bash
cp .env.example .env
```

Required environment variables:
- `OPENAI_API_KEY` - Your OpenAI API key for LLM functionality
- `DB_NAME`, `DB_USER`, `DB_PASSWORD` - PostgreSQL credentials
- `JWT_SECRET` - A secure random string for JWT token signing

### 4. Start the Server
```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

The server will run on `http://localhost:3001` by default.

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (authenticated)
- `PATCH /api/auth/me` - Update current user (authenticated)

### Entities
All entity endpoints follow the pattern:
- `POST /api/entities/{entity-name}` - Create
- `GET /api/entities/{entity-name}/:id` - Get by ID
- `GET /api/entities/{entity-name}?where={}&orderBy={}&limit={}` - Filter
- `PATCH /api/entities/{entity-name}/:id` - Update
- `DELETE /api/entities/{entity-name}/:id` - Delete

Available entities:
- `social-posts`
- `post-iterations`
- `companies`
- `social-media-strategies`
- `strategy-conversations`
- `post-performance`
- `trending-topics`
- `algorithm-learning`
- `social-media-scores`
- `local-listings`

### Integrations
- `POST /api/integrations/invoke-llm` - Invoke LLM (OpenAI)
- `POST /api/integrations/generate-image` - Generate image (DALL-E)

## Database Schema

The database schema matches the original base44 structure with 11 main tables. The schema is automatically created/updated when the server starts in development mode.

## Migration from base44

The frontend has been updated to use this API instead of base44. The API client (`src/api/client.js`) provides the same interface as the base44 SDK, making it a drop-in replacement.
