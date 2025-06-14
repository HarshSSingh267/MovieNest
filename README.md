# MovieNest 🎬

A sleek movie search app built with React + TMDB + Appwrite.  
Users can search for movies and see what's trending based on real-time searches.

## 🔥 Features

- Live search using TMDB API
- Trending movies based on search count (Appwrite DB)
- Responsive & clean UI
- Fast performance with debounced search

## 🛠️ Tech Stack

- React + Vite
- Appwrite (Database)
- Tailwind CSS
- TMDB API
- Vercel (Deployment)

## 🧠 How It Works

- User searches a movie → hits TMDB API
- First result gets stored in Appwrite DB with a `count`
- Trending section shows movies sorted by `count` descending

## 🚀 Live Demo

👉 [movie-nest-lake-omega.vercel.app](https://movie-nest-lake-omega.vercel.app)

## 📦 Installation

```bash
git clone https://github.com/HarshSSingh267/MovieNest.git
cd MovieNest
npm install
npm run dev
