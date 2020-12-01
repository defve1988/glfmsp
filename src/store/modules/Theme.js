// change UI state
const state = {
    mini_drawer: false,
    Scrolled: false,
    nav_items: [
        { icon: '$GL_icon', text: 'Overview', route:'/', color:'primary lighten-2', text_color:'primary--text text--darken-2'},
        { divider: true },
        { icon: 'mdi-molecule', text: 'Chemicals', route:'/chemicals', color:'primary lighten-2', text_color:'primary--text text--darken-2'},
        { icon: 'mdi-monitor-dashboard', text: 'Visualizations', route:'/data_viz' , color:'primary lighten-2', text_color:'primary--text text--darken-2'},
        { icon: 'mdi-view-dashboard', text: 'Models', route:'/tools' , color:'primary lighten-2', text_color:'primary--text text--darken-2'},
        { divider: true },
        { icon: 'mdi-account-multiple', text: 'Group', route:'/group' , color:'primary lighten-2',text_color:'primary--text text--darken-2'},
      ],
    
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