import axios from "axios";

const wishlist = {
  namespaced: true,
  state: {
    wishlists: [],

  },
  getters: {
    getWishlist: (state) => state.wishlist,

  },
  actions: {
    async fetchWishlist({ commit }) {
      try {
        const dataWishlist = await axios.get("https://ecommerce.olipiskandar.com/api/v1/user/wishlists", {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        })
        console.log(dataWishlist.data)
        commit('SET_WISHLIST', dataWishlist)
      } catch (error) {
        alert('Ada Error')
        console.log(error)
      }
    },

    async addwishlist({ commit, dispatch }, productId) {
      try {
        const response = await axios.post(
          "https://ecommerce.olipiskandar.com/api/v1/user/wishlists",
          {
            product_id: productId
          },
          {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
          });
        commit("ADD_WISHLIST", response.data)
        console.log(response.data)

      } catch (error) {
        console.error(error);
      }

    },

    async deleteWishlist({ commit, dispatch }, productId) {
      try {
        const response = await axios.delete(
          `https://ecommerce.olipiskandar.com/api/v1/user/wishlists/${productId}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        commit("DELETE_WISHLIST", productId);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },

  },
  mutations: {
    SET_WISHLIST(state, wishlist) {
      state.wishlist = wishlist
    },
    ADD_WISHLIST(state, wishlist) {
      state.wishlist = wishlist
    },
    DELETE_WISHLIST(state, wishlist) {
      state.wishlist = wishlist
    },

  }
}

export default wishlist;