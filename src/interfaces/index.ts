export interface NewProduct {
  name: string;
  amount: string;
}

export interface Product extends NewProduct {
  id: number;
  orderId?: null | number;
}

export interface NewUser {
  username: string;
  vocation: string;
  level: number;
  password: string;
}

export interface User extends NewUser{
  id: number;
}

export interface Order {
  id: number;
  userId: number;
  productsIds: number[];
}