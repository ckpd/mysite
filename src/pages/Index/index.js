import React, { Component } from 'react';
import Banner from '../../components/Banner/Banner';
import Gallery from '../../components/Gallery/Gallery';
import DataList from '../../components/Data/DataList';
import Social from '../../components/Social/Social'
import Footer from '../../components/Footer/Footer';
import down from '../../assets/imgs/down.png';
import { addToCart, itemsFetchData} from '../../redux/actions/actions';
import { connect } from "react-redux";
import cachedData from '../../components/Data/Data.json'

class App extends Component {
  constructor(props){
  super(props);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }
  
  handleAddToCart(data){
    console.log(data)
    this.props.addToCart(addToCart('https://5bc254b6ce72500013c2a5c9.mockapi.io/v1/store',data))
  }

  componentDidMount() {
    this.props.fetchData('https://5bc254b6ce72500013c2a5c9.mockapi.io/v1/store');
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
          data={this.props.items}
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
  hasError: state.itemsHaveError,
  isLoading: state.itemsAreLoading

});

const mapDispatchToProps = (dispatch) => 
({
  addToCart: item => dispatch(addToCart(item)),
  fetchData: (url) => dispatch(itemsFetchData(url))
});


export default connect(mapStateToProps,mapDispatchToProps )(App);
