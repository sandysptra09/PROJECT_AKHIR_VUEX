import axios from "axios";

const search = {
    namespaced: true,
    state: {
        searchResults: [],

    },
    getters: {
        getSearchResults: (state) => state.searchResults,
    },
    actions: {
        async fetchSearchResults({ commit }, keyword) {
            try {
                const response = await axios.get(`https://ecommerce.olipiskandar.com/api/v1/search.ajax/${keyword}`);

                if (response.data.products && response.data.products.data) {
                    const products = response.data.products.data;
                    commit('SET_SEARCH_RESULTS', products);
                } else {
                    commit('SET_SEARCH_RESULTS', []);
                }
            } catch (error) {
                alert('Ada Error')
                console.error(error);
            }
        },

    },
    mutations: {
        SET_SEARCH_RESULTS(state, results) {
            state.searchResults = results;
        },
    }
}

export default search;