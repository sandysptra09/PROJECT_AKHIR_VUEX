import { createStore } from "vuex";
import user from "./modules/users";
import auth from "./modules/auth";
import product from "./modules/product";
import category from "./modules/category";
import brands from "./modules/brands";
import keranjang from './modules/keranjang'
import order from "./modules/order";

const store = createStore({
    state: {
      isLoading: false,
    },
    modules: {
        auth,
        product,
        category,
        brands,
        user,
        keranjang,
        order,
    },
});
  
export default store;
  