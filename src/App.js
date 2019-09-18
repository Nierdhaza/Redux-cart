import React, {Component} from 'react';
import { BrowserRouter,  Route , Switch } from 'react-router-dom'

// Components
import SideBar from './components/sidebar';
import Cart from './containers/cart';
import ProductList from './containers/product-list';


// CSS
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My simple shop</h1>
        </header>
        <div className="App-wrapper">
          <SideBar />
          <Switch>
            <Route path = '/cart' component = {Cart}/>
            <Route path = '/product-list' component = {ProductList}/>
          </Switch>
        </div>
      </div>
      </BrowserRouter>
    );
  }
}