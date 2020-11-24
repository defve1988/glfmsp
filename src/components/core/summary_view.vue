<template>
 
  <v-container>
     <!-- <fullscreen ref="fullscreen" @change="fullscreenChange"> -->
    <v-row justify="center" class="mt-4 mx-1">
      <v-col cols="5">
        <v-card>
          <v-card-title class="font_color--text title py-2"
            >{{ lakes.title_text }}
            <v-spacer></v-spacer>
            <!-- <v-btn @click="fullscreen"></v-btn> -->
          </v-card-title>
          <v-divider></v-divider>
          <Lake />
        </v-card>
      </v-col>
      <v-col cols="5" class="pl-0">
        <v-card height="523">
          <v-card-title class="font_color--text title py-2"
            >Chemical Concentration Visualizations</v-card-title
          >
          <v-divider></v-divider>
          <MainPlot card_name="Chemicals of Years" />
        </v-card>
      </v-col>
      <v-col cols="2" class="px-2">
        <v-card>
          <v-card-title class="font_color--text title py-2">
            Select Views
          </v-card-title>
          <v-divider></v-divider>
          <v-list dense class="pa-0" flat>
            <v-list-item-group multiple dense v-model="app_data.view_selected">
              <v-list-item
                v-for="(item, i) in app_data.plots"
                :key="i"
                dense
                @click="hide_show_view(i)"
              >
                <template v-slot:default="{ active }">
                  <v-list-item-action>
                    <v-checkbox
                      :input-value="active"
                      color="font_color"
                    ></v-checkbox>
                  </v-list-item-action>
                  {{ item.name }}
                  <v-spacer></v-spacer>
                </template>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mx-1 mt-2">
      <template v-for="plot in app_data.plots">
        <v-col cols="2" class="pt-0 px-2" :key="plot.name" v-if="plot.plots">
          <SmallCard :card_name="plot.name" />
        </v-col>
      </template>
    </v-row>
    <!-- </fullscreen> -->
  </v-container>
  
</template>

<script>
import { mapState } from "vuex";
// import fullscreen from "vue-fullscreen";
export default {
  name: "summary_view",
  props: [],
  components: {
    Lake: () => import("@/components/widgets/lake"),
    MainPlot: () => import("@/components/widgets/stacked_bar"),
    SmallCard: () => import("@/components/widgets/small_card"),
  },
  data: () => ({
    fullscreen: false,
  }),
  computed: {
    ...mapState({
      lakes: "lakes",
      app_data: "app_data",
    }),
  },
  mounted() {},
  methods: {
    fullscreen() {
      this.$refs['fullscreen'].toggle()
    },
    fullscreenChange(fullscreen) {
      this.fullscreen = fullscreen;
    },
    hide_show_view(index) {
      if (this.app_data.view_selected.includes(index)) {
        this.app_data.plots[index].plots = false;
      } else {
        this.app_data.plots[index].plots = true;
      }
    },
  },
};
</script>

<style scoped>
.v-list {
  max-height: 475px;
  overflow-y: auto;
}
</style>