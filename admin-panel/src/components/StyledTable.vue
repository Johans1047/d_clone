<!-- START TYPESCRIPT -->
<script lang="ts">
import { Axios } from "axios";
const axios = new Axios();
export default {
    name: "StyledTable",
    
    data(){
        return {}
    },
    
    methods: {
        async getData(fetchUrl: string){
            const result = await axios.get(fetchUrl);

            return result;
        }
    },
    
    computed: {},
    
    props: {},
    
    components: {}
    
}
</script>
<!-- END TYPESCRIPT -->

<!-- START HTML -->
<template>
    <table>
        <!-- BACKEND STRUCTURING NEEDED -->
    </table>
</template>
<!-- END HTML -->

<!-- START CSS -->
<style scoped>

</style>
<!-- END CSS -->