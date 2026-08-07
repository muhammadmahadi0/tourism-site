import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-paper dark:bg-ink text-ink dark:text-paper relative selection:bg-rust selection:text-white transition-colors duration-300">
      <Navbar />
      <main className="flex-grow relative z-20 bg-paper dark:bg-ink text-ink dark:text-paper transition-colors duration-300">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
