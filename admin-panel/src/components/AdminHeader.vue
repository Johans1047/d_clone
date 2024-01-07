<!-- START TYPESCRIPT -->
<script lang="ts">
import SearchboxItem from "./SearchBox.vue";

export default {
    name: "AdminHeader",
    
    data(){
        return {
            currentUser: "RubielGOD" as string,
            profilePictureURL: "person-circle.svg" as string,
        }
    },
    
    methods: {},
    
    computed: {},
    
    components: {
        SearchboxItem 
    }
    
}
</script>
<!-- END TYPESCRIPT -->

<!-- START HTML -->
<template>
    <header class="sticky top-0 bg-white px-24 py-4 border-b border-b-neutral-400 flex items-center justify-between w-full">
        <h2 class="text-xl">
            <span class="hidden md:inline mr-2">Logged in as:</span>
            <span class="font-bold" id="current-user">{{ currentUser }}</span>
        </h2>
        <SearchboxItem/>
        <div id="image-container">
            <img :src=profilePictureURL alt="profile picture" height="32" width="32"/>
        </div>
    </header>
</template>
<!-- END HTML -->

<!-- START CSS -->
<style scoped>

</style>
<!-- END CSS -->