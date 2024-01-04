<!-- START TYPESCRIPT -->
<script lang="ts">
import StyledTable from '@/components/StyledTable.vue';
export default {
    name: "TestView",

    data(){
        return {}
    },

    methods: {},

    computed: {},

    props: {},

    components: {
        StyledTable
    }

}
</script>
<!-- END TYPESCRIPT -->

<!-- START HTML -->
<template>
    <section id="test-view" class="flex justify-center items-start">
        <div id="table-container" class="max-w-9/10">
            <StyledTable request-model="users"/>
        </div>
    </section>
</template>
<!-- END HTML -->

<!-- START CSS -->
<style scoped></style>
<!-- END CSS -->