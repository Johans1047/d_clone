<!-- START TYPESCRIPT -->
<script lang="ts">
import SidebarItem from './SidebarItem.vue';

export default {
    name: "AdminSidebar",
    
    data(){
        return {
            sections: [
                {
                    name: "Users" as string,
                    component: "/users" as string, //add real component route
                    icon: "person-fill" as string
                },
                {
                    name: "Servers" as string,
                    component: "/servers" as string, //add real component route
                    icon: "pc" as string
                },

            ]
        }
    },
    
    methods: {},
    
    computed: {},
    
    components: { 
        SidebarItem 
    }
    
}
</script>
<!-- END TYPESCRIPT -->

<!-- START HTML -->
<template>
    <aside class="bg-blue-800 text-white h-full 2xl:w-72 xl:w-64 lg:w-56 md:w-48">
        <RouterLink to="/" class="block text-xl font-bold w-full text-center my-4">Admin panel</RouterLink>
        <SidebarItem v-for="(section, index) in sections" :name="section['name']" :component="section['component']" :icon="section['icon']" :key="index"/>
    </aside>
</template>
<!-- END HTML -->

<!-- START CSS -->
<style scoped>

</style>
<!-- END CSS -->