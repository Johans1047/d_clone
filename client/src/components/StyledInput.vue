<!-- START TYPESCRIPT -->
<script lang="ts">
/**
 * 
 * @fileoverview A pre-styled general-purpose input for form control
 * @module
 */
export default {
    name: "StyledInput",

    data() {
        return {
            wrapperId: `${this.$props.inputId}-wrapper` as string,
            containerId: `${this.$props.inputId}-container` as string
        }
    },

    methods: {
        /** Adds a TalwindCSS outline class to a div when the function is called.
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
        inputValue: {
            get(): string {
                return this.modelValue as string;
            },

            set(input: string): void {
                this.$emit("update:modelValue", input);
            }
        }
    },

    props: {
        inputId: {
            type: String,
            required: true
        },

        inputPlaceholder: {
            type: String,
            required: true
        },

        inputType: {
            type: String,
            required: true,
            default: "text",
            // validator(value: string): boolean{
            //     return ["text", "email", "number", "tel", "search", "url"].includes(value);
            // }
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
        <div :id="wrapperId" class="flex my-4 border-b-2 border-neutral-400">
            <input :type=inputType :name=inputId :id=inputId :placeholder=inputPlaceholder class="text-base sm:text-xl py-2 px-4 flex-1 bg-transparent focus:outline-none" @focus="focus(wrapperId)" @blur="blur(wrapperId)" v-model=inputValue>
        </div>
    </div>
</template>
<!-- END HTML -->

<!-- START CSS -->
<style scoped></style>
<!-- END CSS -->
