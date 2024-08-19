<template>
	<view>
		<view class="flex flex-column" style="background-color: #3F3F3F;">
			<status-bar></status-bar>
			<view class="flex flex-row p-31 align-center" style="background-color: #A2227F;">
				<image src="/static/icon/back_white.png" style="width: 45rpx; height: 45rpx;" @click="back"></image>
				<text class="w_fill" style="text-align: center; font-size: 36rpx; color: white;">{{ $t('notify') }}</text>
			</view>
		</view>
		
		<view class="flex flex-column border-bottom mx-30" style="margin-top: 33rpx;">
			<view class="flex flex-row align-center">
				<image src="/static/icon/notify.png" style="width: 92rpx; height: 92rpx;" mode="aspectFit"></image>
				<view class="flex flex-column" style="margin-left: 36rpx;">
					<text style="font-size: 30rpx; color: #333333; font-weight: 500;">{{ $t('notify.tips') }}</text>
					<view class="flex flex-row justify-between align-center" style="margin-top: 10rpx; width: 562rpx;">
						<text style="font-size: 26rpx; color: #B4B4B4; font-weight: 500;">{{ $t('register.success') }}</text>
						<text style="font-size: 30rpx; color: #B4B4B4; font-weight: 500;">2024-05-22</text>
					</view>
				</view>	
			</view>
			
			<view style="height: 35rpx;"></view>
			
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
				uni.navigateBack();
			}
		}
	}
</script>

<style>

</style>
