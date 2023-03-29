 
<script>


export default {
    
    data() {
        return {
        
        };
    },

    props : {
            name : String,
            description : String,
        },
    created() {
        
    }
};
</script>

<template>

  
   <div class="card" style="width: 18rem;" >
                <div class="card-body">
                    <h5 class="card-title">{{ name }}</h5>
                    
                    <p class="card-text">{{ description }}</p>
                    
                </div>
            </div>
</template>

<style scoped>

</style>
