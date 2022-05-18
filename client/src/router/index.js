import { createRouter, createWebHistory } from "vue-router";
import home from "@/views/home";
import forgotPassword from "@/views/forgotPassword";
import dashboard from "@/views/dashboard";
import login from "@/views/login";
import signup from "@/views/signup";
import feed from "@/views/feed";
import stream from '@/views/stream'

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
		path: "/user/feed/stream",
		name: "stream",
		component: stream,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
