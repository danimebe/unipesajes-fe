import { connect } from 'react-redux';
import ProductList from "../components/ProductList";
import { filterProduct } from '../actions';

const mapStateToProps = (state) => {
    return {
        products: state.products,
        categories: state.categories,  
        pending: state.productPending,
        filter: state.filter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onCategorieClick: (categorie) => {
            dispatch(filterProduct(categorie))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductList);


