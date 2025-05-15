<template>
	<div class="Left_Banner_Container_M">
		<a v-if="link_ataskasino" :href="link_ataskasino + 'en/sign-up/'" rel="nofollow">
			<img src="/images/bonus50_.webp" class="d-block w-100" alt="Bonus Tambah Nilai Harian 50%">
		</a>
	</div>

	<div class="Left_Banner_Container">

		<div class="LB_Imgs">
			<div class="LB_First_Banner" style="display: none;">
				<a v-if="link_ataskasino" :href="link_ataskasino + 'en/sign-up/'" rel="nofollow">
					<img src="/images/bonus50_.webp" class="d-block w-100" alt="Bonus Tambah Nilai Harian 50%">
				</a>
			</div>

			<img src="/images/LB_Img_3.webp" alt="Payment List">

			<div style="position: relative; display: flex; align-items: center; justify-content: flex-end;">
				<img style="margin: 0;" src="/images/LB_PJ_Img.gif" alt="Progressive Jackpot">
				<div class="Jackpot" style="position: absolute; padding-right: 20px;">
					<JackpotOdometer :value="jackpotValue" />
				</div>
			</div>

			<table style="margin-top: 16px;">
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
				<a v-if="link_ataskasino" :href="link_ataskasino + 'en/sign-up/'" rel="nofollow"><img
						src="/images/LB_Img_7.webp" alt="Get Bonus"></a>
				<div class="button-grp">
					<a v-if="link_ataskasino" :href="link_ataskasino + 'en/sign-up/'" rel="nofollow">
						<img class="col-6" src="/images/LB_Share_Img.webp" alt="Share">
					</a>
					<a v-if="link_ataskasino" :href="link_ataskasino + 'en/sign-up/'" rel="nofollow">
						<img class="col-6" src="/images/LB_Downline_Img.webp" alt="Downline">
					</a>
					<a v-if="link_ataskasino" :href="link_ataskasino + 'en/sign-up/'" rel="nofollow">
						<img class="col-6" src="/images/LB_Copy_Img.webp" alt="Copy">
					</a>
					<a v-if="link_ataskasino" :href="link_ataskasino + 'en/sign-up/'" rel="nofollow">
						<img class="col-6" src="/images/LB_Free_Img.gif" alt="More">
					</a>
				</div>
			</div>

			<div style="padding-bottom: 16px;">
				<LB_Img_Carousel />
			</div>

			<div class="Tablet-Mobile-view">
				<a href="/"><img src="/images/LB_FB_Img.webp" alt="Facebook"></a>
				<a href="https://t.me/atas77channel" rel="nofollow"><img src="/images/LB_Telegram_Img.webp"
						alt="Telegram"></a>
				<a v-if="link_ataskasino" :href="link_ataskasino + 'en/sign-up/'" rel="nofollow"><img
						src="/images/LB_App_Img.webp" alt="App Download"></a>
			</div>
		</div>
	</div>
</template>

<script>
import LB_Img_Carousel from '/src/components/LB_Img_Carousel.vue';
import JackpotOdometer from '/src/components/JackpotOdometer.vue';
import { mapGetters } from 'vuex';

export default {
	name: 'LeftBanner',
	components: {
		LB_Img_Carousel,
		JackpotOdometer
	},
	data() {
		return {
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
.Left_Banner_Container {
	margin-top: 10px;
	padding: 0px 15px 30px 15px;
	height: 100%;
	background: rgba(0, 0, 0, .3);
}

.LB_Imgs {
	text-align: center;
}

.LB_Imgs img {
	width: 100%;
	margin-bottom: 16px;
}

.RM3 {
	text-align: center;
	color: #143808;
	font-weight: bolder;
}

@media screen and (max-width: 1000px) {

	.Tablet-Mobile-view {
		display: none;
	}

	.Left_Banner_Container {
		padding-bottom: 0px;
		margin-top: 0;
	}

	.RM3 p {
		margin: 0;
		padding-bottom: 16px;
	}
}

.button-grp {
	margin-bottom: 16px;
}

.button-grp img {
	width: 47%;
	margin: 8px 2.5px 0 5px;
	height: 37px;
}

.title {
	position: relative;
	text-align: left;
	background-color: white;
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
		font-size: 9px;
	}
}

.green {
	background: linear-gradient(to bottom, rgba(29, 75, 31, 1) 0%, rgba(79, 255, 69, 1) 100%);
	color: white;
	padding-left: 5px;
	text-align: left;
}

.red {
	background: linear-gradient(to bottom, rgb(198 1 1) 51%, rgb(254 0 0) 100%);
	color: white;
	padding-left: 5px;
	text-align: left;
}

tbody td {
	width: 20%;
	height: 20px;
	padding: 4px;
	text-align: left;
}

table,
th,
td {
	border: 2px solid black !important;
	/* Change to desired color */
	background-color: white;
}

.amount {
	color: #d3ab22;
	text-align: right;
	font-weight: 700;
}

@media screen and (min-width: 768px) {
	.LB_First_Banner {
		display: flex !important;
	}

	.Left_Banner_Container_M {
		display: none;
	}
}
</style>
