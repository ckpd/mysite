import React, { Component } from 'react';
import Banner from '../../components/Banner/Banner';
import Gallery from '../../components/Gallery/Gallery';
import DataList from '../../components/Data/DataList';
import Social from '../../components/Social/Social'
import Footer from '../../components/Footer/Footer';
import down from '../../assets/imgs/down.png';
import {addToCart, itemsFetchData} from '../../redux/actions/actions';
import { connect } from "react-redux";
import uuid from 'uuid';

// import cachedData from '../../components/Data/Data.json'
//
const x ={
        customer_session: uuid.v4()
};


class App extends Component {
  constructor(props){
  super(props);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }
    
        handleAddToCart(data){
        this.props.addToCart(data)
      }

      componentDidMount() {
        this.props.fetchData();
          
          
          
    }


  render() {

    if (this.props.hasError) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (this.props.isLoading) {
        return <p>Loading ...</p>;
    }
    var header__h1 = 'Make Awesome Travel Easy & Affordable.';
    var subTitle__p='Rent a car or suv from us today';

    var fab = this.props.items;

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
          data={fab}
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
  items: state.items,
//    users:state.users,
  hasError: state.itemsHaveError,
  isLoading: state.itemsAreLoading

});

const mapDispatchToProps = (dispatch) => 
({
  addToCart: (data) => dispatch(addToCart(data)),
  fetchData: () => dispatch(itemsFetchData())
});


export default connect(mapStateToProps,mapDispatchToProps )(App);
