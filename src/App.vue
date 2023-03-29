
<script>
import { store } from './store';

import AppMain from './components/AppMain.vue';



export default {
    name: "App",
    data() {
        return {
            store
        }
    },
    
    components: {
        AppMain
    },
    methods: {
       
    }
};
</script>

<template>
  <AppMain/>
</template>


<style lang="scss">

@import './styles/main';


</style>
