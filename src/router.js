import Vue from "vue";
import Router from "vue-router";

import Landing from "@/views/Landing/Landing.vue";
import Not_Found from "@/views/Error/NotFound.vue";
import Login from "@/views/Login/Login.vue";

// let log = require("./assets/JS/logger.js");

// const pingAPI = new Promise((resolve, reject) => {
//     refreshAPIUrl();
//     // const reject_reason = "API could not get pinged. Try changing the API settings in localStorage.";
//     if (window.localStorage.disable_api) {
//         reject();
//         log(
//             "warn",
//             "WARNING",
//             "'disable_api' is enabled in localStorage. Please delete this from localStorage if you want to use the API."
//         );
//     } else {
//         fetch(`${api_server}/ping`, {
//             method: "GET",
//             mode: "cors",
//         })
//             .then((res) => {
//                 console.log(res);
//                 return res.json();
//             })
//             .then((json) => {
//                 console.log("a");
//                 console.log(json);
//                 // reject({
//                 //     reason: reject_reason
//                 //   });
//             })
//             .catch(() => {
//                 // reject({
//                 //   reason: reject_reason
//                 // });
//             });
//     }
// });
//
// let api_server = window.localStorage.api_url;
// pingAPI
//     .then(() => {
//         log(
//             "log",
//             "API Found",
//             `Ping request to API (${api_server}) successful.`
//         );
//     })
//     .catch((err) => {
//         err ? log("err", "ERROR", err.reason) : null;
//     });
//
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Landing
        },
        {
            path: "/login",
            name: "login",
            component: Login
        },
        {
            path: "/404",
            name: "404",
            component: Not_Found
        }
    ],
    mode: "history"
});

// function refreshAPIUrl() {
//     api_server = window.localStorage.api_url || "http://localhost:8086";
// }
