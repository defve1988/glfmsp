<template>
  <v-container>
    <v-row justify="center">
      <svg
        id="lake_canvas"
        :width="lake_canvas_width"
        :height="lake_canvas_height"
        viewBox="-25 25 1250 500"
        preserveAspectRatio="xMinYMin meet"
      >
        <!-- plot lakes -->
        <g
          v-for="(lake, index) in lakes.lakes_data"
          :key="index"
          :name="lake.lake"
          class="GL_lakes"
          @click="lake_click"
          @mouseover="lake_mouseover"
          @mouseleave="lake_mouseleave"
        >
          <g transform="translate(0,800) scale(0.1,-0.1)" :class="lake.lake">
            <path
              class="lake_water"
              :name="lake.lake"
              :d="lakes[lake.d]"
              :id="lake.selected ? 'lake_water_selected' : ''"
            />
          </g>
          <text :x="lake.x" :y="lake.y" font-size="20 ">
            {{ lake.name }}
          </text>
        </g>

        <!-- plot sites -->
        <g
          v-for="(site, index) in lakes.site_data"
          :key="index"
          :name="site.name"
          :class="site.class"
          :lake="site.lake"
          :id="get_id(site)"
          @click="site_click"
          @mouseover="site_mouseover"
          @mouseleave="site_mouseleave"
        >
          <defs>
            <filter x="0" y="0" width="1" height="1" id="solid">
              <feFlood flood-color="rgba(0, 0, 0, 0.5)" />
              <feComposite in="SourceGraphic" />
            </filter>
          </defs>
          <circle
            class="less_industrial"
            :name="site.name"
            :cx="site.x"
            :cy="site.y"
          />
          <text filter="url(#solid)" :x="site.x + 25" :y="site.y + 5">
            {{ site.name }}
          </text>
        </g>
        <!-- legend -->
        <g class="legend">
          <circle
            @mouseover="legend_mouseover"
            @mouseleave="legend_mouseleave"
            @click="legend_click"
            class="less_industrial"
            :cx="legend_x"
            :cy="legend_y"
          />
          <text :x="legend_x + 25" :y="legend_y + 6">
            Less Industrial Sites
          </text>
          <circle
            @mouseover="legend_mouseover"
            @mouseleave="legend_mouseleave"
            @click="legend_click"
            class="more_industrial"
            :cx="legend_x"
            :cy="legend_y + 50"
          />
          <text :x="legend_x + 25" :y="legend_y + 56">
            More Industrial Sites
          </text>
          <text
            filter="url(#solid)"
            :x="legend_x + 25"
            :y="legend_y + 105"
            class="tooltip"
          >
            Click to select all.
          </text>
        </g>
      </svg>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "lakes",
  components: {},
  data: () => ({
    lake_canvas_width: 700,
    lake_canvas_height: 450,
    legend_x: 800,
    legend_y: 100,
    delay: 250,
    last_hover: null,
    trigger_limit: 500,
  }),
  mounted() {
    // this.last_hover = new Date();
    this.CHANGE_FILTER();
    this.CHANGE_PLOT_DATA(this.lakes.prev_filter)
  },
  computed: {
    ...mapState({
      lakes: "lakes",
      app_data: "app_data",
    }),
  },
  methods: {
    ...mapMutations(["CHANGE_SELECTED_TEXT","CHANGE_FILTER","CHANGE_PLOT_DATA"]),
    legend_click(e) {
      let el = e.currentTarget.getAttribute("class");
      var isALLSelected = true;
      if (el == "less_industrial") {
        for (const [, value] of Object.entries(this.lakes.site_data)) {
          if (value.class == "less_industrial_site")
            isALLSelected = value.selected && isALLSelected;
        }
        if (isALLSelected) {
          this.lakes.site_data["LS1"].selected = false;
          this.lakes.site_data["LH1"].selected = false;
          this.lakes.site_data["LM1"].selected = false;
          this.lakes.site_data["LO1"].selected = false;
          this.lakes.site_data["LE1"].selected = false;
        } else {
          this.lakes.site_data["LS1"].selected = true;
          this.lakes.site_data["LH1"].selected = true;
          this.lakes.site_data["LM1"].selected = true;
          this.lakes.site_data["LO1"].selected = true;
          this.lakes.site_data["LE1"].selected = true;
        }
      } else {
        for (const [, value] of Object.entries(this.lakes.site_data)) {
          if (value.class == "more_industrial_site")
            isALLSelected = value.selected && isALLSelected;
        }
        if (isALLSelected) {
          this.lakes.site_data["LS2"].selected = false;
          this.lakes.site_data["LH2"].selected = false;
          this.lakes.site_data["LM2"].selected = false;
          this.lakes.site_data["LO2"].selected = false;
          this.lakes.site_data["LE2"].selected = false;
        } else {
          this.lakes.site_data["LS2"].selected = true;
          this.lakes.site_data["LH2"].selected = true;
          this.lakes.site_data["LM2"].selected = true;
          this.lakes.site_data["LO2"].selected = true;
          this.lakes.site_data["LE2"].selected = true;
        }
      }
      this.lakes.site_data["LS1"].hovered = false;
      this.lakes.site_data["LH1"].hovered = false;
      this.lakes.site_data["LM1"].hovered = false;
      this.lakes.site_data["LO1"].hovered = false;
      this.lakes.site_data["LE1"].hovered = false;
      this.lakes.site_data["LS2"].hovered = false;
      this.lakes.site_data["LH2"].hovered = false;
      this.lakes.site_data["LM2"].hovered = false;
      this.lakes.site_data["LO2"].hovered = false;
      this.lakes.site_data["LE2"].hovered = false;
      this.CHANGE_SELECTED_TEXT();
      this.CHANGE_FILTER();
      this.CHANGE_PLOT_DATA(this.lakes.prev_filter)
      this.lakes.title_text = this.lakes.selected.text;
    },
    lake_click(e) {
      let el = e.currentTarget.getAttribute("name"); // this name is related with g, not the data, the same of others
      var lake_index = this.lakes.lakes_data[el].lake;
      console.log(this.lakes.lakes_data);
      if (this.lakes.lakes_data[el].selected) {
        this.lakes.lakes_data[el].selected = false;
        this.lakes.site_data[lake_index + "1"].selected = false;
        this.lakes.site_data[lake_index + "2"].selected = false;
      } else {
        this.lakes.lakes_data[el].selected = true;
        this.lakes.site_data[lake_index + "1"].selected = true;
        this.lakes.site_data[lake_index + "2"].selected = true;
      }
      this.lakes.site_data[el + "1"].hovered = false;
      this.lakes.site_data[el + "2"].hovered = false;
      this.CHANGE_SELECTED_TEXT();
      this.CHANGE_FILTER();
      this.CHANGE_PLOT_DATA(this.lakes.prev_filter)
      this.lakes.title_text = this.lakes.selected.text;
    },
    site_click(e) {
      var el = e.currentTarget.getAttribute("lake");
      if (e.currentTarget.id == "site_selected") {
        this.lakes.site_data[el].selected = false;
        this.lakes.lakes_data[el.slice(0, 2)].selected = false;
      } else {
        this.lakes.site_data[el].selected = true;
        var lake_index = el.slice(0, 2);
        if (
          this.lakes.site_data[lake_index + "1"].selected &&
          this.lakes.site_data[lake_index + "2"].selected
        ) {
          this.lakes.lakes_data[lake_index].selected = true;
        }
      }
      this.lakes.site_data[el].hovered = false;
      this.CHANGE_SELECTED_TEXT();
      this.CHANGE_FILTER();
      this.CHANGE_PLOT_DATA(this.lakes.prev_filter)
      this.lakes.title_text = this.lakes.selected.text;
    },

    legend_mouseover(e) {
      let el = e.currentTarget.getAttribute("class");
      setTimeout(() => {
        if (el == "less_industrial") {
          this.lakes.site_data["LS1"].hovered = true;
          this.lakes.site_data["LH1"].hovered = true;
          this.lakes.site_data["LM1"].hovered = true;
          this.lakes.site_data["LO1"].hovered = true;
          this.lakes.site_data["LE1"].hovered = true;
          this.lakes.title_text = "All None-industrial Sites";
        } else {
          this.lakes.site_data["LS2"].hovered = true;
          this.lakes.site_data["LH2"].hovered = true;
          this.lakes.site_data["LM2"].hovered = true;
          this.lakes.site_data["LO2"].hovered = true;
          this.lakes.site_data["LE2"].hovered = true;
          this.lakes.title_text = "All Industrial Sites";
        }
      }, this.delay);
    },
    legend_mouseleave(e) {
      let el = e.currentTarget.getAttribute("class");
      setTimeout(() => {
        if (el == "less_industrial") {
          this.lakes.site_data["LS1"].hovered = false;
          this.lakes.site_data["LH1"].hovered = false;
          this.lakes.site_data["LM1"].hovered = false;
          this.lakes.site_data["LO1"].hovered = false;
          this.lakes.site_data["LE1"].hovered = false;
        } else {
          this.lakes.site_data["LS2"].hovered = false;
          this.lakes.site_data["LH2"].hovered = false;
          this.lakes.site_data["LM2"].hovered = false;
          this.lakes.site_data["LO2"].hovered = false;
          this.lakes.site_data["LE2"].hovered = false;
        }
        this.lakes.title_text = this.lakes.selected.text;
      }, this.delay);
    },

    lake_mouseover(e) {
      let el = e.currentTarget.getAttribute("name");
      this.lakes.title_text = this.lakes.lakes_data[el].name;
      this.lakes.site_data[el + "1"].hovered = true;
      this.lakes.site_data[el + "2"].hovered = true;

      // var this_trgiger = new Date();
      // if (this_trgiger - this.last_hover >= this.trigger_limit) {
      //   this.lakes.title_text = this.lakes.lakes_data[el].name;
      //   this.lakes.site_data[el + "1"].hovered = true;
      //   this.lakes.site_data[el + "2"].hovered = true;
      // }
      // this.last_hover = this_trgiger;
      // setTimeout(() => {
      //   if (this_trgiger - this.last_hover >= this.trigger_limit) {
      //     // console.log(now, now - this.last_hover);
      //     this.lakes.title_text = this.lakes.lakes_data[el].name;
      //     this.lakes.site_data[el + "1"].hovered = true;
      //     this.lakes.site_data[el + "2"].hovered = true;
      //   }
      //   this.last_hover = this_trgiger;
      // }, this.delay);
    },
    lake_mouseleave(e) {
      // this.last_hover = new Date();
      let el = e.currentTarget.getAttribute("name");
      this.lakes.title_text = this.lakes.selected.text;
      this.lakes.site_data[el + "1"].hovered = false;
      this.lakes.site_data[el + "2"].hovered = false;
      // setTimeout(() => {
      //   var now = new Date();
      //   if (now - this.last_hover >= this.trigger_limit) {
      //     this.lakes.title_text = this.lakes.selected.text;
      //     this.lakes.site_data[el + "1"].hovered = false;
      //     this.lakes.site_data[el + "2"].hovered = false;
      //   }
      // }, this.delay);
    },

    site_mouseover(e) {
      let el = e.currentTarget.getAttribute("lake");
      this.lakes.site_data[el].hovered = true;
      this.lakes.title_text = this.lakes.site_data[el].name;
      // this.last_hover = new Date();
      // let el = e.currentTarget.getAttribute("lake");
      // setTimeout(() => {
      //   var now = new Date();
      //   if (now - this.last_hover >= this.trigger_limit) {
      //     this.lakes.site_data[el].hovered = true;
      //     this.lakes.title_text = this.lakes.site_data[el].name;
      //   }
      // }, this.delay);
    },
    site_mouseleave(e) {
      let el = e.currentTarget.getAttribute("lake");
      this.lakes.title_text = this.lakes.selected.text;
      this.lakes.site_data[el].hovered = false;
      // this.last_hover = new Date();
      // let el = e.currentTarget.getAttribute("lake");
      // this.lakes.title_text = this.lakes.selected.text;
      // this.lakes.site_data[el].hovered = false;
      // setTimeout(() => {
      //   var now = new Date();
      //   if (now - this.last_hover >= this.trigger_limit) {
      //     this.lakes.title_text = this.lakes.selected.text;
      //     this.lakes.site_data[el].hovered = false;
      //   }
      // }, this.delay);
    },
    get_id(site) {
      var id = "";
      if (site.hovered) id = "site_focused";
      if (site.selected) id = "site_selected";
      return id;
    },

    // delay_time() {
    //   this.isStop = true;
    //   var delay = this.delay;
    //   return new Promise(function (resolve) {
    //     setTimeout(resolve, delay);
    //   });
    // },
  },
};
</script>
<style scoped>
.more_industrial_site circle {
  r: 10;
  fill: rgb(237, 59, 14);
  font-size: 0px;
  transition-duration: 0.2s;
}
.more_industrial_site:hover circle {
  r: 15;
  font-size: 18px;
}

.more_industrial_site text {
  font-size: 0px;
  transition-duration: 0.2s;
}
.more_industrial_site:hover text {
  font-size: 20px;
  fill: azure;
}

.less_industrial_site circle {
  r: 10;
  fill: rgb(28, 199, 136);
  font-size: 0px;
  transition-duration: 0.2s;
}
.less_industrial_site:hover circle {
  r: 15;
  font-size: 18px;
}

.less_industrial_site text {
  font-size: 0px;
  transition-duration: 0.2s;
}
.less_industrial_site:hover text {
  font-size: 20px;
  fill: azure;
}

#site_selected text {
  font-size: 24px;
  fill: azure;
  transition-duration: 0.2s;
}
#site_selected circle {
  r: 18;
  transition-duration: 0.2s;
}
#site_focused text {
  font-size: 20px;
  fill: azure;
  transition-duration: 0.2s;
}
#site_focused circle {
  r: 15;
  transition-duration: 0.2s;
}

.GL_lakes .lake_water {
  fill: rgb(4, 84, 212);
  opacity: 0.7;
  stroke: rgb(11, 5, 97);
  transition-duration: 0.4s;
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
  transition-duration: 0.4s;
}
.GL_lakes:hover #lake_water_selected {
  fill: rgb(4, 84, 212);
  opacity: 0.9;
  stroke: rgb(11, 5, 97);
}

.GL_lakes text {
  fill: rgba(255, 255, 255, 0.5);
  transition-duration: 0.4s;
}
.GL_lakes:hover text tspan,
.GL_lakes:hover text {
  fill: #fff;
}

.legend text {
  font-size: 24px;
  transition-duration: 0.2s;
}
.legend .tooltip {
  font-size: 0px;
  fill: #fff;
}
.legend:hover .tooltip {
  font-size: 24px;
}
.legend circle {
  r: 10;
  transition-duration: 0.2s;
}

.legend .less_industrial {
  fill: rgb(28, 199, 136);
}
.legend .less_industrial:hover {
  r: 18;
}

.legend .more_industrial {
  fill: rgb(237, 59, 14);
}
.legend .more_industrial:hover {
  r: 18;
}
</style>