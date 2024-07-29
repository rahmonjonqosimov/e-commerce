export interface ProductsSchema {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    rating: number;
    stock: number;
    brand: string;
    images: string[];
  }
  
  export interface CreateProductSchema {
    title: string;
    description: string;
    category: string;
    price: number;
    rating: number;
    stock: number;
    brand: string;
  }
  export interface ProductQueryParams {
    url: string;
    category?: string;
    limit?: number;
  }
  
  export interface getProductByIdSchema {
    id: string;
  }