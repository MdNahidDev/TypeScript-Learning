// Utility Types

type Product = {
  id: number;
  name: string;
  price: string;
  stock: number;
  color?: string;
};
type ProductSummary = Pick<Product, "id" | "name" | "price">;
// choose the types⬆️

type ProductWithoutStock = Omit<Product, "stock">;
// delete specific type⬆️

type ProductWithColor = Required<Product>;
// All type is required including optional⬆️

type ProductOptional = Partial<Product>;
// turn all type optional⬆️
