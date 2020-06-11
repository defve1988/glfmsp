import Vue from 'vue'
import Vuex from 'vuex'
import theme from './modules/Theme'
import user from './modules/User'
import nav_bar_item from './modules/NavBar_Item'
import app_apis from './modules/APIs'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    theme,
    user,
    nav_bar_item,
    app_apis
  }
})
