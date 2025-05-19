import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/homepage.vue';
import NotFound from '@/views/404.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: HomePage
	},
	{
		path: '/nulllogin',
		redirect: '/'
	},
	{
		path: '/nullen/sign-up',
		redirect: '/'
	},

	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: NotFound
	}
	// Add more routes here
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

router.beforeEach((to, from, next) => {
	const permanentRedirects = ['/nulllogin', '/nullen/sign-up'];
	if (permanentRedirects.includes(to.path)) {
		window.location.replace('/');
		return;
	}
	next();
});

export default router