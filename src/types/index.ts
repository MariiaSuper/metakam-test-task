export type Product = {
  slug: string;
  name: string;
  priceRegular: number;
  priceDiscount: number;
  images: string[];
  color: string;
  colorsAvailable: { color: string; slug: string }[];
  capacityAvailable: string[];
  screen: string;
  resolution: string;
  processor: string;
};
