<template>
  <v-app>
    <TopBar />
    <LeftBar />
    <v-content v-on:scroll="onScroll">
      <router-view></router-view>
    </v-content>

    <Footer />
  </v-app>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "App",
  components: {
    TopBar: () => import("@/components/core/TopBar"),
    LeftBar: () => import("@/components/core/LeftBar"),
    Footer: () => import("@/components/core/Footer"),
  },
  computed: {

  },
  created() {
    // console.log(this.pageTitle)
    // document.title = this.pageTitle;
    window.addEventListener('scroll', this.onScroll);
  },
  mounted() {},
  methods:{
    ...mapMutations(["CHANGE_SCROLLED"]),
      onScroll(){
        var scrolled = window.scrollY > 0;
        this.CHANGE_SCROLLED(scrolled)
        // console.log(this.NavBar.Scrolled)
    },
  },
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

  })
};
</script>
