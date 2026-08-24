/**
 * DUST — single source of truth for catalogue + content.
 * Extracted verbatim from https://dust-seven.vercel.app/
 * Structured so a production backend (Shopify / Supabase / CMS) can replace
 * these literals behind the same Product/Collection interfaces.
 */

import kachaHero from "@/assets/kacha-hero.jpg";
import kachaPouch from "@/assets/kacha-pouch.png";
import kachaPack from "@/assets/kacha-pack.jpg";
import paanPack from "@/assets/paan-pack.png";
import paanPouch from "@/assets/paan-pouch.jpg";
import paanDuo from "@/assets/paan-duo.jpg";
import paanPoster from "@/assets/paan-poster.jpeg";
import storyMango from "@/assets/story-mango-dark.jpg";
import storyPaan from "@/assets/story-paan-dark.jpg";

export const img = {
  kachaHero,
  kachaPouch,
  kachaPack,
  paanPack,
  paanPouch,
  paanDuo,
  paanPoster,
  storyMango,
  storyPaan,
};

export interface RitualStep {
  title: string;
  detail: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  subtitle: string;
  pitch: string;
  category: "pure-fruit-powders" | "heritage-wellness";
  categoryLabel: string;
  price: number;
  originalPrice?: number;
  priceDisplay: string;
  originalPriceDisplay?: string;
  unitDisplay: string;
  savePercent?: number;
  netWeight: string;
  badges: string[];
  description: string[];
  caution?: string;
  ingredients: string;
  storage: string;
  nutrition: { serving: string; note: string; rows: [string, string, string][] };
  claims: string[];
  ritual: RitualStep[];
  ritualLabel: string;
  heritageTitle: string;
  heritageQuote: string;
  images: { src: string; alt: string }[];
  storyImage: string;
  accent: "mango" | "rose";
  stock: number;
  sku: string;
  fssai: string;
  featured: boolean;
  newArrival: boolean;
  bestSeller: boolean;
}

export interface Collection {
  slug: "pure-fruit-powders" | "heritage-wellness";
  name: string;
  titleLines: [string, string];
  tagline: string;
  description: string;
  meta: { label: string; value: string }[];
  shelfTitle: string;
  shelfDescription: string;
  shelfNote: string;
  comingTitle: string;
  comingText: string;
  pillars: { title: string; text: string }[];
  crossTitle: string;
  crossText: string;
  crossCta: string;
  crossHref: string;
  heroImage: string;
}

export const products: Product[] = [
  {
    id: "kacha-aam-01",
    slug: "kacha-aam",
    name: "Kacha Aam (Instant Aam Panna Mix)",
    shortName: "Kacha Aam",
    subtitle: "Pure Fruit Powder — Raw Mango",
    pitch: "Refreshment Instantly",
    category: "pure-fruit-powders",
    categoryLabel: "Pure Fruit Powders",
    price: 149,
    originalPrice: 199,
    priceDisplay: "₹149",
    originalPriceDisplay: "₹199",
    unitDisplay: "₹20 / Sachet",
    savePercent: 25,
    netWeight: "20g / 1 Glass Serving",
    badges: ["Premium Quality", "1 Glass Serving"],
    description: [
      "We grew up chasing the whistle of cookers roasting raw mangoes on summer afternoons.",
      "Every sachet of DUST Kacha Aam blends 100% real raw mango and mint powder with hand-roasted desi spices like Jeera and Kala Namak — capturing pure, honest hydration that tastes like home.",
      "Reconstitutes in seconds. Tastes like memory.",
    ],
    ingredients:
      "Cane sugar, spray-dried raw mango powder (22%), maltodextrin (carrier), black salt (kala namak), roasted cumin powder, black pepper, acidity regulator (INS 330), anti-caking agent (INS 551).",
    storage:
      "Keep in a cool, dry place. Best enjoyed within 9 months of manufacture.",
    nutrition: {
      serving: "Serving Size: 1 Sachet (20g)",
      note: "1 Glass Serving",
      rows: [
        ["Energy", "72 kcal", "4%*"],
        ["Protein", "~1g", "2%*"],
        ["Total Carbs", "17.8g", "6%*"],
        ["Added Sugar", "11g", "22%*"],
        ["Total Fat", "0g", "0%*"],
        ["Sodium", "210mg", "9%*"],
      ],
    },
    claims: [
      "100% Real Fruit — spray-dried raw mango and fresh mint powder",
      "Desi Spices — nostalgic digestive punch of roasted Jeera & Kala Namak",
      "No Artificials — strictly no synthetic food colors or artificial flavors",
      "Premium Quality — ethically sourced ingredients, hygienically processed",
    ],
    ritualLabel: "How to Make It",
    ritual: [
      {
        title: "Tear and Empty",
        detail:
          "Tear open the sachet and empty the fine Raw Mango powder blend into a tall glass.",
      },
      {
        title: "Add Water",
        detail: "Pour 180ml of chilled water directly over the powder concentrate.",
      },
      {
        title: "Stir and Add Ice",
        detail:
          "Stir well for a few seconds until fully dissolved. Throw in ice cubes for that perfect summer chill.",
      },
    ],
    heritageTitle: "Our Heritage Promise",
    heritageQuote:
      "Grew up chasing the whistle of cookers roasting raw mangoes — every sachet blends real fruit and desi spices for pure, honest hydration.",
    images: [
      {
        src: kachaPouch,
        alt: "DUST Kacha Aam Instant drink pouch next to a glass of refreshing Aam Panna",
      },
      {
        src: kachaHero,
        alt: "DUST Kacha Aam pouch standing upright next to its premium storage box",
      },
      {
        src: kachaPack,
        alt: "Close-up of the back label on DUST Kacha Aam pouch showing packaging details",
      },
    ],
    storyImage: storyMango,
    accent: "mango",
    stock: 48,
    sku: "DUST-KA-20",
    fssai: "12545678901024",
    featured: true,
    newArrival: true,
    bestSeller: true,
  },
  {
    id: "banarasi-paan-01",
    slug: "banarasi-paan",
    name: "Banarasi Paan Digestive Shot",
    shortName: "Banarasi Paan",
    subtitle: "Heritage Wellness — Digestive Blend",
    pitch: "Experience the royal taste of Banaras",
    category: "heritage-wellness",
    categoryLabel: "Heritage Wellness",
    price: 249,
    originalPrice: 299,
    priceDisplay: "₹249",
    originalPriceDisplay: "₹299",
    unitDisplay: "₹40 / 2 Shots",
    savePercent: 17,
    netWeight: "20g / Makes 2 Shots",
    badges: ["Royal Blend", "Digestive Shot"],
    description: [
      "Crafted with real betel leaf extract, aromatic gulkand, fennel, rose and cardamom.",
      "DUST Banarasi Paan is your perfect after-meal ritual for freshness and digestion — a love letter to the lanes of Banaras.",
      "Mix half sachet (10g) in 100ml cold water and drink within 5 minutes of your meal.",
    ],
    caution:
      "Pregnant or lactating women and people with medical conditions should consult a health professional before use.",
    ingredients:
      "Cane sugar, gulkand powder, betel leaf extract, fennel powder, coconut powder, rose petal powder, cardamom powder, mint powder, inulin (prebiotic fiber), calcium citrate, citric acid, natural paan flavor.",
    storage: "Store in dry, cool conditions. Shelf life 9 months from manufacture.",
    nutrition: {
      serving: "Serving Size: 10g (Half Pouch)",
      note: "Per 20g Pouch",
      rows: [
        ["Energy", "70 kcal", "—"],
        ["Total Fat", "0.3g", "0.5%*"],
        ["Sodium", "25mg", "1%*"],
        ["Total Carbohydrate", "17g", "6%*"],
        ["Total Sugars", "14g", "28%*"],
        ["Dietary Fiber", "1.0g", "4%*"],
        ["Protein", "0.3g", "1%*"],
        ["Calcium", "80mg", "8%*"],
      ],
    },
    claims: [
      "Real Betel Leaf",
      "Aromatic Gulkand",
      "Digestive Herbs",
      "Mouth Freshener",
      "Instant Shot",
      "No Colors",
      "No Preservatives",
      "100% Vegetarian",
      "Source of Calcium",
      "Prebiotic Fiber",
    ],
    ritualLabel: "How to Enjoy",
    ritual: [
      {
        title: "Measure half",
        detail: "Empty 10g (half sachet) of the digestive shot powder into a glass.",
      },
      { title: "Add Water", detail: "Pour 100ml of chilled water into the glass." },
      {
        title: "Stir Well",
        detail:
          "Stir vigorously for 15 seconds until the gulkand and betel leaf extracts dissolve.",
      },
      {
        title: "Enjoy After Meals",
        detail: "Drink after lunch or dinner as a refreshing digestive ritual.",
      },
    ],
    heritageTitle: "The Royal Paan Legacy",
    heritageQuote:
      "For centuries, the royal Banarasi Paan was served in silver boxes to nobility as the ultimate after-meal digestif. Crafted with real betel leaf extract, fennel, and premium rose gulkand, every sip of DUST Banarasi Paan captures that exact traditional fresh digestif ritual.",
    images: [
      { src: paanPouch, alt: "DUST Banarasi Paan Digestive Shot heritage green and gold pouch" },
      { src: paanPack, alt: "Front and back of the DUST Banarasi Paan sachet with nutrition label" },
      { src: paanDuo, alt: "DUST Banarasi Paan pouch pair with fresh betel leaf, rose and gulkand" },
      { src: paanPoster, alt: "DUST Paan Digestive Shot campaign — refresh, digest, repeat" },
    ],
    storyImage: storyPaan,
    accent: "rose",
    stock: 36,
    sku: "DUST-BP-20",
    fssai: "12545678901024",
    featured: true,
    newArrival: true,
    bestSeller: true,
  },
];

export const collections: Collection[] = [
  {
    slug: "pure-fruit-powders",
    name: "Pure Fruit Powders",
    titleLines: ["Pure Fruit", "Powders."],
    tagline: "Instant real-fruit refreshment, designed to reconstitute in your glass.",
    description:
      "100% real fruit concentrates, cooling mint, and hand-roasted traditional spices — nothing else.",
    meta: [
      { label: "Serving Format", value: "Tear & Pour Sachets" },
      { label: "Shelf Life", value: "9 Months" },
      { label: "Promise", value: "100% Real Fruit" },
    ],
    shelfTitle: "Available Flavors",
    shelfDescription:
      "Instant summer hydration rooted in true Indian tradition — built to grow as new flavors join the line.",
    shelfNote: "01 Flavor · More Roasting",
    comingTitle: "Next harvest loading",
    comingText: "New fruit powders are being roasted, ground and tasted right now.",
    pillars: [
      {
        title: "100% Real Fruit & Mint Powder",
        text: "Guaranteed spray-dried natural fruit concentrates with no hidden synthetic fillers.",
      },
      {
        title: "Desi Spices — Jeera & Kala Namak",
        text: "Freshly roasted cumin and black salt blends for that nostalgic digestive punch.",
      },
      {
        title: "No Artificial Colors or Flavors",
        text: "Purely clean labels with ingredients you can read and recognize instantly.",
      },
    ],
    crossTitle: "Looking for something after meals?",
    crossText:
      "Transition from summer coolers to our premium digestives — traditional post-meal mouth fresheners and wellness shots.",
    crossCta: "Explore Heritage Wellness",
    crossHref: "/shop/heritage-wellness",
    heroImage: storyMango,
  },
  {
    slug: "heritage-wellness",
    name: "Heritage Wellness",
    titleLines: ["Heritage", "Wellness."],
    tagline: "Ancient rituals of the Indian table, distilled into modern shots.",
    description:
      "Real betel leaf, rose-petal gulkand and warming spice — the royal digestif tradition of Banaras, ready in a glass.",
    meta: [
      { label: "Serving Format", value: "Digestive Shots" },
      { label: "Per Sachet", value: "Makes 2 Shots" },
      { label: "Promise", value: "Real Betel Leaf" },
    ],
    shelfTitle: "The Wellness Shelf",
    shelfDescription:
      "Post-meal digestives and botanical blends, formulated from recipes older than the printing press.",
    shelfNote: "01 Ritual · More Brewing",
    comingTitle: "Next ritual steeping",
    comingText: "New wellness blends are being steeped, tasted and perfected.",
    pillars: [
      {
        title: "The After-Meal Ritual",
        text: "A digestive shot to close the meal the way Banaras always has — fresh, floral, unhurried.",
      },
      {
        title: "Rooted in Royal Courts",
        text: "Paan presented in silver boxes was the final act of hospitality. We distilled it into a sachet.",
      },
      {
        title: "Ayurvedic Sensibility",
        text: "Gulkand, fennel and prebiotic inulin — time-tested botanicals, modern clean-label discipline.",
      },
    ],
    crossTitle: "Thirsty for daylight instead?",
    crossText:
      "Cross over to the sun side — instant aam panna and real-fruit coolers built for Indian summers.",
    crossCta: "Explore Pure Fruit",
    crossHref: "/shop/pure-fruit-powders",
    heroImage: storyPaan,
  },
];

export interface JournalPost {
  slug: string;
  tag: string;
  date: string;
  title: string;
  excerpt: string;
  body: string[];
}

export const journalPosts: JournalPost[] = [
  {
    slug: "the-art-of-roasting-mangoes",
    tag: "Pure Fruit",
    date: "June 2025",
    title: "The Art of Roasting Mangoes Over an Open Flame",
    excerpt:
      "A slow process, a patient ritual. How DUST captures the smokiness of a summer mango in every sachet.",
    body: [
      "We grew up chasing the whistle of cookers roasting raw mangoes on summer afternoons. It's a ritual of patience and reward — salt-crusted verandas, blistering May heat, and the sudden relief of a tall metal glass of Aam Panna.",
      "Roasting over an open flame does what no oven can: it caramelises the fruit's edge, smokes the skin, and deepens the tang into something rounder, older, more remembered.",
      "Every DUST sachet blends real fruit and hand-roasted desi spices like Jeera and Kala Namak for pure, honest hydration that tastes like home. Reconstitutes in seconds. Tastes like memory.",
    ],
  },
  {
    slug: "banaras-and-the-paan-tradition",
    tag: "Heritage",
    date: "May 2025",
    title: "Banaras and the Paan Tradition That Never Left",
    excerpt:
      "The galis of Banaras smell of gulkand and betel leaf. We trace the heritage of paan from street corner to modern wellness.",
    body: [
      "In the royal courts of old Banaras, dining was not merely sustenance; it was an elaborate ritual that concluded with the presentation of paan in silver boxes.",
      "This final mouth freshener and digestif was a sign of hospitality, slow indulgence, and cellular care — a tradition that never really left the galis of the old city.",
      "DUST Banarasi Paan revives this heritage digestif: spray-dried betel leaf extract, premium rose petal preserve, cardamom, and prebiotic fiber inulin — the royal freshness of Banaras, instantly, wherever you are.",
    ],
  },
  {
    slug: "what-kala-namak-does-to-a-drink",
    tag: "Ingredient Deep Dive",
    date: "April 2025",
    title: "What Kala Namak Does to a Drink (Hint: Everything)",
    excerpt:
      "The sulphurous, earthy black salt that makes chaas and Kacha Aam irreplaceable. A chemistry and culture explainer.",
    body: [
      "Kala Namak — black salt — is the quiet backbone of the Indian summer cooler. Its faint sulphurous edge reads as eggy on its own, but in a glass of aam panna it becomes depth itself.",
      "Chemically, those trace sulphur compounds amplify sourness and make sweetness feel rounder, which is why a drink seasoned with kala namak tastes complete with far less sugar.",
      "It is the difference between mango-flavoured water and the thing you remember from your grandmother's kitchen. That is why it is in every sachet of DUST Kacha Aam.",
    ],
  },
  {
    slug: "the-science-of-ayurvedic-digestion",
    tag: "Heritage",
    date: "March 2025",
    title: "The Science of Ayurvedic Digestion: Prebiotics and Herbs",
    excerpt:
      "Ancient India resolved digestive imbalances using natural prebiotic fibers. We look at the modern science of inulin and gulkand.",
    body: [
      "Long before the word prebiotic existed, the Indian table closed heavy meals with fennel, betel leaf and rose preserves — botanicals chosen for how they made the body feel after eating.",
      "Modern gut science has caught up: inulin, the prebiotic fiber in our Banarasi Paan shot, feeds beneficial gut bacteria, while fennel's volatile oils ease post-meal heaviness.",
      "Gulkand — slow-cured rose petal preserve — brings its own cooling tradition. Time-tested botanicals, modern clean-label discipline.",
    ],
  },
  {
    slug: "solar-dehydration-in-food-preservation",
    tag: "Pure Fruit",
    date: "February 2025",
    title: "Solar Dehydration: The Cleanest Preservation Method",
    excerpt:
      "Sun-drying captures the soul of the harvest. A look at how solar energy preserves fruits without chemicals or loss of bio-actives.",
    body: [
      "Before preservatives, there was the sun. Indian households have dehydrated mangoes, herbs and spices on terraces for centuries — not as a compromise, but as a craft.",
      "Gentle, low-temperature drying protects heat-sensitive vitamins and bio-actives that industrial high-heat processing destroys, and it needs no chemical assistance of any kind.",
      "Our spray-drying and dehydration discipline follows the same principle: preserve what the harvest gave, add nothing it didn't.",
    ],
  },
  {
    slug: "fennel-and-cardamom-essential-oils",
    tag: "Ingredient Deep Dive",
    date: "January 2025",
    title: "Fennel and Cardamom: Essential Palate Cleansing Oils",
    excerpt:
      "The volatile oils in cardamom and fennel seeds have been used for centuries to clarify the palate and soothe the stomach.",
    body: [
      "Walk out of any Banarasi dinner and you will be offered a pinch of fennel — not decoration, but technology. Its volatile oils cut through richness and reset the palate within seconds.",
      "Cardamom works differently: warm, floral, almost camphorous, it lifts aroma upward and lingers as sweetness long after the meal ends.",
      "Together they are the lungs of our Banarasi Paan shot — the reason one small glass can close an entire meal.",
    ],
  },
];

export const faqs = [
  {
    q: "What is DUST made from?",
    a: "DUST powders are made from 100% real fruit and hand-selected Indian spices. We never use artificial flavours, synthetic colours, chemical preservatives, or fillers. Ever.",
  },
  {
    q: "How do I prepare a DUST sachet?",
    a: "Tear and empty one sachet into a glass. Add 180-200ml of chilled water, stir well for 10-15 seconds, and add ice to taste. For the Banarasi Paan shot, consume after meals.",
  },
  {
    q: "Do you offer free shipping?",
    a: "Yes! We offer free shipping on all orders nationwide with no minimum cart value requirements.",
  },
  {
    q: "How long does shipping take?",
    a: "All orders are processed and dispatched within 24 hours of confirmation. Delivery takes 2-4 business days for major metro cities, and 5-7 business days for regional locations.",
  },
  {
    q: "Do you ship across India?",
    a: "Yes. We deliver to over 27,000+ PIN codes across India covering all major states and union territories.",
  },
  {
    q: "What is your return policy?",
    a: "We offer a 7-day hassle-free return policy. If you receive damaged packages, missing sachets, or are not completely satisfied with your order, email us at support@dustfoods.com and we will issue a replacement or refund.",
  },
  {
    q: "How do I initiate a return?",
    a: "Reach out to our customer experience team with your order number. We will schedule a courier pickup from your address within 48 hours.",
  },
  {
    q: "What payment methods are supported?",
    a: "We support all major payment options: Cash on Delivery (COD), UPI payments (Google Pay, Paytm, PhonePe, Bhim), and Credit/Debit Cards (Visa, Mastercard, RuPay).",
  },
  {
    q: "Is it safe to pay online?",
    a: "Yes, absolutely. Our checkout is protected by industry-standard SSL encryption and processed through PCI-DSS compliant payment gateways, ensuring that your banking data is never exposed.",
  },
  {
    q: "Are DUST products vegetarian and vegan?",
    a: "All DUST Pure Fruit Powders are 100% vegan and vegetarian. Our Heritage Wellness series (like the Banarasi Paan shot) is also 100% vegetarian. Check the ingredients list on respective product pages for exact details.",
  },
  {
    q: "Do DUST products contain added sugar?",
    a: "DUST Kacha Aam contains 11g of added organic cane sugar to balance the extreme natural acidity of raw mango. DUST Banarasi Paan contains 14g of sugars sourced entirely from natural gulkand powder. We never use high-fructose corn syrup or artificial sweeteners.",
  },
  {
    q: "What is the shelf life of the sachets?",
    a: "Each individual sachet remains fresh for 9 months from the date of manufacture when stored in cool, dry conditions. Once opened, consume within 10 minutes.",
  },
];

export const testimonials = [
  {
    quote: "Reminds me exactly of the raw mangoes from my childhood summers. The tang is perfect.",
    author: "Ananya R. · Pune",
  },
  {
    quote: "The Banarasi Paan shot is a game changer. It's become my favorite post-dinner ritual.",
    author: "Vikram S. · Lucknow",
  },
  {
    quote: "Pure, honest flavors. You can tell it's made from real roots. Highly recommended.",
    author: "Meera K. · Bengaluru",
  },
  {
    quote: "Carried a handful of sachets on a trek — instant aam panna at 3,000 metres. Unreal.",
    author: "Rohan D. · Manali",
  },
  {
    quote: "My grandmother approved of the paan shot. That's the highest certification there is.",
    author: "Ishita B. · Varanasi",
  },
];

export const marqueeItems = [
  "Real Fruit & Herbs",
  "No Artificial Anything",
  "Just Add Water",
  "Rooted in Indian Tradition",
  "Hand-Roasted Desi Spices",
  "Ready in Under a Minute",
];

export const waysToEnjoy = [
  "After Meals",
  "Summer Coolers",
  "On the Go",
  "Festive Gifting",
  "Everyday Ritual",
];

export const contact = {
  email: "support@dustfoods.com",
  hello: "hello@dustfoods.com",
  phone: "+91 99999 99999",
  response: "Questions, wholesale inquiries, or feedback on our recipes—we read every message and respond within 12 hours.",
};

export const brand = {
  name: "DUST",
  tagline: "Choice of Motherland",
  mission:
    "A bridge between India's rich agricultural heritage and modern convenience. Real fruit. Real roots.",
  newsletter: {
    title: "Join the Ritual",
    text: "Seasonal launches, folklore recipes & honest stories from the fields — direct to your inbox.",
  },
  payments: ["Visa", "MC", "UPI", "GPay", "NetBanking"],
  trustBadges: ["Free Shipping", "Easy Returns", "Secure Payments", "Customer Support"],
};

export const formatINR = (n: number) => `₹${n.toLocaleString("en-IN")}`;

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const getCollection = (slug: string) => collections.find((c) => c.slug === slug);
export const productsByCollection = (slug: string) =>
  products.filter((p) => p.category === slug);
export const relatedProducts = (slug: string) => products.filter((p) => p.slug !== slug);
