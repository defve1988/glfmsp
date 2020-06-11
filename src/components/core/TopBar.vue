<template>
  <v-app-bar app dark elevate-on-scroll color="primary" height=74>
    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
      <v-app-bar-nav-icon x-large @click="open_drawer" v-on="on">
        <v-icon v-if="theme.mini_drawer" color="primary lighten-4">mdi-fish</v-icon>
        <v-icon v-else color="primary lighten-4" class="fa-bar-chart">mdi-fish</v-icon>
      </v-app-bar-nav-icon>
      </template>
      <span v-if="theme.mini_drawer">Expand Meun</span>
      <span v-else>Close Meun</span>
    </v-tooltip>

    <v-toolbar-title class="text--lighten-4 ml-0 pl-1">
      <span class="title ml-0">
        <div>
          <span class="font-weight-bold mr-2">GLFMSP</span>
          <span class="font-weight-light mr-2">Visualization</span>
        </div>

        <div class="caption ml-0">
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

    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-hover v-slot:default="{ hover }">
          <v-btn
            class="mx-2"
            fab
            small
            color="primary"
            :elevation="hover ? 16 : 2"
            @click="open_url('https://www.clarkson.edu/cares')"
          >
            <v-avatar :size="hover ? 50:40" v-on="on">
              <img alt="Avatar" src="@/assets/imgs/clarkson.png" />
            </v-avatar>
          </v-btn>
        </v-hover>
      </template>
      <span>CARES, Clarkson University</span>
    </v-tooltip>

    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-hover v-slot:default="{ hover }">
          <v-btn
            class="mx-2"
            fab
            small
            color="primary"
            :elevation="hover ? 16 : 2"
            @click="open_url('https://www.epa.gov/great-lakes-monitoring')"
          >
            <v-avatar :size="hover ? 50:40" v-on="on">
              <img alt="Avatar" src="@/assets/imgs/epa.png" />
            </v-avatar>
          </v-btn>
        </v-hover>
      </template>
      <span>Great Lakes Monitoring, US EPA</span>
    </v-tooltip>
  </v-app-bar>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "TopBar",
  data: () => ({}),
  computed: {
    ...mapState({
      theme: "theme",
      ueser: "user"
    })
  },
  methods: {
    ...mapMutations(["OPEN_DRAWER"]),
    open_drawer() {
      this.OPEN_DRAWER();
    },
    open_url: url => {
      window.open(url, "_blank");
    }
  }
};
</script>

<style scoped>
/* NOTE: span does not support margin or padding top, only vertical-align can be used*/
span {
  display: inline-block;
  vertical-align: buttom;
}

.fa-bar-chart {
  transform: rotate(360deg) scaleX(-1);
}
</style>