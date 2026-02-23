export interface ProductVariant {
  storage: string;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  brand: "iphone" | "samsung" | "pixel";
  condition: "new" | "used";
  series: string;
  priceRange: [number, number];
  variants: ProductVariant[];
  colors: string[];
  images: string[];
  rating: number;
  reviewCount: number;
  description: string;
  isSale?: boolean;
  isFeatured?: boolean;
}

// Sample hot products for homepage — full catalog to be added in Phase 3
export const products: Product[] = [
  {
    id: "iphone-15-pro-max-new",
    name: "iPhone 15 Pro Max",
    brand: "iphone",
    condition: "new",
    series: "15",
    priceRange: [450, 620],
    variants: [
      { storage: "256GB", price: 450 },
      { storage: "512GB", price: 530 },
      { storage: "1TB", price: 620 },
    ],
    colors: ["Natural Titanium", "Blue Titanium", "White Titanium", "Black Titanium"],
    images: ["https://yaphones.shop/wp-content/uploads/2024/11/iPhone-15-Pro-Max-1-300x300.webp"],
    rating: 5,
    reviewCount: 1,
    description: "iPhone 15 Pro Max with A17 Pro chip, titanium design, and 5x optical zoom.",
    isSale: true,
    isFeatured: true,
  },
  {
    id: "iphone-16-pro-max-new",
    name: "iPhone 16 Pro Max",
    brand: "iphone",
    condition: "new",
    series: "16",
    priceRange: [550, 750],
    variants: [
      { storage: "256GB", price: 550 },
      { storage: "512GB", price: 650 },
      { storage: "1TB", price: 750 },
    ],
    colors: ["Desert Titanium", "Natural Titanium", "White Titanium", "Black Titanium"],
    images: ["https://yaphones.shop/wp-content/uploads/2024/11/iPhone-16-Pro-Max-Desert-Titanium-1-300x300.webp"],
    rating: 5,
    reviewCount: 1,
    description: "iPhone 16 Pro Max with A18 Pro chip and Camera Control.",
    isSale: true,
    isFeatured: true,
  },
  {
    id: "iphone-16-pro-new",
    name: "iPhone 16 Pro",
    brand: "iphone",
    condition: "new",
    series: "16",
    priceRange: [450, 600],
    variants: [
      { storage: "128GB", price: 450 },
      { storage: "256GB", price: 500 },
      { storage: "512GB", price: 550 },
      { storage: "1TB", price: 600 },
    ],
    colors: ["Desert Titanium", "Natural Titanium", "White Titanium", "Black Titanium"],
    images: ["https://yaphones.shop/wp-content/uploads/2024/11/iPhone-16-Pro-1-300x300.webp"],
    rating: 5,
    reviewCount: 1,
    description: "iPhone 16 Pro with A18 Pro chip.",
    isSale: true,
    isFeatured: true,
  },
  {
    id: "samsung-s24-ultra-new",
    name: "Samsung Galaxy S24 Ultra",
    brand: "samsung",
    condition: "new",
    series: "S24",
    priceRange: [420, 580],
    variants: [
      { storage: "256GB", price: 420 },
      { storage: "512GB", price: 500 },
      { storage: "1TB", price: 580 },
    ],
    colors: ["Titanium Black", "Titanium Gray", "Titanium Violet", "Titanium Yellow"],
    images: ["https://yaphones.shop/wp-content/uploads/2024/11/S24-Ultra-1-300x300.webp"],
    rating: 5,
    reviewCount: 1,
    description: "Samsung Galaxy S24 Ultra with S Pen and AI features.",
    isSale: true,
    isFeatured: true,
  },
  {
    id: "samsung-s25-ultra-new",
    name: "Samsung Galaxy S25 Ultra",
    brand: "samsung",
    condition: "new",
    series: "S25",
    priceRange: [530, 700],
    variants: [
      { storage: "256GB", price: 530 },
      { storage: "512GB", price: 620 },
      { storage: "1TB", price: 700 },
    ],
    colors: ["Titanium Black", "Titanium Gray", "Titanium Blue", "Titanium Silver"],
    images: ["https://yaphones.shop/wp-content/uploads/2025/01/Samsung-Galaxy-S25-Ultra-1.webp"],
    rating: 5,
    reviewCount: 1,
    description: "Samsung Galaxy S25 Ultra with Snapdragon 8 Elite.",
    isSale: true,
    isFeatured: true,
  },
  {
    id: "pixel-9-pro-new",
    name: "Google Pixel 9 Pro",
    brand: "pixel",
    condition: "new",
    series: "9",
    priceRange: [350, 480],
    variants: [
      { storage: "128GB", price: 350 },
      { storage: "256GB", price: 400 },
      { storage: "512GB", price: 480 },
    ],
    colors: ["Obsidian", "Porcelain", "Hazel", "Rose Quartz"],
    images: ["https://yaphones.shop/wp-content/uploads/2024/12/Google-pixel-9-pro-1-300x300.webp"],
    rating: 5,
    reviewCount: 1,
    description: "Google Pixel 9 Pro with Tensor G4 and Gemini AI.",
    isSale: true,
    isFeatured: true,
  },
  {
    id: "iphone-15-pro-new",
    name: "iPhone 15 Pro",
    brand: "iphone",
    condition: "new",
    series: "15",
    priceRange: [380, 530],
    variants: [
      { storage: "128GB", price: 380 },
      { storage: "256GB", price: 420 },
      { storage: "512GB", price: 480 },
      { storage: "1TB", price: 530 },
    ],
    colors: ["Natural Titanium", "Blue Titanium", "White Titanium", "Black Titanium"],
    images: ["https://yaphones.shop/wp-content/uploads/2024/11/iPhone-15-Pro-1-300x300.webp"],
    rating: 5,
    reviewCount: 1,
    description: "iPhone 15 Pro with A17 Pro chip and titanium design.",
    isSale: true,
    isFeatured: true,
  },
  {
    id: "samsung-z-fold-6-new",
    name: "Samsung Galaxy Z Fold 6",
    brand: "samsung",
    condition: "new",
    series: "Z Fold",
    priceRange: [550, 650],
    variants: [
      { storage: "256GB", price: 550 },
      { storage: "512GB", price: 600 },
      { storage: "1TB", price: 650 },
    ],
    colors: ["Silver Shadow", "Navy", "Pink"],
    images: ["https://yaphones.shop/wp-content/uploads/2024/12/Samsung-z-fold-6-1-300x300.webp"],
    rating: 5,
    reviewCount: 1,
    description: "Samsung Galaxy Z Fold 6 foldable smartphone.",
    isSale: true,
    isFeatured: true,
  },
];

export const getFeaturedProducts = () => products.filter((p) => p.isFeatured);
export const getProductsByBrand = (brand: Product["brand"]) => products.filter((p) => p.brand === brand);
export const getProductById = (id: string) => products.find((p) => p.id === id);
