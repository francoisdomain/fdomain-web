
/**
 * Script to generate pre-rendered HTML pages for SEO and social media crawlers
 * This script creates static HTML files for each book and blog article
 */

const fs = require('fs');
const path = require('path');

// Ensure directories exist
const createDirIfNotExists = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

// Book data (simplified version of what's in books.ts)
const booksData = {
  "above-the-waterline": {
    title: {
      EN: "Above the Waterline",
      FR: "Au-dessus de la ligne de flottaison"
    },
    tagline: {
      EN: "A poignant exploration of human connection in a fractured world.",
      FR: "Une exploration poignante des relations humaines dans un monde fracturé."
    },
    coverImage: {
      EN: "/img/Above_2025_cover.webp",
      FR: "/img/Above_2025_cover.webp"
    }
  },
  "close-enough": {
    title: {
      EN: "Close Enough",
      FR: "Presque vrai"
    },
    tagline: {
      EN: "Where truth and fiction collide in unexpected ways.",
      FR: "Quand la vérité et la fiction se rencontrent de façon inattendue."
    },
    coverImage: {
      EN: "/img/CloseEnough_2025_cover.webp",
      FR: "/img/PresqueVrai_2025_cover.webp"
    }
  },
  "la-glissade": {
    title: {
      EN: "La Glissade",
      FR: "La Glissade"
    },
    tagline: {
      EN: "A compelling tale of loss and redemption set against the backdrop of rural Quebec.",
      FR: "Un récit captivant de perte et de rédemption dans le Québec rural."
    },
    coverImage: {
      EN: "/img/LaGlissade_Cover.webp",
      FR: "/img/LaGlissade_Cover.webp"
    }
  }
};

// Blog data (simplified version of blogArticles.ts)
const blogData = {
  "active-listening-skills": {
    title: "Master Active Listening to Become a Better Leader",
    summary: "How developing active listening skills can transform your leadership capabilities and team relationships.",
    imageUrl: "/img/blog/active-listening-skills.webp",
    publishedDate: "2023-07-15"
  },
  "everyone-leader": {
    title: "Everyone is a Leader",
    summary: "Leadership is not something you learn; it's something you stumble across.",
    imageUrl: "/img/blog/EveryoneLeader.webp",
    publishedDate: "2023-06-01"
  },
  "lead-vs-inspire": {
    title: "Can you lead without inspiring?",
    summary: "You can inspire without leading - but can you lead without inspiring?",
    imageUrl: "/img/blog/lead-vs-inspire.webp",
    publishedDate: "2023-05-15"
  },
  "license-to-lead": {
    title: "You don't need permission to lead",
    summary: "You don't need permission to make a difference.",
    imageUrl: "/img/blog/licence-to-lead.webp",
    publishedDate: "2023-04-20"
  }
};

// Create HTML template
const createHtmlTemplate = (title, description, imageUrl, canonicalUrl, type) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>${title} | François Domain - Author</title>
  <meta name="description" content="${description}">
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="${type}">
  <meta property="og:url" content="https://francoisdomain.com${canonicalUrl}">
  <meta property="og:title" content="${title} | François Domain - Author">
  <meta property="og:description" content="${description}">
  <meta property="og:image" content="https://francoisdomain.com${imageUrl}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="https://francoisdomain.com${canonicalUrl}">
  <meta name="twitter:title" content="${title} | François Domain - Author">
  <meta name="twitter:description" content="${description}">
  <meta name="twitter:image" content="https://francoisdomain.com${imageUrl}">
  
  <!-- Canonical URL -->
  <link rel="canonical" href="https://francoisdomain.com${canonicalUrl}">
  
  <script>
    // Check if this is a crawler/bot
    var isBot = /bot|googlebot|crawler|spider|robot|crawling|facebook|twitter|linkedin|social/i.test(navigator.userAgent);
    
    // If not a bot, redirect to the actual page
    if (!isBot) {
      window.location.href = '${canonicalUrl}';
    }
  </script>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      max-width: 800px;
      margin: 0 auto;
      padding: 40px 20px;
      line-height: 1.6;
      color: #333;
    }
    img {
      max-width: 100%;
      height: auto;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }
    a {
      color: #0066cc;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
    .content {
      margin-top: 30px;
    }
    .bot-notice {
      margin-top: 40px;
      padding: 15px;
      background-color: #f8f9fa;
      border-radius: 6px;
      font-size: 14px;
      color: #666;
    }
  </style>
</head>
<body>
  <header>
    <h1>${title}</h1>
  </header>
  <div class="content">
    <p>${description}</p>
    <img src="${imageUrl}" alt="${title}">
    <p><a href="${canonicalUrl}">View the full ${type === 'book' ? 'book' : 'article'}</a></p>
  </div>
  <div class="bot-notice">
    <p>Note: This is a pre-rendered page for search engines and social media platforms.</p>
    <p>Human visitors will be automatically redirected to the full interactive experience.</p>
  </div>
</body>
</html>`;
};

// Generate book pre-render pages
const generateBookPages = () => {
  createDirIfNotExists('public/books-pr');
  
  Object.entries(booksData).forEach(([slug, book]) => {
    // Using English version by default
    const content = createHtmlTemplate(
      book.title.EN,
      book.tagline.EN,
      book.coverImage.EN,
      `/books/${slug}`,
      'book'
    );
    
    fs.writeFileSync(path.join('public', 'books-pr', `${slug}.html`), content);
    console.log(`Generated pre-render page for book: ${slug}`);
  });
};

// Generate blog pre-render pages
const generateBlogPages = () => {
  createDirIfNotExists('public/blog-pr');
  
  Object.entries(blogData).forEach(([slug, article]) => {
    const content = createHtmlTemplate(
      article.title,
      article.summary,
      article.imageUrl,
      `/blog/${slug}`,
      'article'
    );
    
    fs.writeFileSync(path.join('public', 'blog-pr', `${slug}.html`), content);
    console.log(`Generated pre-render page for blog article: ${slug}`);
  });
};

// Create an index page for the pre-rendered content
const generateIndexPages = () => {
  createDirIfNotExists('public/books-pr');
  createDirIfNotExists('public/blog-pr');
  
  // Books index
  const booksIndexContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>François Domain - Books</title>
  <meta name="description" content="Discover the works of François Domain - contemporary fiction author exploring human connection through compelling storytelling.">
  <meta http-equiv="refresh" content="0;url=/books">
</head>
<body>
  <p>Redirecting to <a href="/books">books page</a>...</p>
</body>
</html>`;
  
  fs.writeFileSync(path.join('public', 'books-pr', 'index.html'), booksIndexContent);
  
  // Blog index
  const blogIndexContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>François Domain - Blog</title>
  <meta name="description" content="Explore thoughts on writing, creativity, and leadership from author François Domain.">
  <meta http-equiv="refresh" content="0;url=/blog">
</head>
<body>
  <p>Redirecting to <a href="/blog">blog page</a>...</p>
</body>
</html>`;
  
  fs.writeFileSync(path.join('public', 'blog-pr', 'index.html'), blogIndexContent);
  
  console.log('Generated index pages for pre-rendered content');
};

// Generate all pages
const generateAllPages = () => {
  console.log('Starting pre-render page generation...');
  try {
    generateBookPages();
    generateBlogPages();
    generateIndexPages();
    console.log('All pre-render pages generated successfully!');
  } catch (error) {
    console.error('Error generating pre-render pages:', error);
    process.exit(1);
  }
};

// Execute the script
generateAllPages();
