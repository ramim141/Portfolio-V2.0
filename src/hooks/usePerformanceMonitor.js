import { useEffect } from 'react';

/**
 * Performance Monitor Component
 * Tracks and reports performance metrics
 */
const usePerformanceMonitor = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    const observePerformance = () => {
      // First Contentful Paint (FCP)
      const perfObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            console.log(`🎨 FCP: ${entry.startTime.toFixed(2)}ms`);
          }
        });
      });
      
      if ('PerformanceObserver' in window) {
        perfObserver.observe({ entryTypes: ['paint'] });
      }

      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log(`🖼️ LCP: ${lastEntry.startTime.toFixed(2)}ms`);
      });
      
      if ('PerformanceObserver' in window) {
        try {
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        } catch {
          // Fallback for older browsers
        }
      }

      // First Input Delay (FID) - approximation
      let isFirstInteraction = true;
      const measureFID = () => {
        if (isFirstInteraction) {
          const fidStart = performance.now();
          requestIdleCallback(() => {
            const fid = performance.now() - fidStart;
            console.log(`⚡ FID: ${fid.toFixed(2)}ms`);
            isFirstInteraction = false;
          });
        }
      };
      
      ['click', 'keydown', 'touchstart'].forEach(event => {
        document.addEventListener(event, measureFID, { once: true, passive: true });
      });

      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        }
        console.log(`📐 CLS: ${clsValue.toFixed(4)}`);
      });
      
      if ('PerformanceObserver' in window) {
        try {
          clsObserver.observe({ entryTypes: ['layout-shift'] });
        } catch {
          // Fallback for older browsers
        }
      }

      // Monitor bundle size and loading time
      window.addEventListener('load', () => {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log(`📦 Page Load Time: ${loadTime}ms`);
        
        // Get resource timings
        const resources = performance.getEntriesByType('resource');
        resources.forEach(resource => {
          if (resource.name.includes('.js') || resource.name.includes('.css')) {
            console.log(`📄 ${resource.name.split('/').pop()}: ${resource.transferSize} bytes`);
          }
        });
      });
    };

    // Register Service Worker
    const registerSW = async () => {
      if ('serviceWorker' in navigator) {
        try {
          await navigator.serviceWorker.register('/sw.js');
          console.log('🔧 Service Worker registered successfully');
        } catch (error) {
          console.warn('🚨 Service Worker registration failed:', error);
        }
      }
    };

    // Connection quality monitoring
    const monitorConnection = () => {
      if ('connection' in navigator) {
        const connection = navigator.connection;
        console.log(`🌐 Connection: ${connection.effectiveType}, ${connection.downlink}Mbps`);
        
        const updateConnectionStatus = () => {
          console.log(`📶 Connection changed: ${connection.effectiveType}`);
        };
        
        connection.addEventListener('change', updateConnectionStatus);
        return () => connection.removeEventListener('change', updateConnectionStatus);
      }
    };

    // Memory monitoring (if available)
    const monitorMemory = () => {
      if ('memory' in performance) {
        const memInfo = performance.memory;
        console.log(`🧠 Memory: Used ${(memInfo.usedJSHeapSize / 1048576).toFixed(2)}MB / Total ${(memInfo.totalJSHeapSize / 1048576).toFixed(2)}MB`);
      }
    };

    // Initialize monitoring
    observePerformance();
    registerSW();
    const connectionCleanup = monitorConnection();
    monitorMemory();

    // Periodic memory monitoring
    const memoryInterval = setInterval(monitorMemory, 30000); // Every 30 seconds

    return () => {
      clearInterval(memoryInterval);
      if (connectionCleanup) connectionCleanup();
    };
  }, []);
};

export default usePerformanceMonitor;