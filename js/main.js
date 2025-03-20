
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      if (navLinks.classList.contains('active')) {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.right = '0';
        navLinks.style.backgroundColor = 'white';
        navLinks.style.padding = '1rem';
        navLinks.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        navLinks.style.zIndex = '50';
      } else {
        navLinks.style.display = '';
      }
    });
  }
  
  // Newsletter form
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const emailInput = this.querySelector('input[type="email"]');
      const email = emailInput.value.trim();
      
      if (email) {
        // In a real implementation, you would send this to your backend
        alert(`Obrigado por se inscrever! Você receberá nossas atualizações em ${email}`);
        emailInput.value = '';
      }
    });
  }
  
  // Load recent articles on homepage
  const recentArticlesContainer = document.getElementById('recent-articles');
  if (recentArticlesContainer) {
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
          const recentArticles = articlesData.slice(0, 3);
          displayArticles(recentArticles, recentArticlesContainer);
        }
      })
      .catch(error => {
        console.error('Error loading articles data:', error);
        recentArticlesContainer.innerHTML = '<p class="text-center">Erro ao carregar artigos recentes.</p>';
      });
  }
});

// Function to display articles in a container
function displayArticles(articles, container) {
  container.innerHTML = '';
  
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
          <a href="/article.html?id=${article.id}">${article.title}</a>
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
