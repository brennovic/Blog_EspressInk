
document.addEventListener('DOMContentLoaded', function() {
  const allArticlesContainer = document.getElementById('all-articles');
  const loadMoreBtn = document.getElementById('load-more-btn');
  
  let displayedArticles = 6; // Initial number of articles to show
  let articlesData = []; // Will be populated from articles-data.js
  
  // Fetch the articles data
  fetch('js/articles-data.js')
    .then(response => response.text())
    .then(data => {
      // Execute the data as a script to get the articlesData variable
      const script = document.createElement('script');
      script.textContent = data;
      document.head.appendChild(script);
      
      // Now we can access articlesData from the global scope
      if (typeof window.articlesData !== 'undefined') {
        articlesData = window.articlesData;
        displayArticlesPage(articlesData.slice(0, displayedArticles), allArticlesContainer);
        
        // Set up load more button
        if (loadMoreBtn) {
          loadMoreBtn.addEventListener('click', function() {
            if (displayedArticles < articlesData.length) {
              const nextBatch = articlesData.slice(displayedArticles, displayedArticles + 6);
              displayArticlesPage(nextBatch, allArticlesContainer, true);
              displayedArticles += 6;
              
              // Hide button if all articles are displayed
              if (displayedArticles >= articlesData.length) {
                loadMoreBtn.style.display = 'none';
              }
            }
          });
          
          // Hide button if all articles are already displayed
          if (displayedArticles >= articlesData.length) {
            loadMoreBtn.style.display = 'none';
          }
        }
      }
    })
    .catch(error => {
      console.error('Error loading articles data:', error);
      if (allArticlesContainer) {
        allArticlesContainer.innerHTML = '<p class="text-center">Erro ao carregar artigos.</p>';
      }
    });
});

function displayArticlesPage(articles, container, append = false) {
  if (!append) {
    container.innerHTML = '';
  }
  
  articles.forEach((article, index) => {
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
          <a href="article.html?id=${article.id}">${article.title}</a>
        </h3>
        <p>${article.excerpt}</p>
        <div class="article-card-meta">
          <span>${article.author.name}</span>
          <span>${article.readTime} min de leitura</span>
        </div>
      </div>
    `;
    
    container.appendChild(articleElement);
  });
}
