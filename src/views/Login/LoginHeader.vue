<template>
    <div class="landing-header">
        <div class="max-width">
            <span class="title" id="title">Login</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LandingHeader"
    };
</script>

<style lang="scss" scoped>
    #title {
        display: inline-block;
        margin: 140px 0 90px 0;
        text-align: left;
    }

    @media only screen and (max-width: 900px) {
        #max-width-div {
            max-width: 70%;
        }

        #title {
            margin: 80px 0 120px 0;
        }

        #display {
            display: none;
        }
    }
</style>
