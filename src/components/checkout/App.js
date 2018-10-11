import React, { Component } from 'react';
import Cart from "../Cart/Cart";
import Form from '../Form/Form'
import Footer from '../Footer/Footer'
import { addToCart} from '../../redux/actions/actions';
import { connect } from "react-redux";

class CheckoutApp extends Component {
  render() {
    return (
      <div className="App">
        <div className ="container">
        <Cart cartTotal= {(this.props.cart.items).length}/>
        <Form />
        </div>
        <Footer/>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.items.data,
  cart: state.cart,
});


export default connect(mapStateToProps)(CheckoutApp);
