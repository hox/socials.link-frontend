<template>
    <div class="landing-testimonies">
        <div id="testimonials-flex" class="max-width">
            <TestimoniesImage image="@/assets/IMG/" />
            <TestimoniesImage image="@/assets/IMG/" />
            <TestimoniesImage image="@/assets/IMG/" />
            <TestimoniesImage image="@/assets/IMG/" />
            <TestimoniesImage image="@/assets/IMG/" />
        </div>
    </div>
</template>

<script>
    import TestimoniesImage from "./LandingTestimonies/TestimoniesImage.vue";

    export default {
        name: "LandingTestimonies",
        components: {
            TestimoniesImage
        },
        data() {
            return {
                offSet: 0,
                testimonials: [
                    {
                        image: "url",
                        name: "name",
                        testimonial: "good"
                    },
                    {
                        image: "url",
                        name: "name",
                        testimonial: "good"
                    },
                    {
                        image: "url",
                        name: "name",
                        testimonial: "good"
                    }
                ]
            };
        }
    };
</script>

<style lang="scss" scoped>
    #testimonials-flex {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
</style>
