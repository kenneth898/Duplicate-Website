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
		path: '/nullwinbox-login',
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

export default router
