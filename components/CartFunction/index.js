import { useEffect, useReducer, createContext, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
// import { usePathname } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";
let userEmail = null;

if (typeof window !== "undefined") {
  // Chỉ chạy khi trên client
  const user = localStorage.getItem("user");
  userEmail = user ? JSON.parse(user).email : null;
}

export class Dispatch {
  constructor(type, data) {
    this.type = type;
    this.data = data;
  }
}

let newCart = null;

const saveCartToLocalStorage = (userEmail, cartItems) => {
  localStorage.setItem(`cart_${userEmail}`, JSON.stringify(cartItems));
};

const getCartFromLocalStorage = (userEmail) => {
  const storedCart = JSON.parse(localStorage.getItem(`cart_${userEmail}`));
  return storedCart ? storedCart : [];
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CART_ITEMS_FROM_LOCAL":
      const cart = getCartFromLocalStorage(userEmail);
      newCart = { ...state, cartItems: cart };
      return newCart;
    case "ADD_ITEM_CART":
      if (!userEmail) {
        toast.error("Vui lòng đăng nhập để có thể thêm sản phẩm vào giỏ hàng!");
        return initialState;
      }

      // state?.cartItems.map((item) => item.id);
      const listIdItem = state?.cartItems.map((item) => item.id);
      if (listIdItem?.includes(action.data.id)) {
        newCart = {
          ...state,
          cartItems: state.cartItems.map((item) => {
            if (item.id === action.data.id) {
              return {
                ...item,
                quantity: item.quantity + action.data.quantity,
              };
            }

            return item;
          }),
        };
        saveCartToLocalStorage(userEmail, newCart.cartItems);
        toast.success("Số lượng sản phẩm đã được cập nhật!");
        return newCart;
      }

      action.data.quantity = 1;

      newCart = {
        ...state,
        cartItems: [...state.cartItems, action.data],
      };
      saveCartToLocalStorage(userEmail, newCart.cartItems);
      toast.success("Sản phẩm đã được thêm vào giỏ hàng!");
      return newCart;
    case "UPDATE_MINUS_ITEM_CART":
      const newCartItemsMinus = [...state.cartItems];
      if (newCartItemsMinus[action.data.index].quantity == 1) {
        newCart = {
          ...state,
          cartItems: newCartItemsMinus,
        };
        saveCartToLocalStorage(userEmail, newCart.cartItems);
        return newCart;
      }
      newCartItemsMinus[action.data.index].quantity -= 1;

      newCart = {
        ...state,
        cartItems: newCartItemsMinus,
      };
      saveCartToLocalStorage(userEmail, newCart.cartItems);
      return newCart;
    case "UPDATE_PLUS_ITEM_CART":
      console.log(action.data);

      const newCartItemsPlus = [...state.cartItems];

      newCartItemsPlus[action.data.index].quantity += 1;
      newCart = {
        ...state,
        cartItems: newCartItemsPlus,
      };
      saveCartToLocalStorage(userEmail, newCart.cartItems);
      return newCart;

    case "REMOVE_ITEM_CART":
      const newCartItemsRemove = [...state.cartItems];
      newCart = {
        ...state,
        cartItems: newCartItemsRemove.filter(
          (item) => item.id !== action.data.id
        ),
      };
      saveCartToLocalStorage(userEmail, newCart.cartItems);
      return newCart;
    case "REMOVE_ALL":
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

const initialState = {
  cartItems: [],
};

const CartContext = createContext();

export const CartFunction = ({ children }) => {
  // const pathname = usePathname();
  const [state, dispatch] = useReducer(cartReducer, initialState);
  // useEffect(() => {
  //   const handleBeforeUnload = () => {
  //     toast.dismiss(); // Xóa các toast hiện tại khi đường dẫn thay đổi
  //   };

  //   window.addEventListener("beforeunload", handleBeforeUnload);

  //   return () => {
  //     window.removeEventListener("beforeunload", handleBeforeUnload);
  //   }; // Xóa các toast hiện tại khi đường dẫn thay đổi
  // }, [pathname]);
  useEffect(() => {
    const cartUser = getCartFromLocalStorage(userEmail);
    if (cartUser !== undefined) {
      dispatch(new Dispatch("ADD_CART_ITEMS_FROM_LOCAL", cartUser));
    }
  }, []);

  return (
    <>
      <CartContext.Provider value={{ state, dispatch }}>
        {children}
      </CartContext.Provider>
    </>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
