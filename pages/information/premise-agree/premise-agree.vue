<template>
	<view>
		<view class="flex flex-column" style="background-color: #3F3F3F;">
			<status-bar></status-bar>
			<view class="flex flex-row px-30 py-20 align-center" style="background-color: #A2227F;">
				<image src="/static/icon/back_white.png" style="width: 45rpx; height: 45rpx;" @click="back">
				</image>
				<text class="w_fill"
					style="text-align: center; font-size: 36rpx; color: white; font-weight: 500;">{{ $t('loan') }}</text>
			</view>
		</view>

		<view class="flex flex-column"
			style="margin-top: 32rpx; margin-left: 60rpx; margin-right: 60rpx; background-color: #F3F6F3; height: 212rpx;">
			<view class="flex justify-center">
				<image src="/static/icon/logo_top.png" style="width: 242rpx; height: 64rpx; margin-top: 39rpx;"
					mode="aspectFit"></image>
			</view>

			<view class="flex flex-row align-center" style="margin-top: 17rpx;">
				<image src="/static/icon/safe.png" style="width: 40rpx; height: 40rpx; margin-left: 27rpx;"
					mode="aspectFit"></image>
				<text
					style="font-size: 26rpx; color: #A2227F; font-weight: bolder; margin-left: 11rpx; margin-right: 27rpx;">{{ $t('premise.tips') }}</text>
			</view>
		</view>

		<view style="margin-top: 49rpx; margin-left: 66rpx; margin-right: 66rpx;">
			<text style="font-size: 30rpx; color: #A2227F;">{{ $t('premise.tips2') }}</text>
		</view>

		<view style="margin-top: 24rpx; margin-left: 66rpx; margin-right: 66rpx;">
			<text style="font-size: 30rpx; color: #666666;">{{ $t('premise.tips3') }}</text>
		</view>

		<view class="flex flex-column" style="margin-top: 53rpx; margin-left: 66rpx;">
			<!-- <view class="flex flex-row align-center">
				<image src="/static/icon/device_data.png" style="width: 101rpx; height: 101rpx;"
					mode="aspectFit"></image>
				<text style="font-size: 26rpx; color: #3E3E3E; font-weight: bolder; margin-left: 16rpx;">{{ $t('device.information') }}</text>
			</view>

			<view class="flex flex-row align-center" style="margin-top: 53rpx;">
				<image src="/static/icon/app_list.png" style="width: 101rpx; height: 101rpx;" mode="aspectFit">
				</image>
				<text style="font-size: 26rpx; color: #3E3E3E; font-weight: bolder; margin-left: 16rpx;">{{ $t('app.list') }}</text>
			</view> -->

			<view class="flex flex-row align-center" style="margin-top: 53rpx;">
				<image src="/static/icon/camera_permission.png" style="width: 101rpx; height: 101rpx;"
					mode="aspectFit"></image>
				<text style="font-size: 26rpx; color: #3E3E3E; font-weight: bolder; margin-left: 16rpx;">{{ $t('camera.permission') }}</text>
			</view>
		</view>
		
		<view style="margin-top: 108rpx; margin-left: 35rpx; margin-right: 35rpx;	">
			<text style="font-size: 30rpx; color: #666666;">{{ $t('premise.text1') }} 
				<text style="font-size: 30rpx; color: #A2227F;">{{ $t('premise.text2') }} </text>
				<text>{{ $t('premise.text3') }} </text>
			</text>
		</view>
		
		<view style="margin-top: 35rpx; margin-left: 25rpx; margin-right: 25rpx;">
			<button type="primary"
				style="backgroundColor: #A2227F;height: 98rpx"
				class="rounded-10" @click="confirm">{{ $t('confirm') }}</button>
		</view>
		
		<view style="height: 60rpx;"></view>
		
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
				uni.navigateBack();
			},
			confirm() {
				uni.setStorage({
					key: 'flag',
					data: 'edit',
					success: function () {
						uni.navigateTo({
							url: '/pages/information/info-basic/info-basic'
						});
					}
				});
			}
		}
	}
</script>

<style>

</style>