<!-- START TYPESCRIPT -->
<script lang="ts">
import axios from "axios";
import type { AxiosResponse } from "axios";
export default {
    
    name: "DataCard",
    
    data(){
        return {
            icon: `bi bi-${this.bootstrapIcon}` as string,
            color: this.$props.tailwindColor as string,
            model: `${this.requestModel}` as string,
            title: this.requestModel.charAt(0).toUpperCase() + this.requestModel.substring(1).toLowerCase() as string,
            count: 0 as number,
        }
    },
    
    methods: {
        async getCount(){
            try {
                const payload: AxiosResponse = await axios.get(`http://127.0.0.1:8080/${this.model}/count`);
                const data = payload.data;
                const count: number = Number(data.rows);
                this.count = count;
            } catch (error) {
                console.error(error);
            }
        }
    },
    
    computed: {},
    
    props: {
        bootstrapIcon: {
            type: String,
            required: true
        },

        requestModel: {
            type: String,
            required: true
        },
        
        tailwindColor: {
            type: String, 
            default: "text-blue-400",
            validator: (value: string): boolean => {
                const pattern = /^[a-z]{1,7}-[0-9]{2,3}$/;
                return pattern.test(value);
            }
        }
    },

    
    components: {},

    created(){
        this.getCount();
    }
    
}
</script>
<!-- END TYPESCRIPT -->

<!-- START HTML -->
<template>
    <div id="card" class="bg-white border border-neutral-400 rounded w-44 shadow-md px-4 py-2 m-4">
        <div id="card-icon" class="flex justify-center">
            <i :class="(icon + ' ' + color)" style="font-size: 100px;"></i>
        </div>
        <div id="card-data" class="flex justify-center text-lg">
            <p>{{ count }}</p>
        </div>
        <div id="card-title"  class="flex justify-center text-2xl font-bold">
            <h2 id="title-text">{{ title }}</h2>
        </div>
    </div>
</template>
<!-- END HTML -->

<!-- START CSS -->
<style scoped></style>
<!-- END CSS -->