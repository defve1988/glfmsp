<template>
  <v-container>
    <div class="mx-0" id="main_card"></div>
  </v-container>
</template>

<script>
import plotting from "@/assets/js/plot_GL";
import { mapState, mapMutations } from "vuex";
export default {
  name: "main_card",
  components: {},
  mounted() {
    this.CHANGE_PLOT_DATA(this.app_data.main_card_index);
    this.card_data = this.app_data.plot_data[this.app_data.main_card_index];
    this.plotting = new plotting("main_card", this.card_data);
    this.plotting.set_layout("main_plot");
    this.plotting.draw(this.card_data.plots.type);
  },
  data: () => ({
    card_data: {
      chemical: "",
      trend: 0,
    },
  }),
  computed: {
    ...mapState({
      lakes: "lakes",
      app_data: "app_data",
    }),
    is_switch_card() {
      return this.app_data.main_card_index;
    },
    is_update() {
      return this.lakes.prev_filter;
    },
  },
  watch: {
    is_switch_card() {
      // console.log(this.app_data.main_card_index);
      // console.log(this.card_data.layout);
      this.CHANGE_PLOT_DATA(this.app_data.main_card_index);
      this.card_data = this.app_data.plot_data[this.app_data.main_card_index];
      this.plotting.set_data(this.card_data);
      this.plotting.set_layout("main_plot");
      this.plotting.draw(this.card_data.plots.type);
      this.lakes.update = false;
    },
    is_update() {
      this.CHANGE_PLOT_DATA(this.app_data.main_card_index);
      this.card_data = this.app_data.plot_data[this.app_data.main_card_index];
      this.plotting.set_data(this.card_data);
      this.plotting.set_layout("main_plot");
      this.plotting.draw(this.card_data.plots.type);
      this.lakes.update = false;
    },
  },
  methods: {
    ...mapMutations(["CHANGE_PLOT_DATA"]),
  },
};
</script>
<style scoped>
</style>