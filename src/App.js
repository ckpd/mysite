import React, { Component } from 'react';
import Cart from './components/Cart/Cart'
import Router from './Router'

class App extends Component {
  render() {
    return (
      <div className='Container'>
          <Cart />
          <Router />
      </div>
    );
  }
}


export default App;