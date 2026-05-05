# Portfolio (Full Stack)

React frontend + FastAPI backend with MongoDB. Built as a single Docker deploy for Render.

## Tech Stack
- Frontend: React (CRACO), Tailwind
- Backend: FastAPI, Uvicorn
- Database: MongoDB

## Project Structure
- frontend/: React app
- backend/: FastAPI app
- Dockerfile: builds frontend and serves it from the backend

## Environment Variables
Create the following variables in your environment or Render dashboard:
- MONGO_URL
- DB_NAME
- CORS_ORIGINS (optional, comma-separated, default: "*")

## Local Development
### Backend
```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn server:app --reload --host 0.0.0.0 --port 8000
```

### Frontend
```bash
cd frontend
yarn install
yarn start
```

Frontend runs at http://localhost:3000 and the API at http://localhost:8000/api.

## Docker (Local)
```bash
docker build -t portfolio-app .
docker run -p 8000:8000 \
	-e MONGO_URL="mongodb://..." \
	-e DB_NAME="..." \
	-e CORS_ORIGINS="*" \
	portfolio-app
```

## Deploy on Render
1) Create a new Web Service from this repo and select "Docker".
2) Set the environment variables: MONGO_URL, DB_NAME, and optionally CORS_ORIGINS.
3) Deploy. The service will listen on port 8000.

## Notes
- The backend serves the built frontend from `/` in production.
- API routes are under `/api`.
