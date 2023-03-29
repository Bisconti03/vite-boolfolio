 
<script>

import axios from 'axios';
import ProjectCard from './ProjectCard.vue';
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
};
</script>

<template>
   <main>
     <div class="container">
    <div class="row">
        
           

            <ProjectCard 
                :name="project.name" 
                :description="project.description"  
                 v-for="project in projects"  
            />
            
           
        
    </div>
   </div>
   </main>
</template>

<style scoped>

</style>
