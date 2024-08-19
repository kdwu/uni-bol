<template>
	<view>
		<view class="flex flex-column" style="background-color: #3F3F3F;">
			<status-bar></status-bar>
			<view class="flex flex-row p-31 align-center" style="background-color: #A2227F;">
				<image src="/static/icon/back_white.png" style="width: 45rpx; height: 45rpx;" @click="back">
				</image>
				<text class="w_fill" style="text-align: center; font-size: 36rpx; color: white;">{{ $t('increase.amount') }}</text>
			</view>
		</view>


		<view class="mx-30 px-30" style="background-color: white; margin-top: 49rpx;">

			<view style="height: 25rpx;"></view>

			<view
				style="height: 100rpx; background-color: #F3F6F3; color: #A2227F; font-size: 26rpx; font-weight: bolder;"
				class="flex align-center justify-center px-30">
				{{ $t('increase.amount.tips') }}
			</view>

			<view style="margin-top: 45rpx;">
				<input type="number" v-model="facebook" class="border-bottom" placeholder="Facebook"
					placeholder-style="color:#B4B4B4; font-size:30rpx; font-weight:500; text-align: center;"
					style="height: 90rpx; color: #444444; font-weight: 500; font-size: 30rpx;text-align: center;" />
			</view>

			<view style="margin-top: 25rpx;">
				<input type="number" v-model="whatsapp" class="border-bottom" placeholder="Whatsapp"
					placeholder-style="color:#B4B4B4; font-size:30rpx; font-weight:500; text-align: center;"
					style="height: 90rpx; color: #444444; font-weight: 500; font-size: 30rpx;text-align: center;" />
			</view>

			<view style="margin-top: 25rpx;">
				<input type="number" v-model="twitter" class="border-bottom" placeholder="Twitter"
					placeholder-style="color:#B4B4B4; font-size:30rpx; font-weight:500; text-align: center;"
					style="height: 90rpx; color: #444444; font-weight: 500; font-size: 30rpx;text-align: center;" />
			</view>

			<view style="margin-top: 25rpx;">
				<input type="number" v-model="phone" class="border-bottom" :placeholder= "$t('recommender.phone.number')"
					placeholder-style="color:#B4B4B4; font-size:30rpx; font-weight:500; text-align: center;"
					style="height: 90rpx; color: #444444; font-weight: 500; font-size: 30rpx;text-align: center;" />
			</view>

			<view style="width: 100%; margin-top: 50rpx;">
				<button type="primary" :disabled="isButtonDisabled"
					:style="{ backgroundColor: isButtonDisabled ? '#CCCCCC' : '#A2227F', height: '98rpx' }"
					class="rounded-10" @click="save">{{ $t('save') }}</button>
			</view>
			
			<view style="height: 45rpx;"></view>

		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				facebook: "",
				whatsapp: "",
				twitter: "",
				phone: ""
			}
		},
		computed: {
			isButtonDisabled() {
				return this.facebook === '' || this.whatsapp === '' || this.twitter === '' || this.phone === '';
			}
		},
		onLoad() {
			try {
				this.facebook = uni.getStorageSync('facebook');
				this.whatsapp = uni.getStorageSync('whatsapp');
				this.twitter = uni.getStorageSync('twitter');
				this.phone = uni.getStorageSync('rPhone');
			} catch (e) {
				
			}
		},
		methods: {
			back() {
				uni.navigateBack();
			},
			save() {
				try {
					uni.setStorageSync('facebook', this.facebook);
					uni.setStorageSync('whatsapp', this.whatsapp);
					uni.setStorageSync('twitter', this.twitter);
					uni.setStorageSync('rPhone', this.phone);
				} catch (e) {
					
				}
				
				
				uni.showLoading({
					title: this.$t('waiting'),
					mask: true
				});
				var self = this; // 将当前上下文保存到变量self中
				setTimeout(function() {
					uni.hideLoading();
					
					uni.showToast({
						title: self.$t('increase.amount.tips2'),
						position: 'bottom'
					});
					
					setTimeout(function() {
						uni.navigateBack();
					}, 2000);
					
				}, 1000);
			}
		}
	}
</script>

<style>
	/* 页面背景 */
	body {
		background-image: url('/static/icon/bg.png');
		background-size: cover;
	}

	/* button 去掉默认的边框 */
	button::after {
		border: none;
	}
</style>