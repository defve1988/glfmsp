<template>
  <v-hover v-slot:default="{ hover }">
    <v-card :elevation="hover ? 14:2" width="215" min-width="215" @click="open_url(people.link)">
      <div class="d-flex justify-space-between">
        <v-avatar class="ma-2" size="200" tile>
          <v-img :src="people.img" />
        </v-avatar>
      </div>
      <v-divider class="mx-2"></v-divider>
      <div>
        <v-card-title class="subtitle-1 pa-2 mx-2">
          <span class="people_name font-weight-bold">{{people.name.toUpperCase()}}</span>
        </v-card-title>

        <v-card-subtitle class="subtitle-1 pa-2 mx-2">
          <span class="subtitle-1 people_title">{{people.title.toUpperCase()}}</span>
        </v-card-subtitle>
      </div>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: "people_card",
  props: ["people"],
  components: {},
  data: () => ({
    //
  }),
  mounted() {},
  methods: {
    open_url: (url) => {
      if (url!==""){
      window.open(url, "_blank");}
    },
  },
  computed: {
    get_image() {
      console.log(this.people.img);
      return this.people.img;
    },
  },
};
</script>

<style scoped>
.people_title {
  font-family: "Courier New", Courier, monospace;
}
.people_name {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 500;
}
</style>