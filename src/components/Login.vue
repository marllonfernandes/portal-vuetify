<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img :src="require('../assets/logo.svg')" class="my-3" contain height="200" />
      </v-col>
      <v-col class="mb-4">
        <GoogleLogin :callback="callback" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import { decode } from 'jsonwebtoken-esm'
import router from "@/router";
import { mapMutations } from "vuex"

export default {
  name: 'Login',

  data: () => ({
  }),
  created() {
    this.initialize()
  },
  methods: {
    // adiciona os metodos da store mutations
    ...mapMutations(['setCredential']),

    // se ja esta logado, direciona para home page
    initialize(){
      if (localStorage.getItem('credential')) {
        router.push({ name: 'home' })
      }
    },
    callback(response){
      if (response) {
        const credential = decode(response.credential)
        localStorage.setItem('credential', JSON.stringify(credential))
        this.setCredential(credential)
        router.push({ name: 'home' })
      }
    }
  },
}
</script>