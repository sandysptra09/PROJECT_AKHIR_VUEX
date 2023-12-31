import axios from "axios";

const product = {
  namespaced: true,
  state: {
    products: [],
    shortProducts: [],
    singleProduct: [],
    keranjang: [],


  },
  getters: {
    getProduct: (state) => state.products,
    getShortProduct: (state) => state.shortProducts,
    getProductBySlug: (state) => (product_slug) => {
      console.log("Fetching single product by Slug:", product_slug);
      console.log("products:", state.products);
      const product = state.products.find((p) => p.slug == product_slug);
      return product;
    },


  },

  actions: {
    async fetchProduct({ commit }) {
      try {
        const dataProduct = await axios.get("https://ecommerce.olipiskandar.com/api/v1/product/latest/20")
        commit('SET_PRODUCTS', dataProduct.data['data'])
      } catch (error) {
        alert('Ada Error')
        console.log(error)
      }
    },

    async fetchShortProduct({ commit }) {
      try {
        const shortData = await axios.get("https://ecommerce.olipiskandar.com/api/v1/product/latest/6")
        commit('SET_SHORT_PRODUCTS', shortData.data['data'])
      } catch (error) {
        alert('Ada Error')
        console.log(error)
      }
    },

    async fetchSingleProduct({ commit }, product_slug) {
      try {
        const response = await axios.get(
          `https://ecommerce.olipiskandar.com/api/v1/product/details/${product_slug}`
        );
        commit("SET_SINGLE_PRODUCT", response.data['data']);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },

    async addKeranjang({ commit, dispatch }, productId) {
      try {
        const response = await axios.post(
          "https://ecommerce.olipiskandar.com/api/v1/carts/add",
          {
            "variation_id": productId,
            "qty": 1,
            "temp_user_id": null,
          }, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`
          }
        });
        commit("ADD_KERANJANG", response.data)
        console.log(response.data)

      } catch (error) {
        console.error(error);
      } finally {
        // Memanggil aksi fetchKeranjang dari state management keranjang
        dispatch("keranjang/fetchKeranjang", null, { root: true });
      }

    },

    async editKeranjang({ commit, dispatch }, param) {
      try {
        const response = await axios.post(
          "https://ecommerce.olipiskandar.com/api/v1/carts/change-quantity",
          param, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`
          }
        });

        console.log(response.data)

      } catch (error) {
        console.error(error);

      } finally {

        // Memanggil aksi fetchKeranjang dari state management keranjang
        dispatch("keranjang/fetchKeranjang", null, { root: true });
      }

    },

  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products
    },
    SET_SHORT_PRODUCTS(state, shortProducts) {
      state.shortProducts = shortProducts
    },
    SET_SINGLE_PRODUCT(state, product) {
      state.singleProduct = product;
    },
    ADD_KERANJANG(state, keranjang) {
      state.keranjang = keranjang
    },
    EDIT_KERANJANG(state, keranjang) {
      state.keranjang = keranjang
    }

  }
}

export default product;