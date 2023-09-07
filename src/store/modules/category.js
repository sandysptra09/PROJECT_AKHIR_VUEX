import axios from "axios";

const category = {
    namespaced: true,
    state: {
        categories:[],
        categoryBySlug: [],
    },
    getters:{
        getCategories: (state) => state.categories,
        getCategoriesBySlug: (state) => state.categoryBySlug
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
        },

        async fetchCategoryBySlug({ commit }, categorySlug) {
            try {
                const response = await axios.get('https://ecommerce.olipiskandar.com/api/v1/product/search', {
                    params: {
                        page: 1,
                        category_slug: categorySlug,
                        brand_ids: '',
                        attribute_values: '',
                        sort_by: 'popular',
                    },
                });
                commit('SET_CATEGORY_BY_SLUG', response.data.products.data);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        },
    },
    mutations:{
        SET_CATEGORY(state, categories) {
            state.categories = categories
        },
        SET_CATEGORY_BY_SLUG(state, CategorySlug) {
            state.categoryBySlug = CategorySlug
        }
    }
}

export default category;