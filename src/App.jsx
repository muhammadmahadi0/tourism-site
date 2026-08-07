import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

// Route level lazy-loading for fast initial bundle
const Home = lazy(() => import('./pages/Home'));
const PlacesToVisit = lazy(() => import('./pages/PlacesToVisit'));
const PlaceDetail = lazy(() => import('./pages/PlaceDetail'));
const Events = lazy(() => import('./pages/Events'));
const TravelUpdate = lazy(() => import('./pages/TravelUpdate'));
const AboutMinistry = lazy(() => import('./pages/AboutMinistry'));

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-3">
      <div className="w-10 h-10 border-4 border-forest border-t-transparent rounded-full animate-spin" />
      <span className="font-mono text-xs text-ink/60 tracking-widest uppercase">Loading Portal...</span>
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/places-to-visit" element={<PlacesToVisit />} />
          <Route path="/places-to-visit/:placeId" element={<PlaceDetail />} />
          <Route path="/events" element={<Events />} />
          <Route path="/travel-update" element={<TravelUpdate />} />
          <Route path="/about" element={<AboutMinistry />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
