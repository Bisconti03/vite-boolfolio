 
<script>


export default {
    
    data() {
        return {
            
        };
        
    },
    
    
};
</script>

<template>
   <header>
    <div class="container">
        <div class="row">
            <div class="col text-center">
                <h1 >Boolpress</h1>
            </div>

        </div>
        <div class="row">
            <div class="col text-center mb-4">
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <router-link :to="{name: 'home'}" class="nav-link">
                                        Home
                                    </router-link>
                                
                                </li>
                                <li class="nav-item">
                                    <router-link :to="{name: 'projects'}" class="nav-link">
                                        Progetti
                                    </router-link>
                                
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

        </div>

    </div>
   </header>
</template>

<style scoped>

</style>
