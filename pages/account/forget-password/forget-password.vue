<template>
	<view>
		<view>
			<status-bar></status-bar>
		</view>

		<view class="flex flex-row p-31 align-center">
			<image src="/static/icon/back.png" style="width: 45rpx; height: 45rpx;" @click="back"></image>
			<text class="w_fill"
				style="text-align: center; font-size: 36rpx; color: #3C3C3C; font-weight: bolder;">{{ $t('forget.password2') }}</text>
		</view>

		<view
			style="margin-top: 225rpx; background: linear-gradient(to bottom, #DCE3DC, #F9FFF9, #FFFFFF); box-shadow: 0rpx 2rpx 4rpx 0rpx rgba(0,0,0,0.16);"
			class="mx-30 px-30 flex flex-column align-center rounded-20">
			
			<template v-if="isGetCodeSuccess">
				<text style="font-size: 36rpx; font-weight: bolder; color: #A2227F; margin-top: 58rpx; text-align: center;"
					class="flex justify-center align-center">{{ $t('verify.code.tips') }} {{phone}}</text>
			</template>

			<view class="flex align-center border-bottom" style="width: 100%; margin-top: 30rpx;">
				<input type="number" v-model="phone" class="flex-1" :placeholder="$t('phone')"
					placeholder-style="color:#B4B4B4; font-size:30rpx; font-weight:500; text-align: center;"
					style="height: 90rpx; color: #444444; font-weight: 500; font-size: 30rpx;text-align: center;" />
			</view>

			<view class="flex align-center w_fill border-bottom" style="margin-top: 25rpx;">
				<input type="number" v-model="code" class="flex-1" :placeholder="$t('code')"
					placeholder-style="color:#B4B4B4; font-size:30rpx; font-weight:500; text-align: center;"
					style="height: 90rpx; color: #444444; font-weight: 500; font-size: 30rpx; text-align: center;" />
				<view class="flex align-center justify-center" style="height: 90rpx;">
					<Button type="primary" :disabled="isGetCodeButtonDisabled"
						:style="{ backgroundColor: isGetCodeButtonDisabled ? '#CCCCCC' : inProgress ? '#CCCCCC' : '#A2227F'}" class="rounded-10"
						@click="getCode">
						<template v-if="!inProgress">
							{{ $t('get.code') }}
						</template>
						<template v-else>
							{{ countdown }}s
						</template>
					</Button>
				</view>
			</view>


			<view class="w_fill" style="margin-top: 45rpx;">
				<button type="primary" :disabled="isConfirmButtonDisabled"
					:style="{ backgroundColor: isConfirmButtonDisabled ? '#CCCCCC' : '#A2227F', height: '98rpx' }"
					class="rounded-10" @click="confirm">{{ $t('confirm') }}</button>
			</view>

			<view style="height: 45rpx;"></view>

		</view>
	</view>
</template>

<script>
	let timer = null;
	export default {
		data() {
			return {
				phone: '',
				countdown: 120,
				code: '',
				inProgress: false,
				isGetCodeSuccess: false
			}
		},
		computed: {
			isGetCodeButtonDisabled() {
				return this.phone === '';
			},
			isConfirmButtonDisabled() {
				return this.phone === '' || this.code === '';
			}
		},
		methods: {
			back() {
				uni.navigateBack();
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
				console.log("====");
				clearInterval(timer);
				this.countdown = 120;
				timer = null;
				this.inProgress = false;
			},
			getCode() {
				if (this.inProgress) return;
				
				let data = {
					'phone': this.phone
				};
				uni.showLoading({
					title: this.$t('waiting'),
					mask: true
				});
				this.$H.post('/user/get_code', data).then(res => {
					this.isGetCodeSuccess = true;
					this.startCountdown();
					uni.hideLoading();
				}).catch(err => {
					uni.hideLoading();
				});
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

	button::after {
		border: none;
	}
</style>