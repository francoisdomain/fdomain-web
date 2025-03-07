
module.exports = {
  buildDir: "dist",
  destination: "dist",
  source: "dist",
  include: [
    '/',
    '/about',
    '/books',
    '/contact',
    '/blog'
  ],
  // Improve rendering reliability
  puppeteerArgs: ['--no-sandbox', '--disable-setuid-sandbox'],
  // Make sure all assets are loaded
  waitFor: 2000,
  // Ensure correct user agent for crawlers
  userAgent: 'ReactSnap',
  // Generate 200.html as fallback
  saveAs: '200.html',
  // Make sure to wait for network requests to complete
  waitForNavigation: true,
  // Include JavaScript (needed for locale switching to work after initial load)
  inlineCss: false,
  // Skip resources that might cause issues
  skipThirdPartyRequests: false,
  // Don't remove scripts (needed for interactivity)
  removeScriptTags: false,
  // Concurrency for faster builds
  concurrency: 4,
  // Sourcemaps aren't needed in the pre-rendered HTML
  sourceMaps: false
};
