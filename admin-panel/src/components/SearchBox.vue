<!-- START TYPESCRIPT -->
<script lang="ts">
export default {
    name: "SearchboxItem",
    
    data(){
        return {
        }
    },
    
    methods: {},
    
    computed: {},
    
    components: {
    }
    
}
</script>
<!-- END TYPESCRIPT -->

<!-- START HTML -->
<template>
    <form>   
        <div class="border border-neutral-400 rounded-full flex flex-row-reverse items-center">
        
        <input type="search" name="" id="" class="text-lg rounded-full pl-2 pr-4 py-1  flex-1 focus:outline-none" placeholder="Search data...">
        <button type="submit">
            <i class="bi bi-search flex items-center text-xl px-3 text-neutral-400"></i>
        </button>
    </div>
    </form>
</template>
<!-- END HTML -->

<!-- START CSS -->
<style scoped>
    input[type="search"]::placeholder {
        font-size: 14px;
        position: absolute;
        bottom: 25%;
    }
    input[type="search"]:focus::-webkit-search-cancel-button{
        -webkit-appearance: none;
        height: 16px;
        width: 16px;
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="%23A3A3A3" class="bi bi-x-lg" viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/></svg>');
        cursor: pointer;
    }
</style>
<!-- END CSS -->