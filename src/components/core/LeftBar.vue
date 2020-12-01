<template>
  <v-navigation-drawer
    app
    permanent
    width="200"
    color="background lighten-1"
    :mini-variant="theme.mini_drawer"
    mini-variant-width="75"
  >
    <v-list dense>
      <template v-for="(item, i) in theme.nav_items">
        <v-divider v-if="item.divider" :key="i" dark class="my-4" />
        <v-list-item v-else :key="i" :color="item.color" link router :to="item.route">
          <v-tooltip right>
            <template v-slot:activator="{ on }">
              <v-list-item-action>
                <v-icon v-if="item.icon==='$GL_icon'"  size="50" v-on="on" class="ml-n3 mr-n4">{{ item.icon }}</v-icon>
                <v-icon v-else :color="item.color"   v-on="on">{{ item.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title
                  class="subtitle-1"
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
    })
  },
  data: () => ({})
};
</script>
