# Netflix Clone

A Netflix-style front-end web application built with **React.js**. This project uses **The Movie Database (TMDB) API** to fetch and display movies, TV shows, documentaries, trending titles, and top-rated content in a modern streaming-platform layout.

---

## GitHub Description

A React-based Netflix UI clone using TMDB API, React Router, Axios, dynamic movie rows, profile selection, and YouTube trailer playback.

---

## Project Overview

This project is a front-end Netflix clone developed using React.js. It includes a profile selection screen, navigation between different content pages, dynamic movie and TV show sections, Netflix-style banners, and trailer playback functionality.

The application fetches real movie and TV data from the TMDB API and displays content in horizontal rows similar to Netflix. Users can browse categories such as Netflix Originals, Trending Now, Top Rated, Action Movies, TV Shows, Movies, and Documentaries.

This project was created to practice React components, API integration, routing, hooks, state management, dynamic rendering, and responsive UI design.

---

## Features

- Netflix-style user interface
- Profile selection screen
- Dynamic navigation bar
- Home, TV Shows, Movies, and Documentaries pages
- TMDB API integration
- Axios-based API requests
- Dynamic banner section
- Scrollable movie and TV show rows
- YouTube trailer playback on poster click
- React Router page navigation
- Reusable React components
- Responsive front-end layout
- Movie poster and backdrop rendering
- Category-based content browsing

---

## Technologies Used

- React.js
- JavaScript
- CSS3
- React Router DOM
- Axios
- TMDB API
- React YouTube
- Movie Trailer package
- GitHub Pages / Firebase hosting support

---

## Project Structure

```text
netflix-clone-main/
│
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
│
├── src/
│   ├── components/
│   │   ├── Banner.js
│   │   ├── Banner.css
│   │   ├── DocumentariesBanner.js
│   │   ├── MoviesBanner.js
│   │   ├── TVBanner.js
│   │   ├── Nav.js
│   │   ├── Nav.css
│   │   ├── Row.js
│   │   └── Row.css
│   │
│   ├── pages/
│   │   ├── Login.js
│   │   ├── Login.css
│   │   ├── Landing.js
│   │   ├── Landing.css
│   │   ├── TVShows.js
│   │   ├── TVShows.css
│   │   ├── Movies.js
│   │   ├── Movies.css
│   │   └── Documentaries.js
│   │
│   ├── App.js
│   ├── axios.js
│   ├── requests.js
│   ├── index.js
│   ├── index.css
│   └── reportWebVitals.js
│
├── package.json
├── package-lock.json
├── firebase.json
├── .firebaserc
├── .gitignore
└── README.md
```

---

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/netflix-clone.git
```

### 2. Open the Project Folder

```bash
cd netflix-clone
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm start
```

The project will run locally at:

```text
http://localhost:3000
```

---

## API Setup

This project uses **The Movie Database (TMDB) API**.

To use the project properly:

1. Create an account on TMDB.
2. Generate your API key.
3. Add your API key in the project.

Example:

```javascript
const API_KEY = "your_tmdb_api_key";
```

### Important Security Note

Do not expose your real API key publicly in a GitHub repository. A better method is to use an environment variable.

Example:

```env
REACT_APP_TMDB_API_KEY=your_tmdb_api_key
```

Then use it in your code like this:

```javascript
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
```

---

## Available Pages

The application includes the following pages:

```text
Profile Selection
Home
TV Shows
Movies
Documentaries
```

---

## Main Components

### Login Page

The login page allows users to select a profile before entering the main Netflix clone interface.

### Navigation Bar

The navigation bar allows users to move between different pages:

```text
Home
TV Shows
Movies
Documentaries
```

It also displays the selected user profile name and avatar.

### Banner Component

The banner displays a randomly selected movie or TV show with a background image, title, description, and action buttons.

### Row Component

The row component fetches and displays movie or TV show posters in horizontal scrollable sections.

### Trailer Playback

When a user clicks on a movie poster, the project searches for a related trailer and plays it using YouTube integration.

---

## Content Categories

The project includes categories such as:

```text
Netflix Originals
Trending Now
Top Rated
Action Movies
Comedy Movies
Horror Movies
Romance Movies
Documentaries
Only on Netflix
Award-Winning TV Shows
Critically Acclaimed TV Shows
US TV Dramas
International TV Dramas
K-Dramas
Top 10 Movies in Pakistan Today
Hindi-Language Movies
Thriller Movies
Sci-Fi Movies
Popular Documentaries
Top Rated Documentaries
Nature Documentaries
Crime Documentaries
Historical Documentaries
Pakistani Documentaries
Recent Documentaries
```

---

## Available Scripts

### Start Development Server

```bash
npm start
```

### Create Production Build

```bash
npm run build
```

### Run Tests

```bash
npm test
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

Before deploying, update the `homepage` field in `package.json`:

```json
"homepage": "https://your-username.github.io/netflix-clone"
```

---

## Concepts Practiced

This project helped practice the following React and front-end development concepts:

- React components
- React props
- React state management
- React hooks
- useState
- useEffect
- React Router navigation
- API integration
- Axios requests
- Dynamic data rendering
- Conditional rendering
- Component reuse
- CSS styling
- Responsive layout design
- YouTube trailer embedding
- Front-end deployment

---

## Limitations

- This is a front-end clone only.
- It does not include real Netflix authentication.
- It does not include payment or subscription features.
- It does not stream full movies or shows.
- It does not store user data in a database.
- Content depends on TMDB API availability.
- Some movie trailers may not be available.
- The API key should be protected before public deployment.

---

## Future Improvements

- Add real authentication
- Add search functionality
- Add movie detail pages
- Add watchlist feature
- Add loading animations
- Add backend support
- Store user preferences
- Improve mobile responsiveness
- Add error handling for failed API requests
- Hide API key using environment variables
- Add pagination or infinite scrolling
- Add genre filtering

---

## Project Status

The main front-end functionality is complete. The project can be further improved by adding backend features, authentication, search, and user-specific watchlists.

---

## License

This project is created for learning, practice, and portfolio purposes.

---

## Acknowledgement

This project is inspired by the Netflix user interface and uses movie and TV show data from TMDB API.
