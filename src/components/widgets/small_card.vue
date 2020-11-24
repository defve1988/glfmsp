<template>
  <v-card class="ma-0 pa-0" max-width="400">
    <v-card-title class="py-1 px-2">
      <v-row class="ma-0 pa-0" no-gutters>
        <div class="ml-2 mt-1 mb-0">
          <span id="header" class="subtitle-1 font-weight-bold">{{
            card_name
          }}</span>
        </div>
        <v-spacer></v-spacer>
        <!-- <div class="mt-2 mr-3" v-if="card_data.type == 'box'">
          <span v-if="card_data.trend > 0" class="green--text text--darken-3">
            Decreased {{ card_data.trend }}%
          </span>
          <span v-else class="red--text text--darken-3">
            Increased {{ -card_data.trend }}%
          </span>
        </div> -->
      </v-row>
      <v-btn small icon>
        <v-icon small @click="close_view"> mdi-close </v-icon>
      </v-btn>
    </v-card-title>
    <v-divider class="mx-2"></v-divider>
    <div class="mx-1" :id="card_name"></div>
  </v-card>
</template>
<script>
import plotting from "@/assets/plot_js/plot_GL";
import { mapState } from "vuex";
export default {
  name: "trend_card",
  props: ["card_name"],
  mounted() {
    var fig_opt = {
      fig_size: { width: 250, height: 200 },
      fig_margin: { r: 20, t: 10, b: 25, l: 20 },
      font: { size: 8 },
      showlegend: false,
      legend: {
        font: { size: 12 },
        xanchor: "auto",
        yanchor: "auto",
        x: 1,
        y: 0,
      },
    };
    this.card_data = this.app_data.plot_data.filter(
      (x) => x.name == this.card_name
    )[0];
    // console.log(this.card_data);
    this.plotting = new plotting(this.card_name, fig_opt);
    this.draw();
    window.scrollTo(0, 300);
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
    close_view() {
      var index = -1;
      this.app_data.plots.forEach((element, i) => {
        if (element.name == this.card_name) index = i;
      });
      this.app_data.plots[index].plots = false;
      this.app_data.view_selected.pop(index);
    },
    draw() {
      var layout;
      switch (this.card_data.type) {
        case "box":
          layout = {
            xaxis: { dtick: 2 },
            yaxis: { range: [0, this.card_data.max_y * 1.05] },
          };
          this.plotting.plot_general(this.card_data.trace_data, layout);
          break;
        case "hist":
          layout = {
            bargap: 0.05,
            bargroupgap: 0.2,
            barmode: "overlay",
          };
          if (this.card_name == "Chemical Histogram") {
            layout.xaxis = { range: [0, 2000] };
          }
          this.plotting.plot_general(this.card_data.trace_data, layout);
          break;
        case "pie":
          layout = {
            font: { size: 12 },
          };
          this.plotting.plot_general(this.card_data.trace_data, layout);
          break;
        case "scatter":
          layout = {
            showlegend: true,
            legend: {
              font: { size: 10 },
              xanchor: "auto",
              yanchor: "auto",
              x: 1,
              y: 1,
            },
          };
          this.plotting.plot_general(this.card_data.trace_data, layout);
          break;
        case "bar_stacked":
          layout = {
            margin: { r: 20, t: 10, b: 50, l: 20 },
            barmode: "stack",
          };
          this.plotting.plot_animation(this.card_data, layout);
          break;
      }
    },
  },
};
</script>
<style scoped>
.span #header {
  display: inline-block;
  vertical-align: middle;
  height: 150px;
}
</style>