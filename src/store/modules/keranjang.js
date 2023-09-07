import axios from "axios";
import Swal from 'sweetalert2';

const keranjang = {
    namespaced: true,
    state: {
        keranjang: [],
        address: [],
        dataKeranjang: [],
    },
    getters: {
        getKeranjang: (state) => state.keranjang,
        getAddress: (state) => state.address,
        getDataKeranjang: (state) => state.dataKeranjang,
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
                // Tampilkan SweetAlert2 untuk konfirmasi penghapusan
                const confirmResult = await Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                });

                // Jika pengguna mengklik "Yes", maka hapus produk dari keranjang
                if (confirmResult.isConfirmed) {
                    // Hapus produk dari keranjang
                    const hapuskeranjang = await axios.post("https://ecommerce.olipiskandar.com/api/v1/carts/destroy", {
                        "cart_id": kategoriId,
                        "temp_user_id": null
                    }, {
                        headers: {
                            'Authorization': `Bearer ${localStorage.getItem('token')}`
                        }
                    });
                    console.log(hapuskeranjang.data);

                    commit('SET_KERANJANG', hapuskeranjang.data.cart_items.data);
                    Swal.fire(
                        'Deleted!',
                        'Your product has been deleted.',
                        'success'
                    );
                } else {
                    // Jika pengguna mengklik "Cancel", produk tidak dihapus dari keranjang
                    Swal.fire(
                        'Cancelled',
                        'Your product is safe :)',
                        'error'
                    );
                }
            } catch (error) {
                console.log(error);
            } finally {
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
                commit('SET_CHECKOUT', response.data);
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

        // SET DATA CHECKOUT
        SET_CHECKOUT(state, keranjang) {
            state.dataKeranjang = keranjang;
        },
    }
}

export default keranjang;