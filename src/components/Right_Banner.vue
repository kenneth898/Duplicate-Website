<template>
	<div class="Right_Banner_Container">
		<div class="RB_Imgs">

			<div class="Mobile_View" style="display: none;">
				<RB_Img_Carousel />
				<a :href="output_Link + 'winbox-rigester'" rel="nofollow"><img style="margin-bottom: 16px;"
						src="/images/Spin_bonus.gif" alt="Spin Bonus"></a>
				<table>
					<thead>
						<tr>
							<td colspan="5" class="title">
								<span>
									LIVE TRANSACTION
								</span>
								<div class="live main-blink-me">
									LIVE
									<span></span>
								</div>
							</td>
						</tr>
						<tr>
							<td colspan="2" class="green">
								DEPOSIT
							</td>
							<td colspan="3" class="red">
								WITHDRAW
							</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>60*******095</td>
							<td class="amount">RM50.00</td>
							<td>60******739</td>
							<td class="amount">RM600.05</td>
							<td>JILI</td>
						</tr>
						<tr>
							<td>60*******399</td>
							<td class="amount">RM10.00</td>
							<td>60******209</td>
							<td class="amount">RM127.09</td>
							<td>KISS918</td>
						</tr>
						<tr>
							<td>60*******874</td>
							<td class="amount">RM5.00</td>
							<td>60******316</td>
							<td class="amount">RM20.09</td>
							<td>JILI</td>
						</tr>
						<tr>
							<td>60*******399</td>
							<td class="amount">RM10.00</td>
							<td>60******453</td>
							<td class="amount">RM127.05</td>
							<td>MEGA888</td>
						</tr>
						<tr>
							<td>60*******110</td>
							<td class="amount">RM50.00</td>
							<td>60******716</td>
							<td class="amount">RM50.00</td>
							<td>JILI</td>
						</tr>
					</tbody>
				</table>

				<img src="/images/LB_Img_1.webp" alt="Certificate">
			</div>

			<a :href="output_Link + 'winbox-rigester'" rel="nofollow"><img src="/images/Marc Marquez bonus.webp"
					alt="93% Marc Marquex Bonus" style="margin-bottom: 16px;">
			</a>

			<div class="Big_Info_Container">
				<div class="login-register-container">
					<a href="/"><img class="Join" src="/images/RB_Login_Img.gif" alt="Login"></a>
					<a :href="output_Link + 'winbox-rigester'" rel="nofollow"><img class="Register"
							src="/images/RB_Register_Img.gif" alt="Register"></a>
				</div>
				<div class="RB_Info_Container" style="display: flex;">
					<div class="RB_Small_Text_Container">
						<div class="Baki">
							<p>{{ $t('message.balance') }} </p>
							<p><strong>RM0.00</strong></p>
						</div>
						<p>{{ $t('message.Min_Deposit') }} <strong>RM1.00</strong></p>
						<p>{{ $t('message.Min_Withdrawal') }} <strong>RM25.00</strong></p>
					</div>
					<div class="RB_Cash_Btn_Container">
						<a :href="output_Link + 'winbox-rigester'" rel="nofollow">
							<img src="/images/RB_Deposit_Img.gif" alt="Deposit">
						</a>
						<a :href="output_Link + 'winbox-rigester'" rel="nofollow">
							<img src="/images/RB_Withdraw_Img.gif" alt="Withdraw">
						</a>
						<a href="/">
							<img src="/images/RB_Refresh_Img.gif" alt="Refresh">
						</a>
					</div>
				</div>
			</div>


			<div class="Mobile_View" style="display: none;">
				<div style="position: relative;">
					<img src="/images/LB_Img_2.webp" alt="Share">
					<div class="button-grp">
						<a :href="output_Link + 'winbox-rigester'" rel="nofollow"><img class="button_width"
								src="/images/LB_Share_Img.gif" alt="Share"></a>
						<a :href="output_Link + 'winbox-rigester'" rel="nofollow"><img class="button_width"
								src="/images/LB_Downline_Img.gif" alt="Downline"></a>
						<a :href="output_Link + 'winbox-rigester'" rel="nofollow"><img class="button_width"
								src="/images/LB_Copy_Img.gif" alt="Copy Link"></a>
						<a :href="output_Link + 'winbox-rigester'" rel="nofollow"><img class="button_width"
								src="/images/LB_More_Img.gif" alt="More Info"></a>
					</div>
				</div>

				<a :href="output_Link + 'winbox-rigester'" rel="nofollow"><img src="/images/LB_Img_3.webp"
						alt="Total Commission"></a>
			</div>

			<div class="sport-betting-container">
				<div class="SB-content-container">
					<div class="team">
						<img src="/images/Newcastle.webp" alt="Newcastle">
						<p>{{ $t('message.team_1') }}</p>
					</div>
					<div class="time-info">
						<p>{{ $t('message.start_time') }}</p>
						<p>{{ $t('message.date', { year: new Date().getFullYear() }) }}</p>
						<p class="time">19:30</p>
						<a href="/">
							<div class="bet-now-container">
								<p>{{ $t('message.bet_now') }}</p>
							</div>
						</a>
					</div>
					<div class="team">
						<img src="/images/Man_City.webp" alt="Man City">
						<p>{{ $t('message.team_2') }}</p>
					</div>
				</div>
				<a :href="output_Link + 'winbox-rigester'" rel="nofollow">
					<div class="show-more-button-container">
						<p>{{ $t('message.show_more') }}</p>
					</div>
				</a>
			</div>

			<a :href="output_Link + 'winbox-rigester'" rel="nofollow"><img src="/images/Turnover Bonus.webp"
					alt="Turnover Bonus" style="margin-bottom: 16px;"></a>

			<a :href="output_Link + 'winbox-rigester'" rel="nofollow"><img src="/images/top up rm20.webp"
					alt="Top Up Rm20" style="margin-bottom: 16px;">
			</a>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import RB_Img_Carousel from './RB_Img_Carousel.vue'

export default {
	name: 'RightBanner',
	components: {
		RB_Img_Carousel,
	},
	computed: {
		...mapGetters(['output_Link', 'error']),
	},
	mounted() {
		this.$store.dispatch('fetchLink_API');
	}

};
</script>

<style scoped>
.button-grp {
	position: absolute;
	display: flex;
	flex-direction: row;
	justify-content: center;
	flex-wrap: wrap;
	margin-bottom: 8px;
	bottom: 0;
}

@media screen and (max-width: 1000px) {
	.Mobile_View {
		display: block !important;
	}

	.button-grp {

		margin-top: unset;
	}
}

.button-grp img {
	padding: 0 5px;
}

.button-grp a {
	width: calc(50% - 8px);
}

@media screen and (min-width: 610px) and (max-width: 770px) {
	.button-grp a {
		width: calc(50% - 15px);
	}
}

.button_width {
	width: 100%;
	margin-bottom: 8px !important;
}

.title {
	position: relative;
}

.title span {
	color: black;
	font-weight: 700;
	padding-left: 4px;
}

.live {
	position: absolute;
	display: flex;
	align-items: center;
	top: 3px;
	right: 3px;
	background: red;
	padding: 1px 3px;
	border-radius: 2px;
	color: #fff;
	font-weight: 400;
	height: 13px;
}

.live span {
	display: block;
	width: 8px;
	height: 8px;
	background: #fff;
	float: right;
	border-radius: 10px;
	margin: 1px 1px 0 3px;
}

.main-blink-me {
	animation: blinkme 1.5s linear infinite;
}

@keyframes blinkme {
	0% {
		display: 1;
	}

	50% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}

table {
	width: 100%;
	margin-bottom: 16px;
}

table td {
	font-size: 9px;
	color: black;
	border: 1px solid #238aa1;
	font-weight: 500;
}

@media screen and (min-width: 1440px) {
	table td {
		font-size: 11px;
	}
}

.green {
	color: white;
	background-image: linear-gradient(to left, #8d8f11, #d7c965);
	padding-left: 4px;
}

.red {
	color: white;
	background-image: linear-gradient(to left, #374439, #28ab3f);
	padding-left: 4px;
}

tbody td {
	width: 20%;
	height: 20px;
	padding: 4px;
}

.amount {
	color: red;
	text-align: right;
	font-family: 'Montserrat', sans-serif;
}

.Right_Banner_Container {
	background: rgba(0, 0, 0, .3);
	padding: 10px 15px 0px 15px;
	height: 100%;
}

.Big_Info_Container {
	border-radius: 8px;
	padding: 8px 10px;
	background-image: url('/images/Big_Info_Bg_Img.webp');
	box-shadow: 2px 4px 20px rgb(14 14 14 / 61%);
	margin-bottom: 16px;
}

@media screen and (max-width: 1000px) {
	.Right_Banner_Container {
		background: unset;
		padding: 15px 15px 0px 15px;
	}

	.login-register-container {
		padding-top: 0px !important;
	}

}

.RB_Imgs img {
	width: 100%;
	margin-bottom: 16px;
}

.RB_Info_Container {
	background-size: 100% 100%;
	background-repeat: no-repeat;
	background-position: bottom;
	justify-content: space-between;
}

.RB_Cash_Btn_Container {
	width: 45%;
	text-align: right;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 5px;
}

.RB_Cash_Btn_Container img {
	width: 100%;
	margin-bottom: 5px;
}

.login-register-container {
	display: flex;
	margin-bottom: 16px;
	justify-content: space-between;
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
	color: #0e2165;
	font-size: 13px;
	font-weight: 700;
	font-family: 'Montserrat', sans-serif;
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
	color: #da9100;
	font-size: 30px;
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
		font-size: 30px;
	}

}

.button_width {
	width: 100%
}

.Lucky_Number_Btn {
	position: absolute;
	bottom: 5%;
	left: 8%;
	width: 40% !important;

}

.sport-betting-container {
	background-image: url('/images/soccer-betting-img.jpg');
	/* background-position: center; */
	background-size: cover;
	padding: 20px 0 10px 0;
	margin-bottom: 16px;
	border-radius: 8px;
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
	width: 50px;
}

.time-info,
.team p {
	font-family: 'Montserrat', sans-serif;
	font-weight: 700;
}

@font-face {
	font-family: 'Digital-7';
	src: url('@/assets/fonts/digital-7.ttf') format('truetype');
}

.time {
	display: block;
	margin-top: 3px;
	font-size: 21px;
	color: #258D2D;
	font-family: 'Digital-7', sans-serif;
}
</style>