import { Product } from "../actions/producActions";
import { ActionTypes } from "../contains/action-types";

export interface productState {
    products: Product[];
}

export const initialState :productState = {
    products: [],
};
export const productsReducer = (state = initialState,  action: { type: string; payload: Product[] }) => {
    switch (action.type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: action.payload };
        default:
          return state;
      }
};

export const selectedProductsReducer = (state = initialState,  action: { type: string; payload: Product[] }) => {
    switch (action.type) {
        case ActionTypes.SELECTED_PRODUCT:
            return { ...state,...action.payload };
            case ActionTypes.REMOVE_SELECTED_PRODUCT:
                return { };
        default:
          return state;
      }
};