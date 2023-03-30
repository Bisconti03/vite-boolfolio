<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
    export default {
        data() {
            return {
                projects: []
            };
        },
        components: {
        ProjectCard
    },
    created() {
        axios
        .get('http://127.0.0.1:8000/api/projects')
        .then(response=> {
            console.log(response.data);

            this.projects = response.data.projects;
        });

    }
    }
</script>


<template>
    <main>
     <div class="container mb-4">
    <div class="row">
        
           <div class="col " v-for="project in projects">
            <ProjectCard :project="project"
                
                 
            />
           </div>

            
            
           
        
    </div>
   </div>
   </main>
</template>

<style scoped>
</style>