// Utility Functions for E-commerce Application

// Local Storage Utilities
const Storage = {
    get: (key, defaultValue = null) => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (error) {
            console.error('Error reading from localStorage:', error);
            return defaultValue;
        }
    },

    set: (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error('Error writing to localStorage:', error);
        }
    },

    remove: (key) => {
        try {
            localStorage.removeItem(key);
        } catch (error) {
            console.error('Error removing from localStorage:', error);
        }
    },

    clear: () => {
        try {
            localStorage.clear();
        } catch (error) {
            console.error('Error clearing localStorage:', error);
        }
    }
};

// Cart Management
const Cart = {
    get: () => Storage.get('cart', []),
    
    set: (cart) => Storage.set('cart', cart),
    
    add: (product, quantity = 1) => {
        const cart = Cart.get();
        const existingItem = cart.find(item => item.product.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({ product, quantity });
        }
        
        Cart.set(cart);
        updateCartCount();
        return cart;
    },
    
    remove: (productId) => {
        const cart = Cart.get().filter(item => item.product.id !== productId);
        Cart.set(cart);
        updateCartCount();
        return cart;
    },
    
    updateQuantity: (productId, quantity) => {
        const cart = Cart.get();
        const item = cart.find(item => item.product.id === productId);
        
        if (item) {
            if (quantity <= 0) {
                return Cart.remove(productId);
            } else {
                item.quantity = quantity;
                Cart.set(cart);
                updateCartCount();
            }
        }
        
        return cart;
    },
    
    clear: () => {
        Storage.remove('cart');
        updateCartCount();
    },
    
    getTotal: () => {
        const cart = Cart.get();
        return cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
    },
    
    getItemCount: () => {
        const cart = Cart.get();
        return cart.reduce((total, item) => total + item.quantity, 0);
    }
};

// Wishlist Management
const Wishlist = {
    get: () => Storage.get('wishlist', []),
    
    set: (wishlist) => Storage.set('wishlist', wishlist),
    
    add: (product) => {
        const wishlist = Wishlist.get();
        if (!wishlist.find(item => item.id === product.id)) {
            wishlist.push(product);
            Wishlist.set(wishlist);
            updateWishlistCount();
        }
        return wishlist;
    },
    
    remove: (productId) => {
        const wishlist = Wishlist.get().filter(item => item.id !== productId);
        Wishlist.set(wishlist);
        updateWishlistCount();
        return wishlist;
    },
    
    toggle: (product) => {
        const wishlist = Wishlist.get();
        const exists = wishlist.find(item => item.id === product.id);
        
        if (exists) {
            return Wishlist.remove(product.id);
        } else {
            return Wishlist.add(product);
        }
    },
    
    isInWishlist: (productId) => {
        const wishlist = Wishlist.get();
        return wishlist.some(item => item.id === productId);
    },
    
    clear: () => {
        Storage.remove('wishlist');
        updateWishlistCount();
    }
};

// Theme Management
const Theme = {
    get: () => Storage.get('theme', 'light'),
    
    set: (theme) => {
        Storage.set('theme', theme);
        document.documentElement.classList.toggle('dark', theme === 'dark');
        updateThemeIcons();
    },
    
    toggle: () => {
        const currentTheme = Theme.get();
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        Theme.set(newTheme);
        return newTheme;
    },
    
    init: () => {
        const theme = Theme.get();
        document.documentElement.classList.toggle('dark', theme === 'dark');
        updateThemeIcons();
    }
};

// User Management
const User = {
    get: () => Storage.get('user', null),
    
    set: (user) => Storage.set('user', user),
    
    login: (userData) => {
        User.set(userData);
        updateUserUI();
    },
    
    logout: () => {
        Storage.remove('user');
        Cart.clear();
        Wishlist.clear();
        updateUserUI();
        window.location.href = 'index.html';
    },
    
    isLoggedIn: () => User.get() !== null
};

// URL Utilities
const URL = {
    getParams: () => {
        const params = new URLSearchParams(window.location.search);
        const result = {};
        for (const [key, value] of params) {
            result[key] = value;
        }
        return result;
    },
    
    setParam: (key, value) => {
        const url = new URL(window.location);
        url.searchParams.set(key, value);
        window.history.pushState({}, '', url);
    },
    
    removeParam: (key) => {
        const url = new URL(window.location);
        url.searchParams.delete(key);
        window.history.pushState({}, '', url);
    }
};

// Format Utilities
const Format = {
    currency: (amount, currency = 'USD') => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currency
        }).format(amount);
    },
    
    number: (number) => {
        return new Intl.NumberFormat('en-US').format(number);
    },
    
    date: (date, options = {}) => {
        const defaultOptions = {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
        return new Intl.DateTimeFormat('en-US', { ...defaultOptions, ...options }).format(new Date(date));
    },
    
    truncate: (text, length = 100) => {
        if (text.length <= length) return text;
        return text.substring(0, length) + '...';
    }
};

// Validation Utilities
const Validate = {
    email: (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },
    
    password: (password) => {
        // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    },
    
    phone: (phone) => {
        const phoneRegex = /^\+?[\d\s\-\(\)]{10,}$/;
        return phoneRegex.test(phone);
    },
    
    required: (value) => {
        return value !== null && value !== undefined && value.toString().trim() !== '';
    }
};

// Animation Utilities
const Animation = {
    fadeIn: (element, duration = 300) => {
        element.style.opacity = '0';
        element.style.display = 'block';
        
        let start = null;
        const animate = (timestamp) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const opacity = Math.min(progress / duration, 1);
            
            element.style.opacity = opacity;
            
            if (progress < duration) {
                requestAnimationFrame(animate);
            }
        };
        
        requestAnimationFrame(animate);
    },
    
    fadeOut: (element, duration = 300) => {
        let start = null;
        const animate = (timestamp) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const opacity = Math.max(1 - (progress / duration), 0);
            
            element.style.opacity = opacity;
            
            if (progress < duration) {
                requestAnimationFrame(animate);
            } else {
                element.style.display = 'none';
            }
        };
        
        requestAnimationFrame(animate);
    },
    
    slideDown: (element, duration = 300) => {
        element.style.height = '0';
        element.style.overflow = 'hidden';
        element.style.display = 'block';
        
        const targetHeight = element.scrollHeight;
        let start = null;
        
        const animate = (timestamp) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const height = Math.min((progress / duration) * targetHeight, targetHeight);
            
            element.style.height = height + 'px';
            
            if (progress < duration) {
                requestAnimationFrame(animate);
            } else {
                element.style.height = 'auto';
                element.style.overflow = 'visible';
            }
        };
        
        requestAnimationFrame(animate);
    }
};

// Debounce Utility
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// Throttle Utility
const throttle = (func, limit) => {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
};

// Loading Utilities
const Loading = {
    show: () => {
        const overlay = document.getElementById('loadingOverlay');
        if (overlay) {
            overlay.classList.add('active');
        }
    },
    
    hide: () => {
        const overlay = document.getElementById('loadingOverlay');
        if (overlay) {
            overlay.classList.remove('active');
        }
    }
};

// Toast Notifications
const Toast = {
    show: (message, type = 'info', duration = 3000) => {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.textContent = message;
        
        // Add toast styles if not already present
        if (!document.querySelector('#toast-styles')) {
            const styles = document.createElement('style');
            styles.id = 'toast-styles';
            styles.textContent = `
                .toast {
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    padding: 12px 24px;
                    border-radius: 8px;
                    color: white;
                    font-weight: 500;
                    z-index: 10000;
                    animation: slideInRight 0.3s ease-out;
                }
                .toast-success { background-color: #059669; }
                .toast-error { background-color: #dc2626; }
                .toast-warning { background-color: #d97706; }
                .toast-info { background-color: #2563eb; }
                @keyframes slideInRight {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
            `;
            document.head.appendChild(styles);
        }
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.style.animation = 'slideInRight 0.3s ease-out reverse';
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.parentNode.removeChild(toast);
                }
            }, 300);
        }, duration);
    },
    
    success: (message) => Toast.show(message, 'success'),
    error: (message) => Toast.show(message, 'error'),
    warning: (message) => Toast.show(message, 'warning'),
    info: (message) => Toast.show(message, 'info')
};

// Update UI Functions
function updateCartCount() {
    const count = Cart.getItemCount();
    const badges = document.querySelectorAll('#cartCount, #mobileCartCount');
    badges.forEach(badge => {
        badge.textContent = count;
        badge.style.display = count > 0 ? 'flex' : 'none';
    });
}

function updateWishlistCount() {
    const count = Wishlist.get().length;
    const badges = document.querySelectorAll('#wishlistCount, #mobileWishlistCount');
    badges.forEach(badge => {
        badge.textContent = count;
        badge.style.display = count > 0 ? 'flex' : 'none';
    });
}

function updateThemeIcons() {
    const theme = Theme.get();
    const themeButtons = document.querySelectorAll('#themeToggle, #mobileThemeToggle');
    
    themeButtons.forEach(button => {
        const icon = button.querySelector('i');
        const text = button.querySelector('span');
        
        if (icon) {
            icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
        }
        
        if (text) {
            text.textContent = theme === 'light' ? 'Dark Mode' : 'Light Mode';
        }
    });
}

function updateUserUI() {
    const user = User.get();
    const profileLinks = document.querySelectorAll('a[href="profile.html"]');
    
    profileLinks.forEach(link => {
        if (user) {
            link.href = 'profile.html';
            const text = link.querySelector('.nav-text, span');
            if (text) text.textContent = 'Profile';
        } else {
            link.href = 'login.html';
            const text = link.querySelector('.nav-text, span');
            if (text) text.textContent = 'Login';
        }
    });
}

// Initialize utilities when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    Theme.init();
    updateCartCount();
    updateWishlistCount();
    updateUserUI();
});

// Export utilities for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        Storage,
        Cart,
        Wishlist,
        Theme,
        User,
        URL,
        Format,
        Validate,
        Animation,
        Loading,
        Toast,
        debounce,
        throttle
    };
}