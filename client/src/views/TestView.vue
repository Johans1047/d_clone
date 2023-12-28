<!-- START TYPESCRIPT -->
<script lang="ts">
import DateInput from '@/components/DateInput.vue';
export default {
    name: "TestView",
    
    data(){
        return {}
    },
    
    methods: {},
    
    computed: {},
    
    props: {},
    
    components: {
        DateInput
    }
    
}
</script>
<!-- END TYPESCRIPT -->

<!-- START HTML -->
<template>
    <div class="w-screen h-screen bg-green-600 flex justify-center items-center">
        <DateInput input-id="birthdate"/>
    </div>
</template>
<!-- END HTML -->

<!-- START CSS -->
<style scoped>

</style>
<!-- END CSS -->