<template>
    <div class="image">
        <img src="@/assets/IMG/elon.jpg" />
    </div>
</template>

<script>
    export default {
        name: "TestimoniesImage",
        props: {
            image: {
                type: String,
                required: true
            }
        }
    };
</script>

<style lang="scss" scoped>
    .image {
        width: 220px;
    }

    img {
        width: 100%;
        height: 100%;
        border-radius: 20px;
    }
</style>
u
