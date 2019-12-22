import {
    FETCH_PRODUCTS_PENDING,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_ERROR,
    FETCH_CATEGORIES_PENDING,
    FETCH_CATEGORIES_SUCCESS,
    fetchCategoriesError,
    FILTER_PRODUCT
} from '../actions/index';
import { createRef } from 'react';

const initialState = {
    productPending: false,
    categoriesPending: false,
    categories: [],
    products: [],
    error: null,
    filter: 'ALL',
    serviceRef: createRef()
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_PENDING:
            return {
                ...state,
                productPending: true
            }
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                productPending: false,
                products: action.products
            }
        case FETCH_PRODUCTS_ERROR:
            return {
                ...state,
                productPending: false,
                error: action.error
            }
        case FILTER_PRODUCT:
            return {
                ...state,
                filter: action.filter
            }
        case FETCH_CATEGORIES_PENDING:
            return {
                ...state,
                categoriesPending: true,
            }
        case FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                categoriesPending: false,
                categories: action.categories
            }
        case FETCH_PRODUCTS_ERROR:
            return {
                ...state,
                categoriesPending: false,
                error: action.error
            }
        default:
            return state;
    }
}

export const getProducts = state => state.products;

export const getProductsPending = state => state.pending;

export const getProductsError = state => state.error;