<!-- START TYPESCRIPT -->
<script lang="ts">
import axios from "axios";
import type { AxiosResponse } from "axios";
export default {
    name: "StyledTable",

    data() {
        return {
            model: "" as string,
            headers: [] as string[],
            data: [] as any[],
            rows: 0 as number,
            cols: 0 as number,
            keys: [] as string[],
            offset: 0 as number,
            selected: [] as number[]
        }
    },

    methods: {
        async countRows() {
            try {
                const payload: AxiosResponse = await (axios.get(`http://127.0.0.1:8080/${this.model}/count`));
                const data = payload.data;
                const rows: number = Number(data.rows);
                this.rows = rows;

            } catch (error) {
                console.error(error);
            }

        },
        async getData() {

            if (this.rows > this.offset) {
                try {
                    const payload: AxiosResponse = await axios.get(`http://127.0.0.1:8080/${this.model}/all/25/${this.offset}`);
                    const data = payload.data;
                    this.data = [...data];
                    this.offset += 25;
                } catch (error) {
                    console.error(error);
                }
            }

        },
        async getKeys() {
            try {
                const payload: AxiosResponse = await axios.get(`http://127.0.0.1:8080/${this.model}/columns`);
                const data = payload.data;
                const keys: string[] = [];
                const headers: string[] = [];

                this.cols = data.length;

                for (let header of data) {
                    keys.push(header["column_name"])
                    let headerArray: string[] = header["column_name"].split("_");
                    let formattedWord: string = "";
                    for (let word of headerArray) {
                        formattedWord += (word.charAt(0).toUpperCase() + word.substring(1) + " ");
                    }
                    headers.push(formattedWord);
                }
                this.keys = [...keys];
                this.headers = [...headers];
            } catch (error) {
                console.error(error);
            }

        },

        select(id: number): void{
            let selected: number[] = [];
            if (!this.selected.includes(id)) {
                selected = [...this.selected, id];
            } else {
                selected = this.selected.filter(x => x !== id);
            }

            this.selected = [...selected];

            console.log(this.selected);
        },

        selectAll() {
            // TODO
            console.log("Checkbox clicked");
            return 0;
        }
    },

    computed: {},

    props: {
        requestModel: {
            type: String,
            required: true
        }
    },

    components: {},

    async created() {
        this.model = this.$props.requestModel; // DO NOT MOVE

        try {
            await this.getKeys();
            await this.countRows();
            await this.getData();
        } catch (error) {
            console.error(error);
        }
    }
}
</script>
<!-- END TYPESCRIPT -->

<!-- START HTML -->
<template>
    <table class="my-8 shadow-md rounded-lg">
        <tr class="bg-blue-500 text-white hover:bg-blue-500 hover:text-white">
            <th v-if="rows <= 0" class="py-2 px-4 font-medium">&nbsp;</th>
            <th v-else class="py-2 px-4 font-medium"><input type="checkbox" name="select-all" id="select-all" @click="selectAll()"></th>
            <th class="py-2 px-4 font-medium" v-for="(header, index) in headers" :key="index">{{ header }}</th>
        </tr>
        <tr v-if="rows<=0">
            <td :colspan="cols + 1" class="text-center text-lg">{{ model.charAt(0).toUpperCase() + model.substring(1).toLowerCase() }} table is empty.</td>
        </tr>
        <tr v-else v-for="(row, index) in data" :key="index" class="odd:bg-neutral-200 even:bg-white">
            <td class="max-w-36 truncate py-2 px-4 text-center"><input type="checkbox" :name="String(index)" :id="String(index)" @click="select(row['id'])"></td>
            <td v-for="(key, index) in keys" :key="index" class="max-w-36 truncate py-2 px-4 text-center">{{ row[key] }}</td>
        </tr>
    </table>
</template>
<!-- END HTML -->

<!-- START CSS -->
<style scoped>

table tr:first-child th:first-child {
    border-top-left-radius: 0.5rem;
}

table tr:first-child th:last-child {
    border-top-right-radius: 0.5rem;
}

table tr:last-child td:first-child {

    border-bottom-left-radius: 0.5rem;
}

table tr:last-child td:last-child {
    border-bottom-right-radius: 0.5rem;
}
</style>
<!-- END CSS -->

