<template>
    <div class="container">
        <LoginHeader></LoginHeader>
        <LoginContent></LoginContent>
    </div>
</template>

<script>
    import LoginHeader from "./LoginHeader.vue";
    import LoginContent from "./LoginContent.vue";

    export default {
        name: "Login",
        components: {
            LoginHeader,
            LoginContent
        }
    };
</script>

<style lang="scss" scoped></style>
