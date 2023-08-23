import axios from "axios";

const user = {
    namespaced: true,
    state: {
        users:[],

    },
    getters:{
        getUsers: (state) => state.users,
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
        }
    },
    mutations:{
        SET_USER(state, users) {
            state.users = users
        }
    }
}

export default user;