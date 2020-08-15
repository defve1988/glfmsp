// change UI state
const state = {
    mini_drawer: false,
    Scrolled: false,
};

const getters = {
// could do some calculation baed on state
};

const actions = {

};

const mutations = {
    CHANGE_THEME: (state) =>{state.dark_theme = !state.dark_theme;},
    OPEN_DRAWER: (state) =>{state.mini_drawer = !state.mini_drawer;},
    CHANGE_SCROLLED: (state, scrolled) =>{state.Scrolled = scrolled;},
};

export default {
    state,
    getters,
    actions,
    mutations
};