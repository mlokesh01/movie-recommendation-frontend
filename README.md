# Movie Recommender

A web-based movie recommendation frontend built with React and Vite. The application allows users to select movie preferences and retrieve matching movies from the deployed Spring Boot backend.

## 🚀 Live Application

The frontend is deployed on Vercel.

**Live Application:** https://movie-recommender-lyart.vercel.app/

**Frontend Repository:** https://github.com/mlokesh01/movie-recommendation-frontend.git

**Backend Repository:** https://github.com/mlokesh01/movie-recommendation-backend.git

---

## 🛠️ Tech Stack

### Frontend

* **React** - UI development
* **Vite** - Frontend build tool and development server
* **Tailwind CSS** - Styling and responsive UI
* **React Router** - Client-side routing
* **Axios** - HTTP requests to the backend API
* **Framer Motion** - UI animations
* **JavaScript / JSX** - Application development

### Backend

The frontend communicates with a separately deployed backend built with:

* **Java**
* **Spring Boot**
* **Spring Data JPA / Hibernate**
* **REST APIs**

**Production Backend:** https://movie-recommender-1hpp.onrender.com

**Backend Repository:** https://github.com/mlokesh01/movie-recommendation-backend.git

### Database

The backend retrieves movie data from the production database:

* **TiDB Cloud Serverless**

### Data Sources

The movie dataset used by the application was assembled by combining information obtained from two external sources:

* **IMDb** - Movie metadata such as movie name, release year, genre, cast, director, and related movie information.
* **TMDB API** - Movie information such as movie name, release year, poster URL, and trailer URL.

The data from these sources was matched and merged into the application's movie dataset before being stored in the production database.

The frontend does **not** directly query IMDb or TMDB for normal user requests. User requests are sent to the application's Spring Boot backend, which retrieves movie data from TiDB Cloud.

---

## 🏗️ Architecture

```text
                 ┌───────────────────────┐
                 │         IMDb          │
                 │                       │
                 │ Movie metadata        │
                 │ • Name                │
                 │ • Year                │
                 │ • Genre               │
                 │ • Cast                │
                 │ • Director            │
                 │ • Other metadata      │
                 └───────────┬───────────┘
                             │
                             │
                 ┌───────────▼───────────┐
                 │         TMDB API      │
                 │                       │
                 │ • Movie information   │
                 │ • Poster URLs         │
                 │ • Trailer URLs        │
                 └───────────┬───────────┘
                             │
                             │ Data matching
                             │ and merging
                             ▼
                 ┌───────────────────────┐
                 │    Movie Dataset      │
                 │                       │
                 │ Combined movie data   │
                 └───────────┬───────────┘
                             │
                             ▼
                 ┌───────────────────────┐
                 │    TiDB Cloud         │
                 │   Production DB       │
                 └───────────┬───────────┘
                             │
                             ▼
                 ┌───────────────────────┐
                 │   Spring Boot API     │
                 │       Backend         │
                 └───────────┬───────────┘
                             │
                        REST / HTTPS
                             │
                             ▼
                 ┌───────────────────────┐
                 │    React + Vite       │
                 │      Frontend         │
                 └───────────┬───────────┘
                             │
                             ▼
                        Web Browser
```

The frontend and backend are deployed separately:

* **Frontend:** Vercel
* **Backend:** Render
* **Database:** TiDB Cloud Serverless

The application does not make normal user requests directly to IMDb or TMDB. The combined movie dataset is stored in the production database and served through the Spring Boot backend.

---

## ✨ Features

### Movie Discovery

Users can select their movie preferences and retrieve movies matching those preferences.

### Industry Selection

The application supports movie collections based on the available movie-industry data in the backend.

### Movie Filtering

The frontend sends filtering preferences to the backend, including:

* Industry
* Year
* Genre
* Minimum rating

### Results Page

Matching movies are displayed in a responsive grid using reusable movie-card components.

The results page also displays the number of movies returned by the backend.

### Loading State

A dedicated loader is displayed while the frontend is waiting for the backend response.

### Error Handling

If the API request fails or no movies are returned, the application displays a user-friendly "No Matches Found" state and allows the user to return to the previous page.

### Responsive UI

The interface uses Tailwind CSS responsive utilities to adapt the layout to different screen sizes.

### Animations

Framer Motion is used for interface animations, including animated movie-result presentation.

### Client-Side Routing

React Router is used to navigate between application pages without requiring a full browser reload.

---

## 📁 Project Structure

The exact structure can vary as the project evolves, but the frontend is organized around reusable React components, pages, and API services.

```text
movie-recommendation-frontend/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Loader
│   │   └── MovieCard
│   │
│   ├── pages/
│   │   └── Results
│   │
│   ├── services/
│   │   └── api.js
│   │
│   └── ...
│
├── .env
├── .gitignore
├── package.json
├── vercel.json
├── vite.config.js
└── ...
```

> The structure above documents the components and files confirmed during development. Additional files may exist in the repository.

---

## 🔌 Backend Communication

API requests are centralized through the Axios instance in:

```text
src/services/api.js
```

The production backend base URL is configured through a Vite environment variable rather than being hard-coded into the frontend source.

```env
VITE_API_BASE_URL=https://movie-recommender-1hpp.onrender.com
```

The frontend then uses the configured Axios instance to communicate with the Spring Boot backend.

For example, the results page requests filtered movies using an endpoint of the form:

```text
/filter/{industry}
```

with query parameters for:

```text
year
genre
ratingMin
```

The backend processes the request and retrieves the corresponding movie data from TiDB Cloud.

---

## 🔐 Environment Variables

The frontend uses a Vite environment variable for the backend API base URL.

```env
VITE_API_BASE_URL=https://movie-recommender-1hpp.onrender.com
```

### Production

For the deployed application, `VITE_API_BASE_URL` is configured through the Vercel project settings and points to the deployed Spring Boot backend:

```text
https://movie-recommender-1hpp.onrender.com
```

### Local Development

When running the frontend locally, `VITE_API_BASE_URL` can point either to:

1. The deployed backend:

```env
VITE_API_BASE_URL=https://movie-recommender-1hpp.onrender.com
```

2. A locally running backend:

```env
VITE_API_BASE_URL=http://localhost:<backend-port>
```

Replace `<backend-port>` with the port configured for the local Spring Boot application.

### Important

Do **not** commit your local `.env` file if it contains values that should remain outside source control.

For production deployment, the environment variable is configured through the Vercel project settings.

Vite exposes client-side environment variables only when they use the `VITE_` prefix, so anything stored in a `VITE_*` variable should be treated as publicly accessible client-side configuration, not as a secret.

---

## 💻 Local Development

### 1. Clone the repository

Clone the frontend repository:

```bash
git clone https://github.com/mlokesh01/movie-recommendation-frontend.git
cd movie-recommendation-frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure the environment

Create a `.env` file in the project root:

```env
VITE_API_BASE_URL=https://movie-recommender-1hpp.onrender.com
```

The deployed backend can be used directly for frontend development.

If you are running the backend locally, replace the value with the local Spring Boot backend URL.

### 4. Start the development server

```bash
npm run dev
```

Vite will provide the local development URL in the terminal.

---

## 🏭 Production Build

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## ☁️ Deployment

The frontend is deployed on **Vercel** and connected to the GitHub frontend repository.

**Frontend Repository:** https://github.com/mlokesh01/movie-recommendation-frontend.git

The production deployment is configured as a Vite application.

The important production configuration includes:

* Vite framework/preset
* Root directory set to the frontend project root
* `npm run build` as the build command
* `dist` as the build output directory
* `VITE_API_BASE_URL` configured as a production environment variable

Vercel automatically creates a new deployment when changes are pushed to the connected GitHub repository.

The backend is maintained and deployed separately on Render.

**Backend Repository:** https://github.com/mlokesh01/movie-recommendation-backend.git

**Production Backend:** https://movie-recommender-1hpp.onrender.com

---

## 🧭 SPA Routing

Because the application uses client-side routing with React Router, direct navigation to routes such as the results page requires the deployment platform to serve the application entry point for unknown frontend routes.

The project therefore includes:

```text
vercel.json
```

with the required rewrite configuration for the deployed SPA.

This prevents direct navigation to a client-side route from producing a Vercel `404 NOT_FOUND` response.

---

## 🔄 Frontend Request Flow

A typical movie-search request follows this flow:

```text
1. User selects movie preferences
             ↓
2. React stores the selected preferences
             ↓
3. Results page receives the preferences
             ↓
4. Axios sends a request to the Spring Boot backend
             ↓
5. Spring Boot processes the request
             ↓
6. Backend retrieves matching movies from TiDB Cloud
             ↓
7. Backend returns movie data as JSON
             ↓
8. React stores the response
             ↓
9. MovieCard components render the results
```

---

## 🧪 Testing

The frontend can be tested locally by running the Vite development server and connecting it to either the deployed backend or a locally running backend.

The production application should also be tested after deployment to verify:

* Page navigation
* Preference selection
* API communication
* Movie results
* Loading states
* Empty-result handling
* Backend error handling
* Direct navigation to client-side routes

---

## 📦 Deployment Stack

| Layer                         | Technology / Platform       |
| ----------------------------- | --------------------------- |
| Frontend framework            | React                       |
| Build tool                    | Vite                        |
| Styling                       | Tailwind CSS                |
| Routing                       | React Router                |
| HTTP client                   | Axios                       |
| Animations                    | Framer Motion               |
| Backend                       | Java + Spring Boot          |
| Persistence                   | Spring Data JPA / Hibernate |
| Database                      | TiDB Cloud Serverless       |
| Movie metadata source         | IMDb                        |
| Poster and trailer URL source | TMDB API                    |
| Frontend deployment           | Vercel                      |
| Backend deployment            | Render                      |
| Source control                | Git + GitHub                |
| Monitoring                    | UptimeRobot                 |

---

## 🎬 Data Collection and Preparation

The application's movie dataset was assembled by combining information from IMDb and TMDB.

### IMDb-derived information

The dataset includes movie metadata such as:

* Movie name
* Release year
* Genre
* Cast
* Director
* Other movie-related metadata

### TMDB-derived information

The dataset includes information such as:

* Movie name
* Release year
* Poster URL
* Trailer URL

The information from both sources was matched and merged to create the dataset used by the application.

The resulting dataset was then stored in the production TiDB Cloud database and served to the frontend through the Spring Boot backend.

> IMDb and TMDB are external sources. This project is not affiliated with or endorsed by IMDb or TMDB.

For TMDB API usage, attribution requirements apply according to TMDB's current API documentation.

---

## 📌 Repository

This repository contains **only the frontend** of the Movie Recommender project.

The backend is maintained separately in its own GitHub repository.

**Frontend Repository:** https://github.com/mlokesh01/movie-recommendation-frontend.git

**Backend Repository:** https://github.com/mlokesh01/movie-recommendation-backend.git

**Live Application:** https://movie-recommender-lyart.vercel.app/

Both repositories together form the complete application:

```text
Movie Recommender
│
├── movie-recommendation-frontend
│       └── React + Vite frontend
│
└── movie-recommendation-backend
        └── Java + Spring Boot backend
```

---

## ⚠️ Project Scope

This repository is the client-side application. It does not contain:

* The Spring Boot backend source code
* The TiDB production database
* The underlying IMDb database
* The underlying TMDB database
* Production database credentials
* Backend credentials or secrets

The frontend communicates with the separately deployed backend through its configured API base URL.

---

## 👨‍💻 Development

Built as a full-stack web application with a separately deployed frontend, backend, and database.

The frontend is maintained independently from the backend repository to keep the two application layers separately deployable and maintainable.

---

## Screenshots

---

<img width="1905" height="868" alt="Screenshot 2026-08-18 211251" src="https://github.com/user-attachments/assets/e7bedf23-0ab6-4687-a015-c0abe9d74072" />

---

<img width="1876" height="892" alt="Screenshot 2026-08-18 211702" src="https://github.com/user-attachments/assets/24230b0b-ab05-461a-9e0e-16cbb23a348a" />

---

<img width="1855" height="873" alt="Screenshot 2026-08-18 211741" src="https://github.com/user-attachments/assets/d63e6bac-a10b-458a-aa91-3b0a4fc5b058" />

---

<img width="1894" height="879" alt="Screenshot 2026-08-18 212053" src="https://github.com/user-attachments/assets/a4e517dd-6bf4-4de3-a447-5097be9f3e66" />
