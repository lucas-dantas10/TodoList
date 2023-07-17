import axiosClient from "../axios";
import notify from '../hooks/notify.js';

export function getCurrentUser({ commit }) {
    return axiosClient.get('/current-user')
        .then(({data}) => commit('setUser', data));
}

export function login({commit}, data) {
    return axiosClient.post('/login', data)
        .then(({data}) => {
            commit('setToken', data.token);
            commit('setUser', data.user);
            commit('setVisited');

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
    return axiosClient.get('/category')
        .then(({data}) => {
            commit('setCategory', data);
        })
        .catch(({response}) => {
            // console.log(response);
        })
}

export function getTasks({commit}, data) {
    return axiosClient.get('/task')
        .then(({data}) => {
            commit('setTasks', data.tasks);
        })
}

export function registerTask({commit}, task) {
    return axiosClient.post('/task', task)
        .then(({data}) => {
            commit('setTask', data.task);
            notify("success", "Sucesso", data.message);
            return data;
        })
        .catch(({response}) => {
            console.log(response);
        });
}