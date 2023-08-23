import { createStore } from "vuex";
import user from "./modules/users";
import auth from "./modules/auth";
import product from "./modules/product";
import category from "./modules/category";
import brands from "./modules/brands";

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
    },
});
  
export default store;
  