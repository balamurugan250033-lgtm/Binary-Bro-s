# GFG Campus Club Website

A full-stack web application for GeeksforGeeks Campus Club built with React, Node.js, Express, and MongoDB.

## Features

- Responsive landing page with feature cards
- Event management with FullCalendar integration
- Student leaderboard
- User authentication with JWT
- Admin dashboard for coordinators
- DSA resources and roadmap
- Community announcements

## Tech Stack

- **Frontend:** React, TypeScript, Tailwind CSS, React Router, FullCalendar
- **Backend:** Node.js, Express, MongoDB, Mongoose, JWT, bcrypt
- **Deployment:** Vercel (frontend), Render (backend), MongoDB Atlas

## Setup

1. Clone the repository
2. Install dependencies for frontend and backend
3. Set up MongoDB Atlas and update .env
4. Run the application

### Frontend Setup

```bash
npm install
npm run dev
```

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

### Environment Variables

Create `.env` in backend directory:

```
MONGODB_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

## Deployment

### Frontend (Vercel)

1. Push code to GitHub
2. Connect Vercel to GitHub repo
3. Deploy

### Backend (Render)

1. Push backend code to GitHub
2. Connect Render to GitHub repo
3. Set environment variables
4. Deploy

### Database (MongoDB Atlas)

1. Create cluster
2. Get connection string
3. Whitelist IP addresses
4. Update .env

## Usage

- Register/Login as student or coordinator
- View and register for events
- Check leaderboard
- Access resources
- Contact the club

## Contributing

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
