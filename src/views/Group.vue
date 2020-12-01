<template>
  <v-tabs
    v-model="active"
    color="success"
    dark
    slider-color="success"
    :height="!theme.Scrolled ? 30 : 0"
  >
    <v-tab ripple>People</v-tab>
    <v-tab ripple>publications</v-tab>

    <v-tab-item>
      <v-row class="ml-1" justify="center">
        <v-col cols="12" lg="10" md="12">
          <v-row>
            <v-col cols="12" lg="3" sm="6" md="4" v-for="p in infor.people" :key="p">
              <Card v-bind:people="p" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-tab-item>
    <v-tab-item>
      <v-row class="ml-1" justify="center">
        <v-col cols="12" lg="10" md="12">
          <template v-for="(item, i) in infor.publications">
            <v-row class="ml-1" :key="i">
              <p class="subtitle-1 mt-3 mb-0">{{ i + 1 }} . {{ item }}</p>
            </v-row>
          </template>
        </v-col>
      </v-row>
    </v-tab-item>
  </v-tabs>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Home",
  props: [],
  components: {
    Card: () => import("@/components/widgets/people_card"),
  },
  data: () => ({

  }),
  mounted() {},
  methods: {},
  computed: {
    ...mapState({
      infor: "infor",
      theme: "theme",
    }),
  },
};
</script>