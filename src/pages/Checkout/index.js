import React, { Component } from 'react';
import Form from '../../components/Form/Form'
import Footer from '../../components/Footer/Footer'


class CheckoutApp extends Component {
  render() {
    return (
      <div className="App">
        <div className ="container">
        <Form />
        </div>
        <Footer/>

      </div>
    );
  }
}

export default CheckoutApp;
