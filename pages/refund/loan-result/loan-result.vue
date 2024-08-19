<template>
	<view>
		<view>
			<status-bar></status-bar>
		</view>

		<view class="flex flex-row p-31 align-center">
			<image src="/static/icon/back.png" style="width: 45rpx; height: 45rpx;" @click="back"></image>
			<text class="w_fill"
				style="text-align: center; font-size: 36rpx; color: #060518;">{{ $t('application.result') }}</text>
		</view>

		<view
			style="margin-top: 225rpx; background-color: #FBFFFA; box-shadow: 0rpx 2rpx 4rpx 0rpx rgba(0,0,0,0.16); height: 500rpx;"
			class="mx-30 px-24 flex flex-column align-center rounded-20">

			<text style="font-size: 36rpx; font-weight: bolder; color: #A2227F; margin-top: 80rpx;"
				class="flex justify-center align-center">{{ $t('successful.application') }}</text>

			<text style="font-size: 28rpx; color: #999999; text-align: center; margin-top: 20rpx; line-height: 1.5;"
				class="mx-10">
				{{ $t('application.result.tips') }}
			</text>

			<view style="width: 100%; margin-top: 60rpx;">
				<button type="primary" style="backgroundColor: #A2227F;height: 98rpx" class="rounded-10"
					@click="confirm">{{ $t('confirm') }}</button>
			</view>

		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad() {
			setTimeout(function() {
				uni.navigateTo({
					url: '/pages/information/loan-status/loan-status'
				});
			}, 5000);
		},
		methods: {
			back() {
				uni.navigateBack();
			},
			confirm() {
				uni.navigateTo({
					url: '/pages/information/loan-status/loan-status'
				});
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