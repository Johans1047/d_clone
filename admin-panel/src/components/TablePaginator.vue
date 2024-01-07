<!-- START TYPESCRIPT -->
<script lang="ts">
export default {
    name: "TablePaginator",
    
    data(){
        return {}
    },
    
    methods: {
        range(max: number){
            let range = [];

            for(let i=1; i<=max; i++){
                range.push(i);
            }
            return range;
        }
    },
    
    computed: {},
    
    props: {
        rows: {
            type: Number,
            required: true
        },
        limit: {
            type: Number,
            default: 25
        }
    },
    
    components: {}
    
}
</script>
<!-- END TYPESCRIPT -->

<!-- START HTML -->
<template>
    <table id="paginator" class="my-4 bg-neutral-200 rounded-lg border-collapse">
        <tr class="border-collapse">
            <td class="border-l-0 border-r-2 border-neutral-100 p-2 border-collapse hover:cursor-pointer hover:bg-blue-500 hover:text-white rounded-l-lg">Prev</td>
            <td class="border-l-2 border-r-2 border-neutral-100 p-2 border-collapse hover:cursor-pointer hover:bg-blue-500 hover:text-white" v-for="i in range(Math.ceil(rows/limit))" :key="i">{{ i }}</td>
            <td class="border-l-2 border-r-0 border-neutral-100 p-2 border-collapse hover:cursor-pointer hover:bg-blue-500 hover:text-white rounded-r-lg">Next</td>
        </tr>
    </table>
</template>
<!-- END HTML -->

<!-- START CSS -->
<style scoped></style>
<!-- END CSS -->