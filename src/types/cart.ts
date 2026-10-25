export type CartItem = {
  productId: string;
  size: string;
  quantity: number;
};

export type CartItemWithDetails = CartItem & {
  name: string;
  price: number;
  slug: string;
  imageSrc?: string;
  category: string;
  colorName?: string;
  lineTotal: number;
};
