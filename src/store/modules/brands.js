import axios from "axios";

const brand = {
    namespaced: true,
    state: {
        dataBrands: [],
        brandbyId: [],

    },
    getters: {
        getBrands: (state) => state.dataBrands,
        getBrandById: (state) => state.brandbyId
    },
    actions: {
        async fetchBrands({ commit }) {
            try {
                const dataBrand = await axios.get("https://ecommerce.olipiskandar.com/api/v1/all-brands")
                commit('SET_BRANDS', dataBrand.data.data.slice(0, 20))
            } catch (error) {
                alert('Ada Error')
                console.log(error)
            }
        },

        async fetchBrandById({ commit }, brandId) {
            try {
                const response = await axios.get('https://ecommerce.olipiskandar.com/api/v1/product/search', {
                    params: {
                        page: 1,
                        brand_ids: brandId,
                        attribute_values: '',
                        sort_by: 'popular',
                    },
                });
                commit('SET_BRANDID', response.data.products.data);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        },
        
    },
    mutations: {
        SET_BRANDS(state, brand) {
            state.dataBrands = brand
        },
        SET_BRANDID(state, BrandId) {
            state.brandbyId = BrandId
        }
    }
}

export default brand;