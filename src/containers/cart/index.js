import React, {Component} from 'react';
import {connect} from 'react-redux';
import { removeFromCart } from '../../actions/cart.actions'

import './cart.css';

export class Cart extends Component {
  constructor(props) {
    super(props);
  }

  removeItem(item) {
   this.props.removeFromCart(item);
  }

  render() {
    const { inCart } = this.props;
    console.log(inCart);
    return (<div className="App-cart">
      {inCart.length ? 
        inCart.map((item, index) => {
          return <div key = {index} className = "cart_item">
            <p>{item.name}</p>
            <p>{item.price}</p>
            <button className = "add-to-cart-btn">Remove</button>
            {/* <button className = "add-to-cart-btn" onClick = {this.removeItem(item)}>Remove</button> */}
          </div>
        })
      : 'Your cart is empty :('}
    </div>);
  }


}


const mapStateToProps = state => {
    return {...state}
  }

const mapDispatchToProps = dispatch => {
  return {
    removeFromCart: (item) => {
      dispatch(removeFromCart(item))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
