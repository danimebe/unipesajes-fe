export const FETCH_PRODUCTS_PENDING = 'FETCH_PRODUCTS_PENDING';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';
export const FILTER_PRODUCT = 'FILTER_PRODUCT';
export const FETCH_CATEGORIES_PENDING = 'FETCH_CATEGORIES_PENDING';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_ERROR = 'FETCH_CATEGORIES_ERROR';

export const filterProduct = (filter) => {
    return {
        type: FILTER_PRODUCT,
        filter
    }
}


export const fecthProductsPending = () => {
    return {
        type: FETCH_PRODUCTS_PENDING
    }
}

export const fetchProductsSuccess = (products) => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        products
    }
}

export const fectProductsError = (error) => {
    return {
        type: FETCH_PRODUCTS_ERROR,
        error
    }
}

export const fetchCategoriesPending = () => {
    return {
        type: FETCH_CATEGORIES_PENDING
    }
}

export const fetchCategoriesSuccess = (categories) => {
    return {
        type: FETCH_CATEGORIES_SUCCESS,
        categories
    }
}

export const fetchCategoriesError = (error) => {
    return {
        type: FETCH_CATEGORIES_ERROR,
        error
    }
}


