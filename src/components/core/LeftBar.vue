<template>
  <v-navigation-drawer
    app
    permanent
    width="220"
    color="background lighten-1"
    :mini-variant="theme.mini_drawer"
  >
    <v-list dense>
      <template v-for="(item, i) in NavBar.items">
        <v-divider v-if="item.divider" :key="i" dark class="my-4" />
        <v-list-item v-else :key="i" :color="item.color" link router :to="item.route">
          <v-tooltip right>
            <template v-slot:activator="{ on }">
              <v-list-item-action>
                <v-icon :color="item.color" v-on="on">{{ item.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title
                  class="subtitle-2"
                  :class="item.text_color"
                >{{ item.text }}</v-list-item-title>
              </v-list-item-content>
            </template>
            <span>{{ item.text }}</span>
          </v-tooltip>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "LeftBar",
  computed: {
    ...mapState({
      theme: "theme",
      NavBar: "nav_bar_item"
    })
  },
  data: () => ({})
};
</script>
