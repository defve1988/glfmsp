<template>
  <v-container>
    <v-row justify="center" class="mx-1">
      <v-col cols="5">
        <v-card class="ma-3 mb-0 pa-3" height="600">
          <v-card-title class="font_color--text">
            About GLFMSP Visualization Project
          </v-card-title>
          <v-card-text class="subtitle-1">
            The aim of this project is to provide research community and public
            an user-frendly interface for GLFMSP data and modeling tools with
            modern web technolgies. This project mainly uses <b>D3.js</b> and
            <b>Plotly.js</b> for data visulizations, <b>Vue.js</b> and
            <b>Vuetify.js</b> as web framework and UI, <b>Python-flask</b> as
            backend APIs.
            <br />
            <br />
            This project is fully driven by personal interests. I studied at
            Clarkson University from 2014 to 2018, and achieve a Ph.D. degree of
            Civl and Environmental Engineering. During that period, I was
            supervised by Dr. Thomas M. Holsen, and worked on part of data
            analysis and modeling of GLFMSP as my Ph.D. thesis. I developed some
            software for data analysis during my Ph.D. research, and I believe
            that more advanced coding knowledge and skills could be helpful on
            my environemtal research. Therefore, I pursued a master degree on
            Computer Science at Georgia Tech after that. And this project was
            inspired by a data visualization course (<a
              href="https://omscs.gatech.edu/cse-6242-data-visual-analytics"
              target="_blank"
              >CSE6242</a
            >).<br />
            <br />
            <p>
              If you have any questions or suggestions, please contact
              <a href="mailto: zhouchuanlong1988@gmail.com">Chuanlong Zhou</a>
              . And more information about me, please check
              <a href="https://defve1988.github.io/" target="_blank">here</a> .
            </p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="5">
        <v-timeline :reverse="reverse" dense class="ma-5">
          <v-timeline-item
            v-for="(item, index) in infor.time_lines"
            :key="index"
            small
          >
            <v-row class="pt-3">
              <v-col cols="2">
                {{ item.date }}
              </v-col>
              <v-col cols="8">
                <strong>{{ item.title }}</strong>
                <div class="caption">{{ item.text }}</div>
              </v-col>
            </v-row>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "proj_intro",
  components: {},
  data: () => ({}),
  mounted() {},
  methods: {},
  computed: {
    ...mapState({
      infor: "infor",
    }),
  },
};
</script>
