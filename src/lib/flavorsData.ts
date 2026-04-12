import { IMAGEKIT_BASE_URL } from "./constants";

export type Flavor = {
  id: string;
  name: string;
  subtitle: string;
  tagline: string;
  ingredients: string;
  description: string;
  image: string;
  imageMobile: string;
  overlayColor: string;
  accentColor: string;
  nutritional: {
    servingSize: string;
    calories: string;
    sugar: string;
    protein: string;
    probiotics: string;
    caffeine: string;
  };
  details: string[];
};

export const flavors: Flavor[] = [
  {
    id: "golden-hour",
    name: "Golden Hour",
    subtitle: "Apple · Chamomile",
    tagline: "The warmth of a Goa sunset in every sip.",
    ingredients:
      "Organic Green Tea · Raw Cane Sugar · Live SCOBY Culture · Fresh Apple · Chamomile Flowers",
    description:
      "Golden Hour is our softest brew — a gentle, golden ferment of green tea layered with the sweetness of apple and the calm of chamomile. Delicate, floral, and mellow. Best sipped slowly.",
    image: `${IMAGEKIT_BASE_URL}/gh.jpg?tr=w-1920,h-1080,fo-auto,q-85`,
    imageMobile: `${IMAGEKIT_BASE_URL}/gh.jpg?tr=w-768,h-1024,fo-auto,q-80`,
    overlayColor: "rgba(20,14,4,0.38)",
    accentColor: "#D4A85A",
    nutritional: {
      servingSize: "330ml",
      calories: "35 kcal",
      sugar: "4g (naturally occurring)",
      protein: "0.3g",
      probiotics: "Live & active cultures",
      caffeine: "Low (from green tea base)",
    },
    details: [
      "Raw & unpasteurized — live cultures preserved",
      "Small-batch brewed in Goa",
      "No artificial flavours, colours, or preservatives",
      "Naturally carbonated through fermentation",
      "Best enjoyed chilled at 4–8°C",
      "Shake gently before opening — natural sediment is normal",
      "Available locally in Goa at select cafes and markets",
    ],
  },
  {
    id: "red-ruse",
    name: "Red Ruse",
    subtitle: "Hibiscus · Mint · Lime · Ginger",
    tagline: "Bold, tart, and impossible to ignore.",
    ingredients:
      "Organic Black Tea · Raw Cane Sugar · Live SCOBY Culture · Dried Hibiscus · Fresh Mint · Lime · Ginger Root",
    description:
      "Red Ruse is our most vibrant brew — a deep ruby ferment with the tartness of hibiscus, a cool finish of mint, a citrus zing from lime, and a warming kick of fresh ginger. Complex and alive.",
    image: `${IMAGEKIT_BASE_URL}/rr.jpg?tr=w-1920,h-1080,fo-auto,q-85`,
    imageMobile: `${IMAGEKIT_BASE_URL}/rr.jpg?tr=w-768,h-1024,fo-auto,q-80`,
    overlayColor: "rgba(20,4,6,0.40)",
    accentColor: "#C45A6A",
    nutritional: {
      servingSize: "330ml",
      calories: "30 kcal",
      sugar: "3g (naturally occurring)",
      protein: "0.2g",
      probiotics: "Live & active cultures",
      caffeine: "Moderate (from black tea base)",
    },
    details: [
      "Raw & unpasteurized — live cultures preserved",
      "Small-batch brewed in Goa",
      "Hibiscus sourced locally from Goan markets",
      "No artificial flavours, colours, or preservatives",
      "Naturally carbonated through fermentation",
      "Best enjoyed chilled at 4–8°C",
      "Available locally in Goa at select cafes and markets",
    ],
  },
  {
    id: "inner-bliss",
    name: "Inner Bliss",
    subtitle: "Lemongrass · Ginger",
    tagline: "Clean. Grounding. Quietly powerful.",
    ingredients:
      "Organic Green Tea · Raw Cane Sugar · Live SCOBY Culture · Fresh Lemongrass · Ginger Root",
    description:
      "Inner Bliss is our most grounding brew — a clean, pale-gold ferment with the earthy brightness of lemongrass and a long, warming finish of fresh ginger. The one you reach for when you want to feel good.",
    image: `${IMAGEKIT_BASE_URL}/ib.jpg?tr=w-1920,h-1080,fo-auto,q-85`,
    imageMobile: `${IMAGEKIT_BASE_URL}/ib.jpg?tr=w-768,h-1024,fo-auto,q-80`,
    overlayColor: "rgba(4,14,10,0.38)",
    accentColor: "#7AAF82",
    nutritional: {
      servingSize: "330ml",
      calories: "28 kcal",
      sugar: "3g (naturally occurring)",
      protein: "0.2g",
      probiotics: "Live & active cultures",
      caffeine: "Low (from green tea base)",
    },
    details: [
      "Raw & unpasteurized — live cultures preserved",
      "Small-batch brewed in Goa",
      "Lemongrass harvested fresh in Goa",
      "No artificial flavours, colours, or preservatives",
      "Naturally carbonated through fermentation",
      "Best enjoyed chilled at 4–8°C",
      "Available locally in Goa at select cafes and markets",
    ],
  },
];
