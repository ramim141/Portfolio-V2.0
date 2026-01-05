import React, { useState, useCallback } from 'react';

/**
 * Optimized Image Component with lazy loading, error handling, and performance features
 */
const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  placeholder = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="100%" height="100%" fill="%23334155"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="%2394a3b8">Loading...</text></svg>',
  loading = 'lazy',
  ...props 
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const handleLoad = useCallback(() => {
    setLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    setError(true);
  }, []);

  if (error) {
    return (
      <div className={`bg-slate-700 flex items-center justify-center text-slate-400 ${className}`}>
        <span>Failed to load image</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Placeholder background */}
      {!loaded && (
        <img
          src={placeholder}
          alt=""
          className="absolute inset-0 w-full h-full object-cover blur-sm"
          aria-hidden="true"
        />
      )}
      
      {/* Main image */}
      <img
        src={src}
        alt={alt}
        loading={loading}
        onLoad={handleLoad}
        onError={handleError}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;