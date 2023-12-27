<!-- START TYPESCRIPT -->
<script lang="ts">
import StyledInput from '@/components/StyledInput.vue';
import PasswordInput from '@/components/PasswordInput.vue';
import DateInput from '@/components/DateInput.vue';
import StyledCheckbox from '@/components/StyledCheckbox.vue';
import StyledSubmit from '@/components/StyledSubmit.vue';
import { RouterLink } from 'vue-router'
export default {
    name: "SignupForm",

    data() {
        return {
            email: "" as string,
            username: "" as string,
            password: "" as string,
            repeatPassword: "" as string,
            birthdate: "" as string,
            newsletter: false as boolean
        }
    },

    methods: {},

    computed: {},

    props: {},

    components: {
        StyledInput,
        PasswordInput,
        DateInput,
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
        <form action="/" method="post" class="bg-white flex flex-col my-4 py-4 sm:px-6 px-2 xl:w-[540px] lg:w-[480px] md:w-[420px] sm:w-[360px] w-full" id="login-form">
            <h2 class="text-center text-lg sm:text-2xl font-bold my-4">Create an account</h2>
            <StyledInput input-id="email" input-type="email" input-placeholder="Email" v-model="email" />
            <StyledInput input-id="username" input-type="text" input-placeholder="Username" v-model="username" />
            <PasswordInput v-model="password"/>
            <PasswordInput input-id="repeat-password" input-placeholder="Repeat password" v-model="repeatPassword"/>
            <DateInput input-id="birthdate" v-model="birthdate"/>
            <StyledCheckbox checkbox-id="newsletter" label-text="Sign me up for the Whisper newsletter" v-model="newsletter"/>
            <StyledSubmit button-text="Create my account"/>
            <span class="text-sm sm:text-base my-2">Already have an account?   
                <RouterLink to="/users/login"  class="text-blue-400 hover:underline">Log in</RouterLink>
            </span>
        </form>
    </main>
</template>
<!-- END HTML -->

<!-- START CSS -->
<style scoped></style>
<!-- END CSS -->