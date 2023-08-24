import axios from "axios";

const product = {
    namespaced: true,
    state: {
        products:[],
        keranjang: [],

    },
    getters:{
        getProduct: (state) => state.products,
        getProductBySlug: (state) => (product_slug) => {
            console.log("Fetching single product by Slug:", product_slug);
            console.log("products:", state.products);
            const product = state.products.find((p) => p.slug == product_slug);
            return product;
          },
    },
    actions:{
        async fetchProduct({commit}) {
            try {
                const dataProduct = await axios.get("https://ecommerce.olipiskandar.com/api/v1/product/latest/20")
                commit('SET_PRODUCTS',dataProduct.data['data'])
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

          async addKeranjang({ commit }, productId) {
            try {
              const response = await axios.post(
                "https://ecommerce.olipiskandar.com/api/v1/carts/add",
                {
                    "variation_id": productId,
                    "qty":  1,
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

            }
          },
    },
    mutations:{
        SET_PRODUCTS(state, products) {
            state.products = products
        },
        SET_SINGLE_PRODUCT(state, product) {
            state.singleProduct = product;
          },
          ADD_KERANJANG(state, keranjang) {
            state.keranjang = keranjang
        },
    }
}

export default product;