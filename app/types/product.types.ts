export type ProductData = {
  id?: string;
  title?: string;
  product_name: string;
  select_categories: string[];
  description: string;
  product_price: string;
  rent_amount: string;
  rental_period: string;
};

export type ProductQueryType = {
  id?: string;
  title?: string;
  price?: string;
  description: string;
  categories?: string[];
  rentalPeriod?: string;
  rentalAmount?: string;
};
