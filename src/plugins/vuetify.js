// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import colors from 'vuetify/lib/util/colors'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify(
  {
    theme: {
      themes: {
        light: {
          dark: false,
          colors: {
            primary: "#1098BE", // #E53935
            secondary: "#2C3739", // #FFCDD2
          }
        },
      },
    },
  }
)
