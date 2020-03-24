import Vue from "vue";
import Router from "vue-router";

import Landing from "@/pages/Landing.vue";

import Not_Found from "@/pages/Error/Not_Found.vue";
import Profile from "@/pages/Profile.vue";

let log = require("./assets/JS/logger.js");

var pingAPI = new Promise((resolve, reject) => {
  refreshAPIUrl();
  if (window.localStorage.disable_api) {
    reject();
    log(
      "warn",
      "WARNING",
      "'disable_api' is enabled in localStorage. Please delete this from localStorage if you want to use the API."
    );
  } else {
    let request = new XMLHttpRequest();
    request.open("GET", `http://${api_server}/ping`, false);
    request.send(null);

    if (request.status == 200) {
      resolve();
    } else {
      reject({
        reason:
          "API Could not get pinged. Try changing the API settings in localStorage."
      });
    }
  }
});

let api_server = window.localStorage.api_url;
pingAPI
  .then(() => {
    log("log", "API Found", `Ping request to API (${api_server}) successful.`);
  })
  .catch(err => {
    err ? log("err", "ERROR", err.reason) : null;
  });

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Landing
    },
    {
      path: "/404",
      name: "404",
      component: Not_Found
    },
    {
      path: "/:username",
      name: "User",
      component: Profile,
      beforeEnter: (to, from, next) => {
        refreshAPIUrl();
        let request = new XMLHttpRequest();
        request.open(
          "GET",
          `http://${api_server}/user?username=` +
            to.path.slice(1, to.path.length),
          false
        );
        request.send(null);

        if (request.status == 200) {
          next();
        } else {
          next({ path: "/404" });
        }
      }
    }
  ],
  mode: "history"
});

function refreshAPIUrl() {
  api_server = window.localStorage.api_url || "api.socials.link";
}
