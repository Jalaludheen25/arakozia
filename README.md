# Arakozia - Premium Global Exports Website

A modern, responsive website for Arakozia, a premium import & export company specializing in seafood, grains, spices, meats, and cooking oils.

![Arakozia](assets/images/Arakozia-icon.png)

---

## 🌟 Project Overview

Arakozia is a professional import & export company website featuring:
- Animated hero slider
- Product catalog with mini cards and detailed views
- Interactive flip cards
- Autoplay video showcase
- Mobile-responsive design
- Modern UI with pista green and golden color scheme

**Live Demo:** [https://github.com/Jalaludheen25/arakozia](https://github.com/Jalaludheen25/arakozia)

---

## 📋 Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Pages & Sections](#pages--sections)
- [Color Scheme](#color-scheme)
- [Products](#products)
- [Customization](#customization)
- [Browser Support](#browser-support)
- [Contributing](#contributing)

---

## ✨ Features

### Homepage Features
- **Animated Hero Slider** - 5 slides with Ken Burns zoom effect, auto-play every 5 seconds
- **About Section** - 4 flip cards with company values (vertical flip on desktop, tap-to-flip on mobile)
- **Featured Product** - Highlighted product showcase with call-to-action
- **Traditional Grains & Spices** - Product category cards with clickable items
- **Premium Global Exports** - 3 flip cards showcasing product categories
- **Stats Cards** - 4 statistics cards (15M+ customers, 100% quality metrics)
- **Product Videos** - 6 autoplay videos without controls (muted, looping)
- **Product Gallery** - Masonry grid layout with 7 images
- **FAQ Section** - Accordion-style questions with animated icons
- **Contact Form** - Distributor/wholesaler inquiry form
- **Mobile Menu** - Hamburger menu with slide-in navigation

### Products Page Features
- **Mini Product Cards** - Grid layout showing all products by category
- **Detailed Price Cards** - Full product information with specifications
- **Category Navigation** - Browse by Food Grains or Whole Spices
- **Individual Product Pages** - Dedicated pages for each product
- **Responsive Grid** - Adapts from 4 columns to 1 column on mobile

### Interactive Elements
- Smooth scroll navigation
- Hover effects on cards and buttons
- Animated transitions
- FAQ accordion
- Video autoplay on scroll
- Mobile-optimized touch interactions

---

## 🛠 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom styling with Flexbox and Grid
- **JavaScript (ES6)** - Interactive features and animations
- **Font Awesome 6.4.0** - Icons
- **Google Fonts** - Outfit font family

### No Frameworks
This project is built with vanilla HTML, CSS, and JavaScript - no frameworks or libraries required!

---

## 📁 Project Structure

```
arakozia/
│
├── index.html                      # Homepage
├── products.html                   # Products listing page
├── README.md                       # This file
├── IMAGE-REPLACEMENT-GUIDE.md      # Guide for replacing images
├── PRODUCT-IMAGES-GUIDE.md         # Guide for product images
├── VIDEO-GUIDE.md                  # Guide for adding videos
│
├── css/
│   ├── style.css                   # Main stylesheet
│   └── products.css                # Products page stylesheet
│
├── js/
│   ├── main.js                     # Main JavaScript
│   └── products.js                 # Products page logic & data
│
├── assets/
│   ├── images/
│   │   ├── Arakozia-icon.png       # Logo
│   │   ├── hero-slide-1.jpg        # Hero slider images (1-5)
│   │   ├── featured-product.jpg    # Featured product image
│   │   ├── gallery-1.jpg           # Gallery images (1-7)
│   │   ├── faq-product.jpg         # FAQ section image
│   │   ├── video-thumb-1.jpg       # Video thumbnails (1-6)
│   │   └── products/
│   │       ├── pearl-millet.jpg    # Individual product images
│   │       ├── white-sorghum.jpg
│   │       ├── basmati-rice.jpg
│   │       ├── organic-pulses.jpg
│   │       ├── black-mustard.jpg
│   │       ├── curom-seeds.jpg
│   │       ├── coriander-seeds.jpg
│   │       ├── cumin-seeds.jpg
│   │       ├── green-cardamom.jpg
│   │       ├── food-grains.jpg     # Category image
│   │       └── whole-spices.jpg    # Category image
│   │
│   └── videos/
│       ├── product-video-1.mp4     # Product videos (1-6)
│       ├── product-video-2.mp4
│       ├── product-video-3.mp4
│       ├── product-video-4.mp4
│       ├── product-video-5.mp4
│       └── product-video-6.mp4
```

---

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Jalaludheen25/arakozia.git
cd arakozia
```

### 2. Open in Browser

Simply open `index.html` in your web browser:

```bash
# macOS
open index.html

# Windows
start index.html

# Linux
xdg-open index.html
```

### 3. Or Use a Local Server (Recommended)

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

---

## 📄 Pages & Sections

### Homepage (`index.html`)

#### 1. Header
- Logo (90px height)
- Navigation menu
- Cart icon
- Mobile hamburger menu
- Golden bottom border (4px)

#### 2. Hero Section
- 5 animated slides
- Auto-play every 5 seconds
- Ken Burns zoom effect
- Navigation arrows and indicators
- Pause on hover

#### 3. About Arakozia Section
- 4 flip cards (2x2 grid)
- Vertical flip animation (rotateY)
- Company values and mission
- Tap-to-flip on mobile

#### 4. Featured Product Section
- Large product image
- Product description
- "Order Now" button
- Responsive layout

#### 5. Traditional Grains & Spices Section
- 2 product category cards
- Clickable category titles
- Clickable individual products
- Links to products page
- Pista green gradient background

#### 6. Premium Global Exports Section
- 3 flip cards (seafood, grains, meats)
- 4 stats cards (overlapping design)
- Dark green to light green gradient

#### 7. Product Videos Section
- 6 autoplay videos
- Muted and looping
- No controls (clean look)
- 3-column grid (responsive)

#### 8. Product Gallery Section
- Masonry grid layout
- 7 images with varied sizes
- Hover overlay with captions
- Sage green background with diagonal top

#### 9. FAQ Section
- 3 accordion questions
- Animated plus/X icons
- Product image on left
- Expandable answers

#### 10. Contact Info Bar
- Phone, address, email
- Icon-based layout
- Centered design

#### 11. Distributor Form Section
- Multi-field contact form
- Sage green background
- White form card
- Blue submit button
- Diagonal top cut

#### 12. Footer
- Company info
- Quick links
- Contact details
- Copyright notice

### Products Page (`products.html`)

#### All Products View (No Parameters)
- Shows all products organized by category
- Mini cards in grid layout
- Category headings in golden color

#### Category View (`?category=food-grains`)
- Shows all products in selected category
- Mini cards with product images
- "Enquiry Now" and "View More" buttons

#### Single Product View (`?category=food-grains&product=pearl-millet`)
- Detailed product information
- Large product image with thumbnails
- Price and MOQ
- Specifications table
- Product description and features
- "Get Best Price" button

---

## 🎨 Color Scheme

### Primary Colors
- **Dark Sage Green:** `#4E6E5D` - Header, footer, primary elements
- **Pista Green:** `#8fa395` - Accents, cards, backgrounds
- **Light Pista:** `#dcead9` - Light backgrounds, gradients
- **Golden Yellow:** `#C5A059` - Accents, highlights, borders

### Secondary Colors
- **Muted Blue-Green:** `#7DA2A9` - Secondary accents
- **Text Dark:** `#2c3e30` - Main text color
- **Text Muted:** `#6b7c70` - Secondary text
- **White:** `#ffffff` - Backgrounds, text on dark
- **Light Background:** `#f4f8f4` - Section backgrounds

### Gradient Examples
```css
/* Hero wrapper */
background: linear-gradient(180deg, #dcead9 0%, #ffffff 100%);

/* Premium exports section */
background: linear-gradient(180deg, #4E6E5D 0%, #9caf9c 100%);

/* Button gradient */
background: linear-gradient(90deg, #c9b896 0%, #4E6E5D 100%);
```

---

## 🛍 Products

### Food Grains Category (4 Products)

1. **Pearl Millet Seeds**
   - Price: ₹ 45.00/kg
   - MOQ: 1000 kg
   - Grade: Human Grade
   - Image: `pearl-millet.jpg`

2. **White Sorghum Seeds**
   - Price: ₹ 60.00/kg
   - MOQ: 1000 kg
   - Grade: Food Grade
   - Image: `white-sorghum.jpg`

3. **Premium Basmati Rice**
   - Price: ₹ 120.00/kg
   - MOQ: 500 kg
   - Grade: Premium Grade
   - Image: `basmati-rice.jpg`

4. **Organic Pulses**
   - Price: ₹ 85.00/kg
   - MOQ: 500 kg
   - Grade: Organic Grade
   - Image: `organic-pulses.jpg`

### Whole Spices Category (5 Products)

1. **Black Mustard Seeds**
   - Price: ₹ 90.00/kg
   - MOQ: 500 kg
   - Grade: A Grade
   - Image: `black-mustard.jpg`

2. **Curom Seeds (Ajwain)**
   - Price: ₹ 160.00/kg
   - MOQ: 50 kg
   - Grade: A Grade
   - Image: `curom-seeds.jpg`

3. **Coriander Seeds**
   - Price: ₹ 75.00/kg
   - MOQ: 500 kg
   - Grade: Food Grade
   - Image: `coriander-seeds.jpg`

4. **Cumin Seeds**
   - Price: ₹ 180.00/kg
   - MOQ: 500 kg
   - Grade: Premium Grade
   - Image: `cumin-seeds.jpg`

5. **Green Cardamom**
   - Price: ₹ 1,200.00/kg
   - MOQ: 100 kg
   - Grade: Premium Grade
   - Image: `green-cardamom.jpg`

### Adding New Products

Edit `js/products.js` and add to the appropriate category:

```javascript
{
    id: 'product-id',
    name: 'Product Name',
    price: '₹ 100.00',
    priceDetails: '/ Kilogram (+ 5% GST applicable)',
    moq: '500 Kilogram (MOQ)',
    image: 'assets/images/products/product-name.jpg',
    specs: {
        'Business Type': 'Exporter, Supplier, Trader',
        'Grade': 'Premium Grade',
        // Add more specifications
    },
    description: 'Product description here...',
    features: [
        'Feature 1',
        'Feature 2',
        'Feature 3'
    ]
}
```

---

## 🎯 Customization

### Changing Colors

Edit `css/style.css` root variables:

```css
:root {
    --primary-color: #4E6E5D;
    --secondary-color: #7DA2A9;
    --accent-color: #C5A059;
    --text-dark: #2c3e30;
    --text-muted: #6b7c70;
    /* Modify as needed */
}
```

### Changing Logo

Replace `assets/images/Arakozia-icon.png` with your logo (recommended size: 180x90px)

### Changing Hero Slides

Replace images in `assets/images/`:
- `hero-slide-1.jpg` through `hero-slide-5.jpg`
- Recommended size: 1920x1080px

### Adjusting Slider Speed

Edit `js/main.js`:

```javascript
const slideIntervalTime = 5000; // Change to desired milliseconds
```

### Adding/Removing Sections

Simply comment out or delete the section HTML in `index.html`

### Modifying Mobile Breakpoints

Edit `css/style.css`:

```css
@media (max-width: 768px) {
    /* Mobile styles */
}

@media (max-width: 992px) {
    /* Tablet styles */
}
```

---

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

### Required Features
- CSS Grid
- CSS Flexbox
- CSS Transforms (3D)
- HTML5 Video
- ES6 JavaScript

---

## 🔧 Development

### File Naming Conventions
- HTML files: lowercase with hyphens (`products.html`)
- CSS files: lowercase with hyphens (`style.css`)
- JS files: lowercase with hyphens (`main.js`)
- Images: lowercase with hyphens (`pearl-millet.jpg`)
- Videos: lowercase with hyphens (`product-video-1.mp4`)

### Code Style
- Indentation: 4 spaces
- CSS: BEM-like naming for classes
- JavaScript: camelCase for variables and functions
- Comments: Descriptive section headers

---

## 📝 Key Features Explained

### 1. Hero Slider Animation
- Uses CSS transforms for smooth transitions
- Ken Burns effect (zoom from scale 1 to 1.05)
- Content fades in from bottom
- Automatic progression with manual controls
- Pauses on hover

### 2. Flip Cards
- 3D CSS transforms (rotateY)
- Perspective for depth effect
- Different behavior on mobile (tap-to-flip)
- Smooth 0.8s transition

### 3. Video Autoplay
- Muted for browser autoplay policy compliance
- Loops continuously
- No controls for clean aesthetic
- `playsinline` for iOS compatibility

### 4. Products System
- Dynamic loading from JavaScript data
- URL parameters for navigation
- Three views: all products, category, single product
- Mini cards and detailed cards

### 5. Mobile Responsiveness
- Hamburger menu with slide-in animation
- Stacked layouts on small screens
- Touch-optimized interactions
- Adjusted font sizes and spacing

---

## 🚨 Common Issues & Solutions

### Videos Not Playing
- **Issue:** Video file extension case sensitivity
- **Solution:** Ensure all videos are `.mp4` (lowercase)
- **Command:** `mv product-video-4.MP4 product-video-4.mp4`

### Images Not Loading
- **Issue:** Incorrect file paths
- **Solution:** Check that images are in correct folders
- **Verify:** `assets/images/products/` for product images

### Flip Cards Not Working on Mobile
- **Issue:** Hover doesn't work on touch devices
- **Solution:** JavaScript adds tap-to-flip functionality
- **Check:** `js/main.js` mobile flip card handler

### Slider Not Auto-Playing
- **Issue:** JavaScript not loaded
- **Solution:** Check browser console for errors
- **Verify:** `js/main.js` is linked in HTML

---

## 📞 Contact & Support

**Company:** Arakozia Premium Global Exports

**Email:** info@arakozia.ae

**Phone:** +971 4 579 3509

**GitHub:** [https://github.com/Jalaludheen25/arakozia](https://github.com/Jalaludheen25/arakozia)

---

## 📄 License

This project is proprietary and confidential. All rights reserved by Arakozia.

---

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for Outfit font family
- Modern CSS techniques and best practices

---

## 📚 Additional Documentation

- [IMAGE-REPLACEMENT-GUIDE.md](IMAGE-REPLACEMENT-GUIDE.md) - Guide for replacing all images
- [PRODUCT-IMAGES-GUIDE.md](PRODUCT-IMAGES-GUIDE.md) - Guide for product images
- [VIDEO-GUIDE.md](VIDEO-GUIDE.md) - Guide for adding videos

---

**Last Updated:** December 2024

**Version:** 1.0.0

---

Made with ❤️ for Arakozia Premium Global Exports
