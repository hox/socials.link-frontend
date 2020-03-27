<template>
    <div class="container">
        <LandingHeader />
        <LandingIntegration />
        <!-- <LandingTestimonies /> -->
        <LandingPlans />
        <LandingFooter />
    </div>
</template>

<script>
    import LandingHeader from "./LandingHeader.vue";
    import LandingIntegration from "./LandingIntegrations.vue";
    // import LandingTestimonies from "./LandingTestimonies.vue";
    import LandingPlans from "./LandingPlans.vue";
    import LandingFooter from "./LandingFooter.vue";

    export default {
        name: "Landing",
        components: {
            LandingHeader,
            LandingIntegration,
            // LandingTestimonies,
            LandingPlans,
            LandingFooter
        }
    };
</script>

<style lang="scss" scoped></style>
