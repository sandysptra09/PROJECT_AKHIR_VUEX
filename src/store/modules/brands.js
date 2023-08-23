import axios from "axios";

const brand = {
    namespaced: true,
    state: {
        brands:[],

    },
    getters:{
        getBrands: (state) => state.brands,
    },
    actions:{
        async fetchBrands({commit}) {
            try {
                const dataBrand = await axios.get("https://ecommerce.olipiskandar.com/api/v1/all-brands")
                commit('SET_BRANDS',dataBrand.data.data.slice(0, 20))
            } catch (error) {
                alert('Ada Error')
                console.log(error)
            }
        }
    },
    mutations:{
        SET_BRANDS(state, brands) {
            state.brands = brands
        }
    }
}

export default brand;