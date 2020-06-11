// change user login state
const state = {
    login: false,
    name:'',
    level:'',
    tooltip:'No user is login.',
};

const getters = {
// could do some calculation baed on state
    login_form: state => !state.login
};

const actions = {
    // async login_request({commit}, user){
    //     const response = await user.url.post('/api/user/verify',user);
    //     console.log(response.data);
    //     commit('LOG_IN',response.data.login);
    // },
};

const mutations = {
    LOG_IN: (state, res) => {
        state.login = (res.login==="true");
        state.name = res.user
        state.level = res.level
        state.tooltip = (res.login==="true") ? res.user + ' is login, click to logout.': 'No user is login.'
    },
    LOG_OUT: (state) => {
        state.login = false; 
        state.name = '';
        state.level = '';
        state.tooltip = 'No user is login.';}
};

export default {
    state,
    getters,
    actions,
    mutations
};