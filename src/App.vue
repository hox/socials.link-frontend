<template>
  <div id="app">
    <div class="navbar">
      <div class="desktop">
        <div class="navbar-left">
          <a href="/" id="navbar-title">socials.link</a>
        </div>
        <div class="navbar-right">
          <a
            href="/about"
            :class="{'navbar-link-active': (window.location.pathname == '/about'), 'navbar-content-button': true}"
          >About Us</a>
          <a
            href="/terms"
            :class="{'navbar-link-active': (window.location.pathname == '/terms'), 'navbar-content-button': true}"
          >Terms / Privacy Policy</a>
          <span class="vl" />
          <a
            href="/register"
            :class="{'navbar-link-active': (window.location.pathname == '/register'), 'navbar-content-button': true}"
          >Register</a>
          <a
            href="/login"
            :class="{'navbar-link-active': (window.location.pathname == '/login'), 'navbar-content-button': true}"
          >Login</a>
        </div>
      </div>
      <div class="mobile"></div>
    </div>
    <router-view />
    <div class="footer" id="footer"></div>
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
