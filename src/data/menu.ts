export interface Dish {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
}

export const dishes: Dish[] = [
  {
    id: "1",
    name: "Charred Octopus",
    description: "Smoked paprika, crispy chorizo, lemon confit",
    price: "$24",
    category: "Starters",
    image: "https://images.unsplash.com/photo-1599458252573-56ae36120de1?w=800",
  },
  {
    id: "2",
    name: "Wood-Fired Ribeye",
    description: "Bone marrow butter, roasted garlic, charred greens",
    price: "$48",
    category: "Mains",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800",
  },
  {
    id: "3",
    name: "Ember Roasted Salmon",
    description: "Miso glaze, pickled fennel, citrus butter sauce",
    price: "$36",
    category: "Mains",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800",
  },
  {
    id: "4",
    name: "Burnt Basque Cheesecake",
    description: "Caramelized top, vanilla bean, seasonal berries",
    price: "$14",
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=800",
  },
  {
    id: "5",
    name: "Heirloom Tomato Tart",
    description: "Whipped ricotta, basil oil, aged balsamic",
    price: "$18",
    category: "Starters",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800",
  },
  {
    id: "6",
    name: "Smoked Old Fashioned",
    description: "Bourbon, applewood smoke, orange bitters",
    price: "$16",
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800",
  },
];
