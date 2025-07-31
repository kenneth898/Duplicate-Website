<template>
	<div class="Left_Banner_Container">
		<div class="LB_Imgs">
			<LB_Img_Carousel_AK />
			<img src="/images/LB_Img_1.webp" alt="Provider Listing">
			<div style="position: relative; display: flex; align-items: center; justify-content: flex-end;">
				<img style="margin: 0;" src="/images/LB_PJ_Img.gif" alt="Progressive Jackpot">
				<div class="Jackpot" style="position: absolute; padding-right: 20px;">
					<JackpotOdometer :value="jackpotValue" />
				</div>
			</div>

			<table style="margin-top: 16px; width: 100%;">
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
							TOP UP
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
			<div class="Tablet-Mobile-view">
				<div style="position: relative;">
					<a :href="link_ataskasino + 'en/sign-up/'" rel="nofollow">
						<img src="/images/LB_Img_2.webp" alt="Share">
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
				<a href="https://t.me/atas77channel" rel="nofollow"><img src="/images/LB_Img_3.webp" alt="Telegram"></a>
				<a :href="link_ataskasino + 'en/sign-up/'" rel="nofollow"><img src="/images/LB_Img_4.webp"
						alt="Live Now"></a>
			</div>
		</div>
	</div>
</template>

<script>
import LB_Img_Carousel from '/src/components/LB_Img_Carousel.vue';
import LB_Img_Carousel_AK from '/src/components/LB_Img_Carousel_AK.vue';
import JackpotOdometer from '/src/components/JackpotOdometer.vue';
import { mapGetters } from 'vuex';


export default {
	name: 'LeftBanner',
	components: {
		LB_Img_Carousel,
		LB_Img_Carousel_AK,
		JackpotOdometer
	},
	data() {
		return {
			jackpotValue: 10000000, // Starting value, 9 digits
			status: null,
			response: [],
		};
	},
	mounted() {
		this.loadJackpotValue();
		this.startJackpotIncrease();
		this.$store.dispatch('fetchLink_ataskasino');
	},
	computed: {
		...mapGetters(['link_ataskasino', 'error']),
	},
	methods: {
		startJackpotIncrease() {
			setInterval(() => {
				this.jackpotValue += Math.floor(Math.random() * 10); // Increment by a random value up to 9999
				this.scheduleNextIncrease();
			}, this.getRandomDelay());
		},
		scheduleNextIncrease() {
			setTimeout(() => {
				this.jackpotValue += Math.floor(Math.random() * 10); // Increment by a random value up to 9999
				this.scheduleNextIncrease();
			}, this.getRandomDelay());
		},
		getRandomDelay() {
			return Math.floor(Math.random() * (8000 - 3000 + 1)) + 3000; // Delay between 3 and 8 seconds
		},
		saveJackpotValue() {
			localStorage.setItem('jackpotValue', this.jackpotValue);
		},
		loadJackpotValue() {
			const storedValue = localStorage.getItem('jackpotValue');
			if (storedValue !== null) {
				this.jackpotValue = parseInt(storedValue, 10);
			}
		}
	}
};
</script>

<style scoped>
.Left_Banner_Container {
	padding: 10px 15px 30px 15px;
	height: 100%;
	border-right: 1px solid rgba(255, 255, 255, .5);
}

@media screen and (min-width: 769px) {
	.Left_Banner_Container {
		background: rgba(0, 0, 0, .3);
	}
}

.LB_Imgs img {
	width: 100%;
	margin-bottom: 16px;
	border-radius: 8px;
}

@media screen and (max-width: 1000px) {
	.Tablet-Mobile-view {
		display: none;
	}

	.Left_Banner_Container {
		padding-bottom: 0px;
		border-right: unset;
	}
}

.button-grp {
	padding: 0 12px;
	margin-bottom: 10px;
}

.button-grp img {
	padding: 0 2px;
	width: 50%;
}

.no-br {
	border-radius: unset !important;
}

.title {
	position: relative;
}

.title span {
	color: #d3ab22;
	font-weight: 700;
	padding-left: 5px;
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

@media screen and (max-width: 769px) {
	table {
		margin-bottom: 16px;
	}
}

table td {
	font-size: 11px;
	color: black;
	border: 1px solid white;
	font-weight: 500;
}

@media screen and (max-width: 1440px) {
	table td {
		font-size: 10px;
	}
}

.green {
	background: linear-gradient(90deg, rgba(8, 207, 255, 1) 35%, rgba(0, 154, 255, 1) 100%);
	color: white;
	padding-left: 5px;
}

.red {
	background: linear-gradient(90deg, rgba(8, 207, 255, 1) 35%, rgba(0, 154, 255, 1) 100%);
	color: white;
	padding-left: 5px;
}

tbody td {
	width: 20%;
	height: 20px;
	padding: 4px;
}

table,
th,
td {
	border: 1px solid black !important;
	/* Change to desired color */
}

.amount {
	color: #1075b8;
	text-align: right;
}
</style>
