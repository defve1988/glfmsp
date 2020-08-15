<template>
  <v-app-bar app dark shrink-on-scroll elevate-on-scroll color="primary" height="100">
    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-hover v-slot:default="{ hover }">
          <v-app-bar-nav-icon
            x-large
            @click="open_drawer"
            v-on="on"
            :class="!theme.Scrolled? 'mt-4':'mt-0'"
          >
            <v-icon
              large
              v-if="theme.mini_drawer"
              :color="hover ? 'primary lighten-4':'success' "
              :class="hover ? '':'fa-bar-chart'"
            >mdi-fish</v-icon>
            <v-icon
              large
              v-else
              :color="hover ? 'primary lighten-4':'success'"
              :class="hover ? 'fa-bar-chart':''"
            >mdi-fish</v-icon>
          </v-app-bar-nav-icon>
        </v-hover>
      </template>
      <span v-if="theme.mini_drawer">Expand Meun</span>
      <span v-else>Mini Meun</span>
    </v-tooltip>

    <v-toolbar-title class="text--lighten-4 ml-1 pl-1 pb-1">
      <span class="display-1 ml-0">
        <div>
          <span class="font-weight-bold mr-2">GLFMSP</span>
          <span class="font-weight-light mr-2">Visualization</span>
        </div>

        <div class="title ml-0" v-if="!theme.Scrolled">
          <span
            class="font-weight-medium mr-2 primary--text text--lighten-4"
          >Great Lakes Fish Monitoring and Surveillance Program</span>
        </div>
      </span>
    </v-toolbar-title>

    <v-spacer></v-spacer>
    <!-- <span class="caption ml-0 mt-4">
      <span class="font-weight-medium mr-2">Great Lakes Fish Monitoring and Surveillance Program</span>
    </span>-->
    <template v-for="(item,i) in links">
      <v-tooltip bottom :key="i">
        <template v-slot:activator="{ on }">
          <v-hover v-slot:default="{ hover }">
            <v-btn
              :class="!theme.Scrolled? 'mx-2 mt-4':'mx-2 mt-1'"
              fab
              :large="theme.Scrolled ? false:true"
              :small="theme.Scrolled ? true:false"
              color="primary"
              :elevation="hover ? 16 : 2"
              @click="open_url(item.url)"
            >
              <v-avatar :size="hover ? avatar_size.hover:avatar_size.normal" v-on="on">
                <img alt="Avatar" :src="item.src" />
              </v-avatar>
            </v-btn>
          </v-hover>
        </template>
        <span>{{item.text}}</span>
      </v-tooltip>
    </template>
  </v-app-bar>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "TopBar",
  data: () => ({
    links: [
      {
        title: "CARES",
        text: "CARES, Clarkson University",
        src: require("../../assets/imgs/clarkson.png"),
        url: "https://www.clarkson.edu/cares",
      },
      {
        title: "EPA",
        text: "Great Lakes Monitoring, US EPA",
        src: require("../../assets/imgs/epa.png"),
        url: "https://www.epa.gov/great-lakes-monitoring",
      },
    ],
  }),
  computed: {
    ...mapState({
      theme: "theme",
      user: "user",
    }),
    avatar_size() {
      if (this.theme.Scrolled) {
        return { hover: 47, normal: 45 };
      } else {
        return { hover: 65, normal: 60 };
      }
    },
  },
  methods: {
    ...mapMutations(["OPEN_DRAWER"]),
    open_drawer() {
      this.OPEN_DRAWER();
    },
    open_url: (url) => {
      window.open(url, "_blank");
    },
  },
};
</script>

<style scoped>
/* NOTE: span does not support margin or padding top, only vertical-align can be used*/
span {
  display: inline-block;
  vertical-align: bottom;
}

.fa-bar-chart {
  transform: rotate(360deg) scaleX(-1);
}
</style>