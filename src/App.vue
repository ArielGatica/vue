<template>
    <v-app>
        <NavBar/>
        
        <v-content>
            <router-view></router-view>
        </v-content>

    </v-app>
</template>

<script>
    import NavBar from './components/NavBar';
    import Footer from './components/Footer';

    export default {
        name: "App",
        components: {
            NavBar,
            Footer
        }
    };
</script>
