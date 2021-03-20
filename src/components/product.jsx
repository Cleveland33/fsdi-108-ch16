import React, { Component } from 'react';
import QuantityPicker from './quantityPicker';

import "./product.css"

class Product extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="product">

                <img src="https://i.picsum.photos/id/938/200/300.jpg?hmac=MVXKrDXBUPK5fv_Ev3FTdCFeYf9rvJE2Tz9xynjeelM"></img>

                <label>Product Description here</label>

                <label>$ Total</label>
                <label>$ Price</label>

                <QuantityPicker></QuantityPicker>
            </div>
         );
    }
}
 
export default Product;