import axios from 'axios';

const order = {
    namespaced: true,
    state: {
        orderData: [],
        orderHistory:[]
    },
    getters: {
        getOrder: (state) => state.orderData,
        // getOrderHistory: (state) => state.orderHistory,
    },
    actions: {
        async fetchOrderData({ commit }, orderCode) {
            try {
                const urlOrder = `https://ecommerce.olipiskandar.com/api/v1/user/order/${orderCode}`;
                const responseOrder = await axios.get(urlOrder, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                commit('SET_ORDER', responseOrder.data['data']);
                console.log(responseOrder.data['data']);
            } catch (error) {
                console.error(error);
                alert(error);
            }
        },

        // async fetchOrderHistory({ commit }) {
        //     try {
        //         const token = localStorage.getItem("token");
        //         const orderHistory = await axios.get("https://ecommerce.olipiskandar.com/api/v1/user/orders", {
        //             headers: {
        //                 'Authorization': `Bearer ${token}`
        //             }
        //         })
        //         console.log(orderHistory.data)
        //         commit('SET_ORDER_HISTORY', orderHistory.data['data'])
        //     } catch (error) {
        //         alert('Ada Error')
        //         console.log(error)
        //     }
        // },
    },
    mutations: {
        SET_ORDER(state, order) {
            state.orderData = order;
        },
        // SET_ORDER_HISTORY(state, orderHistory) {
        //     state.orderHistory = orderHistory;
        // },
    },
};

export default order;