import React, { Component } from 'react';

class QuantityPicker extends Component {
    state = { 
        quantity:1,
        name:'Trey'
     }
    render() { 
        return ( 
            <div>
                <button onClick={this.increaseQuantity} className="btn btn-sm btn-primary">+</button>
                <label>{this.state.quantity}</label>
                <button onClick={this.decreaseQuantity} className="btn btn-sm btn-dark">-</button>
                
            </div>
            
         );
    }

    increaseQuantity = () => {
        console.log("button clicked")
        //this.state.quantity = 999; <- Dont modify state directly

        let current = this.state.quantity + 1; //read from the state 
        this.setState({ quantity: current });
    }

    decreaseQuantity = () => {
        let current = this.state.quantity - 1; //read from the state 
        if(current > 0){// update the state only when current is greater than 0
            this.setState({ quantity: current });
        }
        // prevent current going below 1

    }


}
 
export default QuantityPicker;