import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    id: 1,
    categoryName: "The Glorious V10s",
    description:
      "Engross yourself into the most beautiful sounding era of Formula 1",
    coverImg:
      "https://res.cloudinary.com/fueledup-ecom/image/upload/v1650706314/Products%20Images/KemmelTube/Category%20Images/The%20Glorious%20V10s.webp",
  },
  {
    _id: uuid(),
    id: 2,
    categoryName: "What The F1",
    description: "All you need to know about everything Formula 1",
    coverImg:
      "https://res.cloudinary.com/fueledup-ecom/image/upload/v1650706183/Products%20Images/KemmelTube/Category%20Images/What%20The%20F1.webp",
  },
  {
    _id: uuid(),
    id: 3,
    categoryName: "Inspector Seb Series",
    description:
      "Join Sebastian Vettel as he uncovers new mysteries every race week",
    coverImg:
      "https://res.cloudinary.com/fueledup-ecom/image/upload/v1650706504/Products%20Images/KemmelTube/Category%20Images/Inspector%20Seb%20Series.webp",
  },
  {
    _id: uuid(),
    id: 4,
    categoryName: "F1 Meme Review",
    description:
      "What quirky reviews have creators come up with for this race week?",
    coverImg:
      "https://res.cloudinary.com/fueledup-ecom/image/upload/v1650706853/Products%20Images/KemmelTube/Category%20Images/F1%20Meme%20Recaps.webp",
  },
];
