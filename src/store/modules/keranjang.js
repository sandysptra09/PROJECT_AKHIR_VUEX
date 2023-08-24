import axios from "axios";

const keranjang = {
    namespaced: true,
    state: {
      keranjang: [],
    },
    getters:{
       getKeranjang: (state) => state.keranjang
    },
    actions:{
        async fetchKeranjang({commit}) {
            try {
                const dataKeranjang = await axios.post("https://ecommerce.olipiskandar.com/api/v1/carts", {
                    "temp_user_id": null
                }, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                } )
                console.log(dataKeranjang.data.cart_items.data);
                commit('SET_KERANJANG',dataKeranjang.data.cart_items.data)
            } catch (error) {
                alert('Ada Error')
                console.log(error)
            }
        }
       
        
    },
    mutations:{
        SET_KERANJANG(state, keranjang) {
            state.keranjang = keranjang
        }
    }
}

export default keranjang;