import React, { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import usePerformanceMonitor from './hooks/usePerformanceMonitor';

// Temporarily import directly to fix dynamic import error
import Home from './pages/Home/Home';

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen bg-dark flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      <p className="text-slate-400 text-lg">Loading Portfolio...</p>
    </div>
  </div>
);

function App() {
  // Initialize performance monitoring
  usePerformanceMonitor();

  return (
    <HelmetProvider>
      <div className="font-sans antialiased text-slate-200 bg-dark selection:bg-primary selection:text-white">
        <Home />
      </div>
    </HelmetProvider>
  );
}

export default App;