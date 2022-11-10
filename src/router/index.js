import { createWebHistory, createRouter } from "vue-router";
import RhoLibrary from "@/views/RhoLibrary.vue";


const routes = [
	{
		path: "/",
		name: "rholibrary",
		component: RhoLibrary,
	},
	{
		path: "/:pathMatch(.*)*",
		name: "notfound",
		component: () => import("@/views/NotFound.vue"),
	},
];
const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});
export default router;