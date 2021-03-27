import React, { Component } from 'react';
import QuantityPicker from './quantityPicker';

import "./product.css"

class Product extends Component {
    state = { 
        quantity: this.props.minimum || 1,
     }
    render() { 
        return ( 
            <div className="product">

                <img className="product-image" 
                src={"/images/products/" + this.props.data.image} alt="fruit-pictures">                    
                </img>

                <h4>{this.props.data.title}</h4>

                <div className="prices">
                    <label className="total-value">${this.calculateTotal()}</label>
                    <label className="price-value">
                        ${this.props.data.price.toFixed(2)}
                    </label>
                </div>

                <QuantityPicker 
                minimum={this.props.data.minimum || 1}
                onValueChange={this.handleQuantityChange}>                    
                </QuantityPicker>

                <label>Unit Price{this.props.data.price}</label>
                <label>$ Total </label>

                <label>{this.props.data.title}</label>
                <br/>
                <br/>
                <button onClick={this.handleAddToCart} className="btn btn-sm btn-primary">Add to Cart</button>
                

                
            </div>
         );
    }

    calculateTotal = () => {
        var total = this.props.data.price * this.state.quantity;
        return total.toFixed(2);
    }

    handleQuantityChange = (qnty) => {
        console.log("Quantity Changed to " + qnty);
        this.setState({ quantity: qnty });
    };

    handleAddToCart = () => {
        console.log("Add to Cart")
    };
}
 
export default Product;