 
<script>

import axios from 'axios';

export default {
    
    data() {
        return {
           
        };
    },
    created() {
        axios
        .get('http://127.0.0.1:8000/api/projects')
        .then(response=> {
            console.log(response.data);

        });

    }
};
</script>

<template>
   <main>
    <h1>
        Boolfolio
    </h1>
   </main>
</template>

<style scoped>

</style>
