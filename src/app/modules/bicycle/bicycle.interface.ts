// export interface Bicycle {
//   name: string;
//   brand: string;
//   price: number;
//   type: 'Mountain' | 'Road' | 'Hybrid' | 'BMX' | 'Electric';
//   description?: string;
//   quantity: number;
//   inStock: boolean;
//   isDeleted: boolean;
// }
export interface IBicycle {
  name: string;
  brand: string;
  model: string;
  img: string;
  price: number;
  type: 'Mountain' | 'Road' | 'Hybrid' | 'BMX' | 'Electric';
  category:
    | 'Men'
    | 'Women'
    | 'Kids'
    | 'Commuter'
    | 'Sport'
    | 'Professional'
    | 'Casual'
    | 'Urban Series'
    | 'Premium'
    | 'Budget';
  description?: string;
  quantity: number;
  inStock: boolean;
  isDeleted: boolean;
}

export interface BicycleFilter {
  $or?: Array<{
    name?: { $regex: string; $options: string };
    brand?: { $regex: string; $options: string };
    category?: { $regex: string; $options: string };
  }>;
  name?: { $regex: string; $options: string };
  brand?: { $regex: string; $options: string };
  category?: { $regex: string; $options: string };
  price?: { $gte?: number; $lte?: number };
  inStock?: boolean;
  model?: { $regex: string; $options: string };
}
