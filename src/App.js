import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import NotFound from "./pages/NotFound";
import TvShowsPage from "./pages/TvShowsPage";
import "./styles.scss";

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/series" element={<TvShowsPage />} />
          <Route path="/movies" element={<MoviesPage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
    </>
  );
}

export default App;
