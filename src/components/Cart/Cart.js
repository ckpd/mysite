import React, { Component } from 'react';
import bag from '../../assets/imgs/bag.png'
import { fetchCart} from '../../redux/actions/actions';
import { connect } from "react-redux";
import './Cart.css';

class Cart extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchCart();
    }

    render(){
        return(
            <nav>
                <header className="logo">
                <a href="/"><h1 className="App-title"><span>BRANDED</span></h1></a>
                </header>
                <header className="nav-links">
                <ul>
                <li><a href="/checkout" data-badge={(this.props.items).length}><img src={bag} alt="checkout-bag"/></a></li>
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

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCart: () => dispatch(fetchCart()),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
