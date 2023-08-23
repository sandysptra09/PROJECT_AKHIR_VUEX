import axios from "axios";

const category = {
    namespaced: true,
    state: {
        categories:[],

    },
    getters:{
        getCategories: (state) => state.categories,
    },
    actions:{
        async fetchCategory({commit}) {
            try {
                const dataCategory = await axios.get("https://ecommerce.olipiskandar.com/api/v1/all-categories")
                commit('SET_CATEGORY',dataCategory.data.data.slice(0, 20))
            } catch (error) {
                alert('Ada Error')
                console.log(error)
            }
        }
    },
    mutations:{
        SET_CATEGORY(state, categories) {
            state.categories = categories
        }
    }
}

export default category;