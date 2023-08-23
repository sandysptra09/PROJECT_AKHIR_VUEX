import axios from "axios";

const product = {
    namespaced: true,
    state: {
        products:[],

    },
    getters:{
        getProduct: (state) => state.products,
        getProductBySlug: (state) => (product_slug) => {
            console.log("Fetching single product by Slug:", product_slug);
            console.log("products:", state.products);
            const product = state.products.find((p) => p.slug == product_slug);
            console.log("Product:", product );
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
    },
    mutations:{
        SET_PRODUCTS(state, products) {
            state.products = products
        },
        SET_SINGLE_PRODUCT(state, product) {
            state.singleProduct = product;
          },
    }
}

export default product;