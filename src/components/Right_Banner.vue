<template>
	<div class="Right_Banner_Container">
		<div class="RB_Imgs">
			<a :href="link_ataskasino + 'en/sign-up/'" rel="nofollow">
				<img width="100%" src="/images/ATAS-BAds.webp" class="d-block w-100 br-8 height-208"
					style="margin-bottom: 16px;" alt="188% Welcome Bonus">
			</a>
			<div
				style="padding: 8px 10px; box-shadow: 2px 4px 20px rgb(14 14 14 / 61%); border-radius: 8px; margin-bottom: 16px;">
				<div class="login-register-container">
					<a :href="link_ataskasino + 'login'" rel="nofollow"><img style="opacity: 0;" class="Join"
							src="/images/RB_Register_Btn.gif" alt="Login"></a>
					<a :href="link_ataskasino + 'en/sign-up/'" rel="nofollow"><img class="Register"
							src="/images/RB_Register_Btn.gif" alt="Register"></a>
				</div>
				<div class="RB_Info_Container" style="display: flex">
					<div class="RB_Small_Text_Container">
						<div class="Baki">
							<p>{{ $t('message.balance') }} </p>
							<p><strong>0.00</strong></p>
						</div>
						<p>{{ $t('message.Min_Deposit') }} <strong>RM1.00</strong></p>
						<p>{{ $t('message.Min_Withdrawal') }} <strong>RM20.00</strong></p>
					</div>
					<div class="RB_Cash_Btn_Container">
						<a :href="link_ataskasino + 'en/sign-up/'" rel="nofollow">
							<img class="no-br" src="/images/RB_Deposit_Btn.webp" alt="Deposit">
						</a>
						<a :href="link_ataskasino + 'en/sign-up/'" rel="nofollow">
							<img class="no-br" src="/images/RB_Withdraw_Btn.webp" alt="Withdraw">
						</a>
						<a :href="link_ataskasino + 'en/sign-up/'" rel="nofollow">
							<img class="no-br" src="/images/RB_Refresh_Btn.webp" alt="Refresh">
						</a>
					</div>
				</div>
			</div>
			<div class="Tablet-Mobile-view">
				<div style="position: relative;">
					<a :href="link_ataskasino + 'en/sign-up/'" rel="nofollow">
						<img src="/images/LB_Img_2.webp" class="no-br" alt="Share">
						<div class="button-grp" style="position: absolute; bottom: 10px;">
							<a :href="link_ataskasino + 'en/sign-up/'" rel="nofollow">
								<img class="col-6 no-br mb-1" src="/images/LB_Share_Btn.webp" alt="Share">
							</a>
							<a :href="link_ataskasino + 'en/sign-up/'" rel="nofollow">
								<img class="col-6 no-br mb-1" src="/images/LB_Downline_Btn.webp" alt="Downline">
							</a>
							<a :href="link_ataskasino + 'en/sign-up/'" rel="nofollow">
								<img class="col-6 no-br" src="/images/LB_Copy_Btn.webp" alt="Copy">
							</a>
							<a :href="link_ataskasino + 'en/sign-up/'" rel="nofollow">
								<img class="col-6 no-br" src="/images/LB_More_Btn.webp" alt="More">
							</a>
						</div>
					</a>
				</div>
				<div style="margin-top: -24px;">
					<LB_Img_Carousel />
				</div>

				<div class="RB-mobile-img-grp">
					<a href="https://t.me/atas77channel" rel="nofollow"><img src="/images/LB_Img_3.webp"
							alt="Telegram"></a>
					<a :href="link_ataskasino + 'en/sign-up/'" rel="nofollow"><img src="/images/LB_Img_4.webp"
							alt="Live Now"></a>
				</div>
			</div>

			<div class="sport-betting-container">
				<div class="SB-content-container">
					<div class="team">
						<img src="/images/team-1.webp" alt="team 1">
						<p>{{ $t('message.team_1') }}</p>
					</div>
					<div class="time-info">
						<p>{{ $t('message.start_time') }}</p>
						<p>{{ $t('message.date_info', { year: new Date().getFullYear() }) }}</p>
						<p class="time">03:00</p>
						<a :href="link_ataskasino + 'login'" rel="nofollow">
							<div class="bet-now-container">
								<p>{{ $t('message.bet_now') }}</p>
							</div>
						</a>
					</div>
					<div class="team">
						<img src="/images/team-2.webp" alt="team 2">
						<p>{{ $t('message.team_2') }}</p>
					</div>
				</div>
				<a :href="link_ataskasino + 'en/sport-live'" rel="nofollow">
					<div class="show-more-button-container">
						<p>{{ $t('message.show_more') }}</p>
					</div>
				</a>
			</div>
			<a :href="link_ataskasino + 'en/sign-up/'" rel="nofollow">
				<img width="100%" src="/images/bonus50_.webp" class="d-block w-100 br-8 height-208"
					alt="Weekly Check In Bonus">
			</a>
		</div>
	</div>
</template>

<script>
import LB_Img_Carousel from '/src/components/LB_Img_Carousel.vue';
import { mapGetters } from 'vuex';

export default {
	name: 'RightBanner',
	components: {
		LB_Img_Carousel
	},
	data() {
		return {
			status: null,
			response: [],
		}
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
.Right_Banner_Container {
	padding: 10px 15px 0px 15px;
	height: 100%;
	border-left: 1px solid rgba(255, 255, 255, .5);
}

@media screen and (min-width: 769px) {
	.Right_Banner_Container {
		background: rgba(0, 0, 0, .3);
	}
}

@media screen and (max-width: 430px) {
	.Right_Banner_Container {
		padding: 0 15px 0px 15px;
		border-left: unset;
	}

	.login-register-container {
		padding-top: 0px !important;
	}

}

.RB_Imgs img {
	max-width: 100%;
	border-radius: 8px;
}

/* .RB_Info_Container {
	background-size: 100% 100%;
	background-repeat: no-repeat;
	background-position: bottom;
} */

.RB_Cash_Btn_Container {
	width: 50%;
	text-align: right;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 5px;
}

.RB_Cash_Btn_Container img {
	margin-bottom: 5px;
	width: 200px;
}

.login-register-container {
	display: flex;
	justify-content: space-between;
	margin-bottom: 16px;
}

.login-register-container a {
	width: 50%;
}

.login-register-container img {
	border-radius: 0%;
}

.Join {
	padding-right: 5px;
}

.Register {
	padding-left: 5px;
}

.RB_Small_Text_Container {
	width: 50%;
}

.RB_Small_Text_Container p {
	color: black;
	font-size: 15px;
	font-weight: 400;
	font-family: Lato, sans-serif;
	margin-bottom: 0;
}

.RB_Small_Text_Container strong {
	font-weight: bold !important;
}

.Baki {
	display: flex;
	flex-direction: column;
	margin-bottom: 7px;
}

.Baki p {
	margin: 5px 0;
}

.Baki strong {
	color: #4da5e8;
	font-size: 24px;
}

.Tablet-Mobile-view {
	display: none;
}

@media screen and (max-width: 1000px) {
	.Tablet-Mobile-view {
		display: flex !important;
		flex-direction: column;
	}

	.RB_Cash_Btn_Container img {
		width: 80%;
		height: 100%;
	}

	.RB_Cash_Btn_Container a {
		height: 80px;
	}

	.RB_Small_Text_Container {
		justify-content: space-between;
	}

	.RB_Small_Text_Container p {
		font-size: 30px;
	}

	.Baki strong {
		font-size: 40px;
	}
}

@media screen and (max-width: 430px) {
	.RB_Small_Text_Container p {
		font-size: 14px;
	}

	.RB_Cash_Btn_Container a {
		height: 40px;
	}

	.Baki strong {
		font-size: 20px;
	}

	.button-grp a {
		width: 50% !important;
	}

	.button-grp img {
		width: 100% !important;
	}
}

.button-grp {
	margin-top: -23%;
	display: flex;
	flex-wrap: wrap;
	margin-bottom: 16px;
	padding: 0 20px;
}

@media screen and (max-width: 769px) {
	.button-grp {
		bottom: 17px !important;
	}
}

@media screen and (max-width: 430px) {
	.button-grp {
		bottom: -5px !important;
		padding: 0 10px;
	}
}

.button-grp a {
	width: 50%;
}

.button-grp img {
	width: 100%;
	padding: 0 5px;
	margin-bottom: 10px;
}

.sport-betting-container {
	background-image: url('/images/soccer-betting-img.jpg');
	/* background-position: center; */
	background-size: cover;
	padding: 20px 0 10px 0;
	margin-bottom: 16px;
	border-radius: 20px;
	box-shadow: 0 0 3px rgb(0 0 0 / 50%);
}

@media screen and (max-width: 430px) {
	.sport-betting-container {
		padding: 30px 0 10px 0 !important;
	}
}

@media screen and (max-width: 769px) {
	.sport-betting-container {
		padding: 50px 0 10px 0;
	}
}

@media screen and (min-width: 1600px) {
	.sport-betting-container {
		padding: 30px 0 10px 0;
	}
}

@media screen and (min-width: 2000px) {
	.sport-betting-container {
		padding: 40px 0 10px 0;
	}
}

.sport-betting-container a {
	text-decoration: none;
}

.SB-content-container {
	overflow: hidden;
	padding: 10px;
	box-shadow: 0 0 3px rgba(0, 0, 0, .6);
	border-radius: 5px;
	background: #fff;
	color: #000;
	font-size: 12px;
	text-align: center;
	margin: 10px;
	display: flex;
	justify-content: space-between;
}

.SB-content-container p {
	margin-bottom: 0;
}

.bet-now-container {
	display: block;
	background: #4caf50;
	color: #fff;
	padding: 8px 0;
	line-height: 1;
	width: 72px;
	text-align: center;
	border-radius: 4px;
	margin: 5px auto 0;
}

.show-more-button-container {
	background: #eee;
	color: #000;
	text-align: center;
	padding: 10px;
	border-radius: 5px;
	margin: 0 10px 10px;
	box-shadow: 0 0 3px rgb(0 0 0 / 30%);
	border: 1px solid #ccc;
	cursor: pointer;
}

.show-more-button-container p {
	font-size: 13px;
	line-height: 1;
	margin-bottom: 0;
}

.team {
	width: 30%;
}

.team img {
	margin-bottom: 10px;
}

@font-face {
	font-family: 'Digital-7';
	src: url('@/assets/fonts/digital-7.ttf') format('truetype');
}

.time {
	display: block;
	margin-top: 3px;
	font-size: 21px;
	font-weight: 700;
	color: #258D2D;
	font-family: 'Digital-7', sans-serif;
}

.no-br {
	border-radius: unset !important;
}

.RB-mobile-img-grp img {
	margin-bottom: 16px;
}
</style>