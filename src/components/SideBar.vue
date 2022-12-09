<template>
    <v-navigation-drawer expand-on-hover rail color="grey-lighten-5" border="0">
        <v-list>
            <v-list-item 
                prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg" 
                title="teste" 
                subtitle="sandra_a88@gmailcom">
            </v-list-item>
        </v-list>
        
        <v-divider></v-divider>

        <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-folder" title="My Files" value="myfiles"></v-list-item>
            <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared"></v-list-item>
            <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
        </v-list>
    </v-navigation-drawer>

</template>

<script>

import { mapGetters } from 'vuex'

export default {
    computed: mapGetters({
        credential: "getCredential"
    }),
    data() {
        return {
            user: { name: "", picture: "" },
        }
    },
    created() {
        this.initialize()
    },
    methods: {
        initialize() {
            this.user.name = this.credential.name 
            this.user.picture = this.credential.picture

            console.log("usuario",this.user)
        },
    },
}
</script>

<style lang="scss" scoped>

</style>