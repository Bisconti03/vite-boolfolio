
<script>
import { store } from './store';

import AppHeader from './components/AppHeader.vue';



export default {
    name: "App",
    data() {
        return {
            store
        }
    },
    
    components: {
        AppHeader
    },
    methods: {
       
    }
};
</script>

<template>
  <AppHeader/>
  <router-view></router-view>
</template>


<style lang="scss">

@import './styles/main';


</style>
