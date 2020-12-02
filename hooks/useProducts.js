import { useReducer, useState } from "react";

export const useProducts = () => {

    
  const [products, dispatch] = useReducer((state, action) => {
    const { category, products } = action;
    return {
      ...state,
      [category]: products,
    };
  }, {});

  return {
    products,
    dispatch,
  };
};
