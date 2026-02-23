

# YA Phones — Full E-Commerce Website Build

## Overview
Rebuild the yaphones.shop website as a React application, matching the reference structure, layout, products, and functionality exactly. The site is a phone retail store selling new and used iPhones, Samsung, and Google Pixel devices.

---

## Phase 1: Foundation & Layout

### 1.1 Global Layout & Header
- **Scrolling announcement bar** at the top with promotional messages
- **Top contact bar** with WhatsApp number (+1 (332) 2637184) and email (support@yaphones.shop), plus language selector
- **Main header** with YA Phones logo, category search dropdown, search bar, recently viewed products, wishlist (heart icon with counter), user account icon, and cart icon with total
- **Navigation menu**: Home | Who we are | iPhones ▼ | Samsung ▼ | Google Pixel ▼ | Contact Us
  - Dropdown menus with New/Used sub-categories and series groupings
- **Mobile bottom navigation bar**: Home, Shop, Wishlist, Account

### 1.2 Footer
- Three-column layout: Company Profile, Service & Support, Orders & Deliveries
- Newsletter subscription form
- Social icons (Facebook, Instagram, TikTok)
- Payment method logos
- Copyright © 2023 (as requested)

---

## Phase 2: Homepage Sections

### 2.1 Hero Banner Slider
- Three rotating slides: iPhones, Samsung Galaxy, Google Pixel
- Each with headline, tagline, and "Shop Now" button
- Left/right navigation arrows and dot indicators

### 2.2 Product Categories Section
- "Product Categories" heading
- Three large image cards: iPhones, Samsung, Google Pixel — each with "View more" link

### 2.3 Who We Are Section
- Company introduction text about YA Phones Group (founded 1997, Shenzhen)
- Embedded YouTube video
- Stats counters: Since 694, Factory area, 76+ Staffs, 153+ Annual Sales 17,386,704+

### 2.4 Hot Products Section
- Grid of featured products with images, names, ratings, review counts, and price ranges
- "Sale" badge on products
- Quick View, Add to Wishlist, and Select Options buttons
- "Show All / All Products" link

### 2.5 Our Team Section
- Team member cards: Leila Yu, Benny Wu, Wendy Liu, Charles Zhang, Sunny Liu
- Individual photos with names/titles

### 2.6 Our Factory Section
- Four workshop images in a grid layout
- Factory description text

### 2.7 Our Warehouse Section
- Four warehouse location cards: Shenzhen, Dubai, Amsterdam, Chicago USA
- Each with photo and location name

---

## Phase 3: Product Data & Shop Pages

### 3.1 Product Data
- All 122 products organized by brand and condition (New/Used)
- **iPhone** (57 products): Series X through 17
- **Samsung** (36 products): Flagship, Foldable, Mid-Range & Budget
- **Google Pixel** (29 products): Series 7 through 10
- Each product includes: name, price range, images, rating, review count, variants (storage/color)
- Product images sourced from the reference site

### 3.2 Shop Page
- Sidebar with price filter slider ($85–$1,000), stock/featured filters, category tree, color filters
- Product grid (3 columns) with grid/list view toggle
- Sorting dropdown (default sorting)
- Pagination
- "Sale" badges, ratings, and price ranges on cards

### 3.3 Product Detail Page
- Image gallery (multiple images per product, no duplicates)
- Product title, price range, rating with review count
- Variant selectors (storage capacity, color)
- Add to cart button with quantity selector
- Product description and specifications tabs

---

## Phase 4: Core Functionality

### 4.1 Cart System
- Add/remove items with variant selection
- Cart icon with item count in header
- Cart page with quantity adjustment, subtotals, and total
- Proceed to checkout flow

### 4.2 Wishlist
- Add/remove products from wishlist
- Wishlist page accessible from header icon
- Heart icon with counter

### 4.3 Search
- Search bar in header with category dropdown filter
- Search results page

### 4.4 Category Browsing
- Category pages for each brand/series combination
- Breadcrumb navigation
- Filters and sorting

---

## Phase 5: Additional Pages

### 5.1 Contact Us Page
- Three info cards: Address, WhatsApp, Email
- Same footer as homepage

### 5.2 Who We Are / About Page
- Company history and description

---

## Phase 6: Branding & Polish

### 6.1 Branding
- YA Phones logo and brand colors (dark navy background, blue/white accents)
- Custom favicon (using uploaded favicon.jpeg)
- No builder credits or watermarks anywhere

### 6.2 Year Update
- All year references set to 2023

### 6.3 Responsive Design
- Fully responsive across desktop, tablet, and mobile
- Mobile-optimized navigation with hamburger menu and bottom nav bar

### 6.4 Performance
- Optimized image loading with proper sizing
- Fast page transitions

---

## Technical Notes
- All product data stored as static JSON/TypeScript data files (no backend needed initially)
- Cart and wishlist managed with React Context + localStorage for persistence
- React Router for page navigation
- Images referenced from the reference site or stored locally
- No Supabase/backend needed for the initial build — pure frontend

