import {
    fecthProductsPending,
    fetchProductsSuccess,
    fectProductsError,
    fetchCategoriesPending,
    fetchCategoriesSuccess,
    fetchCategoriesError
} from "../actions";


export function fetchProducts() {
    return dispatch => {
        dispatch(fecthProductsPending());
        return fetch("http://localhost:3000/api/product")
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                dispatch(fetchProductsSuccess(res.productDB));
                return res.productDB;
            })
            .catch(error => {
                dispatch(fectProductsError(error));
            })
    }
}

export function fetchCategories() {
    return dispatch => {
        dispatch(fetchCategoriesPending());
        return fetch('http://localhost:3000/api/category')
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }

                dispatch(fetchCategoriesSuccess(res.categoriesDB));
                return res.categoriesDB;
            })
            .catch(error => {
                dispatch(fetchCategoriesError(error));
            })
    }
}

