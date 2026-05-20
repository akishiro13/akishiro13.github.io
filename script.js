// ========== STARS BACKGROUND ==========
function initStars() {
  const canvas = document.getElementById('stars-canvas');
  const ctx = canvas.getContext('2d');
  let stars = [];
  const STAR_COUNT = 200;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createStars() {
    stars = [];
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.3 + 0.05,
        opacity: Math.random() * 0.8 + 0.2,
        pulse: Math.random() * Math.PI * 2
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(star => {
      star.pulse += 0.01;
      star.y -= star.speed;
      const flicker = Math.sin(star.pulse) * 0.3 + 0.7;
      if (star.y < -5) { star.y = canvas.height + 5; star.x = Math.random() * canvas.width; }
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(230, 210, 180, ${star.opacity * flicker})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  resize();
  createStars();
  draw();
  window.addEventListener('resize', () => { resize(); createStars(); });
}

// ========== RENDER SITES FROM CONFIG ==========
function renderSites() {
  const grid = document.getElementById('sites-grid');
  const filterBar = document.getElementById('filter-bar');
  if (!grid || !filterBar) return;

  // Only enabled sites
  const enabledSites = APPROVED_SITES.filter(s => s.enabled);

  // Update hero stats
  const statSites = document.getElementById('stat-sites');
  const statCats = document.getElementById('stat-cats');
  if (statSites) statSites.dataset.target = enabledSites.length;
  if (statCats) {
    const uniqueCats = new Set(enabledSites.map(s => s.category));
    statCats.dataset.target = uniqueCats.size;
  }

  // Build filters
  filterBar.innerHTML = '';
  Object.entries(CATEGORIES).forEach(([key, cat]) => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn' + (key === 'all' ? ' active' : '');
    btn.dataset.category = key;
    btn.innerHTML = `<img src="${cat.icon}" alt="" class="filter-icon"> ${cat.label}`;
    filterBar.appendChild(btn);
  });

  // Build site cards
  grid.innerHTML = '';
  enabledSites.forEach(site => {
    const card = document.createElement('a');
    card.href = site.url;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
    card.className = 'card animate-on-scroll';
    card.dataset.category = site.category;

    const catInfo = CATEGORIES[site.category] || { label: site.category };

    card.innerHTML = `
      <h3>${site.name}</h3>
      <p>${site.description}</p>
      <div class="card-tags">
        <span class="card-tag">${catInfo.label}</span>
      </div>
      <span class="card-link">${new URL(site.url).hostname} →</span>
    `;

    grid.appendChild(card);
  });
}

// ========== NAVBAR ==========
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const hamburger = document.querySelector('.nav-hamburger');
  const navLinks = document.querySelector('.nav-links');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  hamburger?.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });

  const sections = document.querySelectorAll('.section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 100;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      const link = document.querySelector(`.nav-links a[href="#${id}"]`);
      if (link) link.classList.toggle('active', scrollY >= top && scrollY < top + height);
    });
  });
}

// ========== SCROLL ANIMATIONS ==========
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
}

// ========== SEARCH ==========
function initSearch() {
  const searchInput = document.getElementById('search-input');
  const noResults = document.getElementById('no-results');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    const cards = document.querySelectorAll('#sites-grid .card');
    let visible = 0;

    cards.forEach(card => {
      const text = card.textContent.toLowerCase();
      const match = !query || text.includes(query);
      card.style.display = match ? '' : 'none';
      if (match) visible++;
    });

    if (noResults) noResults.style.display = visible === 0 ? '' : 'none';
  });
}

// ========== FILTERS ==========
function initFilters() {
  document.addEventListener('click', (e) => {
    if (!e.target.classList.contains('filter-btn')) return;

    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');

    const cat = e.target.dataset.category;
    const cards = document.querySelectorAll('#sites-grid .card');
    const noResults = document.getElementById('no-results');
    let visible = 0;

    cards.forEach(card => {
      const show = cat === 'all' || card.dataset.category === cat;
      card.style.display = show ? '' : 'none';
      if (show) {
        card.style.animation = 'fadeInUp 0.4s ease';
        visible++;
      }
    });

    if (noResults) noResults.style.display = visible === 0 ? '' : 'none';

    // Reset search
    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.value = '';
  });
}

// ========== COUNTER ANIMATION ==========
function animateCounters() {
  const counters = document.querySelectorAll('.hero-stat .number');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.dataset.target) || 0;
        if (target === 0) return;
        let current = 0;
        const increment = Math.max(target / 60, 1);
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            entry.target.textContent = target;
            clearInterval(timer);
          } else {
            entry.target.textContent = Math.floor(current);
          }
        }, 20);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));
}

// ========== SMOOTH SCROLL ==========
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', () => {
  renderSites();
  initStars();
  initNavbar();
  initScrollAnimations();
  initSearch();
  initFilters();
  animateCounters();
  initSmoothScroll();
});
