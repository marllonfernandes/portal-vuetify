import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

// button google login
import vue3GoogleLogin from "vue3-google-login";

loadFonts()

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify,{
    theme: {
       primary: '#7957d5',
    },
 })
  .use(vue3GoogleLogin, { clientId: "642659321358-anr4e7c7156oimasgae97hqiarclqda2.apps.googleusercontent.com" })
  .mount('#app')
