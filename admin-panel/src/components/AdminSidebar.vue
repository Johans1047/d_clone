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
                    component: "users" as string,
                    icon: "person-fill" as string
                },
                {
                    name: "Servers" as string,
                    component: "servers" as string, //add real component route
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
    <aside class="sticky top-0 bg-blue-500 text-white h-screen 2xl:w-72 xl:w-64 lg:w-56 md:w-48">
        <RouterLink to="/" class="block text-2xl font-bold w-full text-center my-4">Admin panel</RouterLink>
        <SidebarItem class="text-xl" v-for="(section, index) in sections" :name="section['name']" :component="section['component']" :icon="section['icon']" :key="index"/>
    </aside>
</template>
<!-- END HTML -->

<!-- START CSS -->
<style scoped>

</style>
<!-- END CSS -->