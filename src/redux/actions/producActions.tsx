import { ActionTypes } from "../contains/action-types"
export interface Product {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
}

// export const fetchProducts =  async () => {
//   const response = await axios.get("/products")
//   return {
//       type: ActionTypes.FETCH_PRODUCTS,
//       payload: response
//   }
// }

export const setProducts = (products: Product) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const selectedProducts = (product: Product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product
    }
}

export const removeSelectedProducts = () => {
  return {
      type: ActionTypes.REMOVE_SELECTED_PRODUCT
  }
}