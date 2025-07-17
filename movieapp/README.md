# Movie App

A modern React application for discovering and searching movies using the TMDB (The Movie Database) API. Built with Vite for fast development and optimized performance.

## Features

- **Movie Discovery**: Browse popular movies from TMDB
- **Search Functionality**: Search through thousands of movies with real-time results
- **Responsive Design**: Modern UI that works on desktop and mobile devices
- **Loading States**: Smooth loading indicators during API calls
- **Error Handling**: User-friendly error messages

## Technologies Used

- React 19
- Vite
- TailwindCSS
- TMDB API

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- TMDB API key

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd movieapp
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your TMDB API key:
```
VITE_TMDB_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

## API Setup

To use this app, you'll need a TMDB API key:

1. Visit [TMDB](https://www.themoviedb.org/)
2. Create an account and request an API key
3. Add your API key to the `.env` file as `VITE_TMDB_API_KEY`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/
│   ├── Search.jsx
│   ├── Spinner.jsx
│   └── MovieCard.jsx
├── App.jsx
└── main.jsx
```


