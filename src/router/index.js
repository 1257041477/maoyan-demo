import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";

import movie from "@/components/movie";

import cinema from "@/components/cinema";
import cinemaMovie from "@/components/cinemaMovie";
import cityList from "@/components/cityList";


import movieDetail from "@/components/movieDetail";

import shows from "@/components/shows";

import search from "@/components/search";
import login from "@/components/login";
import mine  from "@/components/mine";
import resetreq  from "@/components/resetreq";
import signup  from "@/components/signup";
import seatingPlan from "@/components/seatingPlan";
import paymentOrder from "@/components/paymentOrder";
import movieOrder from "@/components/movieOrder";
import store from "@/store/store";

Vue.use(Router);

var router = new Router({
  routes: [
    {
      path: "/",
      name: "main",
      redirect: "/movie"
    },
    {
      path: "/movie",
      name: "movie",
      component: movie
    },
    {
      path: "/cinema",
      name: "cinema",
      component: cinema
    },
    {
      path: "/cinemaMovie/:id/:name",
      name: "cinemaMovie",
      component: cinemaMovie
    },
    {
      path: "/cityList",
      name: "cityList",
      component: cityList
    },
   
    {
      path: "/movieDetail",
      name: "movieDetail",
      component: movieDetail
    },
    {
      path: "/shows/:id/:name",
      name: "shows",
      component: shows
    },
    {
      path: "/HelloWorld",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/search",
      name: "search",
      component: search
    },
    {
      path: "/login",
      name: "login",
      component: login
    },
    {
      path: "/mine",
      name: "mine",
      component: mine
    },
    {
      path: "/resetreq",
      name: "resetreq",
      component: resetreq
    },
    {
      path: "/signup",
      name: "signup",
      component: signup
    },
    {
      path: "/seatingPlan",
      name: "seatingPlan",
      component: seatingPlan
    },
    {
      path: "/paymentOrder/:id",
      name: "paymentOrder",
      component: paymentOrder
    },
    {
      path: "/movieOrder",
      name: "movieOrder",
      component: movieOrder
    }
  ]
});
router.beforeEach((to, from, next) => {
  var pageList = ["/mine"];
  var isCheckPermission = pageList.indexOf(to.path) != -1;

  // ...
  console.log("to.path = " + to.path);
  if (isCheckPermission && store.getters.getIsLogin == false) {
    console.log("禁止打开mine");

    layer.open({
      content: "您还没有登录,点击后跳转到登录页",
      btn: ["是"],
      yes: function(index) {
        router.push("/login");
        layer.close(index);
      }
    });
  } else {
    next();
  }
});

router.afterEach((to, from) => {
  // ...
});
export default router;
