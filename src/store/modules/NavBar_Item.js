// change user login state
const state = {
    items: [
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

};

const actions = {

};

const mutations = {
    
};

export default {
    state,
    getters,
    actions,
    mutations
};