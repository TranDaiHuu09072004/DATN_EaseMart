import { useEffect, useReducer, createContext, useContext } from "react";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
let userEmail = null;

if (typeof window !== "undefined") {
  // Chỉ chạy khi trên client
  const user = localStorage.getItem("user");
  userEmail = user ? JSON.parse(user).email : null;
}

const getYeuThichFromLocalStorage = (userEmail) => {
  const storedYeuThich = JSON.parse(localStorage.getItem(`yt_${userEmail}`));
  return storedYeuThich ? storedYeuThich : [];
};

const saveYeuThichToLocalStorageItems = (userEmail, ListYT) => {
  localStorage.setItem(`yt_${userEmail}`, JSON.stringify(ListYT));
  return true;
};

export class DispatchYt {
  constructor(type, data) {
    this.type = type;
    this.data = data;
  }
}

let newYeuThich = null;

const yeuThichReducer = (state, action) => {
  switch (action.type) {
    case "ADD_YEUTHICH_ITEMS_FROM_LOCAL":
      const yeuThich = getYeuThichFromLocalStorage(userEmail);
      newYeuThich = { ...state, yeuThichItems: yeuThich };
      return newYeuThich;
    case "ADD_ITEM_YEUTHICH":
      console.log("check");

      if (!userEmail) {
        Swal.fire({
          icon: "error",
          title: "Chưa đăng nhập",
          text: "Vui lòng đăng nhập để có thể thêm sản phẩm vào danh sách yêu thích!",
          showCancelButton: true,
          confirmButtonText: "Đăng nhập",
          cancelButtonText: "OK",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "/dangnhap";
          }
        });
        return initialState;
      }

      const listIdItem = state?.yeuThichItems.map((item) => item.id);
      if (listIdItem?.includes(action.data.id)) {
        console.log(listIdItem);

        toast.success("Bạn đã yêu thích sản phẩm này từ trước!");
        return newYeuThich;
      }

      newYeuThich = {
        ...state,
        yeuThichItems: [...state.yeuThichItems, action.data],
      };
      console.log(newYeuThich);

      saveYeuThichToLocalStorageItems(userEmail, newYeuThich.yeuThichItems);
      toast.success("Sản phẩm đã được thêm vào danh sách yêu thích!");
      return newYeuThich;

    case "DELETE_ITEM_YEUTHICH":
      newYeuThich = {
        ...state,
        yeuThichItems: state.yeuThichItems.filter(
          (item) => item.id !== action.data.id
        ),
      };
      saveYeuThichToLocalStorageItems(userEmail, newYeuThich.yeuThichItems);
      toast.success("Sản phẩm đã được xóa 1 trong danh sách yêu thích!");
      return newYeuThich;
    default:
      return state;
  }
};

const initialState = {
  yeuThichItems: [],
};

const YeuThichContext = createContext();

export const YeuThichFunction = ({ children }) => {
  const [state, dispatch] = useReducer(yeuThichReducer, initialState);

  useEffect(() => {
    const yeuThichUser = getYeuThichFromLocalStorage(userEmail);
    if (yeuThichUser !== undefined) {
      dispatch(new DispatchYt("ADD_YEUTHICH_ITEMS_FROM_LOCAL", yeuThichUser));
    }
  }, []);

  return (
    <YeuThichContext.Provider value={{ stateYt: state, dispatchYt: dispatch }}>
      {children}
    </YeuThichContext.Provider>
  );
};

export const useYeuThich = () => {
  return useContext(YeuThichContext);
};
