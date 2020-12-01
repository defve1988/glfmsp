<template>
  <v-tabs
    v-model="active"
    color="success"
    dark
    slider-color="success"
    :height="!theme.Scrolled ? 30 : 0"
  >
    <v-tab ripple>Overview</v-tab>
    <v-tab ripple>Mercury</v-tab>
    <v-tab ripple>PCBs</v-tab>
    <v-tab ripple>pestcides</v-tab>
    <v-tab ripple>Flame retardant</v-tab>
    <v-tab ripple>Others</v-tab>

    <v-tab-item></v-tab-item>
    <v-tab-item></v-tab-item>
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