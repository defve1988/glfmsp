<template>
  <v-container>

      <div class="mx-0" id="stack_bar"></div>

  </v-container>
</template>

<script>
import plotting from "@/assets/plot_js/plot_GL";
import { mapState } from "vuex";
export default {
  name: "stacked_bar",
  props: ["card_name"],
  components: {},
  mounted() {
    var fig_opt = {
      fig_size: { width: 450, height: 450 },
      fig_margin: { r: 25, t: 10, b: 25, l: 50 },
      font: { size: 18 },
      showlegend: true,
      legend: {
        font: { size: 14 },
        xanchor: "auto",
        yanchor: "auto",
        x: 1,
        y: 1,
      },
    };
    this.card_data = this.app_data.plot_data.filter(
      (x) => x.name == this.card_name
    )[0];
    console.log(this.card_data)
    this.plotting = new plotting("stack_bar", fig_opt);
    this.draw();
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
    is_update() {
      return this.lakes.prev_filter;
    },
  },
  watch: {
    is_update() {
      this.card_data = this.app_data.plot_data.filter(
        (x) => x.name == this.card_name
      )[0];
      this.draw();
      this.lakes.update = false;
    },
  },
  methods: {
    draw() {
      var layout;
      layout = {
        barmode: "stack",
      };
      this.plotting.plot_animation(this.card_data, layout);
    },
  },
};
</script>
<style scoped>
</style>