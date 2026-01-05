#!/usr/bin/env node

// Simple bundle analyzer to check performance improvements
const fs = require('fs');
const path = require('path');

function getFileSize(filePath) {
  try {
    const stats = fs.statSync(filePath);
    return stats.size;
  } catch (error) {
    return 0;
  }
}

function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

function analyzeBundle() {
  const distPath = path.join(__dirname, 'dist');
  
  if (!fs.existsSync(distPath)) {
    console.log('❌ No dist folder found. Run "npm run build" first.');
    return;
  }

  console.log('🔍 Bundle Analysis Report');
  console.log('========================\n');

  // Analyze JS bundles
  const jsFiles = fs.readdirSync(path.join(distPath, 'assets'))
    .filter(file => file.endsWith('.js'))
    .sort();

  console.log('📦 JavaScript Bundles:');
  let totalJSSize = 0;
  jsFiles.forEach(file => {
    const filePath = path.join(distPath, 'assets', file);
    const size = getFileSize(filePath);
    totalJSSize += size;
    console.log(`   ${file}: ${formatBytes(size)}`);
  });
  console.log(`   Total JS: ${formatBytes(totalJSSize)}\n`);

  // Analyze CSS bundles
  const cssFiles = fs.readdirSync(path.join(distPath, 'assets'))
    .filter(file => file.endsWith('.css'))
    .sort();

  console.log('🎨 CSS Bundles:');
  let totalCSSSize = 0;
  cssFiles.forEach(file => {
    const filePath = path.join(distPath, 'assets', file);
    const size = getFileSize(filePath);
    totalCSSSize += size;
    console.log(`   ${file}: ${formatBytes(size)}`);
  });
  console.log(`   Total CSS: ${formatBytes(totalCSSSize)}\n`);

  // Analyze Images
  const imageFiles = fs.readdirSync(path.join(distPath, 'assets'))
    .filter(file => /\.(png|jpg|jpeg|gif|svg|webp)$/i.test(file))
    .sort();

  console.log('🖼️  Images:');
  let totalImageSize = 0;
  imageFiles.forEach(file => {
    const filePath = path.join(distPath, 'assets', file);
    const size = getFileSize(filePath);
    totalImageSize += size;
    if (size > 500 * 1024) { // Flag images > 500KB
      console.log(`   ⚠️  ${file}: ${formatBytes(size)} (Consider optimization)`);
    } else {
      console.log(`   ${file}: ${formatBytes(size)}`);
    }
  });
  console.log(`   Total Images: ${formatBytes(totalImageSize)}\n`);

  // Overall stats
  const totalSize = totalJSSize + totalCSSSize + totalImageSize;
  console.log('📊 Summary:');
  console.log(`   Total Bundle Size: ${formatBytes(totalSize)}`);
  console.log(`   JavaScript: ${formatBytes(totalJSSize)} (${((totalJSSize / totalSize) * 100).toFixed(1)}%)`);
  console.log(`   CSS: ${formatBytes(totalCSSSize)} (${((totalCSSSize / totalSize) * 100).toFixed(1)}%)`);
  console.log(`   Images: ${formatBytes(totalImageSize)} (${((totalImageSize / totalSize) * 100).toFixed(1)}%)`);

  // Performance recommendations
  console.log('\n💡 Performance Recommendations:');
  if (totalJSSize > 300 * 1024) {
    console.log('   - Consider code splitting for large JS bundles');
  }
  if (totalImageSize > 2 * 1024 * 1024) {
    console.log('   - Optimize large images (use WebP, compress)');
  }
  if (totalSize > 5 * 1024 * 1024) {
    console.log('   - Total bundle is quite large - consider lazy loading');
  } else {
    console.log('   - Bundle size looks good! ✅');
  }
}

analyzeBundle();