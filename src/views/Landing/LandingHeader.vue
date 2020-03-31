<template>
    <div class="landing-header">
        <div class="max-width">
            <span class="title-grand" id="title">Welcome to Your <br />Online Identity</span>
            <span class="text-grand" id="sub-title">All Your Socials in One</span>
            <img id="display" src="@/assets/IMG/macos.png" alt="Dashboard Visual" />
        </div>
        <div id="curve"></div>
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
        margin: 140px 0 0 0;
        text-align: left;
    }

    #sub-title {
        display: inline-block;
        margin: 0 0 90px 0;
    }

    #display {
        width: 100%;
        border-radius: 15px;
        box-shadow: 0 0 30px -4px rgba(0, 0, 0, 0.75);
        position: relative;
        z-index: -2;
    }

    #curve {
        background: url(../../assets/IMG/curve.svg);
        background-size: cover;
        height: 1200px;
        width: 100%;
        position: absolute;
        margin-top: -33%;
        transition: margin-top 100ms;
        z-index: -1;
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
