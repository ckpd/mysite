import React, { Component } from 'react';
import Banner from '../../components/Banner/Banner';
import Gallery from '../../components/Gallery/Gallery';
import DataList from '../../components/Data/DataList';
import Social from '../../components/Social/Social'
import Footer from '../../components/Footer/Footer';
import down from '../../assets/imgs/down.png';
import { addToCart} from '../../redux/actions/actions';
import { connect } from "react-redux";
import cachedData from '../../components/Data/Data.json'

class App extends Component {
  constructor(props){
  super(props);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }
  
  handleAddToCart(data){
    console.log(data)
    this.props.addToCart(addToCart(data))
  }

  render() {
    var header__h1 = 'Make Awesome Travel Easy & Affordable.';
    var subTitle__p='Rent a car or suv from us today';
    return (
      <div>
      <div className="container">
      <Banner 
            header={header__h1} 
            subTitle={subTitle__p}
            down={down}
            alt={down}/>
      <hr/>
      <DataList 
          data={cachedData.items}
          handleAddToCart={this.handleAddToCart}
          />
          <hr/>
        <Gallery/>
        <hr />
        <Social />
      </div>
      <Footer/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart
});

const mapDispatchToProps = (dispatch) => 
({
  addToCart: objectId => dispatch(addToCart(objectId))
});


export default connect(mapStateToProps,mapDispatchToProps )(App);
