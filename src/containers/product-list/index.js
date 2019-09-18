import React, {Component} from 'react';
import {connect} from 'react-redux';
import { addNewProduct } from '../../actions/products.action'
import { getProductList } from '../../actions/products.action'
import './product-list.css';
import Filter from '../Filter/Filter'

export class ProductList extends Component {
  constructor(props) {
      super(props);
    }

    componentWillMount() {
     return this.props.fetchProducts();
    }

  addProduct = item => {
    item.available = item.available - 1;
    return this.props.addNewProduct(item)
  };
  
  renderProducts() {
    const { products } = this.props;
    return products.map((element, index) => {
      return (
        <div className="product_list_item" key={index}>
          <p>{element.name}</p>
          <p>Price: {element.price}</p>
          <p>Units Left:{element.available}</p>
          <p>{element.available > 0 ? "In stock" : 'Sold out'}</p>
          <button className="add-to-cart-btn" onClick={() => this.addProduct(element, index)} disabled = {element.available > 0 ? false : true}>
            Add to card
          </button>
        </div>
      );
    });
  }

  render() {
    console.log(this.props);
    return <div>
      <div><Filter /></div>
      <div className="App-product_list">
      {this.renderProducts()}
    </div>
    </div>;
  }
}


const mapStateToProps = state => ({
  ...state,
  });

const mapDispatchToProps = dispatch => ({
  addNewProduct: item => {
    dispatch(addNewProduct(item))
    console.log(item)},
  fetchProducts: () => {
    dispatch(getProductList());
  }
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);