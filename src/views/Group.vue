<template>
  <v-container>
    <v-row>fsdfds</v-row>
    <v-divider></v-divider>

    <v-row>
      <v-col cols="4">
        <Card />
      </v-col>
    </v-row>

    <v-row>fsdfds</v-row>
    <v-divider></v-divider>

    <v-row>
      <v-col cols="4">
        <Card />
      </v-col>
      <v-col cols="4">
        <Card />
      </v-col>
      <v-col cols="4">
        <Card />
      </v-col>
      <v-col cols="4">
        <Card />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  props: [],
  components: {
    Card: () => import("@/components/widgets/people_card")
  },
  data: () => ({
    //
  }),
  mounted() {},
  methods: {},
  computed: {}
};
</script>