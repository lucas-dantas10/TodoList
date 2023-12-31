import axiosClient from "../axios.js";
import notify from '../hooks/notify.js';
import axios from "axios";

export function getCurrentUser({ commit }) {
    return axiosClient.get('/current-user')
        .then(({data}) => commit('setUser', data));
}

export async function login({commit}, data) {
    return await axiosClient.post('/login', data)
        .then(({data}) => {
            commit('setToken', data.token);
            commit('setUser', data.user);
            commit('setVisited');

            return data;
        })
        // .catch(data => console.log(data));
    // return await axiosClient.post('/login', data)
    //     .then(({data}) => {
    //         commit('setToken', data.token);
    //         commit('setUser', data.user);
    //         commit('setVisited');

    //         return data;
    //     });
}

export function logout({commit, state}) {
    return axios.postForm('/logout')
        .then(() => {
            commit('setToken', null);
        })
        .catch(({response}) => response.data);
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
            commit('setCategory', data.data);
        })
        .catch(({response}) => {
            return response;
        })
}

export async function getTasks({commit, state}, task) {
    state.tasks.loading = true;
    return await axiosClient.get('/task')
        .then(({data}) => {
            commit('setTasks', data.tasks);
            state.tasks.length = data.tasks.length;
            return data;
        })
        .catch(({response}) => console.log(response))
        .finally(() => state.tasks.loading = false);
}

export function registerTask({commit, state}, task) {
    // debugger;
    state.tasks.loading = true;
    return axiosClient.post('/task', task)
        .then(({data}) => {
            commit('setTask', data.task);
            notify("success", "Sucesso", data.message);
            return data;
        })
        .catch(({response}) => response)
        .finally(() => state.tasks.loading = false);
}

export function filterDateOfTasks({commit, state}, date) {
    state.tasks.loading = true;
    return axiosClient.post('/tasks/filter', {date: date})
        .then(({data}) => {
            commit('setTasks', data.tasks);
            return data;
        })
        .catch(({response}) => {
            notify('warning', "Atenção", response.data.message);
            return response;
        })
        .finally(() => state.tasks.loading = false);
}

export function registerCategory({commit, state}, category) {
    state.categories.loading = true;
    return axiosClient.post('/category', category)
        .then(({data}) => {
            commit('setNewCategory', data);
            notify("success", "Sucesso", data.message);
        })
        .catch(({response}) => {
            notify('warning', "Atenção", response.data.message);
        })
        .finally(() => state.categories.loading = false);
}

export function searchTask({commit, state}, task) {
    return axiosClient.post('/tasks/filter/name', task)
        .then(({data}) => {
            commit('setTasks', data.tasks)
        })
        .catch(({response}) => {
            notify("warning", "Atenção", response.data.message);
        })
}

export function editTask({commit, state}, task) {
    state.tasks.loading = true;
    return axiosClient.put(`/task/${task.id}`, task)
        .then(({data}) => {
            // commit('setTask', task);
            notify('success', 'Sucesso', data.message);
        })
        .catch(({response}) => {
            console.log(response);
        })
        .finally(() => state.tasks.loading = false);
}

export function deleteTask({commit, state}, task) {
    state.tasks.loading = true;

    return axiosClient.delete(`/task/${task.id}`)
        .then(({data}) => {
            notify('success', "Sucesso", data.message);
        })
        .catch(({response}) => response)
        .finally(() => state.tasks.loading = false);
}

export function changeStatusTask({commit, state}, task) {
    return axiosClient.post('/tasks/change-status', {id: task.id, status: task.status})
        .then(({data}) => {
            // console.log(data)
        })
        .catch(({response}) => {
            // console.log(response.data);
        });
}

export function editUser({commit, state}, user) {
    state.user.loading = true;
    return axiosClient.put(`/user/${state.user.data.id}`, user)
        .then(({data}) => {
            notify('success', "Sucesso", data.message);
            state.user.data = data.user;
        })
        .catch(({response}) => {
            notify('warning', "Atenção", response.data.message);
        })
        .finally(() => state.user.loading = false);
}