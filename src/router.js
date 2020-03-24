import Vue from "vue";
import Router from "vue-router";

import Landing from "@/pages/Landing.vue";

import Not_Found from "@/pages/Error/Not_Found.vue";
import Profile from "@/pages/Profile.vue";

let log = require("./assets/JS/logger.js");

var pingAPI = new Promise(async (resolve, reject) => {
  refreshAPIUrl();
  const reject_reason =
    "API could not get pinged. Try changing the API settings in localStorage.";
  if (window.localStorage.disable_api) {
    reject();
    log(
      "warn",
      "WARNING",
      "'disable_api' is enabled in localStorage. Please delete this from localStorage if you want to use the API."
    );
  } else {
    fetch(`http://${api_server}/ping`, {
      method: "GET",
      mode: "no-cors"
    })
      .then(res => {
        return res.text();
      })
      .then(json => {
        json
          ? resolve()
          : reject({
              reason: reject_reason
            });
      })
      .catch(() => {
        reject({
          reason: reject_reason
        });
      });
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
        fetch(
          `http://${api_server}/user?username=${to.path.slice(
            1,
            to.path.length
          )}`,
          {
            method: "GET",
            mode: "no-cors"
          }
        )
          .then(res => {
            return res.text();
          })
          .then(json => {
            json ? next() : next({ path: "/404" });
          })
          .catch(() => {
            next({ path: "/404" });
          });
      }
    }
  ],
  mode: "history"
});

function refreshAPIUrl() {
  api_server = window.localStorage.api_url || "api.socials.link";
}
