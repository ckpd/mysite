import React, { Component } from 'react';
//import { fetchCart} from '../../redux/actions/actions';
import { connect } from "react-redux";
import Footer from '../../components/Footer/Footer'


class CheckoutApp extends Component {
  componentDidMount(){
//    this.props.fetchCart();
  }

  render() {
    return (
      <div className="App">
      <div className ="container">
        <table className="table">
            <tr>
                  <th>Title</th>
                  <th>Price</th>
                </tr>
                {this.props.items.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{index}</td>
                      <td>{item.name}</td>
                    </tr>
                  );
                })
                }
      </table>
      </div>
      <Footer/>

    </div>
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
//      fetchCart: () => dispatch(fetchCart()),
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(CheckoutApp);
