<template>
	<div class="footer-menu">
		<div class="relative" style="width: 100%;">
			<div class="social-media-container">
				<a v-if="link_ataskasino" :href="link_ataskasino + 'en/sign-up/'" rel="nofollow"><img
						src="/images/Save_Link_Img.webp" alt="Save Link"></a>
				<a href="https://t.me/atas77channel" rel="nofollow"><img src="/images/Subscribe_Us_Img.webp"
						alt="Subscribe Us"></a>
			</div>

			<div class="footer-content">
				<div class="d-f col">
					<a v-if="link_ataskasino" :href="link_ataskasino" rel="nofollow">
						<img src="/images/Btm_Home_Img.webp" alt="Home">
					</a>
				</div>
				<div class="d-f col">
					<a v-if="link_ataskasino" :href="link_ataskasino + 'en/sign-up/'" rel="nofollow">
						<img src="/images/Btm_History_Img.webp" alt="History">
					</a>
				</div>
				<div class="d-f col">
					<a v-if="link_ataskasino" :href="link_ataskasino + 'en/sign-up/'" rel="nofollow">
						<img src="/images/Btm_Promo_Img.webp" alt="Promo">
					</a>
				</div>
				<div class="d-f col">
					<a v-if="link_ataskasino" :href="link_ataskasino + 'en/sign-up/'" rel="nofollow">
						<img src="/images/Btm_Chat_Img.gif" alt="Live Chat">
					</a>
				</div>
				<div class="d-f col">
					<a v-if="link_ataskasino" :href="link_ataskasino + 'en/sign-up/'" rel="nofollow">
						<img src="/images/Btm_Setting_Img.webp" alt="Setting">
					</a>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	name: 'FooterMenu',
	data() {
		return {
			isVisible: true, // Set this to control visibility
			status: null,
			response: [],
		};
	},
	computed: {
		...mapGetters(['link_ataskasino', 'error']),
	},
	mounted() {
		this.$store.dispatch('fetchLink_ataskasino');
	}
};
</script>

<style scoped>
.footer-menu {
	display: flex;
	justify-content: space-between;
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 75px;
	background-image: url('/images/IJaya_TB_Bg_Img.webp');
	background-size: cover;
	background-position: 0px 47%;
}

.relative {
	position: relative;
	z-index: 1;
}

.social-media-container {
	display: flex;
	flex-direction: column;
	position: absolute;
	top: -350%;
	right: 0px;
}

.social-media-container img {
	width: 25px;
	height: 110px;
	height: auto;
	margin-bottom: 5px;
}

.footer-content {
	display: flex;
	justify-content: space-around;
	align-items: center;
	height: 100%;
	box-shadow: 0 -1px 5px rgba(0, 0, 0, 1);
}

.d-f {
	display: flex;
	justify-content: center;
}

.col {
	flex: 1;
	text-align: center;
}

.col img {
	width: 80px;
	height: auto;
}

@media screen and (max-width: 430px) {
	.col img {
		width: 70px;
	}
}

@media screen and (max-width: 321px) {
	.col img {
		width: 60px;
	}
}

.social-media-icon img {
	width: 20px;
	height: 108px;
}

.Btm-Popup_Container {
	position: absolute;
	bottom: 55px;
	padding-top: 30px;
}

.Btm-Popup_Container img {
	width: 500px;
}

@media screen and (max-width: 430px) {
	.Btm-Popup_Container img {
		width: 100%;
	}
}

.ic-close-circle {
	display: flex;
	justify-content: center;
	border: 2px solid #fff;
	border-radius: 100%;
	padding: 4px;
	width: 28px;
	height: 28px;
	position: absolute;
	top: 0;
	right: 0;
	cursor: pointer;
}

.fa-times::before {
	color: white;
}
</style>
