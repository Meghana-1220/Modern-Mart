# Nykaa-Inspired Beauty E-commerce Website

A beautiful, responsive beauty e-commerce website inspired by Nykaa, built with HTML, CSS, and JavaScript.

## 🌟 Features

### Design & UI
- **Modern Pink Color Scheme**: Inspired by Nykaa's signature pink branding
- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Smooth Animations**: Hover effects, transitions, and scroll animations
- **Professional Layout**: Clean, modern design with proper spacing and typography

### Functionality
- **Interactive Search Bar**: Real-time search with console logging
- **Shopping Cart**: Add to cart functionality with localStorage persistence
- **Product Cards**: Beautiful product displays with ratings, pricing, and discounts
- **Notification System**: Toast notifications for user feedback
- **Quick View**: Product quick view functionality
- **Mobile Navigation**: Responsive mobile menu toggle

### Pages & Sections
- **Header**: Fixed navigation with logo, menu, and search
- **Hero Banner**: Eye-catching banner with call-to-action
- **Product Grid**: 4 featured beauty products with interactive cards
- **Features Section**: Service highlights (shipping, returns, etc.)
- **Footer**: Comprehensive footer with links and social media

## 🚀 Getting Started

1. **Open the Website**:
   - Open `index.html` in your web browser
   - Or use a local server for best experience

2. **Explore Features**:
   - Search for products using the search bar
   - Add products to cart and see the cart badge
   - Hover over products for interactive effects
   - Test responsive design by resizing the browser

## 📁 File Structure

```
nykaa-beauty-store/
├── index.html          # Main HTML file
├── styles/
│   └── nykaa.css       # All CSS styles
├── js/
│   └── nykaa.js        # JavaScript functionality
├── images/             # Image assets (placeholder folder)
└── README.md           # This file
```

## 🎨 Design Features

### Color Palette
- **Primary Pink**: #e91e63 (Nykaa's signature color)
- **Pink Variations**: Light and dark shades for depth
- **Neutral Grays**: For text and backgrounds
- **Accent Colors**: Success, warning, and info colors for notifications

### Typography
- **Font Family**: Segoe UI (system font for better performance)
- **Font Sizes**: Responsive scale from 0.75rem to 2.25rem
- **Font Weights**: 400, 500, 600, 700 for hierarchy

### Layout
- **CSS Grid**: For responsive product and feature layouts
- **Flexbox**: For component alignment and spacing
- **Container**: Max-width 1200px with responsive padding

## 💻 JavaScript Features

### Cart Management
- Add products to cart
- Persistent storage using localStorage
- Cart count badge with animations
- Cart summary modal

### Search Functionality
- Real-time search input handling
- Console logging of search queries
- Visual feedback with notifications
- Product highlighting for search results

### Animations
- Scroll-triggered animations using Intersection Observer
- Hover effects and micro-interactions
- Loading states and transitions
- Notification system with slide animations

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 480px (single column layout)
- **Small Mobile**: 480px - 767px (2-column features)
- **Tablet**: 768px - 991px (navigation appears)
- **Desktop**: > 992px (full layout)

### Mobile Features
- Hamburger menu toggle
- Touch-friendly button sizes
- Optimized spacing and typography
- Hidden search on very small screens

## 🛠️ Customization

### Colors
Update CSS variables in `:root` to change the color scheme:
```css
:root {
    --primary-pink: #e91e63;
    --primary-pink-dark: #c2185b;
    /* ... other colors */
}
```

### Products
Modify the product data in the HTML or extend with JavaScript:
```html
<div class="product-card">
    <!-- Product content -->
</div>
```

### Features
Add new features by extending the JavaScript:
```javascript
// Add new functionality
function newFeature() {
    // Implementation
}
```

## 🌐 Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **CSS Features**: Grid, Flexbox, Custom Properties
- **JavaScript**: ES6+ features with fallbacks

## 📈 Performance

- **Optimized Images**: Using Pexels CDN for fast loading
- **Minimal Dependencies**: Only Font Awesome for icons
- **Efficient CSS**: CSS variables and optimized selectors
- **Lazy Loading**: Intersection Observer for animations

## 🔧 Development

### Local Development
1. Use a local server (Live Server, Python SimpleHTTPServer, etc.)
2. Open browser developer tools for debugging
3. Check console for search queries and errors

### Code Structure
- **Modular CSS**: Organized by components and responsive design
- **Clean JavaScript**: Well-commented and organized functions
- **Semantic HTML**: Proper structure and accessibility

## 📝 License

This project is for educational purposes. Design inspired by Nykaa.

## 🤝 Contributing

Feel free to fork this project and make improvements:
1. Add more products
2. Implement user authentication
3. Add product filtering
4. Create additional pages
5. Enhance animations

---

**Built with ❤️ for beauty enthusiasts**