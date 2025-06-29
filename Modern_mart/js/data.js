// Mock Data for E-commerce Application

// Categories Data
const categories = [
    {
        id: '1',
        name: 'Electronics',
        image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=300',
        subcategories: ['Smartphones', 'Laptops', 'Headphones', 'Cameras'],
        productCount: 1250
    },
    {
        id: '2',
        name: 'Fashion',
        image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=300',
        subcategories: ['Mens Wear', 'Womens Wear', 'Footwear', 'Accessories'],
        productCount: 2100
    },
    {
        id: '3',
        name: 'Home & Kitchen',
        image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=300',
        subcategories: ['Furniture', 'Appliances', 'Decor', 'Kitchen'],
        productCount: 890
    },
    {
        id: '4',
        name: 'Books',
        image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=300',
        subcategories: ['Fiction', 'Non-Fiction', 'Educational', 'Comics'],
        productCount: 3200
    },
    {
        id: '5',
        name: 'Sports',
        image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=300',
        subcategories: ['Fitness', 'Outdoor', 'Team Sports', 'Individual Sports'],
        productCount: 750
    },
    {
        id: '6',
        name: 'Beauty',
        image: 'https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=300',
        subcategories: ['Skincare', 'Makeup', 'Hair Care', 'Fragrances'],
        productCount: 1100
    }
];

// Products Data
const products = [
    {
        id: '1',
        title: 'iPhone 15 Pro Max',
        price: 1199,
        originalPrice: 1299,
        discount: 8,
        rating: 4.8,
        reviewCount: 2453,
        image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=500',
        images: [
            'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=500',
            'https://images.pexels.com/photos/1440727/pexels-photo-1440727.jpeg?auto=compress&cs=tinysrgb&w=500',
            'https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&w=500'
        ],
        category: 'Electronics',
        brand: 'Apple',
        description: 'The most advanced iPhone ever with titanium design, A17 Pro chip, and professional camera system.',
        features: [
            'A17 Pro chip with 6-core GPU',
            'Triple camera system with 48MP main',
            'Titanium design',
            '6.7-inch Super Retina XDR display',
            'Action Button',
            'USB-C connector'
        ],
        specifications: {
            'Display': '6.7-inch Super Retina XDR',
            'Chip': 'A17 Pro',
            'Camera': '48MP Triple system',
            'Storage': '128GB',
            'Color': 'Natural Titanium',
            'Weight': '221 grams'
        },
        inStock: true,
        tags: ['flagship', 'premium', 'latest']
    },
    {
        id: '2',
        title: 'MacBook Air M3',
        price: 1099,
        originalPrice: 1199,
        discount: 8,
        rating: 4.9,
        reviewCount: 1876,
        image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=500',
        images: [
            'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=500',
            'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=500',
            'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=500'
        ],
        category: 'Electronics',
        brand: 'Apple',
        description: 'Incredibly thin and light laptop with M3 chip for exceptional performance and all-day battery life.',
        features: [
            'M3 chip with 8-core CPU',
            '13.6-inch Liquid Retina display',
            'Up to 18 hours battery life',
            'Silent fanless design',
            'MagSafe charging',
            '1080p FaceTime HD camera'
        ],
        specifications: {
            'Display': '13.6-inch Liquid Retina',
            'Chip': 'Apple M3',
            'Memory': '8GB unified memory',
            'Storage': '256GB SSD',
            'Weight': '2.7 pounds',
            'Color': 'Midnight'
        },
        inStock: true,
        tags: ['laptop', 'portable', 'performance']
    },
    {
        id: '3',
        title: 'Sony WH-1000XM5',
        price: 349,
        originalPrice: 399,
        discount: 13,
        rating: 4.7,
        reviewCount: 3421,
        image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500',
        images: [
            'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500',
            'https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=500',
            'https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=500'
        ],
        category: 'Electronics',
        brand: 'Sony',
        description: 'Industry-leading noise canceling headphones with exceptional sound quality and comfort.',
        features: [
            'Industry-leading noise canceling',
            '30-hour battery life',
            'Quick Charge (3 min = 3 hours)',
            'Crystal clear hands-free calling',
            'Touch sensor controls',
            'Speak-to-chat technology'
        ],
        specifications: {
            'Driver': '30mm dome type',
            'Frequency Response': '4Hz-40,000Hz',
            'Battery Life': '30 hours',
            'Charging': 'USB-C',
            'Weight': '250g',
            'Color': 'Black'
        },
        inStock: true,
        tags: ['headphones', 'noise-canceling', 'premium']
    },
    {
        id: '4',
        title: 'Samsung 4K Smart TV 55"',
        price: 599,
        originalPrice: 799,
        discount: 25,
        rating: 4.5,
        reviewCount: 892,
        image: 'https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&w=500',
        images: [
            'https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&w=500',
            'https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=500',
            'https://images.pexels.com/photos/1305264/pexels-photo-1305264.jpeg?auto=compress&cs=tinysrgb&w=500'
        ],
        category: 'Electronics',
        brand: 'Samsung',
        description: '55-inch 4K UHD Smart TV with vivid colors and smart features for endless entertainment.',
        features: [
            '4K UHD resolution',
            'Smart TV with apps',
            'HDR support',
            'Multiple HDMI ports',
            'Voice remote control',
            'Gaming mode'
        ],
        specifications: {
            'Screen Size': '55 inches',
            'Resolution': '4K UHD (3840x2160)',
            'Display Type': 'LED',
            'Smart Platform': 'Tizen OS',
            'HDMI Ports': '3',
            'USB Ports': '2'
        },
        inStock: true,
        tags: ['tv', 'smart', '4k', 'entertainment']
    },
    {
        id: '5',
        title: 'Nike Air Max 270',
        price: 129,
        originalPrice: 150,
        discount: 14,
        rating: 4.4,
        reviewCount: 1543,
        image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=500',
        images: [
            'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=500',
            'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=500',
            'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=500'
        ],
        category: 'Fashion',
        brand: 'Nike',
        description: 'Lifestyle shoes with maximum comfort and style, featuring the largest Air unit in Nike history.',
        features: [
            "Nike's largest Air unit",
            'Breathable mesh upper',
            'Rubber outsole for traction',
            'Comfortable all-day wear',
            'Iconic design',
            'Multiple colorways'
        ],
        specifications: {
            'Upper Material': 'Mesh and synthetic',
            'Sole Material': 'Rubber',
            'Closure Type': 'Lace-up',
            'Heel Height': '32mm',
            'Weight': '310g (Size 9)',
            'Origin': 'Vietnam'
        },
        inStock: true,
        tags: ['shoes', 'sneakers', 'casual', 'comfort']
    },
    {
        id: '6',
        title: 'Adidas Ultraboost 23',
        price: 179,
        originalPrice: 190,
        discount: 6,
        rating: 4.6,
        reviewCount: 987,
        image: 'https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=500',
        images: [
            'https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=500',
            'https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=500',
            'https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=500'
        ],
        category: 'Fashion',
        brand: 'Adidas',
        description: 'High-performance running shoes with responsive Boost cushioning and flexible design.',
        features: [
            'Boost midsole technology',
            'Primeknit upper for flexibility',
            'Continental rubber outsole',
            'Supportive heel counter',
            'Comfortable sock-like fit',
            'Reflective details'
        ],
        specifications: {
            'Upper Material': 'Primeknit',
            'Midsole': 'Boost foam',
            'Outsole': 'Continental rubber',
            'Drop': '10mm',
            'Weight': '320g (Size 9)',
            'Use': 'Running/Training'
        },
        inStock: true,
        tags: ['running', 'performance', 'comfortable', 'technology']
    },
    {
        id: '7',
        title: 'Canon EOS R5',
        price: 3899,
        originalPrice: 4199,
        discount: 7,
        rating: 4.9,
        reviewCount: 567,
        image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=500',
        images: [
            'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=500',
            'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=500'
        ],
        category: 'Electronics',
        brand: 'Canon',
        description: 'Professional mirrorless camera with 45MP sensor and 8K video recording capabilities.',
        features: [
            '45MP full-frame CMOS sensor',
            '8K video recording',
            'Dual Pixel CMOS AF II',
            'In-body image stabilization',
            '3.2-inch vari-angle touchscreen',
            'Weather-sealed construction'
        ],
        specifications: {
            'Sensor': '45MP Full-Frame CMOS',
            'Video': '8K RAW, 4K 120p',
            'ISO Range': '100-51200',
            'Autofocus': '1053 AF points',
            'Battery Life': '490 shots',
            'Weight': '738g'
        },
        inStock: true,
        tags: ['camera', 'professional', '8k', 'mirrorless']
    },
    {
        id: '8',
        title: 'Dyson V15 Detect',
        price: 749,
        originalPrice: 849,
        discount: 12,
        rating: 4.6,
        reviewCount: 1234,
        image: 'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=500',
        images: [
            'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=500'
        ],
        category: 'Home & Kitchen',
        brand: 'Dyson',
        description: 'Powerful cordless vacuum with laser dust detection and intelligent suction.',
        features: [
            'Laser dust detection',
            'Intelligent suction adjustment',
            '60 minutes run time',
            'Advanced filtration system',
            'Lightweight design',
            'Multiple attachments included'
        ],
        specifications: {
            'Suction Power': '230 AW',
            'Run Time': 'Up to 60 minutes',
            'Bin Capacity': '0.77L',
            'Weight': '3.1kg',
            'Filtration': 'Advanced whole-machine',
            'Warranty': '2 years'
        },
        inStock: true,
        tags: ['vacuum', 'cordless', 'smart', 'cleaning']
    }
];

// Search Suggestions
const searchSuggestions = [
    'iPhone',
    'MacBook',
    'Headphones',
    'Nike shoes',
    'Samsung TV',
    'Laptop',
    'Wireless earbuds',
    'Smart watch',
    'Gaming laptop',
    'Bluetooth speaker',
    'Camera',
    'Vacuum cleaner',
    'Running shoes',
    'Smartphone',
    'Tablet'
];

// User Data (Mock)
const mockUser = {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=150',
    phone: '+1 (555) 123-4567',
    addresses: [
        {
            id: '1',
            type: 'home',
            street: '123 Main Street',
            city: 'New York',
            state: 'NY',
            zipCode: '10001',
            isDefault: true
        },
        {
            id: '2',
            type: 'work',
            street: '456 Business Ave',
            city: 'New York',
            state: 'NY',
            zipCode: '10002',
            isDefault: false
        }
    ]
};

// Orders Data (Mock)
const mockOrders = [
    {
        id: 'ORD-001',
        items: [
            { product: products[0], quantity: 1 },
            { product: products[2], quantity: 1 }
        ],
        total: 1548,
        status: 'delivered',
        orderDate: '2024-01-15',
        estimatedDelivery: '2024-01-20',
        shippingAddress: mockUser.addresses[0]
    },
    {
        id: 'ORD-002',
        items: [
            { product: products[4], quantity: 2 }
        ],
        total: 258,
        status: 'shipped',
        orderDate: '2024-01-20',
        estimatedDelivery: '2024-01-25',
        shippingAddress: mockUser.addresses[0]
    }
];

// Reviews Data (Mock)
const mockReviews = [
    {
        id: '1',
        productId: '1',
        userId: '1',
        userName: 'Alice Johnson',
        rating: 5,
        title: 'Amazing phone!',
        comment: 'The camera quality is outstanding and the battery life is excellent.',
        date: '2024-01-10',
        helpful: 23,
        verified: true
    },
    {
        id: '2',
        productId: '1',
        userId: '2',
        userName: 'Bob Smith',
        rating: 4,
        title: 'Great but expensive',
        comment: 'Love the features but the price is quite high.',
        date: '2024-01-08',
        helpful: 15,
        verified: true
    },
    {
        id: '3',
        productId: '2',
        userId: '3',
        userName: 'Carol Davis',
        rating: 5,
        title: 'Perfect laptop',
        comment: 'Fast, lightweight, and great battery life. Perfect for work.',
        date: '2024-01-12',
        helpful: 31,
        verified: true
    }
];

// Promo Codes (Mock)
const promoCodes = {
    'SAVE10': { discount: 10, type: 'percentage', minOrder: 100 },
    'WELCOME20': { discount: 20, type: 'percentage', minOrder: 200 },
    'FREESHIP': { discount: 0, type: 'free_shipping', minOrder: 50 }
};

// Export data for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        categories,
        products,
        searchSuggestions,
        mockUser,
        mockOrders,
        mockReviews,
        promoCodes
    };
}