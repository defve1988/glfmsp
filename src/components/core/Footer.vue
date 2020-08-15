<template>
  <v-footer app color=black>
    <span class="subtitle-2 text-right success--text text--lighten-3">
      Chuanlong Zhou &copy; 2020 
      <v-hover v-slot:default="{ hover }">
        <v-icon size="18 mb-2" :color="hover ? 'warning': 'success' " :class="hover ? 'fa-bar-chart': '' ">mdi-fish</v-icon>
      </v-hover>
      
    </span>
  </v-footer>
  
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
span {
  display: inline-block;
  vertical-align: middle;
}
</style>

<style scoped>
/* NOTE: span does not support margin or padding top, only vertical-align can be used*/
span {
  display: inline-block;
  vertical-align: buttom;
}

.fa-bar-chart {
  transform: rotate(360deg) scaleX(-1);
}
</style>