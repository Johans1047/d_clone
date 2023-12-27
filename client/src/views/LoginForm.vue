<!-- START TYPESCRIPT -->
<script lang="ts">

import StyledInput from '@/components/StyledInput.vue';
import PasswordInput from '@/components/PasswordInput.vue';
import StyledCheckbox from '@/components/StyledCheckbox.vue';
import StyledSubmit from '@/components/StyledSubmit.vue';
import {RouterLink} from 'vue-router';

export default {
    name: "LoginForm",

    data() {
        return {
            userEmail: "" as string,
            password: "" as string,
            rememberMe: false as boolean,
            pattern: {
                email: /"^[\w\-.]+@([\w-]+\.)+[\w-]{2,4}$"/ as RegExp,
                phone: /"^[0-9]{3,4}-[0-9]{4}$"/ as RegExp,
                password: /"^[A-Za-z][A-Za-z0-9!@#$%^&*()_+{}[\]|:;<>,.?/~`]{7,63}$"/ as RegExp,
                username: /"^[\w-]{8,16}$"/  as RegExp
            }
        }
    },

    methods: {
        handleSubmit(){
            //TODO
            return 0;
        }
    },

    computed: {},


    components: {
        StyledInput,
        PasswordInput,
        StyledCheckbox,
        StyledSubmit,
        RouterLink
    }

}
</script>
<!-- END TYPESCRIPT -->

<!-- START HTML -->
<template>
    <main class="w-scrreen min-h-screen sm:bg-blue-600 flex justify-center items-center" id="login-screen">
        <!-- CHANGE FORM ACTION -->
        <form action="/" method="post" class="bg-white flex flex-col my-4 py-4 sm:px-6 px-2 xl:w-[540px] lg:w-[480px] md:w-[420px] sm:w-[360px] w-full" id="login-form" @submit.prevent=handleSubmit>
            <h2 class="text-center text-lg sm:text-2xl font-bold my-4">Log into your account</h2>
            <StyledInput input-id="user-email" input-type="text" input-placeholder="Username/Email" v-model="userEmail" />
            <PasswordInput v-model="password" />
            <StyledCheckbox checkbox-id="remember-me" label-text="Remember me" v-model="rememberMe" />
            <StyledSubmit button-text="Log in"/>
            <span class="text-sm sm:text-base my-2">Don't have an account?   
                <RouterLink to="/users/signup"  class="text-blue-400 hover:underline">Create one</RouterLink>
            </span>
        </form>
    </main>
</template>
<!-- END HTML -->

<!-- START CSS -->
<style scoped></style>
<!-- END CSS -->