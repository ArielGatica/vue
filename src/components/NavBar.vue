<template>
    <v-container>

        <!-- TOOLBAR -->
        <v-app-bar
            app 
            clipped-left 
            dark
            height="75"
            >

            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

            <template v-slot:img="{ props }">
                <v-img
                v-bind="props"
                gradient="to top right, rgba(57, 42, 192, 0.53), rgba(51, 126, 240, 0.26)"
                ></v-img>
            </template>

            <!-- LOGO TITLE -->
            <v-toolbar-title>
                <v-img
                    :src="logo"
                    width="88"
                    height="68">

                </v-img>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-flex xs3 sm3>
                <v-text-field
                    label="Escribe algo a buscar..."
                    color="red"
                    solo-inverted
                    hide-details
                    append-icon="search">
                </v-text-field>
            </v-flex>            

            <v-spacer></v-spacer>

            <!--NOTIFICATIONS-->
            <v-btn icon>
                <v-badge color="pink" overlap left>
                    <template v-slot:badge>
                        <span v-if="messages > 0">{{ messages }}</span>
                    </template>            
                    <v-icon size="28">notifications</v-icon>
                </v-badge>
            </v-btn>
            
            <!--MENU USER-->
            <v-menu offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on">
                        <v-icon size="28">settings</v-icon>
                    </v-btn>                    
                </template>
                <v-list>
                    <v-list-item
                        v-for="(item, index) in itemsBtn"
                        :key="index"
                    >
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

            <v-btn icon>
                <v-icon size="28">person</v-icon>
            </v-btn>

        </v-app-bar>

        <!-- SIDEBAR -->
        <v-navigation-drawer 
            v-model="drawer" 
            clipped 
            app
            absolute
            expandOnHover
            :src="imgToolbar"
            dark>
            <v-list-item
                v-for="item in items"
                :key="item.title"
                :to="item.path"
                link>

                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
                
            </v-list-item>
        </v-navigation-drawer>
            
    </v-container>
</template>

<script>
    export default {
        data(){
            return{
                imgToolbar: require('../assets/santiago3.jpg'),
                logo: require('../assets/entel-logo.png'),
                itemsBtn:[
                    { title: 'Password' },
                    { title: 'Logout' }
                ],
                messages: 5,
                drawer: true,
                items: [
                    { title: 'Dashboard', icon: 'dashboard', path: '/' },
                    { title: 'Nodos', icon: 'device_hub', path: '/nodos' },
                    { title: 'Alarmas', icon: 'alarm', path: '/alarmas' },
                    { title: 'Monitor', icon: 'speed', path: '/monitor' },
                    { title: 'Seguimiento', icon: 'find_in_page', path: '/seguimiento' }
                ]
            }
        }
    }
</script>