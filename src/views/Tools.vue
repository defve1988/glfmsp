<template>
  <v-tabs v-model="active" color="success" dark slider-color="success">
    <v-tab ripple>Plots</v-tab>
    <v-tab ripple>Stats</v-tab>
    <v-tab ripple>Age normalization</v-tab>
    <v-tab ripple>Trend analysis</v-tab>

    <v-tab-item></v-tab-item>
    <v-tab-item>

    </v-tab-item>
    <v-tab-item></v-tab-item>
  </v-tabs>
</template>

<script>
export default {
  name: "Home",
  props: [],
  components: {},
  data: () => ({
    //
  }),
  mounted() {},
  methods: {},
  computed: {}
};
</script>

<style scoped>

</style>