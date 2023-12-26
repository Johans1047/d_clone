<!-- START TYPESCRIPT -->
<script lang="ts">

import StyledInput from '@/components/StyledInput.vue';
import PasswordInput from '@/components/PasswordInput.vue';
import StyledCheckbox from '@/components/StyledCheckbox.vue';
import StyledSubmit from '@/components/StyledSubmit.vue';

export default {
    name: "LoginForm",

    data() {
        return {
            userEmail: "" as string,
            password: "" as string,
            rememberMe: false as boolean
        }
    },

    methods: {
        handleSubmit() {
            const userData = {
                userEmail: this.userEmail as string,
                password: this.password as string,
                rememberMe: this.rememberMe as boolean
            }

            console.log(`Username/Email: ${userData["userEmail"]}\nPassword: ${userData["password"]}\nRemember me: ${userData["rememberMe"]}`);
        }
    },

    computed: {},


    components: {
        StyledInput,
        PasswordInput,
        StyledCheckbox,
        StyledSubmit,
    }

}
</script>
<!-- END TYPESCRIPT -->

<!-- START HTML -->
<template>
    <main class="w-scrreen h-screen sm:bg-blue-600 flex justify-center items-center">
        <form action="/" method="post" class="bg-white flex flex-col py-4 sm:px-6 px-2 xl:w-[540px] lg:w-[480px] md:w-[420px] sm:w-[360px] w-full" @submit.prevent=handleSubmit>
            <h2 class="text-center text-lg sm:text-2xl font-bold my-4">Log into your account</h2>
            <StyledInput input-id="user-email" input-type="text" input-placeholder="Username/Email" v-model="userEmail" />
            <PasswordInput v-model="password" />
            <StyledCheckbox checkbox-id="remember-me" label-text="Remember me" v-model="rememberMe" />
            <StyledSubmit button-text="Log in" />
            <span class="text-sm sm:text-base my-2">Don't have an account?   
                <a href="/" class="text-blue-400 hover:underline">Create one</a>
            </span>
        </form>
    </main>
</template>
<!-- END HTML -->

<!-- START CSS -->
<style scoped></style>
<!-- END CSS -->