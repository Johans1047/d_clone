<!-- START TYPESCRIPT -->
<script lang="ts">

export default {
    name: "DateInput",

    data() {
        return {
            containerId: `${this.$props.inputId}-container` as string,
            wrapperId: `${this.$props.inputId}-wrapper` as string,
            yearId: `${this.$props.inputId}-year` as string,
            monthId: `${this.$props.inputId}-month` as string,
            dayId: `${this.$props.inputId}-day` as string,
        }
    },

    methods: {
                /** Adds a TalwindCSS border-color class when the function is called
         * 
         * @param {string} divId: the id of the div the function will add an outline to.
         */
         focus(divId: string): void | boolean {
            const div = document.getElementById(divId) as HTMLDivElement;

            if (!div.classList.contains("border-b-blue-400")) {
                div.classList.add("border-b-blue-400");
                return;
            } else {
                return false;
            }

        },

        /** Removes a TalwindCSS border-color class when the function is called
         * 
         * @param divId the id of the div the function will remove an outline from.
         */
        blur(divId: string): void | boolean {
            const div = document.getElementById(divId) as HTMLDivElement;

            if (div.classList.contains("border-b-blue-400")) {
                div.classList.remove("border-b-blue-400")
                return;
            } else {
                return false;
            }
        },
    },

    computed: {
        dateValue: {
            get(): string{
                return this.modelValue as string; 
            },
            set(date: string): void{
                this.$emit("update:modelValue", date);
            }
        }
    },

    props: {
        inputId: {
            type: String,
            required: true
        },
        modelValue: {}
    },

    components: {}

}
</script>
<!-- END TYPESCRIPT -->

<!-- START HTML -->
<template>
    <div :id=containerId>
        <div :id=wrapperId class="flex my-4 border-b-2 border-neutral-400">
            <input type="date" required placeholder="Date of birth" :name=inputId :id=inputId class="text-base sm:text-xl py-2 px-4 flex-1 bg-transparent focus:outline-none" @focus="focus(wrapperId)" @blur="blur(wrapperId)" v-model=dateValue>
        </div>
    </div>
</template>
<!-- END HTML -->

<!-- START CSS -->
<style scoped>
input[type="date"]::before {
    color: #999999;
    content: attr(placeholder) !important;
}

input[type="date"]:focus::before {
    content: "" !important;
}

input[type=date]:required:valid::before{
    content: "" !important;
}

input[type=date]:required:invalid::-webkit-datetime-edit {
    color: transparent;
}

input[type=date]:focus::-webkit-datetime-edit {
    color: #999 !important;
}

input[type="date"]::-webkit-calendar-picker-indicator {
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="%2360A5FA"  viewBox="0 0 16 16"><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/></svg>');
}

input[type="date"]::-webkit-calendar-picker-indicator:hover {
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="%232563EB"  viewBox="0 0 16 16"><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/></svg>');
}
</style>
<!-- END CSS -->

