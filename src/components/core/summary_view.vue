<template>
  <v-row justify="center" class="mx-1">
    <v-col cols="6">
      <v-card>
        <v-card-title class="title font-weight-thin">Great Lakes Fish Monitoring and Surveillance</v-card-title>
        <v-divider></v-divider>
        <Lake />
      </v-card>
    </v-col>
    <v-col cols="3">
      <v-card>
        <v-card-title
          class="title font-weight-thin"
        >{{lakes.lakes_data[lakes.lake_selected].less_industrial}}</v-card-title>
        <v-card-subtitle>Less-industrial affected areas</v-card-subtitle>
        <v-divider></v-divider>
        <TrendCard :card_data="gen_data(lakes.lakes_data[lakes.lake_selected].less_industrial,'Mercury')" />
        <TrendCard :card_data="gen_data(lakes.lakes_data[lakes.lake_selected].less_industrial,'Total PCBs')" />
        <TrendCard :card_data="gen_data(lakes.lakes_data[lakes.lake_selected].less_industrial,'Total DDTs')" />
        <TrendCard :card_data="gen_data(lakes.lakes_data[lakes.lake_selected].less_industrial,'Major PBDEs')" />
        <TrendCard :card_data="gen_data(lakes.lakes_data[lakes.lake_selected].less_industrial,'Pesticides')" />
      </v-card>
    </v-col>

    <v-col cols="3">
              <v-card>
        <v-card-title
          class="title font-weight-thin"
        >{{lakes.lakes_data[lakes.lake_selected].industrial}}</v-card-title>
        <v-card-subtitle>More-industrial affected areas</v-card-subtitle>
        <v-divider></v-divider>
        <TrendCard :card_data="gen_data(lakes.lakes_data[lakes.lake_selected].industrial,'Mercury')" />
        <TrendCard :card_data="gen_data(lakes.lakes_data[lakes.lake_selected].industrial,'Total PCBs')" />
        <TrendCard :card_data="gen_data(lakes.lakes_data[lakes.lake_selected].industrial,'Total DDTs')" />
        <TrendCard :card_data="gen_data(lakes.lakes_data[lakes.lake_selected].industrial,'Major PBDEs')" />
        <TrendCard :card_data="gen_data(lakes.lakes_data[lakes.lake_selected].industrial,'Pesticides')" />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from "vuex";
import data_func from "@/assets/plot_js/data_func";
export default {
  name: "summary_view",
  props: [],
  components: {
    Lake: () => import("@/components/widgets/lake"),
    TrendCard: () => import("@/components/widgets/trend_card"),
  },
  data: () => ({}),
  mounted() {},
  methods: {
      gen_data(site,chemical){
          return data_func.gen_data(site,chemical, this.app_data)
      }
  },
  computed: {
    ...mapState({
      lakes: "lakes",
      app_data:"app_data"
    }),
  },
};
</script>
