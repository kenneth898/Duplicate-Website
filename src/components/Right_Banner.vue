<template>
	<div class="Right_Banner_Container">

		<div class="Mobile_View" style="display: none;">
			<RB_Img_Carousel />
			<!-- <a :href="link_output + 'winbox-register'" rel="nofollow"> -->
			<img style="width: 100%; margin-bottom: 16px" src="/images/Spin Bonus.webp" alt="Spin Bonus">
			<!-- </a> -->

		</div>

		<div class="RB_Imgs">
			<!-- <a :href="link_output + 'winbox-register'" rel="nofollow"> -->
			<img src="/images/Marc Marquez bonus.webp" alt="93% Marc Marquex Bonus" style="margin-bottom: 16px;">
			<!-- </a> -->

			<div class="Mobile_View" style="display: none;">
				<img style="margin-bottom: 16px;" src="/images/LB_Img_1.gif" alt="Payment Method">

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
			</div>

			<div class="Big_Info_Container">
				<div class="login-register-container">
					<!-- <a :href="link_output + 'winbox-login'" rel="nofollow"> -->
					<div style="width: 50%">
						<img class="Join" src="/images/RB_Login_Img.gif" alt="Login">
					</div>

					<!-- </a> -->
					<!-- <a :href="link_output + 'winbox-register'" rel="nofollow"> -->
					<div style="width: 50%">
						<img class="Register" src="/images/RB_Register_Img.gif" alt="Register">
						<!-- </a> -->
					</div>
				</div>

				<div class="RB_Info_Container" style="display: flex;">
					<div class="RB_Small_Text_Container">
						<div class="Baki">
							<p>{{ $t('message.balance') }} </p>
							<p><strong>0.00</strong></p>
						</div>
						<p>{{ $t('message.Min_Deposit') }} <strong>RM5.00</strong></p>
						<p>{{ $t('message.Min_Withdrawal') }} <strong>RM50.00</strong></p>
					</div>
					<div class="RB_Cash_Btn_Container">
						<!-- <a :href="link_output + 'winbox-register'" rel="nofollow"> -->
						<img src="/images/RB_Deposit_Img.gif" alt="Deposit">
						<!-- </a> -->
						<!-- <a :href="link_output + 'winbox-register'" rel="nofollow"> -->
						<img src="/images/RB_Withdraw_Img.gif" alt="Withdraw">
						<!-- </a> -->
						<!-- <a href="/"> -->
						<img src="/images/RB_Refresh_Img.gif" alt="Refresh">
						<!-- </a> -->
					</div>
				</div>
			</div>

			<div class="Promo_Section">
				<div class="Special_Promo_Section">
					<div class="Promo_Title">
						ANGPAO FREE!!
						<b class="main-blink-me" style="color:Yellow;">[🧧]</b>
					</div>
					<div class="Promo_Container" style="flex-direction: column;">
						<!-- <a :href="link_output + 'winbox-register'" rel="nofollow"> -->
						<img style="width: 280px;" src="/images/RB_Ang_Pao_Img.gif" alt="Ang Pao">
						<!-- </a> -->

						<!-- <a :href="link_output + 'winbox-register'" rel="nofollow"> -->
						<div class="Promo_Bg_Container">
							<img class="Promo_Bg" src="/images/Promo_Bg_Img.webp" alt="Promotion">
							<div class="Text_Container">
								<p class="text"> Join Telegram Group Free </p>
								<p class="name">RM20</p>
							</div>
						</div>
						<!-- </a> -->
					</div>
				</div>

				<div class="Special_Promo_Section">
					<div class="Promo_Title" style="display: flex; align-items: center">
						<div class="main-blink" style="color:#FFF;">WELCOME BONUS</div>
						<img class="main-blink-me" style="width:25px;display:inline;" src="/images/Hot_Tag.webp"
							alt="Hot">
					</div>
					<div class="Promo_Container">
						<div class="Promo_Bg_Container Shadow_Container">
							<img class="Promo_Bg" src="/images/Promo_Bg_Img.webp" alt="Promotion">
							<div class="Text_Container">
								<p class="text"> Welcome Bonus 100% </p>
								<p class="name">100%</p>
							</div>
						</div>
					</div>
				</div>

				<div class="Special_Promo_Section">
					<div class="Promo_Title">
						FREE CREDIT BONUS
						<b class="main-blink-me" style="color:#0096FD;"> [MATBET88 MEMBER] </b>
					</div>
					<div class="Promo_Container">

						<!-- <a :href="link_output + 'winbox-register'" rel="nofollow"> -->
						<div class="Promo_Bg_Container">
							<img class="Promo_Bg" src="/images/Promo_Bg_Img.webp" alt="Promotion">
							<div class="Text_Container">
								<p class="text">FREE REGISTER </p>
								<p class="name">RM10</p>
							</div>
						</div>
						<!-- </a> -->

						<!-- <a :href="link_output + 'winbox-register'" rel="nofollow"> -->
						<div class="Promo_Bg_Container">
							<img class="Promo_Bg" src="/images/Promo_Bg_Img.webp" alt="Promotion">
							<div class="Text_Container">
								<p class="text">FREE REGISTER 365</p>
								<p class="name">RM2</p>
							</div>
						</div>
						<!-- </a> -->

						<div class="Promo_Bg_Container Shadow_Container">
							<img class="Promo_Bg" src="/images/Promo_Bg_Img.webp" alt="Promotion">
							<div class="Text_Container">
								<p class="text"> FREE RM5.00 EVERYDAY </p>
								<p class="name">RM5</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="Mobile_View" style="display: none;">
				<div class="Share_Section">
					<div style="padding: 0 5px;">
						<b style="color: gold; font-size: 13px; text-decoration: underline">{{
							$t('Share_Section.1_Line')
						}}</b>
						<br>
						<span style="color: white; font-size: 13px;">{{ $t('Share_Section.Press') }}</span>
						<span class="main-blink-me"
							style="color: #FFFFFF;background: #04A019;font-size: 13px;padding: 2px 5px 1px;border-radius: 5px;">{{
								$t('Share_Section.Invite') }}</span>
						<span style="color: white; font-size: 13px;">{{ $t('Share_Section.2_Line') }}</span>
						<br>
						<b style="color:#FF3333;font-size:13px;">5%</b>
						<span style="color: white; font-size: 13px; margin-left: 2px;">{{ $t('Share_Section.3_Line')
						}}</span>
						<span class="main-blink-me"
							style="color: #EFF707;background: #F52222;font-size: 13px;padding: 2px 5px 1px;border-radius: 5px;">12AM</span>
						<br>
						<b style="color: gold; font-size: 19px; text-decoration: underline;">{{
							$t('Share_Section.4_Line')
						}}</b>
						<br>
						<div>
							<b style="color: lime;">{{ $t('Share_Section.Share') }}</b>
							<span style="color: white; margin-left: 2px;">{{ $t('Share_Section.1_Friend') }}</span>
							<b style="color: magenta; margin-left: 2px;">{{ $t('Share_Section.Free') }}</b>
							<span style="color: white; margin-left: 2px;">RM30.00</span>
						</div>
						<div>
							<b style="color: lime;">{{ $t('Share_Section.Share') }}</b>
							<span style="color: white; margin-left: 2px;">{{ $t('Share_Section.20_Friend') }}</span>
							<b style="color: magenta; margin-left: 2px;">{{ $t('Share_Section.Free') }}</b>
							<span style="color: white; margin-left: 2px;">RM600.00</span>
						</div>
						<div>
							<b style="color: lime;">{{ $t('Share_Section.Share') }}</b>
							<span style="color: white; margin-left: 2px;">{{ $t('Share_Section.100_Friend')
							}}</span>
							<b style="color: magenta; margin-left: 2px;">{{ $t('Share_Section.Free') }}</b>
							<span style="color: white; margin-left: 2px;">RM3000.00</span>
						</div>
					</div>

					<div class="button-grp">
						<!-- <a :href="link_output + 'winbox-register'" rel="nofollow"> -->
						<img style="width: 50%;" class="button_width" src="/images/LB_Share_Img.gif" alt="Share">
						<!-- </a> -->
						<!-- <a :href="link_output + 'winbox-register'" rel="nofollow"> -->
						<img style="width: 50%;" class="button_width" src="/images/LB_Downline_Img.gif" alt="Downline">
						<!-- </a> -->
						<!-- <a :href="link_output + 'winbox-register'" rel="nofollow"> -->
						<img style="width: 50%;" class="button_width" src="/images/LB_Copy_Img.gif" alt="Copy">
						<!-- </a> -->
					</div>
				</div>

				<!-- <a :href="link_output + 'winbox-register'" rel="nofollow"> -->
				<img style="margin-bottom: 16px" src="/images/LB_Tekan_Img.webp" alt="Tekan Sini">
				<!-- </a> -->

				<div class="sport-betting-container">
					<div class="SB-content-container">
						<div class="team">
							<img src="/images/Tottenham.webp" alt="West Ham">
							<p>{{ $t('message.team_2') }}</p>
						</div>
						<div class="time-info">
							<p>{{ $t('message.start_time') }}</p>
							<p>19 Oct 2024</p>
							<p class="time">19:30</p>
							<!-- <a href="/"> -->
							<div class="bet-now-container">
								<p>{{ $t('message.bet_now') }}</p>
							</div>
							<!-- </a> -->
						</div>
						<div class="team">
							<img src="/images/West_Ham.webp" alt="Chelsea">
							<p>{{ $t('message.team_1') }}</p>
						</div>
					</div>
					<!-- <a :href="link_output + 'winbox-register'" rel="nofollow"> -->
					<div class="show-more-button-container">
						<p>{{ $t('message.show_more') }}</p>
					</div>
					<!-- </a> -->
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import RB_Img_Carousel from '/src/components/RB_Img_Carousel.vue'

export default {
	name: 'RightBanner',
	components: {
		RB_Img_Carousel,
	},
	data() {
		return {
			liveTime: ''
		}
	},
	computed: {
		...mapGetters(['link_output', 'error']),
	},
	mounted() {
		this.$store.dispatch('fetchLink_output');
		this.updateTime();
		setInterval(this.updateTime, 1000);
	},
	methods: {
		updateTime() {
			const now = new Date();

			// Format date and time as: DD MM YYYY (DAY) HH:MM:SS
			const day = String(now.getDate()).padStart(2, '0'); // Day of month
			const month = now.toLocaleString('en-US', { month: 'long' }); // Month (January is 0)
			const year = now.getFullYear(); // Year
			const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'short' }); // Day of the week
			const hours = String(now.getHours()).padStart(2, '0'); // Hours (24-hour format)
			const minutes = String(now.getMinutes()).padStart(2, '0'); // Minutes
			const seconds = String(now.getSeconds()).padStart(2, '0'); // Seconds

			// Format: DD MM YYYY (DAY) HH:MM:SS
			this.liveTime = `${day} ${month} ${year} (${dayOfWeek}) ${hours}:${minutes}:${seconds}`;
		}
	}
};
</script>

<style scoped>
.Right_Banner_Container {
	background: rgba(0, 0, 0, .3);
	padding: 10px 15px 0px 15px;
	height: 100%;
	border-left: 1px solid rgba(255, 255, 255, .5);
}

@media screen and (max-width: 1000px) {
	.Right_Banner_Container {
		background: unset;
		padding: 15px 15px 0px 15px;
		border-left: unset;
	}

	.login-register-container {
		padding-top: 0px !important;
	}

}

.Live_Time {
	font-size: 14px;
	font-weight: 300;
	font-family: 'Montserrat', sans-serif;
	text-align: center;
	margin-bottom: 16px;
	color: gold;
}

.Big_Info_Container {
	background-image: url('/images/RB_Big_Info_Bg_Img.webp');
	background-size: 100% 100%;
	padding: 8px 10px;
	margin-bottom: 16px;
	box-shadow: 0 0 5px #000;
	border-radius: 8px;
}

.RB_Imgs img {
	width: 100%;
}

.RB_Info_Container {
	background-size: 100% 100%;
	background-repeat: no-repeat;
	background-position: bottom;
}

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
	color: black;
	font-size: 25px;
}

.Special_Promo_Section {

	margin-bottom: 16px;
}

.Promo_Title {
	margin-bottom: 5px;
	font-weight: 700;
}

.main-blink {
	animation-name: blinker;
	animation-duration: 1.5s;
	animation-timing-function: linear;
	animation-iteration-count: infinite;
}

@keyframes blinker {
	50% {
		box-shadow: 0 0 15px #fff;
	}
}

.Promo_Container {
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
}

@media screen and (max-width: 769px) {
	.Promo_Container {
		flex-direction: row !important;
	}
}

.Promo_Bg_Container {
	position: relative;
	float: left;
}

.Shadow_Container::before {
	content: "";
	position: absolute;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, .6);
	z-index: 1;
	border-radius: 8px;
}

.Promo_Bg {
	max-height: 120px;
	width: unset !important;
	border-radius: 8px;
}

.Text_Container {
	position: absolute;
	width: 100%;
	top: 0;
	left: 0;
	padding: 5px 5px 0;
	text-align: center;
}

.text,
.name {
	margin: 0;
	color: white;
	text-shadow: 1px 1px 3px #000, 1px 1px 5px #000, 1px 1px 1px #000;
}

.text {
	font-size: 13px;
	min-height: 35px;
}

.name {
	font-size: 18px;
	font-weight: 700;
}

.Tablet-Mobile-view {
	display: none;
}

@media screen and (max-width: 1000px) {
	.Mobile_View {
		display: block !important;
	}

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

.Share_Section {
	background-image: url('/images/LB_Img_2.gif');
	background-size: 100% 100%;
	background-color: transparent;
	padding: 10px 7px;
	position: relative;
	border-radius: 8px;
	margin-bottom: 16px;
}

.button-grp {
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	flex-wrap: wrap;
}

.button-grp img {
	padding: 0 5px;
}

.button-grp a {
	width: 50%
}

.button_width {
	width: 100%;
	margin-bottom: 8px !important;
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

.bet-now-container p {
	font-size: 14px;
	font-weight: 700;
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
	font-weight: 700;
	line-height: 1;
	margin-bottom: 0;
}

.team {
	width: 30%;
}

.team p {
	font-weight: 700;
	font-size: 14px;
}

.team img {
	margin-bottom: 10px;
	width: 50px;
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

.RB-mobile-img-grp {
	margin-top: 22px;
}

.RB-mobile-img-grp img {
	margin-bottom: 16px;
}

.title {
	position: relative;
	background: #004D85;
}

.title span {
	color: white;
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
		opacity: 0;
	}

	38% {
		opacity: 0;
	}

	39% {
		opacity: 1;
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
	border: 1px solid black;
	font-weight: 500;
}

@media screen and (min-width: 1440px) {
	table td {
		font-size: 11px;
	}
}

.green {
	color: white;
	background-image: linear-gradient(to bottom, #7B94BC, #7B94BC);
	padding-left: 4px;
}

.red {
	color: white;
	background: linear-gradient(to bottom, #C8D8EF, #C8D8EF);
	padding-left: 4px;
}

tbody td {
	width: 20%;
	height: 20px;
	padding: 4px;
	word-wrap: break-word;
}

.amount {
	color: black;
	text-align: right;
}
</style>