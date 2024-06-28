import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./Pages/home-page";
import GalleryPage from "./Pages/gallery-page";
import CentersPage from "./Pages/centers-page";
import EventsPage from "./Pages/events-page";
import MakersTurnPage from "./Pages/makers-turn-page";
import NotFoundPage from "./Pages/not-found-page";
import "./App.css";
import InvestmentPage from "./Pages/investment-page";
import FormPage from "./Pages/form-page";
import AboutPage from "./Pages/about-page";
import MemesPage from "./Pages/memes-page";
import ViewFormPage from "./Pages/view-form-page";
import AdminPage from "./Pages/admin-page";

export const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};

const App = () => {
  useScrollToTop();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/centers" element={<CentersPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/makers-turn" element={<MakersTurnPage />} />
        <Route path="/for-investment" element={<InvestmentPage />} />
        <Route path="/form/:id" element={<FormPage />} />
        <Route path="/about-z2b" element={<AboutPage />} />
        <Route path="/view/:id" element={<ViewFormPage />} />
        <Route path="/memes" element={<MemesPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
