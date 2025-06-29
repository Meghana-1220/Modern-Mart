// Reusable Components for E-commerce Application

// Product Card Component
function createProductCard(product, showQuickActions = true) {
    const isInWishlist = Wishlist.isInWishlist(product.id);
    const isInCart = Cart.get().some(item => item.product.id === product.id);
    
    return `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.title}" class="product-image" loading="lazy">
                
                ${product.discount ? `
                    <div class="product-badge">${product.discount}% OFF</div>
                ` : ''}
                
                ${showQuickActions ? `
                    <div class="product-actions">
                        <button class="action-btn wishlist-btn ${isInWishlist ? 'active' : ''}" 
                                onclick="toggleWishlist('${product.id}')" 
                                title="${isInWishlist ? 'Remove from wishlist' : 'Add to wishlist'}">
                            <i class="fas fa-heart"></i>
                        </button>
                        <button class="action-btn compare-btn" 
                                onclick="addToCompare('${product.id}')" 
                                title="Add to compare">
                            <i class="fas fa-balance-scale"></i>
                        </button>
                    </div>
                ` : ''}
            </div>
            
            <div class="product-info">
                <div class="product-brand">${product.brand}</div>
                <h3 class="product-title">
                    <a href="product-detail.html?id=${product.id}">${product.title}</a>
                </h3>
                
                <div class="product-rating">
                    <div class="stars">
                        ${generateStars(product.rating)}
                    </div>
                    <span class="rating-count">(${Format.number(product.reviewCount)})</span>
                </div>
                
                <div class="product-price">
                    <span class="current-price">${Format.currency(product.price)}</span>
                    ${product.originalPrice ? `
                        <span class="original-price">${Format.currency(product.originalPrice)}</span>
                    ` : ''}
                </div>
                
                ${product.tags && product.tags.length > 0 ? `
                    <div class="product-tags">
                        ${product.tags.slice(0, 2).map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                ` : ''}
                
                <button class="add-to-cart-btn ${isInCart ? 'added' : ''}" 
                        onclick="addToCart('${product.id}')"
                        ${!product.inStock ? 'disabled' : ''}>
                    <i class="fas fa-shopping-cart"></i>
                    ${!product.inStock ? 'Out of Stock' : isInCart ? 'Added to Cart' : 'Add to Cart'}
                </button>
            </div>
        </div>
    `;
}

// Category Card Component
function createCategoryCard(category) {
    return `
        <a href="products.html?category=${category.name.toLowerCase()}" class="category-card">
            <img src="${category.image}" alt="${category.name}" class="category-image" loading="lazy">
            <div class="category-info">
                <h3 class="category-name">${category.name}</h3>
                <p class="category-count">${Format.number(category.productCount)} products</p>
            </div>
        </a>
    `;
}

// Cart Item Component
function createCartItem(item) {
    const { product, quantity } = item;
    const subtotal = product.price * quantity;
    
    return `
        <div class="cart-item" data-product-id="${product.id}">
            <div class="cart-item-image">
                <img src="${product.image}" alt="${product.title}" loading="lazy">
            </div>
            
            <div class="cart-item-details">
                <h3 class="cart-item-title">
                    <a href="product-detail.html?id=${product.id}">${product.title}</a>
                </h3>
                <p class="cart-item-brand">${product.brand}</p>
                <p class="cart-item-price">${Format.currency(product.price)}</p>
                
                ${product.originalPrice ? `
                    <p class="cart-item-original-price">${Format.currency(product.originalPrice)}</p>
                ` : ''}
            </div>
            
            <div class="cart-item-quantity">
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateCartQuantity('${product.id}', ${quantity - 1})">
                        <i class="fas fa-minus"></i>
                    </button>
                    <span class="quantity-value">${quantity}</span>
                    <button class="quantity-btn" onclick="updateCartQuantity('${product.id}', ${quantity + 1})">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
            
            <div class="cart-item-subtotal">
                <span class="subtotal-amount">${Format.currency(subtotal)}</span>
            </div>
            
            <div class="cart-item-actions">
                <button class="remove-btn" onclick="removeFromCart('${product.id}')" title="Remove item">
                    <i class="fas fa-trash"></i>
                </button>
                <button class="wishlist-btn" onclick="moveToWishlist('${product.id}')" title="Move to wishlist">
                    <i class="fas fa-heart"></i>
                </button>
            </div>
        </div>
    `;
}

// Order Item Component
function createOrderItem(order) {
    const statusClass = {
        'pending': 'status-pending',
        'confirmed': 'status-confirmed',
        'shipped': 'status-shipped',
        'delivered': 'status-delivered',
        'cancelled': 'status-cancelled'
    };
    
    return `
        <div class="order-item">
            <div class="order-header">
                <div class="order-info">
                    <h3 class="order-id">Order #${order.id}</h3>
                    <p class="order-date">Placed on ${Format.date(order.orderDate)}</p>
                </div>
                <div class="order-status">
                    <span class="status-badge ${statusClass[order.status]}">${order.status.toUpperCase()}</span>
                </div>
            </div>
            
            <div class="order-items">
                ${order.items.map(item => `
                    <div class="order-product">
                        <img src="${item.product.image}" alt="${item.product.title}" class="order-product-image">
                        <div class="order-product-details">
                            <h4>${item.product.title}</h4>
                            <p>Quantity: ${item.quantity}</p>
                            <p class="order-product-price">${Format.currency(item.product.price)}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <div class="order-footer">
                <div class="order-total">
                    <strong>Total: ${Format.currency(order.total)}</strong>
                </div>
                <div class="order-actions">
                    <button class="btn btn-secondary" onclick="viewOrderDetails('${order.id}')">
                        View Details
                    </button>
                    ${order.status === 'delivered' ? `
                        <button class="btn btn-primary" onclick="reorderItems('${order.id}')">
                            Reorder
                        </button>
                    ` : ''}
                </div>
            </div>
        </div>
    `;
}

// Address Card Component
function createAddressCard(address) {
    return `
        <div class="address-card ${address.isDefault ? 'default' : ''}" data-address-id="${address.id}">
            <div class="address-header">
                <div class="address-type">
                    <i class="fas fa-${address.type === 'home' ? 'home' : address.type === 'work' ? 'building' : 'map-marker-alt'}"></i>
                    <span>${address.type.charAt(0).toUpperCase() + address.type.slice(1)}</span>
                </div>
                ${address.isDefault ? '<span class="default-badge">Default</span>' : ''}
            </div>
            
            <div class="address-details">
                <p>${address.street}</p>
                <p>${address.city}, ${address.state} ${address.zipCode}</p>
            </div>
            
            <div class="address-actions">
                <button class="btn btn-secondary btn-sm" onclick="editAddress('${address.id}')">
                    <i class="fas fa-edit"></i>
                    Edit
                </button>
                ${!address.isDefault ? `
                    <button class="btn btn-primary btn-sm" onclick="setDefaultAddress('${address.id}')">
                        Set Default
                    </button>
                ` : ''}
                <button class="btn btn-danger btn-sm" onclick="deleteAddress('${address.id}')">
                    <i class="fas fa-trash"></i>
                    Delete
                </button>
            </div>
        </div>
    `;
}

// Review Component
function createReviewItem(review) {
    return `
        <div class="review-item">
            <div class="review-header">
                <div class="reviewer-info">
                    <div class="reviewer-avatar">
                        <i class="fas fa-user"></i>
                    </div>
                    <div class="reviewer-details">
                        <h4 class="reviewer-name">${review.userName}</h4>
                        <div class="review-rating">
                            ${generateStars(review.rating)}
                        </div>
                    </div>
                </div>
                <div class="review-date">
                    ${Format.date(review.date)}
                    ${review.verified ? '<span class="verified-badge">Verified Purchase</span>' : ''}
                </div>
            </div>
            
            <div class="review-content">
                <h5 class="review-title">${review.title}</h5>
                <p class="review-comment">${review.comment}</p>
            </div>
            
            <div class="review-footer">
                <button class="helpful-btn" onclick="markHelpful('${review.id}')">
                    <i class="fas fa-thumbs-up"></i>
                    Helpful (${review.helpful})
                </button>
            </div>
        </div>
    `;
}

// Filter Component
function createFilterSection(title, options, type = 'checkbox') {
    return `
        <div class="filter-group">
            <h4>${title}</h4>
            <div class="filter-options">
                ${options.map(option => `
                    <label class="filter-option">
                        <input type="${type}" name="${title.toLowerCase()}" value="${option.value}" 
                               onchange="applyFilters()">
                        <span class="filter-label">${option.label}</span>
                        ${option.count ? `<span class="filter-count">(${option.count})</span>` : ''}
                    </label>
                `).join('')}
            </div>
        </div>
    `;
}

// Pagination Component
function createPagination(currentPage, totalPages, onPageChange) {
    if (totalPages <= 1) return '';
    
    let pagination = '<div class="pagination">';
    
    // Previous button
    if (currentPage > 1) {
        pagination += `
            <button class="pagination-btn" onclick="${onPageChange}(${currentPage - 1})">
                <i class="fas fa-chevron-left"></i>
                Previous
            </button>
        `;
    }
    
    // Page numbers
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);
    
    if (startPage > 1) {
        pagination += `<button class="pagination-btn" onclick="${onPageChange}(1)">1</button>`;
        if (startPage > 2) {
            pagination += '<span class="pagination-ellipsis">...</span>';
        }
    }
    
    for (let i = startPage; i <= endPage; i++) {
        pagination += `
            <button class="pagination-btn ${i === currentPage ? 'active' : ''}" 
                    onclick="${onPageChange}(${i})">
                ${i}
            </button>
        `;
    }
    
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            pagination += '<span class="pagination-ellipsis">...</span>';
        }
        pagination += `<button class="pagination-btn" onclick="${onPageChange}(${totalPages})">${totalPages}</button>`;
    }
    
    // Next button
    if (currentPage < totalPages) {
        pagination += `
            <button class="pagination-btn" onclick="${onPageChange}(${currentPage + 1})">
                Next
                <i class="fas fa-chevron-right"></i>
            </button>
        `;
    }
    
    pagination += '</div>';
    return pagination;
}

// Breadcrumb Component
function createBreadcrumb(items) {
    return `
        <nav class="breadcrumb">
            ${items.map((item, index) => `
                ${index > 0 ? '<span>/</span>' : ''}
                ${item.url ? `<a href="${item.url}">${item.label}</a>` : `<span>${item.label}</span>`}
            `).join('')}
        </nav>
    `;
}

// Search Suggestions Component
function createSearchSuggestions(suggestions, query) {
    if (!suggestions.length) {
        return '<div class="search-suggestion">No suggestions found</div>';
    }
    
    return suggestions.map(suggestion => `
        <div class="search-suggestion" onclick="selectSuggestion('${suggestion}')">
            <i class="fas fa-search"></i>
            ${suggestion}
        </div>
    `).join('');
}

// Helper Functions
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    let stars = '';
    
    // Full stars
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star star"></i>';
    }
    
    // Half star
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt star"></i>';
    }
    
    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star star"></i>';
    }
    
    return stars;
}

// Global Component Functions
function toggleWishlist(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        Wishlist.toggle(product);
        
        // Update wishlist button
        const button = document.querySelector(`[data-product-id="${productId}"] .wishlist-btn`);
        if (button) {
            const isInWishlist = Wishlist.isInWishlist(productId);
            button.classList.toggle('active', isInWishlist);
            button.title = isInWishlist ? 'Remove from wishlist' : 'Add to wishlist';
        }
        
        Toast.success(Wishlist.isInWishlist(productId) ? 'Added to wishlist' : 'Removed from wishlist');
    }
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product && product.inStock) {
        Cart.add(product);
        
        // Update add to cart button
        const button = document.querySelector(`[data-product-id="${productId}"] .add-to-cart-btn`);
        if (button) {
            button.classList.add('added');
            button.innerHTML = '<i class="fas fa-check"></i> Added to Cart';
            
            setTimeout(() => {
                button.classList.remove('added');
                button.innerHTML = '<i class="fas fa-shopping-cart"></i> Add to Cart';
            }, 2000);
        }
        
        Toast.success('Added to cart');
    }
}

function updateCartQuantity(productId, newQuantity) {
    Cart.updateQuantity(productId, newQuantity);
    
    // Refresh cart display if on cart page
    if (window.location.pathname.includes('cart.html')) {
        loadCartItems();
    }
}

function removeFromCart(productId) {
    Cart.remove(productId);
    
    // Refresh cart display if on cart page
    if (window.location.pathname.includes('cart.html')) {
        loadCartItems();
    }
    
    Toast.success('Removed from cart');
}

function moveToWishlist(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        Cart.remove(productId);
        Wishlist.add(product);
        
        // Refresh cart display if on cart page
        if (window.location.pathname.includes('cart.html')) {
            loadCartItems();
        }
        
        Toast.success('Moved to wishlist');
    }
}

// Export components for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        createProductCard,
        createCategoryCard,
        createCartItem,
        createOrderItem,
        createAddressCard,
        createReviewItem,
        createFilterSection,
        createPagination,
        createBreadcrumb,
        createSearchSuggestions,
        generateStars
    };
}