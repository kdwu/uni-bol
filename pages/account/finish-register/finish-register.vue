<template>
	<view>
		<view>
			<status-bar></status-bar>
		</view>

		<view class="flex flex-row p-31 align-center">
			<image src="/static/icon/back.png" style="width: 45rpx; height: 45rpx;" @click="back"></image>
			<text class="w_fill"
				style="text-align: center; font-size: 36rpx; color: #3C3C3C; font-weight: bolder;">{{ $t('finish.register') }}</text>
		</view>

		<view
			style="margin-top: 225rpx; background: linear-gradient(to bottom, #DCE3DC, #F9FFF9, #FFFFFF); box-shadow: 0rpx 2rpx 4rpx 0rpx rgba(0,0,0,0.16);"
			class="mx-30 px-24 flex flex-column align-center rounded-20">
			<text style="font-size: 36rpx; font-weight: bolder; color: #A2227F; margin-top: 58rpx; text-align: center;"
				class="flex justify-center align-center">{{ $t('verify.code.tips') }} {{phone}}</text>

			<view class="flex align-center w_fill border-bottom" style="margin-top: 50rpx;">
				<input type="number" v-model="code" class="flex-1" :placeholder="$t('verify.code')"
					placeholder-style="color:#B4B4B4; font-size:30rpx; font-weight:500; text-align: center;"
					style="height: 90rpx; color: #444444; font-weight: 500; font-size: 30rpx; text-align: center;" />
				<view class="flex align-center justify-center" style="height: 90rpx;" @click="getCode">
					<template v-if="!inProgress">
						<text style="color: #A2227F; font-size: 30rpx; font-weight: 500;">{{ $t('resend') }}</text>
					</template>
					<template v-else>
						<text style="color: #B4B4B4; font-size: 30rpx; font-weight: 500;">{{ countdown }}s</text>
					</template>
				</view>
			</view>

			<view class="w_fill" style="margin-top: 64rpx;">
				<button type="primary" :disabled="isButtonDisabled"
					:style="{ backgroundColor: isButtonDisabled ? '#CCCCCC' : '#A2227F', height: '98rpx' }"
					class="rounded-10" @click="confirm">{{ $t('confirm') }}</button>
			</view>

			<view style="height: 51rpx;"></view>

		</view>
	</view>
</template>

<script>
	let timer = null;
	export default {
		data() {
			return {
				code: "",
				countdown: 120,
				phone: '',
				inProgress: false
			}
		},
		computed: {
			isButtonDisabled() {
				return this.code === '';
			}
		},
		//mounted() {
		//	this.startCountdown();
		//},
		onLoad(option) {
			this.phone = option.phone;
			// this.name = option.name;
			// this.idNumber = option.idNumber;
			
			this.getCode();
		},
		methods: {
			back() {
				uni.navigateBack();
			},
			getCode() {
				if (this.inProgress) return;
				
				let data = {
					'phone': this.phone
				};
				uni.showLoading({
					title: this.$t('waiting'),
					mask:true
				});
				this.$H.post('/user/get_code', data).then(res => {
					this.startCountdown();
					uni.hideLoading();
				}).catch(err => {
					uni.hideLoading();
				});
			},
			startCountdown() {
				this.inProgress = true;
				
				timer = setInterval(() => {
					if (this.countdown > 0) {
						this.countdown--;
					} else {
						this.stopCountdown();
					}
				}, 1000);
			},
			stopCountdown()  {
				clearInterval(timer);
				this.countdown = 120;
				timer = null;
				this.inProgress = false;
			},
			confirm() {
				if (this.inProgress) {
					this.stopCountdown(timer);
				}
				
				uni.navigateTo({
					url: '/pages/account/set-password/set-password?phone=' + this.phone + '&code=' + this.code
				});
			}
		}
	}
</script>

<style>
	body {
		background-image: url('/static/icon/bg.png');
		background-size: cover;
	}
</style>