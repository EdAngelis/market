type ProductType = {
  cod: string;
  name: string;
  price: number;
  unit: string;
  size?: string;
  marca: string;
  category: string;
  description: string;
  image: string;
};

type ShoppingCartType = {
  cod: string;
  qt: number;
};

type ShoppHistorryType = {
  date: string;
  items: ShoppingCartType[];
};

export { ProductType, ShoppingCartType, ShoppHistorryType };
