import axios from "axios";
import Swal from 'sweetalert2';

const keranjang = {
    namespaced: true,
    state: {
        keranjang: [],
        address: []
    },
    getters: {
        getKeranjang: (state) => state.keranjang,
        getAddress: (state) => state.address
    },
    actions: {

        // fetch cart
        async fetchKeranjang({ commit }) {
            try {
                const dataKeranjang = await axios.post("https://ecommerce.olipiskandar.com/api/v1/carts", {
                    "temp_user_id": null
                }, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                })
                console.log(dataKeranjang.data.cart_items.data);
                commit('SET_KERANJANG', dataKeranjang.data.cart_items.data)
            } catch (error) {
                alert('Ada Error')
                console.log(error)
            }
        },

        // delete cart
        async deleteKeranjang({ commit, dispatch }, kategoriId) {
            try {
                const hapuskeranjang = await axios.post("https://ecommerce.olipiskandar.com/api/v1/carts/destroy", {
                    "cart_id": kategoriId,
                    "temp_user_id": null
                }, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                })
                console.log(hapuskeranjang.data);
                Swal.fire({
                    icon: 'success',
                    title: 'Remove Successful',
                    text: 'Item has been removed from your cart !',
                });
                // commit('SET_KERANJANG',hapuskeranjang.data.cart_items.data)
            } catch (error) {
                // alert('Ada Error')
                console.log(error)

            }
            finally {
                dispatch("keranjang/fetchKeranjang", null, { root: true });
            }
        },

        // fetch user address
        async fetchAddress({ commit }) {
            try {
                // const token = localStorage.getItem('token');
                const getAddress = await axios.get(
                    "https://ecommerce.olipiskandar.com/api/v1/user/addresses", {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });
                console.log(getAddress.data.data)
                commit("SET_ADDRESS", getAddress.data.data[1]);
                return getAddress.data
            } catch (error) {
                alert('Ada Error')
                console.log(error)
            }
        },

        // checkout
        async checkoutCart(
            { commit, dispatch }, { shippingAddress, billingAddress, paymentType, deliveryType, cart_item_ids, }) {
            try {
                const response = await axios.post(
                    `https://ecommerce.olipiskandar.com/api/v1/checkout/order/store`,
                    {
                        shipping_address_id: shippingAddress,
                        billing_address_id: billingAddress,
                        payment_type: paymentType,
                        delivery_type: deliveryType,
                        cart_item_ids: cart_item_ids,
                        transactionId: null,
                        receipt: null,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`,
                        },
                    }
                );
                console.log(response.data);
                dispatch("fetchKeranjang");
            } catch (error) {
                alert("Error");
                console.log(error);
            }
        },


    },
    mutations: {
        SET_KERANJANG(state, keranjang) {
            state.keranjang = keranjang
        },
        // DELETE_KERANJANG(state, keranjang) {
        //     state.keranjang = keranjang
        // },
        SET_ADDRESS(state, address) {
            state.address = address;
        },
    }
}

export default keranjang;