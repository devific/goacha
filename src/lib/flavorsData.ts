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
    per100ml: {
      energy: string;
      carbohydrates: string;
      sugar: string;
      protein: string;
      fat: string;
      sodium: string;
    };
    disclaimer: string;
  };
  details: string[];
};

const commonDetails = [
  "Small-batch brewed in Goa",
  "Naturally fermented with live cultures",
  "Raw and unpasteurised",
  "Light, balanced, and easy to drink",
  "No added preservatives",
  "Naturally carbonated",
  "Made with real ingredients",
  "Best served chilled",
  "Refrigerate at all times",
  "*Contains live cultures. Taste and carbonation may vary slightly over time.",
];

export const flavors: Flavor[] = [
  {
    id: "golden-hour",
    name: "Golden Hour",
    subtitle: "Apple · Chamomile",
    tagline: "Smooth, mellow, and easy to sip.",
    ingredients:
      "Filtered H20, Kombucha Culture, Loose leaf Green Tea & Black Tea, Cane Sugar, Apple & Chamomile.",
    description: "Made for slow evenings and easy conversations.",
    image: `${IMAGEKIT_BASE_URL}/gh-dp-fill.jpg?tr=h-1080,fo-auto,q-85`,
    imageMobile: `${IMAGEKIT_BASE_URL}/gh-mb-fill.jpg?tr=w-1080,fo-auto,q-80`,
    overlayColor: "rgba(20,14,4,0.38)",
    accentColor: "#D4A85A",
    nutritional: {
      servingSize: "300 ml",
      per100ml: {
        energy: "21.6 kcal",
        carbohydrates: "5.2 g",
        sugar: "5 g",
        protein: "0.2 g",
        fat: "0 g",
        sodium: "16.1 mg",
      },
      disclaimer:
        "*nutrition facts at the time of packing varies over time due to live cultures",
    },
    details: commonDetails,
  },
  {
    id: "red-ruse",
    name: "Red Ruse",
    subtitle: "Hibiscus · Mint · Lime · Ginger",
    tagline: "Bold, refreshing, and full of character.",
    ingredients:
      "Filtered H20, Kombucha Culture, Loose leaf Green Tea & Black Tea, Cane Sugar, Ginger, Dried Hibiscus, Mint & Lime.",
    description: "When you want something a little different.",
    image: `${IMAGEKIT_BASE_URL}/rr-dp-fill.jpg?tr=h-1080,fo-auto,q-85`,
    imageMobile: `${IMAGEKIT_BASE_URL}/rr-mb-fill.jpg?tr=w-1080,fo-auto,q-80`,
    overlayColor: "rgba(20,4,6,0.40)",
    accentColor: "#C45A6A",
    nutritional: {
      servingSize: "300 ml",
      per100ml: {
        energy: "22 kcal",
        carbohydrates: "5.4 g",
        sugar: "5.1 g",
        protein: "0.1 g",
        fat: "0 g",
        sodium: "5.74 mg",
      },
      disclaimer:
        "*nutrition facts at the time of packing varies over time due to live cultures",
    },
    details: commonDetails,
  },
  {
    id: "inner-bliss",
    name: "Inner Bliss",
    subtitle: "Lemongrass · Ginger",
    tagline: "Bright, zesty, and beautifully balanced.",
    ingredients:
      "Filtered H20, Kombucha Culture, Lose leaf Green Tea & Black Tea, Cane Sugar, Lemongrass & Ginger.",
    description: "Your everyday reset.",
    image: `${IMAGEKIT_BASE_URL}/ib-dp-fill.jpg?tr=h-1080,fo-auto,q-85`,
    imageMobile: `${IMAGEKIT_BASE_URL}/ib-mb-fill.jpg?tr=w-1080,fo-auto,q-80`,
    overlayColor: "rgba(4,14,10,0.38)",
    accentColor: "#7AAF82",
    nutritional: {
      servingSize: "300 ml",
      per100ml: {
        energy: "20.9 kcal",
        carbohydrates: "4.9 g",
        sugar: "4.1 g",
        protein: "0.1 g",
        fat: "0 g",
        sodium: "5.8 mg",
      },
      disclaimer:
        "*nutrition facts at the time of packing varies over time due to live cultures",
    },
    details: commonDetails,
  },
];
