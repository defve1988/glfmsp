<template>
  <v-card class="my-2 mx-1" max-width="400">
    <v-card-text class="pt-0">
      <v-row class="ma-0 pa-0" no-gutters>
        <v-col cols="8">
          <span class="title font-weight-bold mb-2 grey--text">{{card_data.chemical}}</span>
        </v-col>
        <v-col cols="4" align-self="end">
          <span
            v-if="card_data.trend>0"
            class="subtitle-1 font-weight-light green--text"
          >Decreased {{card_data.trend}}%</span>
          <span
            v-else
            class="subtitle-1 font-weight-light red--text"
          >Increased {{-card_data.trend}}%</span>
        </v-col>
      </v-row>
    </v-card-text>
    <v-row>
      <v-col cols="1" class="ml-3">
        <v-row justify="center">
          <v-sheet height=90>  
            <span :style="'color:'+card_data.color+';font-size:10px'">{{card_data.max_val}}</span>
          </v-sheet>
        </v-row>
        <v-row justify="center">
          <v-sheet>  
            <span :style="'color:'+card_data.color+';font-size:10px'" >{{card_data.min_val}}</span>
          </v-sheet>
        </v-row>
      </v-col>

      <v-col cols="11" class="ml-n7 pr-0">
        <v-sparkline
          :labels="card_data.labels"
          :value="card_data.value"
          :color="card_data.color"
          fill
          line-width="2"
          padding="16"
          height="100"
          label-size="8"
        ></v-sparkline>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
export default {
  name: "trend_card",
  props: ["card_data"],
  data: () => ({}),
};
</script>
<style scoped>
.v-sheet--offset {
  top: -24px;
  position: relative;
}
</style>