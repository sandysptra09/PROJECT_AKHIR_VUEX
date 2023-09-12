import axios from "axios";

const address = {
    namespaced: true,
    state: {
        newAddress: []
    },
    getters: {
        getNewAddress: (state) => state.newAddress,
    },
    actions: {
        async addAddress({ commit, dispatch }, address, city, country, phone, postal_code, state) {
            try {
                const response = await axios.post(
                    "https://ecommerce.olipiskandar.com/api/v1/user/address/create",
                    {
                        "address": address,
                        "city": city,
                        "country": country,
                        "id": null,
                        "phone": phone,
                        "postal_code": postal_code,
                        "state": state,
                    }, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem("token")}`
                    }
                });
                commit("ADD_ADDRESS", response.data)
                console.log(response.data)

            } catch (error) {
                console.error(error);
            }

        },

        async deleteAddress({ commit, dispatch }, addressId) {
            try {
                const response = await axios.get(
                    `https://ecommerce.olipiskandar.com/api/v1/user/address/delete/${addressId}`,
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`,
                        },
                    }
                );
                commit("DELETE_ADDRESS", addressId);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            } finally {
                dispatch("keranjang/fetchAddress", null, { root: true });
            }
        },

    },
    mutations: {
        ADD_ADDRESS(state, newAddress) {
            state.newAddress = newAddress
        },
        DELETE_ADDRESS(state, newAddress) {
            state.newAddress = newAddress
        },
    }
};

export default address;
