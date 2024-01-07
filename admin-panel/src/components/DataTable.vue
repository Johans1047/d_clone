<!-- START TYPESCRIPT -->
<script lang="ts">
import axios from "axios";
import type { AxiosResponse } from "axios";
import TablePaginator from "./TablePaginator.vue";
export default {
    name: "DataTable",

    data() {
        return {
            limit: 25 as number,
            model: "" as string,
            headers: [] as string[],
            data: [] as any[],
            rows: 0 as number,
            cols: 0 as number,
            keys: [] as string[],
            offset: 0 as number,
            selected: [] as number[],
            modifications: [] as Object[],
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
                    const payload: AxiosResponse = await axios.get(`http://127.0.0.1:8080/${this.model}/all/${this.limit}/${this.offset}`);
                    const data = payload.data;
                    this.data = [...data];
                    this.offset += this.limit;
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

        select(id: number): void {
            let selected: number[] = [];
            const selectAll = document.getElementById("select-all") as HTMLInputElement;

            if (!this.selected.includes(id)) {
                selected = [...this.selected, id];
            } else {
                selected = this.selected.filter(x => x !== id);
            }

            this.selected = [...selected];

            selectAll.checked = (this.selected.length == this.data.length);
            console.log(this.selected);
        },

        selectAll() {
            let selected = [];
            const pk = this.keys[0]
            if (this.selected.length < this.data.length) {
                for (let row of this.data) {
                    selected.push(row[pk]);
                    let checkbox = document.getElementById(row[pk]) as HTMLInputElement;
                    checkbox.checked = true;
                }
            } else {
                selected = []
                for (let row of this.data) {
                    let checkbox = document.getElementById(row[pk]) as HTMLInputElement;
                    checkbox.checked = false;
                }
            }

            this.selected = [...selected];
            console.log(this.selected);
            console.log(this.selected.length)

        }
    },

    computed: {},

    props: {
        requestModel: {
            type: String,
            required: true
        }
    },

    components: {
        TablePaginator,
    },

    async created() {
        this.model = this.$props.requestModel;

        try {
            await this.getKeys();
            await this.countRows();
            await this.getData();
        } catch (error) {
            console.error(error);
        }
    },

}
</script>
<!-- END TYPESCRIPT -->

<!-- START HTML -->
<template>
    <table id="data-table" class="my-8 shadow-md truncate rounded-lg">
        <!-- ///// -->

        <!-- BEGIN TABLE HEADERS -->
        <tr v-if="rows <= 0" class="bg-blue-500 text-white">
            <th class="py-2 px-5 font-medium">&nbsp;</th>
        </tr>
        <tr v-else class="bg-blue-500 text-white">
            <th class="py-2 px-5 font-medium truncate max-w-52">
                <input type="checkbox" name="select-all" id="select-all" @click="selectAll()">
            </th>
            <th class="py-2 px-5 font-medium truncate max-w-52" v-for="(header, index) in headers" :key="index" :id="String(index)">
                <span :id="header">{{ header }}</span>
            </th>
        </tr>
        <!-- END TABLE HEADERS -->

        <!-- ///// -->

        <!-- BEGIN TABLE DATA -->
        <tr v-if="rows <= 0">
            <td :colspan="cols + 1" class="text-center text-lg truncate max-w-52">{{ model.charAt(0).toUpperCase() +
                model.substring(1).toLowerCase() }} table is empty.</td>
        </tr>
        <tr v-else v-for="(row, index) in data" :key="index" class="odd:bg-neutral-200 even:bg-white truncate max-w-52">
            <td class="py-2 px-5 text-center truncate max-w-52">
                <input type="checkbox" :name="row[keys[0]]" :id="row[keys[0]]" @click="select(row[keys[0]])">
            </td>
            <td v-for="(key, index) in keys" :key="index" class="py-2 px-5 text-center truncate max-w-52">{{ row[key] }}</td>
        </tr>
        <!-- END TABLE DATA -->

        <!-- ///// -->
    </table>
    <TablePaginator :rows="rows" :limit="limit"/>
</template>
<!-- END HTML -->

<!-- START CSS -->
<style scoped>

</style>
<!-- END CSS-->


