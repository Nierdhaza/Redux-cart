import React, { Component } from 'react';
import './filter.css'
import { connect } from 'react-redux';
import { sortProducts }  from '../../actions/products.action'

class Products extends Component {

    render() {
        console.log(this.props);
        return (
            <div className = 'row'>
                <div className = "row-unit">
                    {`${this.props.count} products found.`}
                </div>
                <div className = "row-unit">
                    <label>Order by Price
               <select className="form-control" value={this.props.sort} 
               onChange = { (e) => {this.props.sortProducts(this.props.filteredProducts, e.target.value)}} >
                            <option value="">Select</option>
                            <option value="lowestprice"> Lowest to highest</option>
                            <option value="highestprice"> Highest to lowest</option>
                        </select>
                    </label>
                </div >
                {/* <div className = "row-unit">
                    <label > Filter Available
                        <select>
                            <option>Select</option>
                            <option value="lowestAwailable"> Lowest to highest</option>
                            <option value="highestAwailable"> Highest to lowest</option>
                        </select>
                    </label>
                </div> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    products: state.products.items,
    sort: state.products.sort,
    filteredProducts: state.products.filteredItems
})

// const mapDispatchToProps = (dispatch) => ({
//     filterByPrice
// })

export default connect(mapStateToProps, {sortProducts})(Products)