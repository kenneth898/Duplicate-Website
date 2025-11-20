<template>
	<div class="Left_Banner_Container">
		<div class="LB_Imgs">
			<LB_Img_Carousel />
			<!-- <a :href="link_output + 'winbox-register'" rel="nofollow"> -->
			<img src="/images/Spin Bonus.webp" alt="Spin Bonus">
			<!-- </a> -->

			<img src="/images/LB_Img_1.gif" alt="Payment Method">

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

			<div class="Share_Section">
				<div style="padding: 0 5px;">
					<b style="color: gold; font-size: 13px; text-decoration: underline">{{ $t('Share_Section.1_Line')
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
					<b style="color: gold; font-size: 19px; text-decoration: underline;">{{ $t('Share_Section.4_Line')
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
						<span style="color: white; margin-left: 2px;">{{ $t('Share_Section.100_Friend') }}</span>
						<b style="color: magenta; margin-left: 2px;">{{ $t('Share_Section.Free') }}</b>
						<span style="color: white; margin-left: 2px;">RM3000.00</span>
					</div>
				</div>
				<div class="button-grp">
					<!-- <a :href="link_output + 'winbox-register'" rel="nofollow"> -->
					<div style="width: 50%;">
						<img class="button_width" src="/images/LB_Share_Img.gif" alt="Share">
					</div>

					<!-- </a> -->
					<!-- <a :href="link_output + 'winbox-register'" rel="nofollow"> -->
					<div style="width: 50%;">
						<img class="button_width" src="/images/LB_Downline_Img.gif" alt="Downline">
					</div>

					<!-- </a> -->
					<!-- <a :href="link_output + 'winbox-register'" rel="nofollow"> -->
					<div style="width: 50%;">
						<img class="button_width" src="/images/LB_Copy_Img.gif" alt="Copy">
					</div>

					<!-- </a> -->
				</div>
			</div>

			<!-- <a :href="link_output + 'winbox-register'" rel="nofollow"> -->
			<img src="/images/LB_Tekan_Img.webp" alt="Tekan Sini">
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
						<!-- <a :href="link_output + 'winbox-login'" rel="nofollow"> -->
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
</template>

<script>
import { mapGetters } from 'vuex';
import LB_Img_Carousel from '/src/components/LB_Img_Carousel.vue'

export default {
	name: 'LeftBanner',
	components: {
		LB_Img_Carousel,
	},
	computed: {
		...mapGetters(['link_output', 'error']),
	},
	mounted() {
		this.$store.dispatch('fetchLink_output');
	}
};
</script>

<style scoped>
.Left_Banner_Container {
	background: rgba(0, 0, 0, .3);
	padding: 10px 15px 30px 15px;
	height: 100%;
	border-right: 1px solid rgba(255, 255, 255, .5);
}

.LB_Imgs img {
	width: 100%;
	margin-bottom: 16px;
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
	width: 50%;
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


@media screen and (max-width: 1000px) {

	.Left_Banner_Container {
		background: unset;
		padding-bottom: 0px;
		border-right: unset;
		padding-top: 0px;
	}
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
