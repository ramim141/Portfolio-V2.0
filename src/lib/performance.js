// Performance utility functions
import React from 'react';

/**
 * Debounce function to optimize frequent function calls
 */
export const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(null, args), delay);
  };
};

/**
 * Throttle function to limit function execution frequency
 */
export const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

/**
 * Intersection Observer hook for lazy loading
 */
export const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = React.useState(false);
  const [ref, setRef] = React.useState(null);

  React.useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options
      }
    );

    observer.observe(ref);

    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, [ref, options]);

  return [setRef, isIntersecting];
};

/**
 * Preload images for better performance
 */
export const preloadImages = (imageUrls) => {
  const promises = imageUrls.map(url => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = resolve;
      img.onerror = reject;
      img.src = url;
    });
  });
  
  return Promise.allSettled(promises);
};

/**
 * Get optimized image URL based on device pixel ratio and viewport size
 */
export const getOptimizedImageUrl = (baseUrl) => {
  // This is a placeholder for image optimization service
  // You could integrate with services like Cloudinary, ImageKit, or others
  return baseUrl;
};

/**
 * Measure and log performance metrics
 */
export const measurePerformance = (name, fn) => {
  return async (...args) => {
    const start = performance.now();
    const result = await fn(...args);
    const end = performance.now();
    
    console.log(`⚡ ${name}: ${(end - start).toFixed(2)}ms`);
    return result;
  };
};

/**
 * Check if user prefers reduced motion
 */
export const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Get connection speed information
 */
export const getConnectionSpeed = () => {
  if ('connection' in navigator) {
    return {
      effectiveType: navigator.connection.effectiveType,
      downlink: navigator.connection.downlink,
      rtt: navigator.connection.rtt,
      saveData: navigator.connection.saveData
    };
  }
  return null;
};

/**
 * Lazy load component with intersection observer
 */
export const LazySection = ({ children, className = '', threshold = 0.1 }) => {
  const [setRef, isIntersecting] = useIntersectionObserver({ 
    threshold,
    rootMargin: '100px 0px'
  });
  
  return (
    <div ref={setRef} className={className}>
      {isIntersecting ? children : (
        <div className="min-h-[200px] flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};