<template>
  <v-tabs v-model="active" color="success" dark slider-color="success">
    <v-tab ripple>Stats</v-tab>
    <v-tab ripple>Bioaccumulation</v-tab>
    <v-tab ripple>Trends</v-tab>
    <v-tab ripple>Risk</v-tab>
    <v-tab ripple>Data view</v-tab>

    <v-tab-item></v-tab-item>
    <v-tab-item></v-tab-item>
    <v-tab-item></v-tab-item>
    <v-tab-item></v-tab-item>
    <v-tab-item><DataView /></v-tab-item>
  </v-tabs>
</template>

<script>
export default {
  name: "DataViz",
  props: [],
  components: {
    DataView: () => import("@/components/widgets/data_view"),
  },
  data: () => ({}),
  mounted() {},
  methods: {

  },
  computed: {},

};
</script>