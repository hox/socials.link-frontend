<template>
    <div class="landing-integrations">
        <!--For anchor link-->
        <span id="integrations" />
        <!--        -->
        <div class="max-width">
            <div class="title-grand" id="title">Easily Link to<br />Dozens of Providers</div>
            <div class="integrations-flex">
                <img
                    class="logo"
                    data-aos="fade-up"
                    data-aos-delay="50"
                    src="@/assets/Logos/TikTok.png"
                    alt="TikTok logo"
                />
                <img
                    class="logo"
                    data-aos="fade-up"
                    data-aos-delay="100"
                    src="@/assets/Logos/YouTube.png"
                    alt="YouTube logo"
                />
                <img
                    class="logo"
                    data-aos="fade-up"
                    data-aos-delay="150"
                    src="@/assets/Logos/Instagram.png"
                    alt="Instagram logo"
                />
                <img
                    class="logo"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    src="@/assets/Logos/Twitter.svg"
                    alt="Twitter logo"
                />
                <img
                    class="logo"
                    data-aos="fade-up"
                    data-aos-delay="250"
                    src="@/assets/Logos/Twitch.svg"
                    alt="Twitch logo"
                />
            </div>
            <div class="integrations-flex">
                <img
                    class="logo"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    src="@/assets/Logos/Discord.svg"
                    alt="Discord logo"
                />
                <img
                    class="logo"
                    data-aos="fade-up"
                    data-aos-delay="350"
                    src="@/assets/Logos/Facebook.png"
                    alt="Facebook logo"
                />
                <img
                    class="logo"
                    data-aos="fade-up"
                    data-aos-delay="400"
                    src="@/assets/Logos/Patreon.png"
                    alt="Patreon logo"
                />
                <img
                    class="logo"
                    data-aos="fade-up"
                    data-aos-delay="450"
                    src="@/assets/Logos/Spotify.png"
                    alt="Spotify logo"
                />
                <img
                    class="logo"
                    data-aos="fade-up"
                    data-aos-delay="500"
                    src="@/assets/Logos/GitHub.png"
                    alt="GitHub logo"
                />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LandingIntegrations"
    };
</script>

<style lang="scss" scoped>
    #max-width-div {
        max-width: 60%;
        margin: auto;
    }

    #title {
        text-align: right;
        margin: 0 0 110px 0;
    }

    .integrations-flex {
        display: flex;
        justify-content: space-around;
        width: 100%;
        height: 150px;
        margin-top: 5px;
    }

    .logo {
        height: 60px;
        width: auto;
    }

    @media (max-width: 900px) {
        #title {
            margin-top: 40px;
        }

        .integrations-flex {
            height: 75px;
        }

        .logo {
            height: 30px;
        }
    }
</style>
