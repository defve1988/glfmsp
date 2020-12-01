<template>
  <v-row justify="center">
      <div id="map_div" class="my_dataviz mx-10 pa-0 mb-5"></div>
  </v-row>
</template>

<script>
import { mapState } from "vuex";
import plot_site_map from "@/assets/js/plot_site_map";
export default {
  name: "site_map",
  props: [],
  components: {},
  data: () => ({
    map_config: {},
    lat: 45.3,
    lon: -83,
    zoom: 5.2,
  }),
  mounted() {
    (this.map_config = {
      style: "light",
      center: { lat: this.lat, lon: this.lon },
      zoom: this.zoom,
    }),
      plot_site_map.plot_map("map_div", this.map_config);
  },
  methods: {
    update_map_type() {
      switch (this.app_data.map_type) {
        case "Land Map":
          this.map_config = {
            style: "outdoors",
            center: { lat: this.lat, lon: this.lon },
            zoom: this.zoom,
          };
          break;
        case "Simple Map":
          this.map_config = {
            style: "light",
            center: { lat: this.lat, lon: this.lon },
            zoom: this.zoom,
          };
          break;
        case "Satellite Map":
          this.map_config = {
            style: "white-bg",
            layers: [
              {
                sourcetype: "raster",
                source: [
                  "https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryOnly/MapServer/tile/{z}/{y}/{x}",
                ],
                below: "traces",
              },
              { sourcetype: "streets" },
            ],
            center: { lat: this.lat, lon: this.lon },
            zoom: this.zoom,
          };
          break;
      }
      console.log(this.map_type);
      plot_site_map.plot_map("map_div", this.map_config);
    },
  },
  computed: {
    ...mapState({ app_data: "app_data" }),
    map_() {
      return this.app_data.map_type;
    },
  },
  watch: {
    map_() {
      this.update_map_type();
    },
  },
};
</script>
<style scoped>
.my_dataviz {
  height: 600px;
  width: 100%;
}
</style>