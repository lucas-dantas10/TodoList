export default {
    user: {
        token: sessionStorage.getItem('TOKEN'),
        data: {},
        visited: localStorage.getItem('VISITED'),
        loading: false
    },
    
    tasks: {
        data: [],
        loading: false,
        length: 0
    },

    categories: {
        data: [],
        loading: false,
    },

    notifications: []
}