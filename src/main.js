// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Vuelidate from "vuelidate";

Vue.prototype.$axios = axios.create({});

const jwt = JSON.parse(localStorage.getItem("jwt")) || "";
const API_URL = "http://resell.walknow.xyz/api/";

Vue.prototype.API_URL = API_URL;
Vue.prototype.jwt = jwt;

Vue.use(Vuelidate);
Vue.config.productionTip = false;
/* eslint-disable no-new */
router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    if (!jwt) {
      next("login");
    } else {
      next();
    }
  }
  next();
});

new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
