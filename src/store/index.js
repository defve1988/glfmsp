import Vue from 'vue'
import Vuex from 'vuex'
import theme from './modules/Theme'
import nav_bar_item from './modules/NavBar_Item'
import app_apis from './modules/APIs'
import app_data from './modules/app_data'
import lakes from './modules/lakes'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    theme,
    nav_bar_item,
    app_apis,
    app_data,
    lakes
  }
})
