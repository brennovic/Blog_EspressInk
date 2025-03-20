
document.addEventListener('DOMContentLoaded', function() {
  // Get article ID from URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const articleId = urlParams.get('id');
  
  if (!articleId) {
    window.location.href = '/404.html';
    return;
  }
  
  // Fetch the articles data
  fetch('/js/articles-data.js')
    .then(response => response.text())
    .then(data => {
      // Execute the data as a script to get the articlesData variable
      const script = document.createElement('script');
      script.textContent = data;
      document.head.appendChild(script);
      
      // Now we can access articlesData
      if (typeof articlesData !== 'undefined') {
        const article = articlesData.find(a => a.id === articleId);
        
        if (!article) {
          window.location.href = '/404.html';
          return;
        }
        
        // Update page title
        document.title = `${article.title} - ExpressInk`;
        
        // Populate article content
        populateArticleData(article);
        
        // Load related articles
        loadRelatedArticles(article);
      }
    })
    .catch(error => {
      console.error('Error loading article data:', error);
      window.location.href = '/404.html';
    });
});

function populateArticleData(article) {
  // Update metadata
  document.querySelector('meta[name="description"]').setAttribute('content', article.excerpt);
  
  // Update article elements
  document.getElementById('article-category').textContent = article.category;
  document.getElementById('article-title').textContent = article.title;
  document.getElementById('article-author').textContent = article.author.name;
  document.getElementById('article-read-time').textContent = `${article.readTime} min de leitura`;
  
  // Format and display date
  const publishDate = new Date(article.publishedAt);
  const formattedDate = publishDate.toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  document.getElementById('article-date').textContent = formattedDate;
  
  // Set author data
  document.getElementById('author-avatar').src = article.author.avatar;
  document.getElementById('author-name').textContent = article.author.name;
  
  // Set cover image
  document.getElementById('article-cover').src = article.coverImage;
  document.getElementById('article-cover').alt = article.title;
  
  // Set content
  document.getElementById('article-content').innerHTML = article.content;
  
  // Set author bio data
  document.getElementById('bio-avatar').src = article.author.avatar;
  document.getElementById('bio-name').textContent = article.author.name;
  document.getElementById('bio-text').textContent = article.author.bio;
}

function loadRelatedArticles(currentArticle) {
  const relatedContainer = document.getElementById('related-articles');
  
  if (!relatedContainer) return;
  
  // Get related articles (same category but different ID)
  const relatedArticles = articlesData
    .filter(article => article.category === currentArticle.category && article.id !== currentArticle.id)
    .slice(0, 2);
  
  if (relatedArticles.length === 0) {
    // If no related articles, hide the section
    const relatedSection = document.querySelector('.related-articles-section');
    if (relatedSection) {
      relatedSection.style.display = 'none';
    }
    return;
  }
  
  // Display related articles
  relatedContainer.innerHTML = '';
  
  relatedArticles.forEach((article, index) => {
    const delay = index * 100; // staggered animation
    
    const articleElement = document.createElement('div');
    articleElement.className = 'article-card';
    articleElement.style.animationDelay = `${delay}ms`;
    
    articleElement.innerHTML = `
      <div class="article-card-image">
        <img src="${article.coverImage}" alt="${article.title}">
      </div>
      <div class="article-card-content">
        <span class="badge">${article.category}</span>
        <h3 class="article-card-title">
          <a href="/article.html?id=${article.id}">${article.title}</a>
        </h3>
        <p>${article.excerpt}</p>
        <div class="article-card-meta">
          <span>${article.author.name}</span>
          <span>${article.readTime} min de leitura</span>
        </div>
      </div>
    `;
    
    relatedContainer.appendChild(articleElement);
  });
}
