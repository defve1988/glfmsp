// change UI state
const state = {
    dark_theme: true,
    mini_drawer: true,
};

const getters = {
// could do some calculation baed on state
};

const actions = {

};

const mutations = {
    CHANGE_THEME: (state) =>{state.dark_theme = !state.dark_theme;},
    OPEN_DRAWER: (state) =>{state.mini_drawer = !state.mini_drawer;},
};

export default {
    state,
    getters,
    actions,
    mutations
};