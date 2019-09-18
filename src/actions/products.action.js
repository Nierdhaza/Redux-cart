export const GET_PRODUCT_LIST = 'GET_PRODUCT_LIST';
export const ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT';
export const FILTER_PRODUCTS_BY_AMOUNT = 'FILTER_PRODUCTS_BY_AMOUNT';
export const FILTER_PRODUCTS_BY_PRICE = 'FILTER_PRODUCTS_BY_PRICE';


export const getProductList = () => (dispatch) => {
    setTimeout(() => {
        fetch('http://localhost:8000/products')
        .then(response => response.json())
        .then(data => {
            return dispatch({type: GET_PRODUCT_LIST, payload: data})
        })
    },1000)
}

export const addNewProduct = item => ({type: ADD_NEW_PRODUCT, payload: item});

export const sortProducts = (products, sort) => (dispatch) => {
    if (sort !== '') {
        products.sort((a, b) => (sort === 'lowest' ? ((a.price > b.price) ? 1 : -1) : ((a.price < b.price) ? 1 : -1)));
      } else {
        products.sort((a, b) => (a.id > b.id) ? 1 : -1);
      }
        return dispatch({
            type: FILTER_PRODUCTS_BY_PRICE,
            payload: {
                sort: sort,
                items: products
            }
        })
}
