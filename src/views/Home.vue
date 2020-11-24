<template>
  <v-tabs
    v-model="app_data.dashboard_tab"
    color="success"
    dark
    slider-color="success"
    :height="!theme.Scrolled ? 30:0"
  >
    <v-tab ripple>Dashboard</v-tab>
    <v-tab ripple>GLFMSP Program</v-tab>
    <v-tab ripple>Visualization Project</v-tab>

    <v-tab-item>
      <SummaryView />
    </v-tab-item>

    <v-tab-item>
      <v-row justify="center" class="mx-1">
        <v-col cols="6">
          <v-card class="ma-3 mb-0" height="200">
            <v-card-title class="font_color--text"> About GLFMSP </v-card-title>
            <v-card-text>
              <b>Great Lakes Fish Monitoring and Surveillance Program (GLFMSP)</b> is a
              long term monitoring program supported by U.S. EPA. It was
              established in the late 1970s and has collected top predator fish
              (lake trout and walleye) from consistent locations in each of the
              Laurentian Great Lakes in the fall of every year. Fish samples are
              collected in a target size range to limit variation in the results
              and produce high quality data. In this program, the sampling has
              been simplified and additional emphasis has been placed on
              identifying emerging contaminants that may pose a risk to the
              Great Lakes.
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card class="ma-3 mb-0" height="200">
            <v-card-title class="font_color--text"> About CARES </v-card-title>
            <v-card-text>
               <b>Center for Air and Aquatic Resources Engineering and Sciences
              (CAARES)</b> of Clarkson University has operated this program since
              2005, and we have modernized legacy pollutant measurements by
              developing efficient sample processing and analysis procedures.
              Improvements include lowering detection limits, adding additional
              chemicals to the analyte list, scanning for and identifying
              emerging contaminants and including the routine analyses of fish
              eggs. We have also enhanced the program by developing working
              relationships with laboratories from other federal agencies,
              states and countries.
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row justify="center" class="mx-1">
        <v-col cols="12">
          <v-card class="ma-3 mt-0">
            <v-card-title class="font_color--text py-0">
              Site Map
              <v-spacer></v-spacer>
              <v-spacer></v-spacer>
              <v-spacer></v-spacer>
              <v-spacer></v-spacer>
              <v-select
                v-model="map_type"
                :items="items"
                label="Select Map Type"
                class="px-8 pt-8"
                @change="change_map_type"
              ></v-select>
            </v-card-title>
            <SiteMap />
          </v-card>
        </v-col>
      </v-row>
    </v-tab-item>

    <v-tab-item>

    </v-tab-item>
  </v-tabs>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Home",
  props: [],
  components: {
    SummaryView: () => import("@/components/core/summary_view"),
    SiteMap: () => import("@/components/widgets/site_map"),
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