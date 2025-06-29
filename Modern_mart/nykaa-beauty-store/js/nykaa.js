// Nykaa-Inspired Beauty E-commerce JavaScript

// Cart functionality
let cart = [];
let cartCount = 0;

// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
const cartBadge = document.getElementById('cartBadge');
const cartCountElement = document.getElementById('cartCount');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupEventListeners();
    loadCartFromStorage();
    animateOnScroll();
    console.log('Nykaa Beauty Store Initialized! 💄✨');
}

// Event Listeners Setup
function setupEventListeners() {
    // Search functionality
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });

    // Add to cart buttons
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', handleAddToCart);
    });

    // Mobile menu toggle (for future implementation)
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    }

    // Cart badge click
    if (cartBadge) {
        cartBadge.addEventListener('click', showCartModal);
    }

    // Navigation link interactions
    setupNavigationHovers();

    // CTA button
    const ctaBtn = document.querySelector('.cta-btn');
    if (ctaBtn) {
        ctaBtn.addEventListener('click', function() {
            scrollToProducts();
        });
    }

    // Quick view buttons
    const quickViewBtns = document.querySelectorAll('.quick-view-btn');
    quickViewBtns.forEach(btn => {
        btn.addEventListener('click', handleQuickView);
    });
}

// Search Functionality
function handleSearch() {
    const query = searchInput.value.trim();
    
    if (query === '') {
        showNotification('Please enter a search term', 'warning');
        return;
    }

    // Log search query to console (as requested)
    console.log('Search Query:', query);
    
    // Show search feedback
    showNotification(`Searching for "${query}"...`, 'info');
    
    // Simulate search delay
    setTimeout(() => {
        showNotification(`Found results for "${query}"`, 'success');
        // In a real application, you would filter products here
        highlightSearchResults(query);
    }, 1000);
}

function highlightSearchResults(query) {
    const productCards = document.querySelectorAll('.product-card');
    const searchTerm = query.toLowerCase();
    
    productCards.forEach(card => {
        const productName = card.querySelector('.product-name').textContent.toLowerCase();
        const productBrand = card.querySelector('.product-brand').textContent.toLowerCase();
        
        // Simple search matching
        if (productName.includes(searchTerm) || productBrand.includes(searchTerm)) {
            card.style.border = '2px solid var(--primary-pink)';
            card.style.boxShadow = '0 0 20px rgba(233, 30, 99, 0.3)';
            
            // Remove highlight after 3 seconds
            setTimeout(() => {
                card.style.border = '';
                card.style.boxShadow = '';
            }, 3000);
        }
    });
}

// Add to Cart Functionality
function handleAddToCart(event) {
    const button = event.target;
    const productName = button.getAttribute('data-product');
    const productPrice = parseFloat(button.getAttribute('data-price'));
    
    // Create product object
    const product = {
        id: Date.now(), // Simple ID generation
        name: productName,
        price: productPrice,
        quantity: 1,
        image: button.closest('.product-card').querySelector('.product-img').src
    };
    
    // Add to cart
    addToCart(product);
    
    // Visual feedback
    showAddToCartAnimation(button);
    
    // Show notification
    showNotification(`${productName} added to cart! 🛒`, 'success');
}

function addToCart(product) {
    // Check if product already exists in cart
    const existingProduct = cart.find(item => item.name === product.name);
    
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push(product);
    }
    
    updateCartCount();
    saveCartToStorage();
}

function updateCartCount() {
    cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    
    if (cartCountElement) {
        cartCountElement.textContent = cartCount;
    }
    
    if (cartBadge) {
        if (cartCount > 0) {
            cartBadge.classList.add('show');
            cartBadge.classList.add('pulse');
            
            // Remove pulse animation after 1 second
            setTimeout(() => {
                cartBadge.classList.remove('pulse');
            }, 1000);
        } else {
            cartBadge.classList.remove('show');
        }
    }
}

// Cart Storage
function saveCartToStorage() {
    localStorage.setItem('nykaa_cart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const savedCart = localStorage.getItem('nykaa_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
    }
}

// Visual Animations
function showAddToCartAnimation(button) {
    // Store original text
    const originalText = button.textContent;
    
    // Change button appearance
    button.textContent = 'Added! ✓';
    button.style.backgroundColor = '#4caf50';
    button.style.transform = 'scale(0.95)';
    
    // Reset after 1.5 seconds
    setTimeout(() => {
        button.textContent = originalText;
        button.style.backgroundColor = '';
        button.style.transform = '';
    }, 1500);
}

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Styling
    Object.assign(notification.style, {
        position: 'fixed',
        top: '100px',
        right: '20px',
        padding: '12px 20px',
        borderRadius: '8px',
        color: 'white',
        fontWeight: '600',
        zIndex: '9999',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s ease-in-out',
        maxWidth: '300px',
        wordWrap: 'break-word'
    });
    
    // Type-specific styling
    switch (type) {
        case 'success':
            notification.style.backgroundColor = '#4caf50';
            break;
        case 'warning':
            notification.style.backgroundColor = '#ff9800';
            break;
        case 'error':
            notification.style.backgroundColor = '#f44336';
            break;
        default:
            notification.style.backgroundColor = '#2196f3';
    }
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Navigation Hovers
function setupNavigationHovers() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Mobile Menu Toggle (Basic implementation)
function toggleMobileMenu() {
    // This would typically show/hide a mobile navigation menu
    console.log('Mobile menu toggled');
    showNotification('Mobile menu feature coming soon! 📱', 'info');
}

// Cart Modal (Simple implementation)
function showCartModal() {
    if (cart.length === 0) {
        showNotification('Your cart is empty! Add some beautiful products 💄', 'info');
        return;
    }
    
    // Create cart summary
    const cartItems = cart.map(item => 
        `${item.name} x${item.quantity} - ₹${item.price * item.quantity}`
    ).join('\n');
    
    const totalAmount = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    
    const cartSummary = `Cart Summary:\n\n${cartItems}\n\nTotal: ₹${totalAmount}`;
    
    // Show cart in alert (in a real app, this would be a proper modal)
    alert(cartSummary);
}

// Quick View Functionality
function handleQuickView(event) {
    event.stopPropagation();
    const productCard = event.target.closest('.product-card');
    const productName = productCard.querySelector('.product-name').textContent;
    
    showNotification(`Quick view for ${productName}`, 'info');
    
    // In a real application, this would open a product quick view modal
    console.log('Quick view opened for:', productName);
}

// Scroll to Products
function scrollToProducts() {
    const productSection = document.querySelector('.product-section');
    if (productSection) {
        productSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Animate on Scroll
function animateOnScroll() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe product cards and feature cards
    const elementsToAnimate = document.querySelectorAll('.product-card, .feature-card');
    elementsToAnimate.forEach(el => observer.observe(el));
}

// Utility Functions
function formatPrice(price) {
    return `₹${price.toLocaleString('en-IN')}`;
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Error Handling
window.addEventListener('error', function(e) {
    console.error('An error occurred:', e.error);
    showNotification('Something went wrong. Please try again.', 'error');
});

// Page Load Performance
window.addEventListener('load', function() {
    console.log('Page fully loaded! Ready for beauty shopping 💅');
    
    // Add loading completion class for any final animations
    document.body.classList.add('loaded');
});

// Export functions for potential testing or external use
window.NykaaStore = {
    addToCart,
    cart,
    showNotification,
    formatPrice
};