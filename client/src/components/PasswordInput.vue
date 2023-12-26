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
        return {}
    },

    methods: {
        /** Adds a TalwindCSS border-color class when the function is called
         * 
         * @param {string} divId: the id of the div the function will add an outline to.
         * @returns {void | false}: Void if the operation is successful, or False if the div already has the border class. 
         */
        focus(divId: string): void | false {
            const div = document.getElementById(divId) as HTMLDivElement;

            if (!div.classList.contains("border-b-blue-400")) {
                div.classList.remove("border-b-blue-400");
                div.classList.add("border-neutral-400");
                return;
            } else {
                return false;
            }

        },

        /** Removes a TalwindCSS border-color class when the function is called
         * 
         * @param {string} divId: the id of the div the function will remove an outline from.
         * @return {void | false}: Void if the operation is successful, or False if the div does not contain the border class. 
         */
        blur(divId: string): void | false {
            const div = document.getElementById(divId) as HTMLDivElement;

            if (div.classList.contains("border-b-neutral-400")) {
                div.classList.remove("border-b-neutral-400");
                div.classList.add("border-b-blue-400");
                return;
            } else {
                return false;
            }
        },

        /** Changes the input type of a password field to text to make it visible.
         * 
         */

        showPassword(): void {
            const password = this.$refs.password as HTMLInputElement;
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
        modelValue: {}
    },

    components: {}

}
</script>
<!-- END TYPESCRIPT -->

<!-- START HTML -->
<template>
    <div id="password-container">
        <div id="password-wrapper" class="flex justify-end items-center my-4 border-b-2 border-neutral-400">
            <input ref="password" type="password" name="password" id="password" placeholder="Password" class="text-base sm:text-xl py-2 px-4 flex-1 bg-transparent focus:outline-none" @focus="focus('password-wrapper')" @blur="blur('password-wrapper')" v-model=inputValue>
            <button @click=showPassword>
                <i class="bi bi-eye-fill text-blue-400 hover:text-blue-600 duration-150 text-2xl mx-2"></i>
            </button>
        </div>
    </div>
</template>
<!-- END HTML -->

<!-- START CSS -->
<style scoped></style>
<!-- END CSS -->