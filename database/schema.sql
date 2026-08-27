-- =====================================================================
-- DUST™ — Choice of Motherland (Everest Edges Pvt. Ltd.)
-- Complete Production Database Schema for MySQL / Hostinger phpMyAdmin
-- CIN: U10309PN2026PTC258739 | GSTIN: 27AAJCE8999E1ZX
-- =====================================================================

CREATE DATABASE IF NOT EXISTS `dust_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `dust_db`;

-- ---------------------------------------------------------------------
-- Table 1: Categories
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `categories` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `slug` VARCHAR(100) NOT NULL UNIQUE,
  `name` VARCHAR(150) NOT NULL,
  `description` TEXT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ---------------------------------------------------------------------
-- Table 2: Products
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `products` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `slug` VARCHAR(150) NOT NULL UNIQUE,
  `name` VARCHAR(255) NOT NULL,
  `sub_heading` VARCHAR(255) NULL,
  `category_id` INT UNSIGNED NOT NULL,
  `price` DECIMAL(10, 2) NOT NULL,
  `compare_price` DECIMAL(10, 2) NULL,
  `weight` VARCHAR(50) NOT NULL,
  `servings` VARCHAR(50) NOT NULL,
  `stock_qty` INT UNSIGNED DEFAULT 100,
  `image_url` VARCHAR(500) NOT NULL,
  `description` TEXT NOT NULL,
  `ingredients` TEXT NULL,
  `is_best_seller` TINYINT(1) DEFAULT 0,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ---------------------------------------------------------------------
-- Table 3: Customers & User Accounts
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `users` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `full_name` VARCHAR(150) NOT NULL,
  `email` VARCHAR(255) NOT NULL UNIQUE,
  `phone` VARCHAR(20) NOT NULL,
  `password_hash` VARCHAR(255) NOT NULL,
  `role` ENUM('customer', 'admin') DEFAULT 'customer',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ---------------------------------------------------------------------
-- Table 4: Orders
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `orders` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `order_reference` VARCHAR(50) NOT NULL UNIQUE,
  `customer_name` VARCHAR(150) NOT NULL,
  `customer_email` VARCHAR(255) NOT NULL,
  `customer_phone` VARCHAR(20) NOT NULL,
  `shipping_address` TEXT NOT NULL,
  `city` VARCHAR(100) NOT NULL,
  `state` VARCHAR(100) NOT NULL,
  `pincode` VARCHAR(20) NOT NULL,
  `subtotal_amount` DECIMAL(10, 2) NOT NULL,
  `tax_amount` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
  `shipping_amount` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
  `total_amount` DECIMAL(10, 2) NOT NULL,
  `payment_method` ENUM('UPI', 'CARD', 'COD', 'NETBANKING') DEFAULT 'UPI',
  `payment_status` ENUM('PAID', 'PENDING', 'FAILED', 'REFUNDED') DEFAULT 'PAID',
  `order_status` ENUM('Order Received', 'Payment Verified', 'Packed', 'Handed to Courier', 'Out for Delivery', 'Delivered', 'Cancelled') DEFAULT 'Order Received',
  `tracking_awb` VARCHAR(100) NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ---------------------------------------------------------------------
-- Table 5: Order Items
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `order_items` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `order_id` INT UNSIGNED NOT NULL,
  `product_id` INT UNSIGNED NOT NULL,
  `product_name` VARCHAR(255) NOT NULL,
  `quantity` INT UNSIGNED NOT NULL DEFAULT 1,
  `unit_price` DECIMAL(10, 2) NOT NULL,
  `subtotal` DECIMAL(10, 2) NOT NULL,
  FOREIGN KEY (`order_id`) REFERENCES `orders`(`id`) ON DELETE CASCADE,
  FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ---------------------------------------------------------------------
-- Table 6: Distributor & B2B Leads
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `distributor_leads` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `contact_name` VARCHAR(150) NOT NULL,
  `company_name` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(20) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `city_state` VARCHAR(150) NOT NULL,
  `channel` VARCHAR(100) NOT NULL,
  `investment_capacity` VARCHAR(100) NOT NULL,
  `message` TEXT NULL,
  `status` ENUM('New', 'In Review', 'Contacted', 'Approved', 'Rejected') DEFAULT 'New',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ---------------------------------------------------------------------
-- Table 7: Contact Form Inquiries
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `contact_inquiries` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `full_name` VARCHAR(150) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(20) NULL,
  `inquiry_type` VARCHAR(100) DEFAULT 'General Enquiry',
  `message` TEXT NOT NULL,
  `status` ENUM('New', 'Responded', 'Closed') DEFAULT 'New',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================================
-- SEED DATA (Pre-populating DUST™ Product Catalog & Admin Records)
-- =====================================================================

-- Insert Categories
INSERT INTO `categories` (`id`, `slug`, `name`, `description`) VALUES
(1, 'pure-fruit-powders', 'Pure Fruit Powders', 'Spray-dried real fruit instant powders with zero synthetic chemicals.'),
(2, 'heritage-wellness', 'Heritage Wellness', 'Post-meal digestive mixes and royal paan shots inspired by Banaras traditions.')
ON DUPLICATE KEY UPDATE `name` = VALUES(`name`);

-- Insert Products
INSERT INTO `products` (`id`, `slug`, `name`, `sub_heading`, `category_id`, `price`, `compare_price`, `weight`, `servings`, `stock_qty`, `image_url`, `description`, `ingredients`, `is_best_seller`) VALUES
(1, 'kacha-aam-01', 'Kacha Aam Instant Powder', 'Tangy Raw Mango Summer Cooler Mix', 1, 199.00, 249.00, '100g', 'Makes 10 Coolers', 150, '/paan_image_1.jpeg', 'Experience authentic Indian summer street flavor made with spray-dried raw mango solids and rock salt. Just stir in chilled water.', 'Raw Mango Solids, Rock Salt, Cumin, Mint Extract, Malic Acid', 1),
(2, 'banarasi-paan-01', 'Banarasi Paan Digestive Shot Box', 'Royal Betel Leaf & Gulkand After-Meal Digestif', 2, 249.00, 299.00, '20g', 'Makes 4 Shots', 200, '/paan_image_2.jpeg', 'Crafted with authentic Banarasi betel leaf extracts, rose petal gulkand, fennel, and prebiotic inulin fiber for digestive health.', 'Real Betel Leaf Solids, Gulkand, Fennel, Cardamom, Inulin Fiber', 1),
(3, 'anardana-digestive-01', 'Anardana Digestive Shot', 'Pomegranate & Black Salt Ayurvedic Digestif', 2, 189.00, 229.00, '25g', 'Makes 5 Shots', 120, '/paan_image_3.jpeg', 'Pure wild pomegranate seeds blended with black salt, asafoetida, and digestive spices for post-heavy-meal comfort.', 'Wild Anardana, Black Salt, Hing, Ginger, Black Pepper', 0)
ON DUPLICATE KEY UPDATE `price` = VALUES(`price`);

-- Insert Sample Orders
INSERT INTO `orders` (`id`, `order_reference`, `customer_name`, `customer_email`, `customer_phone`, `shipping_address`, `city`, `state`, `pincode`, `subtotal_amount`, `tax_amount`, `shipping_amount`, `total_amount`, `payment_method`, `payment_status`, `order_status`, `tracking_awb`) VALUES
(1, 'DST-8806-9482', 'Rajesh Kumar', 'rajesh.kumar@example.com', '9876543210', 'Flat 402, Green Acres Apartment, Baner Road', 'Pune', 'Maharashtra', '411045', 647.00, 98.69, 0.00, 647.00, 'UPI', 'PAID', 'Handed to Courier', 'SR-994821')
ON DUPLICATE KEY UPDATE `order_status` = VALUES(`order_status`);

-- Insert Sample Distributor Lead
INSERT INTO `distributor_leads` (`id`, `contact_name`, `company_name`, `phone`, `email`, `city_state`, `channel`, `investment_capacity`, `message`, `status`) VALUES
(1, 'Rajesh Kumar', 'Om Traders & Agency', '9876543210', 'rajesh@omtraders.com', 'Pune, Maharashtra', 'Regional Distributor', '₹2 Lakhs – ₹5 Lakhs', 'Interested in exclusive district distribution for Pune & Pimpri Chinchwad region.', 'New')
ON DUPLICATE KEY UPDATE `status` = VALUES(`status`);
