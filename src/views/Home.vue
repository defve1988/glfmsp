<template>
  <v-tabs
    v-model="app_data.dashboard_tab"
    color="success"
    dark
    slider-color="success"
    :height="!theme.Scrolled ? 30 : 0"
  >
    <v-tab ripple>Dashboard</v-tab>
    <v-tab ripple>GLFMSP Program</v-tab>
    <v-tab ripple>Visualization Project</v-tab>

    <v-tab-item>
      <DashBoard />
    </v-tab-item>

    <v-tab-item>
      <GLFMSP />
    </v-tab-item>

    <v-tab-item>
      <VizProj />
    </v-tab-item>
  </v-tabs>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Home",
  props: [],
  components: {
    DashBoard: () => import("@/components/core/DashBoard"),
    GLFMSP: () => import("@/components/core/GLFMSP"),
    VizProj: () => import("@/components/core/VizProj"),
  },
  data: () => ({
    items: ["Simple Map", "Land Map", "Satellite Map"],
    map_type: "Simple Map",
  }),
  mounted() {},
  methods: {
    ...mapMutations(["CHANGE_MAP_TYPE"]),
    change_map_type() {
      this.CHANGE_MAP_TYPE(this.map_type);
    },
  },
  computed: {
    ...mapState({
      app_data: "app_data",
      theme: "theme",
    }),
  },
};
</script>
<style scoped>
.my_dataviz {
  height: 600px;
  width: 100%;
}
</style>