<!-- START TYPESCRIPT -->
<script lang="ts">
import DataTable from '@/components/DataTable.vue';
export default {
    name: "UserPanel",
    
    data(){
        return {
            model: "users" as string,
        }
    },
    
    methods: {},
    
    computed: {},
    
    props: {},
    
    components: {
        DataTable
    }
    
}
</script>
<!-- END TYPESCRIPT -->

<!-- START HTML -->
<template>
    <DataTable :request-model="model"/>
</template>
<!-- END HTML -->

<!-- START CSS -->
<style scoped>

</style>
<!-- END CSS -->