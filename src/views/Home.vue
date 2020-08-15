<template>
  <v-tabs v-model="active" color="success" dark slider-color="success">
    <v-tab ripple>Dashboard</v-tab>
    <v-tab ripple>GLFMSP Program</v-tab>
    <v-tab ripple>Visualization Project</v-tab>

    <v-tab-item>
      <SummaryView />
    </v-tab-item>

    <v-tab-item>
      <p>
        Great Lakes Fish Monitoring and Surveillance Program (GLFMSP) is a long term monitoring program supported by U.S. EPA.
        It was established in the late 1970s and has collected top predator fish (lake trout and walleye)
        from consistent locations in each of the Laurentian Great Lakes in the fall of every year.
        Fish samples are collected in a target size range to limit variation in the results and produce high quality data.
      </p>
      <SiteMap />
    </v-tab-item>
    <v-tab-item></v-tab-item>
  </v-tabs>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Home",
  props: [],
  components: {
    SummaryView: () => import("@/components/core/summary_view"),
    SiteMap: () => import("@/components/widgets/site_map"),
  },
  data: () => ({
    ...mapState({

    })
  }),
  mounted() {},
  methods: {},
  computed: {},
};
</script>
