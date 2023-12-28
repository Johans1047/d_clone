<!-- START TYPESCRIPT -->
<script lang="ts">
/**
 * 
 * @fileoverview A pre-styled password input with a view password button for form control
 * @module
 */
export default {
    name: "PasswordInput",

    data() {
        return {
            wrapperId: `${this.$props.inputId}-wrapper` as string,
            containerId: `${this.$props.inputId}-container` as string
        }
    },

    methods: {
        /** Adds a TalwindCSS border-color class when the function is called
         * 
         * @param {string} divId: the id of the div the function will add border color to.
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
         * @param {string} divId the id of the div the function will remove the border color from.
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

        /** Changes the input type of a password field to text to make it visible.
         * 
         */

        showPassword(): void {
            const password = document.getElementById(this.$props.inputId) as HTMLInputElement;
            password.type = (password.type == "password") ? "text" : "password";
        },
    },

    computed: {
        inputValue: {
            get(): string {
                return this.modelValue as string;
            },

            set(password: string): void {
                this.$emit("update:modelValue", password);
            }
        }
    },

    props: {
        inputId:{
            type: String,
            default: "password"
        },

        inputPlaceholder:{
            type: String,
            default: "Password"
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
        <div :id=wrapperId class="flex justify-end items-center my-4 border-b-2 border-neutral-400">
            <input type="password" name="password" :id=inputId :placeholder=inputPlaceholder class="text-base sm:text-xl py-2 px-4 flex-1 bg-transparent focus:outline-none" @focus="focus(wrapperId)" @blur="blur(wrapperId)" v-model=inputValue>
            <button type="button" @click=showPassword>
                <i class="bi bi-eye-fill text-blue-400 hover:text-blue-600 duration-150 text-2xl mr-4"></i>
            </button>
        </div>
    </div>
</template>
<!-- END HTML -->

<!-- START CSS -->
<style scoped></style>
<!-- END CSS -->