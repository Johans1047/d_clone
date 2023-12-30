<!-- START TYPESCRIPT -->
<script lang="ts">
import { RouterLink } from "vue-router";
export default {
    name: "SidebarItem",
    
    data(){
        return {
            sectionId: `${this.$props.name}-container` as string,
            viewPath: `/${this.$props.component}` as string,
            bootstrapIcon: `bi bi-${this.$props.icon}` as string,
        }
    },
    
    methods: {},
    
    computed: {},
    
    props: {
        name: {
            type: String, 
            required: true
        },
        component: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        }
    },
    
    components: {
        RouterLink
    }
    
}
</script>
<!-- END TYPESCRIPT -->

<!-- START HTML -->
<template>
    <RouterLink :to=viewPath class="flex items-center py-2 px-4 2xl:px-6 hover:bg-blue-400 duration-100 text-lg">
        <i :class="bootstrapIcon"></i>
        <span class="mx-4">{{ name }}</span>
    </RouterLink>
</template>
<!-- END HTML -->

<!-- START CSS -->
<style scoped>

</style>
<!-- END CSS -->