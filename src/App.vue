<template>
  <div id="app">
    <div class="navbarcontainer">
        <div class="navbar">
            <div class="navbar-left">
                <a href="/" id="navbar-title">socials.link</a>
                <img src="./assets/IMG/standard_logo.png" id="logo" />
            </div>
            <div class="navbar-right">
                <a href="/#about" class="navbar-content-button">About Us</a>
                <a href="/#features" class="navbar-content-button">Features</a>
                <span class="vl" />
                <!-- <a
                    href="/register"
                    :class="{
                    'navbar-link-active': window.location.pathname == '/register',
                    'navbar-content-button': true
                    }"
                    >Register</a
                >-->
                <a
                    href="/login"
                    :class="{
                    //'navbar-link-active': window.location.pathname == '/login',
                    'navbar-content-button': true
                    }"
                >Login</a>
            </div>
        </div>
    </div>
    <router-view />
    <div class="footer" id="footer" style="order:3;"></div>
  </div>
</template>

<script>
// import utils from "./assets/JS/main.js";
import log from "./assets/JS/logger.js";

log("log", "Route", window.location.pathname);

export default {
  name: "App",
  data() {
    return {
      window: window
    };
  },
  created() {
    /*window.addEventListener("load", () => {
      if (document.body.scrollHeight < window.innerHeight)
        document.getElementById("footer").classList = "footer-fixed footer";
      else
        document.getElementById("footer").classList = "footer-relative footer";
    });*/
  }
};
</script>

<style lang="scss">
@import "./assets/SCSS/root.scss";
</style>
