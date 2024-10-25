"use client";

import { createContext, useContext, useEffect, useReducer } from "react";

const { Provider } = createContext();

const initialState = {
  cartItems: [],
};

const findItemsCart = (state, items) => {
  return state.cartItems.find((item) => item.id === items.id);
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const findItemAdd = findItemsCart(state, action.payload);
      if (findItemAdd) {
        const newCart = state.cartItems.map((item) => {
          if (item.id === findItemAdd.id) {
            return {
              ...item,
              quantity: item.quantity + action.payload.quantity,
            };
          }
          return item;
        });
        localStorage.setItem(
          "cart",
          JSON.stringify({ ...state, cartItems: newCart })
        );
        return { ...state, cartItems: newCart };
      }
      let addCart = {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
      localStorage.setItem("cart", JSON.stringify(addCart));
      return addCart;

    case "REMOVE_ITEM_CART":
      const updatedCartItemsRemove = state.cartItems
        .map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity - 1 }; // Tạo bản sao mới của đối tượng
          }
          return item; // Trả về bản sao của đối tượng không thay đổi
        })
        .filter((item) => item.quantity > 0);

      return { ...state, cartItems: updatedCartItemsRemove };
    case "ADD_ITEM_CART":
      const updatedCartItemsAdd = state.cartItems.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity + 1 }; // Tạo bản sao mới của đối tượng
        }
        return item; // Trả về bản sao của đối tượng không thay đổi
      });

      return { ...state, cartItems: updatedCartItemsAdd };

    case "REMOVE_ALL":
      localStorage.removeItem("cart");
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

export const SystemCart = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export const useSystemCart = () => {
  return useContext(SystemCart);
};

//  dispatch phải chuyền dưới dang dispatch({action , payload})
