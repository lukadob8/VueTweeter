import Vue from "vue";
import VueRouter from "vue-router";
import SignUpPage from "../views/SignUp.vue";
import LoginPage from "../views/Login.vue";
import ProfilePage from "../views/Profile.vue";
import EditProfilePage from "../views/EditProfile.vue";
import DiscoverPage from "../views/Discover.vue";
import FeedPage from "../views/Feed.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/signup",
    name: "signup-page",
    component: SignUpPage
  },
  {
    path: "/login",
    name: "login-page",
    component: LoginPage
  },
  {
    path: "/profile",
    name: "profile-page",
    component: ProfilePage
  },
  {
    path: "/editprofile",
    name: "edit-profile",
    component: EditProfilePage
  },
  {
    path: "/discover",
    name: "discover-page",
    component: DiscoverPage
  },
  {
    path: "/feed",
    name: "feed-page",
    component: FeedPage
  }
];

const router = new VueRouter({
  routes
});

export default router;
