
module.exports = {
  // Include all major routes that should be pre-rendered
  include: [
    '/',
    '/about',
    '/books',
    '/contact',
    '/blog',
    // Add book detail pages dynamically
    ...Object.keys(require('./data/books')).map(slug => `/books/${slug}`),
    // Add blog detail pages dynamically
    ...Object.keys(require('./data/blogArticles')).map(slug => `/blog/${slug}`)
  ],
  // Handle locale variants
  locales: ['en-US', 'en-UK', 'fr-FR'],
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
