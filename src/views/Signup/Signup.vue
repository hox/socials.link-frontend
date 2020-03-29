<template>
    <div class="container">
        <SignupHeader></SignupHeader>
        <SignupContent></SignupContent>
    </div>
</template>

<script>
    import SignupHeader from "./SignupHeader.vue";
    import SignupContent from "./SignupContent.vue";

    export default {
        name: "Signup",
        components: {
            SignupHeader,
            SignupContent
        }
    };
</script>

<style lang="scss" scoped></style>
