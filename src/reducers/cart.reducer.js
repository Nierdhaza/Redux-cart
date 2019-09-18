// import { ADD_NEW_PRODUCT } from '../actions/products.action'
// import { REMOVE_FROM_CART, GET_CART_ITEMS } from '../actions/cart.actions'
// // import { initState } from './shop.reducer'

// const initState = {
//   inCart: []
// }


// export default function cartReducer(state = initState, action) {
//     switch (action.type) {
//         case ADD_NEW_PRODUCT:
//           return {
//             ...state,
//             inCart: [...state.inCart, action.payload],
//           };
//         case REMOVE_FROM_CART:
//           return {
//             ...state,
//             inCart: state.inCart.filter(item => item !== action.payload),
//           };
//           case GET_CART_ITEMS:
//               return { 
//                 ...state,
//                 inCart: action.payload
//                }
//         default:
//           return state;
//       }
// }
