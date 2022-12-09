<template>
    <NavBar />
    <SideBar />
    <v-container>
      <Home />
    </v-container>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import Home from '../components/Home.vue';
import NavBar from '../components/NavBar.vue';
import SideBar from '../components/SideBar.vue';
import api from "@/plugins/axios";
export default defineComponent({
  name: 'HomeView',

  components: {
    NavBar,
    SideBar,
    Home
  },
  async created() {
    const { data } = await api.get("register/v1.0/proxy")
    console.log(data)
  },
});
</script>
