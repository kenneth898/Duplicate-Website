<template>
	<div id="app">
		<router-view></router-view>
	</div>
	<div>
		<FooterMenu />
	</div>
</template>

<script>
import FooterMenu from '/src/components/Btm_Menu.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

export default {
	components: {
		FooterMenu,
	},
	name: 'App',
	mounted() {
		this.checkRedirect();
	},
	methods: {
		checkRedirect() {
			const permanentRedirects = ['/nullen/sign-up/'];
			if (permanentRedirects.includes(window.location.pathname)) {
				this.isRedirecting = true;
				window.location.replace('/');
			}
		}
	}
}
</script>

<style scoped>
#app {
	display: flex;
	flex-direction: column;
}
</style>
