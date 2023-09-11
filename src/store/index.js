import { createStore } from "vuex";
import user from "./modules/users";
import auth from "./modules/auth";
import product from "./modules/product";
import category from "./modules/category";
import brand from "./modules/brands";
import keranjang from './modules/keranjang'
import order from "./modules/order";
import wishlist from "./modules/wishlist";
import search from "./modules/search";
import address from "./modules/address";

const store = createStore({
    state: {
      isLoading: false,
    },
    modules: {
        auth,
        product,
        category,
        brand,
        user,
        keranjang,
        order,
        wishlist,
        search,
        address
    },
});
  
export default store;
  