 
<script>


export default {
    
    data() {
        return {
        
        };
    },

    props : {
            project: {
                type: Object
            }
            
        },
    created() {
        
    }
};
</script>

<template>

  
   <div class="card h-100" style="width: 18rem;" >
                <div class="card-body">
                    <h5 class="card-title">{{ project.name }}</h5>
                    
                    <p class="card-text">{{ project.description }}</p>

                    
                        <router-link :to="{name: 'projects-show', params: {slug: project.slug} }" class="btn btn-primary">
                                       Info
                        </router-link>
                    
                </div>
            </div>
</template>

<style scoped>

</style>
