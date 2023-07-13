import store from '../store';

export default function notify(type, title, text) {

    store.commit('notify', {
        title: title,
        text: text,
        type: type
    })
}