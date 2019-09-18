import { ADD_NEW_PRODUCT } from '../actions/products.action'
import { REMOVE_FROM_CART, GET_CART_ITEMS } from '../actions/cart.actions'
import {GET_PRODUCT_LIST, FILTER_PRODUCTS_BY_PRICE} from '../actions/products.action';

const initState = {
  inCart: [],
  products: [],
  filteredItems: []
};


export default function appReducer(state = initState, action) {
    console.log(action);
    switch (action.type) {
        case ADD_NEW_PRODUCT:
          return {
            ...state,
            inCart: [...state.inCart, action.payload],
          };
        case REMOVE_FROM_CART:
          return {
            ...state,
            inCart: state.inCart.filter(item => item !== action.payload),
          };
          case FILTER_PRODUCTS_BY_PRICE:
              return { 
                ...state,
                filteredItems: action.payload.items,
                sort: action.payload.sort
               };
           case GET_CART_ITEMS:
               return state.inCart;
            case GET_PRODUCT_LIST:
                return {
                  ...state,
                  products: action.payload
                }
            default:
                return state;
        }
      }

