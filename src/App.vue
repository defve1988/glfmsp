<template>
  <v-app>
    <TopBar />
    <LeftBar />
    <Login v-if="login_form" v-bind:login_form="login_form"/>
    <v-content>
      <router-view></router-view>
    </v-content>

    <Footer />
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {
    TopBar: () => import("@/components/core/TopBar"),
    LeftBar: () => import("@/components/core/LeftBar"),
    Footer: () => import("@/components/core/Footer"),
    Login: () => import("@/components/core/Login")
  },
  created() {
    // console.log(this.pageTitle)
    // document.title = this.pageTitle;
  },
  mounted() {},
  watch: {
    // NOTE: this will change the page title if the tilte is defined in router.meta, otherwise it will display the original title
    $route: {
      handler: (to, from) => {
        document.title = to.meta.title || from.meta.title;
      },
      immediate: true
    }
  },
  data: () => ({
    login_form:false
  })
};
</script>
