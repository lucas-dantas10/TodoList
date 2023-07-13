export function setToken(state, token) {
    state.user.token = token;
    if (token) {
        sessionStorage.setItem('TOKEN', token);
    } else {
        sessionStorage.removeItem('TOKEN');
    }
}

export function setUser(state, user) {
    state.user.data = user;
}

export function setCategory(state, {data}) {
    data.forEach(category => {
        state.categories.data.push(category);
    });
    
    console.log(state.categories.data);
}

export function notify(state, notification) {
    state.notifications.push(notification);

    setTimeout(() => {
        state.notifications.pop();
    }, 3000);
}
