<template>
  <v-tabs
    v-model="active"
    color="success"
    dark
    slider-color="success"
    :height="!theme.Scrolled ? 30 : 0"
  >
    <v-tab ripple>Plots</v-tab>
    <v-tab ripple>Stats</v-tab>
    <v-tab ripple>Age normalization</v-tab>
    <v-tab ripple>Trend analysis</v-tab>

    <v-tab-item></v-tab-item>
    <v-tab-item> </v-tab-item>
    <v-tab-item></v-tab-item>
  </v-tabs>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Home",
  props: [],
  components: {},
  data: () => ({
    //
  }),
  mounted() {},
  methods: {},
  computed: {
    ...mapState({
      app_data: "app_data",
      theme: "theme",
    }),
  },
};
</script>

<style scoped>
</style>