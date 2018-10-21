import React, { Component } from 'react';
import bag from '../../assets/imgs/bag.png'
import { getCart} from '../../redux/actions/actions';
import { connect } from "react-redux";
import './Cart.css';

class Cart extends Component{
    componentDidMount(){
//        this.props.fetchCart();
    }

    render(){
        var x = 0;
        if(this.props.getCart.items){
            x = this.props.getCart.items;   
        }
        return(
            <nav>
                <header className="logo">
                <a href="/"><h1 className="App-title"><span>BRANDED</span></h1></a>
                </header>
                <header className="nav-links">
                <ul>

                <li><a href="/checkout" data-badge={x}><img src={bag} alt="checkout-bag"/></a></li>
            </ul>   
            </header>
        </nav>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      items: state.cart
    };
};

const mapDispatchToProps = (dispatch, state, props) => {
    return {
        getCart: getCart(state.cart, props)     // It it give you all information regarding items in cart
//        fetchCart: () => dispatch(fetchCart()),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
