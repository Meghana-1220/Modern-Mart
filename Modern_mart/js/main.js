// Main JavaScript for Homepage

document.addEventListener('DOMContentLoaded', function() {
    initializeHomepage();
});

function initializeHomepage() {
    setupHeroSlider();
    loadCategories();
    loadDealsOfTheDay();
    loadFeaturedProducts();
    setupSearch();
    setupMobileNavigation();
    setupThemeToggle();
}

// Hero Slider
function setupHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const indicators = document.querySelectorAll('.indicator');
    let currentSlide = 0;
    const slideInterval = 5000; // 5 seconds

    function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));

        // Show current slide
        if (slides[index]) {
            slides[index].classList.add('active');
            indicators[index].classList.add('active');
        }
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Auto-advance slides
    let slideTimer = setInterval(nextSlide, slideInterval);

    // Manual navigation
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
            
            // Reset timer
            clearInterval(slideTimer);
            slideTimer = setInterval(nextSlide, slideInterval);
        });
    });

    // Pause on hover
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.addEventListener('mouseenter', () => {
            clearInterval(slideTimer);
        });

        heroSection.addEventListener('mouseleave', () => {
            slideTimer = setInterval(nextSlide, slideInterval);
        });
    }
}

// Load Categories
function loadCategories() {
    const categoriesGrid = document.getElementById('categoriesGrid');
    if (!categoriesGrid) return;

    Loading.show();

    // Simulate API delay
    setTimeout(() => {
        const categoriesHTML = categories.map(category => createCategoryCard(category)).join('');
        categoriesGrid.innerHTML = categoriesHTML;
        
        // Add animation
        const categoryCards = categoriesGrid.querySelectorAll('.category-card');
        categoryCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.3s ease-out';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });

        Loading.hide();
    }, 500);
}

// Load Deals of the Day
function loadDealsOfTheDay() {
    const dealsGrid = document.getElementById('dealsGrid');
    if (!dealsGrid) return;

    // Filter products with significant discounts
    const dealProducts = products.filter(product => product.discount && product.discount >= 10);
    
    if (dealProducts.length === 0) {
        dealsGrid.innerHTML = '<p class="text-center">No deals available at the moment.</p>';
        return;
    }

    const dealsHTML = dealProducts.slice(0, 4).map(product => createProductCard(product)).join('');
    dealsGrid.innerHTML = dealsHTML;

    // Add animation
    const productCards = dealsGrid.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.3s ease-out';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 150);
    });
}

// Load Featured Products
function loadFeaturedProducts() {
    const featuredGrid = document.getElementById('featuredGrid');
    if (!featuredGrid) return;

    // Filter products with high ratings
    const featuredProducts = products.filter(product => product.rating >= 4.5);
    
    if (featuredProducts.length === 0) {
        featuredGrid.innerHTML = '<p class="text-center">No featured products available.</p>';
        return;
    }

    const featuredHTML = featuredProducts.slice(0, 6).map(product => createProductCard(product)).join('');
    featuredGrid.innerHTML = featuredHTML;

    // Add animation
    const productCards = featuredGrid.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.3s ease-out';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 150);
    });
}

// Search Functionality
function setupSearch() {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    const searchSuggestions = document.getElementById('searchSuggestions');

    if (!searchForm || !searchInput || !searchSuggestions) return;

    let searchTimeout;

    // Handle search input
    searchInput.addEventListener('input', debounce((e) => {
        const query = e.target.value.trim();
        
        if (query.length > 0) {
            showSearchSuggestions(query);
        } else {
            hideSearchSuggestions();
        }
    }, 300));

    // Handle search form submission
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = searchInput.value.trim();
        
        if (query) {
            // Redirect to products page with search query
            window.location.href = `products.html?search=${encodeURIComponent(query)}`;
        }
    });

    // Hide suggestions when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchForm.contains(e.target)) {
            hideSearchSuggestions();
        }
    });

    // Handle search suggestions
    function showSearchSuggestions(query) {
        const filteredSuggestions = searchSuggestions.filter(suggestion =>
            suggestion.toLowerCase().includes(query.toLowerCase())
        );

        if (filteredSuggestions.length > 0) {
            const suggestionsHTML = createSearchSuggestions(filteredSuggestions.slice(0, 5), query);
            searchSuggestions.innerHTML = suggestionsHTML;
            searchSuggestions.classList.add('active');
        } else {
            hideSearchSuggestions();
        }
    }

    function hideSearchSuggestions() {
        searchSuggestions.classList.remove('active');
        searchSuggestions.innerHTML = '';
    }

    // Global function for selecting suggestions
    window.selectSuggestion = function(suggestion) {
        searchInput.value = suggestion;
        hideSearchSuggestions();
        window.location.href = `products.html?search=${encodeURIComponent(suggestion)}`;
    };
}

// Mobile Navigation
function setupMobileNavigation() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    const closeMobileNav = document.getElementById('closeMobileNav');

    if (!mobileMenuBtn || !mobileNav || !closeMobileNav) return;

    // Open mobile navigation
    mobileMenuBtn.addEventListener('click', () => {
        mobileNav.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    // Close mobile navigation
    closeMobileNav.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Close on overlay click
    mobileNav.addEventListener('click', (e) => {
        if (e.target === mobileNav) {
            mobileNav.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
            mobileNav.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Theme Toggle
function setupThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const mobileThemeToggle = document.getElementById('mobileThemeToggle');

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            Theme.toggle();
            Toast.info(`Switched to ${Theme.get()} mode`);
        });
    }

    if (mobileThemeToggle) {
        mobileThemeToggle.addEventListener('click', () => {
            Theme.toggle();
            Toast.info(`Switched to ${Theme.get()} mode`);
        });
    }
}

// Scroll to Top Functionality
function setupScrollToTop() {
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: var(--primary-color);
        color: white;
        border: none;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        transition: all 0.3s ease;
        box-shadow: var(--shadow-lg);
    `;

    document.body.appendChild(scrollToTopBtn);

    // Show/hide scroll to top button
    window.addEventListener('scroll', throttle(() => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.display = 'flex';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    }, 100));

    // Scroll to top on click
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize scroll to top
setupScrollToTop();

// Performance optimization: Lazy load images
function setupLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });

        // Observe all images with loading="lazy"
        document.querySelectorAll('img[loading="lazy"]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Initialize lazy loading
setupLazyLoading();

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Page is hidden, pause any animations or timers
        console.log('Page hidden');
    } else {
        // Page is visible, resume animations or timers
        console.log('Page visible');
    }
});

// Error handling for images
document.addEventListener('error', (e) => {
    if (e.target.tagName === 'IMG') {
        e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Found';
    }
}, true);

// Analytics tracking (placeholder)
function trackEvent(eventName, eventData = {}) {
    console.log('Analytics Event:', eventName, eventData);
    // Implement your analytics tracking here
}

// Track page view
trackEvent('page_view', {
    page: 'homepage',
    timestamp: new Date().toISOString()
});