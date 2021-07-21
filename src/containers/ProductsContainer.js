import { Component } from "react";
import { connect } from "react-redux";
import Products from "./../components/Products";
import Product from "./../components/Product";
import PropTypes from "prop-types";

class ProductsContainer extends Component {
  render() {
    var { products } = this.props;
    return <Products>{this.showProduct(products)}</Products>;
  }
  showProduct(products) {
    var result = null;
    console.log(products.length > 0);
    if (products.length > 0) {
      result = products.map((product, index) => {
        return <Product key={index} product={product}></Product>;
      });
    }
    return result;
  }
}
ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ).isRequired,
};
const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};
export default connect(mapStateToProps, null)(ProductsContainer);