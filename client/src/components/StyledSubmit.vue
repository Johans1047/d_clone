<!-- START TYPESCRIPT -->
<script lang="ts">
    export default {
        name: "StyledSubmit",
        
        data(){
            return {}
        },
        
        methods: {},
        
        computed: {},
        
        props: {

            buttonText: {
                type: String,
                required: true,
                default: "Return"
            }
        },
        
        components: {}
        
    }
</script>
<!-- END TYPESCRIPT -->

<!-- START HTML -->
<template>
    <div id="submit-container">
        <input class="text-white text-base sm:text-xl py-2 my-4 bg-blue-400 hover:bg-blue-600 duration-150 w-full" type="submit" :value=buttonText>
    </div>
</template>
<!-- END HTML -->

<!-- START CSS -->
<style scoped>
    
</style>
<!-- END CSS -->