import axios from 'axios';

// Create a custom Axios instance with proxy configuration
const axiosInstance = axios.create({
  baseURL: 'https://cart-zone.onrender.com/api/v1', // Assuming your backend API is served at /api/v1
  // If your backend API is served at a different path, adjust the baseURL accordingly
});

import { 
    ALL_PRODUCT_FAIL,
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS, 
    ADMIN_PRODUCT_REQUEST,
    ADMIN_PRODUCT_SUCCESS,
    ADMIN_PRODUCT_FAIL,
    NEW_PRODUCT_REQUEST,
    NEW_PRODUCT_SUCCESS,
    NEW_PRODUCT_FAIL,
    NEW_PRODUCT_RESET,
    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_FAIL,
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    NEW_REVIEW_REQUEST,
    NEW_REVIEW_SUCCESS,
    NEW_REVIEW_FAIL,
    NEW_REVIEW_RESET,
    ALL_REVIEW_REQUEST,
    ALL_REVIEW_SUCCESS,
    ALL_REVIEW_FAIL,
    DELETE_REVIEW_REQUEST,
    DELETE_REVIEW_SUCCESS,
    DELETE_REVIEW_FAIL,
    DELETE_REVIEW_RESET,
    CLEAR_ERRORS,
} from "../constants/productConstants";

export const getProduct = (keyword = "",currentPage = 1,price = [0,25000],category,rating = 0)=>async(dispatch)=>{
    try{
      dispatch({type : ALL_PRODUCT_REQUEST});
      let link = `/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&rating[gte]=${rating}` ;
      
      if(category){
        link = `/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&rating[gte]=${rating}`
      }

      const { data }  = await axiosInstance.get(link);
      dispatch({
      type : ALL_PRODUCT_SUCCESS,
      payload :data,
    })
    } catch(error) {
      dispatch({type : ALL_PRODUCT
