<template>
    <div class="landing-footer">
        <div class="max-width">
            <div id="logo-flex">
                <div id="footer-column-flex">
                    <div class="footer-column">
                        <span class="header">
                            Service
                        </span>
                        <a href="#" class="header-petite">About Us</a>
                        <a href="#" class="header-petite">Jobs</a>
                    </div>
                    <div class="footer-column">
                        <span class="header">
                            Resources
                        </span>
                        <a href="#" class="header-petite">Terms & Conditions</a>
                        <a href="#" class="header-petite">Privacy Policy</a>
                        <a href="#" class="header-petite">Status</a>
                        <a href="#" class="header-petite">Branding</a>
                    </div>
                </div>
                <a href="#">
                    <img src="@/assets/IMG/standard_logo.png" id="logo" alt="logo" />
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LandingFooter"
    };
</script>

<style lang="scss" scoped>
    .landing-footer {
        width: 100%;
        background: $lightgray;
        margin: 150px 0 0 0;
    }

    .footer-column {
        text-align: left;
        width: 40%;
    }

    #logo-flex {
        display: flex;
        flex-direction: row;
        padding: 50px 0;
    }

    #footer-column-flex {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        width: 100%;
    }

    a {
        text-decoration: none;
        transition: 50ms;
        color: $grey;
        display: block;
    }

    a:hover {
        color: $darkgray;
    }

    #logo {
        height: 35px;
        width: auto;
    }
</style>
