<!-- START JAVACRIPT -->
<script lang="js">

export default {

    name: "LoginForm",
    data() {
        return {}
    },

    components: {},

    methods: {
        viewPassword() {
            const password = this.$refs.password;
            password.type = (password.type == "password") ? "text" : "password";
        },
        clickCheckbox() {
            const rememberMe = this.$refs.rememberMe;

            const checkedBox = this.$refs.checkedBox;

            rememberMe.checked = !rememberMe.checked;

            if(checkedBox.classList.contains("hidden")) checkedBox.classList.remove("hidden");
            else checkedBox.classList.add("hidden");

        },


        focusDiv(divId) {
            const div= document.getElementById(divId);

            div.classList.add("outline")
            div.classList.add("outline-blue-200");

        },

        blurDiv(divId) {
            const div= document.getElementById(divId);

            div.classList.remove("outline")
            div.classList.remove("outline-blue-200");

        },

    }
}
</script>
<!-- END JAVASCRIPT -->

<!-- START HTML -->
<template>
    <form method="post" action="#" class="p-6 w-full sm:w-9/10 md:w-6/10 lg:w-9/20 xl:w-4/10 2xl:w-3/10 bg-white sm:bg-neutral-100 sm:border sm:border-neutral-300 sm:rounded">
        <h2 class="text-2xl text-center font-bold m-4">Log in</h2>
        <hr>
        <div class="input-group my-4 flex flex-col">
            <label for="user-email" class="text-lg my-2">Username or email</label>
            <div class="bg-white border border-neutral-400 sm:border-none text-lg p-2 my-2" id="user-email-input-container">
                <input type="text" name="user-email" id="user-email" class="bg-transparent focus:outline-none" @focus="()=> focusDiv('user-email-input-container')" @blur="()=> blurDiv('user-email-input-container')">
            </div>     
        </div>
        <div class="input-group my-4 flex flex-col">
            <label for="password" class="text-lg my-2">Password</label>
            <div ref="passwordContainer" id="password-input-container" class="flex items-center border border-neutral-400 sm:border-none bg-white text-lg p-2 my-2">
                <input ref="password" type="password" autocomplete="off" name="password" id="password"
                    class="bg-transparent focus:outline-none flex-1" @focus="()=> focusDiv('password-input-container')" @blur="()=> blurDiv('password-input-container')">
                <button @click="viewPassword" type="button" class="mx-2">
                    <i class="bi bi-eye text-xl text-blue-400 hover:text-blue-600 duration-150"></i>
                </button>
            </div>
        </div>
        <div class="input-group my-4 flex items-center">
            <div @click="clickCheckbox"
                class="flex justify-center items-center mr-2 bg-white h-4 w-4 border border-black hover:outline hover:outline-2 hover:outline-blue-200 hover:border-blue-400" id="checkbox-container">
                <input ref="rememberMe" type="checkbox" name="remember-me" id="remember-me" class="w-full h-full hidden">
                <div ref="checkedBox" id="checked-box" class="w-full h-full border-2 border-white bg-blue-400 hidden"></div>
            </div>
            <label for="remember-me" class="text-lg ml-2">Remember me</label>
        </div>
        <div class="input-group mt-8 mb-4 flex flex-col">
            <input type="submit" value="Log into your account"
                class="py-2 bg-blue-400 text-white text-center text-lg hover:bg-blue-600 duration-150">
        </div>
        <div class="link-group mb-4 flex items-center">
            <p class="text-lg">
            First time in our app?
            <a href="" class="text-blue-400 hover:underline">Register.</a>
        </p>
        </div>
    </form>
</template>
<!-- END HTML -->

<!-- START CSS -->
<style scoped></style>
<!-- END CSS -->