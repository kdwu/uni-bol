<template>
	<view>
		
		<view class="flex flex-column" style="background-color: #3F3F3F;">
			<status-bar></status-bar>
			<view class="flex flex-row p-31 align-center" style="background-color: #A2227F;">
				<image src="/static/icon/back_white.png" style="width: 45rpx; height: 45rpx;" @click="back"></image>
				<text class="w_fill" style="text-align: center; font-size: 36rpx; color: white;">{{ $t('my.coupons') }}</text>
			</view>
		</view>
		
		<view class="flex align-center justify-center" style="margin-top: 383rpx;">
			<image src="/static/icon/empty_box.png" mode="aspectFit" style="width: 265rpx; height: 265rpx;"></image>
		</view>
		
		<view class="flex align-center justify-center" style="margin-top: 67rpx;">
			<text style="font-size: 30rpx; color: #666666;">{{ $t('my.coupons.tips') }}</text>
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
