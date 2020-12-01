import Vue from 'vue'
import Vuex from 'vuex'
import theme from './modules/Theme'
import app_apis from './modules/APIs'
import app_data from './modules/app_data'
import lakes from './modules/lakes'
import infor from './modules/infor'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    theme,
    app_apis,
    app_data,
    lakes,
    infor
  }
})
