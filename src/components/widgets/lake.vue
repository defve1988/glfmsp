<template>
  <v-container>
    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-row justify="center">
          <svg
            width="800px"
            height="600px"
            viewBox="0 0 1200 600"
            preserveAspectRatio="xMinYMin meet"
            v-on="on"
          >
            <!-- plot lakes -->
            <g
              v-for="(lake,index) in lakes.lakes_data"
              :key="lake.key"
              class="GL_lakes"
              @mouseover="lake_mouseover"
              @click="lake_clicked"
            >
              <g transform="translate(0,800) scale(0.1,-0.1)">
                <path
                  :name="lake.key"
                  class="lake_water"
                  :id="(index==lakes.selected) ? 'lake_water_selected':''"
                  :stroke-width="(index==lakes.selected) ? 30:0"
                  :d="lakes[lake.d]"
                />
              </g>
              <text :x="lake.x" :y="lake.y" font-size="18">{{lake.name}}</text>
            </g>

            <!-- plot sites -->
            <g v-for="site in lakes.site_data" :key="site.key" :class="site.class">
              <defs>
                <filter x="0" y="0" width="1" height="1" id="solid">
                  <feFlood flood-color="rgba(0, 0, 0, 0.5)" />
                  <feComposite in="SourceGraphic" />
                </filter>
              </defs>
              <circle :cx="site.x" :cy="site.y" />
              <text filter="url(#solid)" :x="site.x+20" :y="site.y+5">{{site.name}}</text>
            </g>

            <text
              x="900"
              y="100"
              font-family="ff-market-web, cursive"
              fill="rgb(11, 5, 97)"
              font-size="40"
            >{{lakes.lakes_data[lakes.lake_selected]["name"]}}</text>
          </svg>
        </v-row>
      </template>
      <span>Click to select/unselect lakes or sites.</span>
    </v-tooltip>
  </v-container>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "lakes",
  components: {},
  data: () => ({}),
  mounted() {},
  methods: {
    ...mapMutations(["CHANGE_LAKE_SELECT"]),
    lake_clicked(e) {
      let el = e.currentTarget.firstChild.firstChild;
      var selected;
      switch (el.getAttribute("name")) {
        case "LS":
          selected = 1;
          break;
        case "LM":
          selected = 2;
          break;
        case "LH":
          selected = 3;
          break;
        case "LE":
          selected = 4;
          break;
        case "LO":
          selected = 5;
          break;
      }
      if (selected == this.lakes.lake_selected) {
        el.setAttribute("stroke-width", "0");
        el.id = "";
        this.CHANGE_LAKE_SELECT(0);
      } else {
        let el_previous = e.currentTarget.parentElement.getElementsByClassName(
          "GL_lakes"
        );
        el_previous =
          el_previous[this.lakes.lake_selected].firstChild.firstChild;
        el.setAttribute("stroke-width", "30");
        el.id = "lake_water_selected";
        el_previous.setAttribute("stroke-width", "0");
        el_previous.id = "";
        this.CHANGE_LAKE_SELECT(selected);
      }

      //   this.lakes.lake_selected[selected] = !this.lakes.lake_selected[selected];
      //   if (!this.lakes.lake_selected[selected]) {
      //     el.setAttribute("stroke-width", "0");
      //     el.id = "";
      //   } else {
      //     el.setAttribute("stroke-width", "20");
      //     el.id = "lake_water_selected";
      //   }
    },
    lake_mouseover() {

    },
  },
  computed: {
    ...mapState({
      lakes: "lakes",
    }),
  },
};
</script>

<style scoped>
.more_industrial_site circle {
  r: 10;
  fill: rgb(243, 106, 14);
  font-size: 0px;
}
.more_industrial_site:hover circle {
  r: 15;
  font-size: 18px;
}

.more_industrial_site text {
  font-size: 0px;
}
.more_industrial_site:hover text {
  font-size: 20px;
  fill: azure;
}

.less_industrial_site circle {
  r: 10;
  fill: rgb(22, 241, 157);
  font-size: 0px;
}
.less_industrial_site:hover circle {
  r: 15;
  font-size: 18px;
}

.less_industrial_site text {
  font-size: 0px;
}
.less_industrial_site:hover text {
  font-size: 20px;
  fill: azure;
}

.GL_lakes .lake_water {
  fill: rgb(4, 84, 212);
  opacity: 0.7;
  stroke: rgb(11, 5, 97);
}
.GL_lakes:hover .lake_water {
  fill: #132fd3;
  opacity: 0.9;
  stroke: rgb(11, 5, 97);
}

.GL_lakes #lake_water_selected {
  fill: #132fd3;
  opacity: 0.9;
  stroke: rgb(11, 5, 97);
}
.GL_lakes:hover #lake_water_selected {
  fill: rgb(4, 84, 212);
  opacity: 0.9;
  stroke: rgb(11, 5, 97);
}

.GL_lakes text {
  fill: rgba(255, 255, 255, 0.5);
}
.GL_lakes:hover text tspan,
.GL_lakes:hover text {
  fill: #fff;
}
</style>