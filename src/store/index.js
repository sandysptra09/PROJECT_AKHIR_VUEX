import { createStore } from "vuex";
import user from "./modules/users";
import auth from "./modules/auth";
import product from "./modules/product";
import category from "./modules/category";
import brands from "./modules/brands";
import keranjang from './modules/keranjang'

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
    },
});
  
export default store;
  