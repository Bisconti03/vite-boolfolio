<script>
import axios from 'axios';

    export default {
        data() {
            return {
                project: null,
            };
        },
        components: {
        
    },
    created() {
        axios
        .get(`http://127.0.0.1:8000/api/projects/${this.$route.params.slug}`)
        .then(response=> {
            console.log(response.data);

            this.project = response.data.project;
        });

    }
    }
</script>


<template>
    <main>
        <div class="container mb-4">
            <div class="row">
                <div class="col">
                    <h2>
                        {{ project.name }}
                    </h2>
                    <p>
                        {{ project.description }}
                    </p>
                    <p>
                        {{ project.notes }}
                    </p>
                </div>
                
            </div>
         </div>
   </main>
</template>

<style scoped>
</style>