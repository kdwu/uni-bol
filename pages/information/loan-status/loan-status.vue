<template>
	<view>
		<view>
			<status-bar></status-bar>
		</view>

		<view class="flex flex-row p-31 align-center">
			<image src="/static/icon/back.png" style="width: 45rpx; height: 45rpx;" @click="back"></image>
			<text class="w_fill" style="text-align: center; font-size: 36rpx; color: #060518;">{{ $t('loan.status') }}</text>
		</view>

		<view class="mx-30 px-30" style="background-color: white;">

			<view style="height: 59rpx;"></view>
			
			<view>
				<text style="font-size: 30rpx; color: #606265;">{{ $t('available.credit.upto') }}</text>
			</view>
			
			<view style="margin-top: 33rpx;">
				<text style="font-size: 60rpx; color: #303030; font-weight: bold;">Bs.10000</text>
			</view>
			
			<view style="height: 1rpx; background-color: #BDBDBD; margin-top: 48rpx;"></view>
			
			<view style="margin-top: 48rpx;">
				<text style="font-size: 36rpx; color: #333333; font-weight: 500;">{{ $t('application.submitted') }}</text>
			</view>
			
			<view style="margin-top: 20rpx;">
				<text style="font-size: 26rpx; color: #333333;">{{ $t('loan.status.text1') }}<text style="color: #FF4F04; font-size: 26rpx; font-weight: 500;">{{ $t('loan.status.text2') }}</text>{{ $t('loan.status.text3') }}</text>
			</view>
			
			<view style="width: 100%; margin-top: 36rpx;">
				<button type="primary" style="backgroundColor: #A2227F;height: 98rpx" class="rounded-10"
					@click="checkStatus">{{ $t('check.result') }}</button>
			</view>
			
			<view style="height: 50rpx;"></view>

		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			back() {
				uni.reLaunch({
					url: '/pages/index/index'
				});
			},
			checkStatus() {
				uni.showLoading({
					title: this.$t('waiting'),
					mask: true
				});
				
				setTimeout(function() {
					uni.hideLoading();
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