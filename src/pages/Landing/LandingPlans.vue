<template>
    <div class="landing-plans max-width">
        <!--For anchor link-->
        <span id="plans" />
        <!--        -->
        <h1 class="title" id="title">Made for Everyone</h1>
        <div id="plans-flex">
            <div class="plans" id="teams">
                <div class="plans-spacing">
                    <div class="plan-name">
                        <span class="plan-title white">Teams</span><br /><span class="plan-price white"
                            >$5 / Month</span
                        >
                    </div>
                    <PlansFeatures color="white" text-color="white" v-bind:features="defaultFeatures" />
                    <PlansFeatures
                        color="green"
                        id="team-features"
                        text-color="green"
                        v-bind:features="teamsFeatures"
                    />
                </div>
            </div>
            <div class="plans" id="individual">
                <div class="plans-spacing">
                    <div class="plan-name">
                        <span class="plan-title">Individual</span><br /><span class="plan-price">Free</span>
                    </div>
                    <PlansFeatures
                        color="black"
                        id="free-features"
                        text-color="black"
                        v-bind:features="defaultFeatures"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import PlansFeatures from "./LandingPlans/PlansFeatures.vue";

    export default {
        name: "LandingPlans",
        components: {
            PlansFeatures
        },
        data: () => {
            return {
                defaultFeatures: [
                    "Unlimited Connections",
                    "Pinned Connections",
                    "Thumbnails",
                    "Custom Icons",
                    "Customizable Themes"
                ],
                teamsFeatures: ["Custom Branding", "Custom Meta Data", "Multi-user Access"]
            };
        }
    };
</script>

<style lang="scss" scoped>
    #plans {
        display: block;
        position: relative;
        top: -100px;
        visibility: hidden;
    }

    #title {
        margin: 80px 0 60px 0;
        text-align: left;
    }

    #plans-flex {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
    }

    .plans {
        width: 26vw;
        border-radius: 15px;
    }

    .plans-spacing {
        margin: 40px;
    }

    .plan-name {
        margin: 0 0 25px 0;
    }

    .plan-title {
        font-size: 50px;
        font-weight: 800;
        font-family: $title-font;
        margin: 0;
    }

    #teams {
        background: #000;
    }

    #individual {
        background: #efefef;
    }
    .white {
        color: #fff;
    }

    .plan-price {
        font-size: 25px;
        font-weight: 400;
        font-family: $title-font;
        margin: 0;
    }

    @media (max-width: 1200px) {
        #plans-flex {
            flex-direction: column;
        }

        .plans {
            width: 100%;
        }

        #teams {
            margin: 0 0 30px 0;
        }

        .plan-title {
            font-size: 40px;
        }

        .plan-price {
            font-size: 15px;
        }
    }
</style>
