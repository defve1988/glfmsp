<template>
  <v-container>
    <v-hover v-slot:default="{ hover }">
      <v-card height="730" :elevation="hover ? 5 : 2">
        <v-row>
          <v-col cols="12" lg="3" md="6" ref="element">
            <v-select
              v-model="map_type"
              :items="items"
              label="Select Map Type"
              class="px-8 pt-8"
              @change="update_map_type"
            ></v-select>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" ref="element" justify="center" class="px-8 pt-0">
            <div id="map_div" class="my_dataviz"></div>
          </v-col>
        </v-row>
      </v-card>
    </v-hover>
  </v-container>
</template>

<script>
import plot_site_map from "@/assets/plot_js/plot_site_map";

export default {
  name: "site_map",
  //   props: [],
  //   components: {},
  data: () => ({
    items: [ "Simple Map","Land Map", "Satellite Map"],
    map_type: "Simple Map",
    map_config: {},
    lat: 45.3,
    lon: -83,
    zoom: 5.2,
  }),
  mounted() {
    this.map_config = {
      style: "light",
      center: { lat: this.lat, lon: this.lon },
      zoom: this.zoom,
    },
      plot_site_map.plot_map("map_div", this.map_config);
  },
  methods: {
    update_map_type() {
      switch (this.map_type) {
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
  computed: {},
};
</script>

<style scoped>
.my_dataviz {
  height: 600px;
  width: 100%;
}
</style>