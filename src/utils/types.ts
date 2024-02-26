export type TUserData = {
  name: string;
  email: string;
  password: string;
  accessToken?: string;
  success?: boolean;
  user?: any;
  refreshToken?: string;
}

export type TIngredient = {
  _id: string
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile?: string;
  image_large?: string;
  __v?: number;
  count?: number,
  id?: string;
  key?: string,
  createdAt: string;
};

export type TOrder = {
  number: string;
  createdAt: string;
  name: string;
  ingredients: string[];
  status: string;
  _id: string;
  orders: any;
};
