import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#196055',
            secondary: 'black',
            success: '#F9C413',
            accent: '#000033',

            error: '#FF0F50',
            info: '#37C948',

            warning: '#FF5722',
            
            background:'#DBF5DE',
          },
        },
      },
});
