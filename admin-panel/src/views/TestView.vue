<!-- START TYPESCRIPT -->
<script lang="ts">
import DatabaseTable from '@/components/DatabaseTable.vue';
export default {
    name: "TestView",
    
    data(){
        return {}
    },
    
    methods: {},
    
    computed: {},
    
    props: {},
    
    components: {
        DatabaseTable
    }
    
}
</script>
<!-- END TYPESCRIPT -->

<!-- START HTML -->
<template>
    <section id="test-view" class="flex justify-center items-start">
        <DatabaseTable/>
    </section>
</template>
<!-- END HTML -->

<!-- START CSS -->
<style scoped>

</style>
<!-- END CSS -->