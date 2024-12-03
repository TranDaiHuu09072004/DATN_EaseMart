import { useEffect, useReducer, createContext, useContext } from "react";
import { toast } from "react-toastify";
// import { usePathname } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
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
        Swal.fire({
          icon: "error",
          title: "Chưa đăng nhập",
          text: "Vui lòng đăng nhập để có thể thêm sản phẩm vào giỏ hàng!",
          showCancelButton: true, // Hiển thị nút "Hủy" (hoặc OK)
          confirmButtonText: "Đăng nhập", // Văn bản nút xác nhận
          cancelButtonText: "OK", // Văn bản nút hủy
        }).then((result) => {
          if (result.isConfirmed) {
            // Điều hướng đến trang đăng nhập nếu người dùng chọn "Đăng nhập"
            window.location.href = "/dangnhap";
          }
          // Nếu người dùng nhấn "OK", popup sẽ đóng mà không có thêm hành động nào.
        });
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

            return { ...item, select: false };
          }),
        };

        saveCartToLocalStorage(userEmail, newCart.cartItems);
        toast.success("Số lượng sản phẩm đã được cập nhật!");
        return newCart;
      }

      action.data.quantity = 1;
      action.data.select = false;

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
    case "UPDATE_SELECT_CART":
      const newCartItemsSelect = [...state.cartItems];
      newCart = {
        ...state,
        cartItems: newCartItemsSelect.map((item) => {
          if (item.id === action.data.id) {
            item.select = !item.select;
          }
          return item;
        }),
      };

      saveCartToLocalStorage(userEmail, newCart.cartItems);
      return newCart;
    case "UPDATE_SELECT_All_CART":
      const newCartItemsSelectAll = [...state.cartItems];
      newCart = {
        ...state,
        cartItems: newCartItemsSelectAll.map((item) => {
          item.select = true;

          return item;
        }),
      };

      saveCartToLocalStorage(userEmail, newCart.cartItems);
      return newCart;

    case "REMOVE_ALL":
      newCart = {
        ...state,
        cartItems: [],
      };
      saveCartToLocalStorage(userEmail, newCart.cartItems);
      return newCart;
    default:
      return state;
  }
};

const initialState = {
  cartItems: [],
};

const CartContext = createContext();

export const CartFunction = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    const cartUser = getCartFromLocalStorage(userEmail);
    if (cartUser !== undefined) {
      console.log("check");

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
