export default {
    user: {
        token: sessionStorage.getItem('TOKEN'),
        data: {}
    },
    
    tasks: {
        data: [],
        loading: false,
        length: 0
    },

    categories: {
        data: [],
        loading: false,
    }
}