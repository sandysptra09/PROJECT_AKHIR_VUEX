import axios from "axios";

const user = {
    namespaced: true,
    state: {
        users:[],
        dashboard:[],

    },
    getters:{
        getUsers: (state) => state.users,
        getDasboard: (state) => state.dashboard,
    },
    actions:{
        async fetchUsers({commit}) {
            try {
                const token = localStorage.getItem("token");
                const dataUsers = await axios.get("https://ecommerce.olipiskandar.com/api/v1/user/info", {
                    headers: {
                        'Authorization' : `Bearer ${token}`
                    }
                })
                console.log(dataUsers.data)
                commit('SET_USER',dataUsers.data['user'])
            } catch (error) {
                alert('Ada Error')
                console.log(error)
            }
        },

        // Info Dashboard
        async fetchDasboard({commit}) {
            try {
                const token = localStorage.getItem("token");
                const dataDashboard = await axios.get("https://ecommerce.olipiskandar.com/api/v1/user/dashboard", {
                    headers: {
                        'Authorization' : `Bearer ${token}`
                    }
                })
                console.log(dataDashboard.data)
                commit('SET_DASHBOARD',dataDashboard.data)
            } catch (error) {
                alert('Ada Error')
                console.log(error)
            }
        }
    },
    mutations:{
        SET_USER(state, users) {
            state.users = users
        },
        SET_DASHBOARD(state, dashboard) {
            state.dashboard = dashboard
        }
    }
}

export default user;