<template>
    <div class="app">
        <div id="navbar" class="navbar-unlock">
            <div id="navbar-logo">
                <a href="/" id="desktop-logo">socials.link</a>
                <img src="@/assets/IMG/standard_logo.png" id="mobile-logo" alt="logo" />
            </div>
            <div id="navbar-links-parent">
                <a href="/#plans" class="navbar-link">Plans</a>
                <a href="/#features" class="navbar-link">Features</a>
                <a href="/login" id="navbar-space" class="navbar-link">Login</a>
                <a href="/signup" class="navbar-link">Signup</a>
            </div>
        </div>
        <router-view />
    </div>
</template>

<script>
    // import utils from "./assets/JS/main.js";
    import log from "./JS/logger.js";
    import AOS from "aos";

    log("log", "Route", window.location.pathname);

    export default {
        name: "App",
        created() {
            AOS.init();
            window.addEventListener("scroll", () => {
                //Remove or add the navbar-unlock and navbar-lock class depending on the scroll position
                if (window.scrollY) {
                    document.getElementById("navbar").classList.remove("navbar-unlock");
                    document.getElementById("navbar").classList.add("navbar-lock");
                } else {
                    document.getElementById("navbar").classList.add("navbar-unlock");
                    document.getElementById("navbar").classList.remove("navbar-lock");
                }

                //The ScrollY range where the parallax animation occurs
                const range = 1000;
                //The maximum the wave moves relative to the % of the parent div
                const maxAdjustment = 7;
                let adjustment;
                if (window.scrollY > range) {
                    adjustment = maxAdjustment;
                } else {
                    adjustment = window.scrollY / (range / maxAdjustment);
                }
                document.getElementById("curve").style.marginTop = `${-33 - adjustment}%`;
            });
        },
        destroyed() {
            window.removeEventListener("scroll", () => {});
        }
    };
</script>

<style lang="scss">
    body {
        margin: 0;
        letter-spacing: 0;
        scroll-behavior: smooth;
        text-rendering: optimizeLegibility;
    }

    #navbar {
        position: fixed;
        width: 70%;
        padding: 15px 0 15px;
        left: 50%;
        transform: translateX(-50%);
        transition: 300ms;
        z-index: 1;
    }

    .navbar-unlock {
        background: #ffffff;
        margin-top: 10px;
    }

    .navbar-lock {
        margin-top: 0;
        background: $lightgray;
        border-radius: 0 0 5px 5px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    }

    #desktop-logo {
        font-family: $title-font;
        font-weight: 800;
        color: $text;
        text-decoration: none;
    }

    #mobile-logo {
        display: none;
    }

    #navbar-logo {
        float: left;
        padding-left: 15px;
    }

    #navbar-links-parent {
        float: right;
        padding-right: 15px;
    }

    #navbar-space {
        margin-left: 40px;
    }

    .navbar-link {
        font-family: $title-font;
        font-weight: 400;
        color: $text;
        text-decoration: none;
        margin-left: 20px;
        position: relative;
    }

    /*Text shadow color matches the color of the background (white)*/

    .navbar-unlock {
        .navbar-link {
            text-shadow: -1px 1px white, -1px -1px white, 1px -1px white, 1px 1px white;
        }
    }

    /*Text shadow color matches the color of the background ($lightgray)*/
    .navbar-lock {
        .navbar-link {
            text-shadow: -1px 1px $lightgray, -1px -1px $lightgray, 1px -1px $lightgray, 1px 1px $lightgray;
        }
    }
    .navbar-link::before {
        content: "";
        position: absolute;
        bottom: 1px;
        height: 1px;
        width: 0;
        transition: width 400ms cubic-bezier(0.2, 0.8, 0.8, 0.9);
        background-color: black;
        z-index: -1;
    }

    .navbar-link:hover::before {
        width: 100%;
    }
</style>
