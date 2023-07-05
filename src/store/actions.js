import axiosClient from "../axios";

export function login({commit}, data) {
    return axiosClient.post('/login', data)
        .then(({data}) => {
            commit('setToken', data.token);
            commit('setUser', data.user);

            return data;
        })
}

export function registerUser({commit}, user) {
    return axiosClient.post('/create-account', user)
        .then(({data}) => {
            console.log('foi');
        });
}