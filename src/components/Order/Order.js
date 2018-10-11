import React, { Component } from 'react';
import { connect } from "react-redux";
import './Order.css'

import './Order.css'
class Order extends Component{
     render(){
        return(
            <div className="Order">
                {this.props.cart.items.map((v,k)=>
                <p>your booking : <span>{v.title}</span><button>&times;</button></p>
                
                )}
                <p>from dd/mm/yyyy to mm/dd/yyyy</p>
                <p>pickup at</p>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    items: state.items.data,
    cart: state.cart,
  });
  
  

export default connect(mapStateToProps)(Order);
