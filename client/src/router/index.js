import { createRouter, createWebHistory } from "vue-router";
import home from "@/views/home";
import forgotPassword from "@/views/forgotPassword";
import dashboard from "@/views/dashboard";
import login from "@/views/login";
import signup from "@/views/signup";
import feed from "@/views/feed";
import notfound from "@/views/404";
import contact from "@/views/contact";
import issue from "@/views/issue";
import settings from "@/views/settings";

const routes = [
	{
		path: "/",
		name: "home",
		component: home,
	},
	{
		path: "/user/dashboard",
		name: "dashboard",
		component: dashboard,
	},
	{
		path: "/login",
		name: "login",
		component: login,
	},
	{
		path: "/signup",
		name: "signup",
		component: signup,
	},
	{
		path: "/contact-us",
		name: "contactUs",
		component: contact,
	},
	{
		path: "/passwordReset",
		name: "passwordReset",
		component: forgotPassword,
	},
	{
		path: "/user/feed",
		name: "feed",
		component: feed,
	},
	{
		path: "/issue",
		name: "issue",
		component: issue,
	},
	{
		path: "/settings",
		name: "settings",
		component: settings,
	},

	// catch all unregistered routes
	{
		path: "/:pathMatch(.*)*",
		name: "notfound",
		component: notfound,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
