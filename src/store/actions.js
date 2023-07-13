import axiosClient from "../axios";

export function getCurrentUser({ commit }) {
    return axiosClient.get('/current-user')
        .then(({data}) => commit('setUser', data));
}

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
            return data;
        });
}

export function getCategoriesUser({commit}) {
    return axiosClient.get('/categories')
        .then(({data}) => {
            commit('setCategory', data);
        })
        .catch(({response}) => {
            console.log(response);
        })
}