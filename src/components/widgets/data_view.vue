<template>
  <v-row justify="center">
    <Login v-if="login_form" v-bind:login_form="login_form"/>
    <v-col  cols="12" lg="11">
      <v-row>
        <v-col cols="12" lg="3">
          <v-select v-model="table" :items="items" label="Select Data View"></v-select>
        </v-col>
      </v-row>

      <v-data-table
        :headers="table_header"
        :items="app_data.data"
        :items-per-page="10"
        class="elevation-1"
        multi-sort
      ></v-data-table>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "data_view",
  components: {
    Login: () => import("@/components/core/Login")
  },
  data: () => ({
    items: ["Summary", "Pesticide", "Flame Retardant", "Sample Information"],
    table: "Summary",
    login_form:true
  }),
  mounted() {},
  methods: {},
  computed: {
    ...mapState({
      app_data: "app_data",
    }),
    table_header() {
      let res = this.app_data.header_summary;
      switch (this.table) {
        case "Summary":
          res = this.app_data.header_summary;
          break;
        case "Pesticide":
          res = this.app_data.header_pesticide;
          break;
        case "Flame Retardant":
          res = this.app_data.header_flame_retardant;
          break;
        case "Sample Information":
          res = this.app_data.header_sample;
          break;
      }
      console.log(res);
      return res;
    },
  },
};
</script>

<style scoped>
</style>