<!-- START TYPESCRIPT -->
<script lang="ts">
import AdminSidebar from "./components/AdminSidebar.vue";
import AdminHeader from "./components/AdminHeader.vue";
import { RouterView } from "vue-router"
export default {
    name: "App",

    data() {
        return {}
    },

    methods: {},

    computed: {},

    props: {},

    components: {
        AdminSidebar,
        AdminHeader,
        RouterView
    }

}
</script>
<!-- END TYPESCRIPT -->

<!-- START HTML -->
<template>
    <div id="screen" class="flex w-full min-h-screen bg-neutral-100">
        <AdminSidebar/>
        <main id="panel" class="w-full">
            <AdminHeader/>
            <section id="data" class="flex flex-col items-center">
                <RouterView/>
            </section>
        </main>
    </div>
</template>
<!-- END HTML -->

<!-- START CSS -->
<style scoped>
</style>
<!-- END CSS -->