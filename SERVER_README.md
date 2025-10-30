# StrataSocial Backend Server

Express.js + PostgreSQL + Sequelize API for social media strategy management.

## Quick Start

### Development Setup

```bash
# Install dependencies
npm install

# Configure environment
cp .env.example .env
# Edit .env with your local database credentials

# Start development server
npm run dev
```

The server runs on `http://localhost:3001` by default.

### Production Deployment

See [DEPLOYMENT_GUIDE.md](../DEPLOYMENT_GUIDE.md) and [DEPLOYMENT_CHECKLIST.md](../DEPLOYMENT_CHECKLIST.md) in the root directory.

---

## Environment Variables

### Required for Development
```
DB_HOST=localhost
DB_PORT=5432
DB_NAME=stratasocial
DB_USER=postgres
DB_PASSWORD=your_password

JWT_SECRET=your_jwt_secret
OPENAI_API_KEY=your_openai_key
FRONTEND_URL=http://localhost:5173
```

### Optional
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASSWORD=your_app_password

AWS_ACCESS_KEY_ID=your_key
AWS_SECRET_ACCESS_KEY=your_secret
AWS_REGION=us-east-1
AWS_S3_BUCKET=bucket_name
```

---

## Project Structure

```
server/
├── src/
│   ├── index.js                 # Application entry point
│   ├── config/
│   │   ├── database.js          # Database configuration
│   │   └── passport.js          # Authentication strategy
│   ├── models/
│   │   ├── User.js
│   │   ├── Company.js
│   │   ├── SocialPost.js
│   │   ├── PostIteration.js
│   │   ├── SocialMediaStrategy.js
│   │   ├── StrategyConversation.js
│   │   ├── PostPerformance.js
│   │   ├── TrendingTopics.js
│   │   ├── AlgorithmLearning.js
│   │   ├── SocialMediaScore.js
│   │   └── LocalListing.js
│   ├── routes/
│   │   └── index.js             # Route definitions
│   ├── controllers/             # Business logic
│   ├── middleware/              # Custom middleware
│   └── utils/
│       └── migrate.js           # Database migration script
├── .env.example                 # Environment template
├── .env.production              # Production environment config
├── Dockerfile                   # Docker configuration
├── railway.json                 # Railway deployment config
└── package.json
```

---

## Available Scripts

```bash
# Start development server with auto-reload
npm run dev

# Start production server
npm start

# Run database migrations
npm run db:migrate
```

---

## API Endpoints

All endpoints are prefixed with `/api`.

### Health Check
```
GET /health
→ Returns: {"status":"ok","timestamp":"..."}
```

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user

### Companies
- `GET /api/companies` - List all companies
- `POST /api/companies` - Create new company
- `GET /api/companies/:id` - Get company details
- `PUT /api/companies/:id` - Update company
- `DELETE /api/companies/:id` - Delete company

### Social Posts
- `GET /api/posts` - List all posts
- `POST /api/posts` - Create new post
- `GET /api/posts/:id` - Get post details
- `PUT /api/posts/:id` - Update post
- `DELETE /api/posts/:id` - Delete post

### Strategies
- `GET /api/strategies` - List all strategies
- `POST /api/strategies` - Create new strategy
- `GET /api/strategies/:id` - Get strategy details
- `PUT /api/strategies/:id` - Update strategy

### Performance Data
- `GET /api/performance` - Get performance metrics
- `POST /api/performance` - Log performance data

---

## Database Schema

The application uses PostgreSQL with Sequelize ORM. Key tables:

- **users** - User accounts
- **companies** - Business entities
- **social_posts** - Social media content
- **post_iterations** - Post version history
- **social_media_strategies** - Strategic plans
- **strategy_conversations** - AI conversation history
- **post_performance** - Performance metrics
- **trending_topics** - Trending content
- **algorithm_learning** - ML training data
- **social_media_scores** - Engagement scores
- **local_listings** - Business listings

---

## Authentication

The API uses JWT (JSON Web Tokens) for authentication.

### Login Flow
1. User sends credentials to `POST /api/auth/login`
2. Server returns JWT token
3. Client includes token in Authorization header: `Bearer <token>`
4. Server validates token on protected routes

### Protected Routes
Routes requiring authentication check for valid JWT in the Authorization header.

---

## Dependencies

### Core
- **express** ^4.18.2 - Web framework
- **sequelize** ^6.35.2 - ORM
- **pg** ^8.11.3 - PostgreSQL adapter

### Security
- **helmet** ^7.1.0 - HTTP headers security
- **bcryptjs** ^2.4.3 - Password hashing
- **jsonwebtoken** ^9.0.2 - JWT tokens
- **passport** ^0.7.0 - Authentication middleware
- **express-validator** ^7.0.1 - Input validation
- **express-rate-limit** ^7.1.5 - Rate limiting

### Features
- **cors** ^2.8.5 - Cross-origin requests
- **openai** ^4.24.1 - AI integration
- **multer** ^1.4.5-lts.1 - File uploads
- **nodemailer** ^6.9.7 - Email sending
- **aws-sdk** ^2.1524.0 - AWS services
- **dotenv** ^16.3.1 - Environment variables

---

## Local Development

### Prerequisites
- Node.js 18+
- PostgreSQL 12+
- npm or yarn

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd stratasocial/server
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment file**
   ```bash
   cp .env.example .env
   ```

4. **Configure PostgreSQL**
   - Create a database: `createdb stratasocial`
   - Update `.env` with connection details

5. **Start development server**
   ```bash
   npm run dev
   ```

6. **Access the API**
   - Base URL: `http://localhost:3001`
   - API: `http://localhost:3001/api`
   - Health: `http://localhost:3001/health`

---

## Testing

### Manual Testing with cURL
```bash
# Health check
curl http://localhost:3001/health

# Register user
curl -X POST http://localhost:3001/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email":"test@example.com",
    "password":"securepass",
    "name":"Test User"
  }'

# Login
curl -X POST http://localhost:3001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email":"test@example.com",
    "password":"securepass"
  }'
```

### Using Postman
1. Import API endpoints into Postman
2. Set `{{api_url}}` variable to `http://localhost:3001`
3. Test endpoints with sample data

---

## Deployment

### Deployment Options
1. **Railway.app** (Recommended) - See DEPLOYMENT_GUIDE.md
2. **Render.com** - Similar to Railway
3. **Heroku** - Classic Node.js hosting
4. **AWS EC2** - Self-managed servers
5. **Docker** - Containerized deployment

### Production Checklist
- [ ] Set strong `JWT_SECRET`
- [ ] Configure `FRONTEND_URL` for CORS
- [ ] Set `NODE_ENV=production`
- [ ] Configure SSL/TLS (usually automatic)
- [ ] Set up database backups
- [ ] Configure email service
- [ ] Set up monitoring and logging
- [ ] Enable rate limiting in production

---

## Monitoring

### Logs
- Development: Logs to console
- Production: Send to centralized logging service (e.g., LogDNA)

### Metrics to Monitor
- Response times (target < 200ms for API calls)
- Error rates (target < 0.1%)
- Database connection pool usage
- Memory and CPU usage
- Request volume

### Health Checks
```bash
# API health
curl https://api.example.com/health

# Database connection
Included in application startup logs
```

---

## Performance Optimization

### Database
- Connection pooling (configured in database.js)
- Index optimization on frequently queried fields
- Query optimization using Sequelize include options

### Application
- Rate limiting enabled
- CORS headers configured
- Compression middleware (consider adding)
- Caching strategies (consider implementing)

### Deployment
- Docker layer caching
- Multi-stage builds
- Production-only dependencies

---

## Troubleshooting

### Database Connection Fails
```bash
# Check PostgreSQL is running
psql -U postgres -c "SELECT 1"

# Verify connection string
echo $DATABASE_URL

# Test connection
psql $DATABASE_URL -c "SELECT 1"
```

### Port Already in Use
```bash
# Change PORT in .env or use:
PORT=3002 npm run dev
```

### Module Not Found
```bash
# Clear and reinstall
rm -rf node_modules
npm install
```

### JWT Errors
- Ensure JWT_SECRET is set
- Check token expiration
- Verify Authorization header format: `Bearer <token>`

---

## Security Best Practices

1. ✅ **Environment Variables** - All secrets in .env, never in code
2. ✅ **Input Validation** - Using express-validator
3. ✅ **SQL Injection Prevention** - Using Sequelize ORM with parameterized queries
4. ✅ **CORS Configuration** - Whitelist specific origins
5. ✅ **Rate Limiting** - Enabled on all endpoints
6. ✅ **Password Hashing** - Using bcryptjs
7. ✅ **HTTP Headers** - Secured with Helmet
8. ✅ **JWT Expiration** - Tokens expire after 7 days

### Additional Recommendations
- Implement refresh token rotation
- Add request logging for audit trails
- Use HTTPS only in production
- Regular security updates
- SQL injection testing
- XSS prevention headers

---

## Contributing

1. Create a feature branch
2. Make changes
3. Test thoroughly
4. Submit pull request

---

## Support

For issues or questions:
1. Check troubleshooting section
2. Review deployment guides
3. Check application logs
4. Consult Railway.app docs

---

**Backend Ready for Production! 🚀**

See [DEPLOYMENT_GUIDE.md](../DEPLOYMENT_GUIDE.md) for deployment instructions.
