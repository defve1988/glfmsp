// change user login state
const state = {
    items: [
        { icon: 'mdi-view-dashboard', text: 'Overview', route:'/', color:'primary lighten-2', text_color:'primary--text text--darken-2'},
        { divider: true },
        { icon: 'mdi-poll', text: 'Measurements', route:'/measurements', color:'primary lighten-2', text_color:'primary--text text--darken-2'},
        { icon: 'mdi-chart-multiple', text: 'Bioaccumulations', route:'/bioaccumulations' , color:'primary lighten-2', text_color:'primary--text text--darken-2'},
        { icon: 'mdi-elevation-decline', text: 'Trends', route:'/trends' , color:'primary lighten-2', text_color:'primary--text text--darken-2'},
        { icon: 'mdi-chat-alert', text: 'Risks', route:'/risks' , color:'primary lighten-2', text_color:'primary--text text--darken-2'},
        // { heading: 'Label' },
        { divider: true },
        { icon: 'mdi-account-multiple', text: 'Clarkson Group', route:'/group' , color:'primary lighten-2',text_color:'primary--text text--darken-2'},
        // { spacer: true },
        // { divider: true },
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