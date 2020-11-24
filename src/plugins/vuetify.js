import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import GL_icon from "@/components/widgets/GL_icon";

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#196055',
            secondary: '#000000',
            success: '#F9C413',
            accent: '#000033',
            font_color:'#134694',
            error: '#FF0F50',
            info: '#37C948',

            warning: '#FF5722',
            
            background:'#DBF5DE',
          },
        },
      },
      icons: {
        values: {
          GL_icon: { // name of our custom icon
            component: GL_icon, // our custom component
          },
        },
      },
});

