<template>
  <v-dialog 
    v-model="login_form" 
    persistent
    max-width="400px" 
    transition="slide-y-transition"
    @keydown.enter="login_request">
    <v-card class="elevation-12 background">
      <v-toolbar color="primary" dark flat>
        <v-toolbar-title>User Login</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>

      <v-card-text class="mt-5">
        <v-form>
          <v-text-field
            v-model="user_name"
            label="Login"
            name="login"
            prepend-icon="mdi-account"
            type="text"
            :rules="rules"
          ></v-text-field>

          <v-text-field
            v-model="user_pwd"
            id="password"
            label="Password"
            name="password"
            prepend-icon="mdi-lock"
            type="password"
            :rules="rules_pwd"
          ></v-text-field>
        </v-form>
      </v-card-text>

      <v-card-actions class="mt-n2 mr-3">
        <v-spacer></v-spacer>
        <v-btn
          class="mb-3" 
          :color="color" 
          :loading="loader"
          transition="fab-transition"
          @click="login_request">
          Login
          </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props:['login_form'],
  data: () => ({
    user_name: "",
    user_pwd: "",
    dialog: false,
    rules: [value => !!value || "Required."],
    rules_pwd: [(value) => !!(value==="123456") || "Cannot login."],
    loader:false,
    color:"warning darken-1",
  }),
  computed: {
  },
  methods: {
    login_request() {
      if (this.user_name==="CARES" && this.user_pwd==="123456"){
        this.login_form=false
      }
      
    }
  }
};
</script>