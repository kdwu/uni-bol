	<template>
		<view>
			<view>
				<status-bar></status-bar>
			</view>

			<view class="flex flex-row p-31 align-center">
				<image src="/static/icon/back.png" style="width: 45rpx; height: 45rpx;" @click="back"></image>
				<text class="w_fill"
					style="text-align: center; font-size: 36rpx; color: #3C3C3C; font-weight: bolder;">{{ $t('register') }}</text>
			</view>

			<view
				style="margin-top: 225rpx; background: linear-gradient(to bottom, #DCE3DC, #F9FFF9, #FFFFFF); box-shadow: 0rpx 2rpx 4rpx 0rpx rgba(0,0,0,0.16);"
				class="mx-30 px-24 flex flex-column align-center rounded-20">

				<text style="font-size: 34rpx; font-weight: 500; color: #060518; margin-top: 177rpx; text-align: center;"
					class="flex justify-center align-center">{{ $t('already.login.tips') }}</text>

				<view class="w_fill" style="margin-top: 84rpx;">
					<button type="primary" style="background-color: #A2227F; height: 98rpx;" class="rounded-10"
						@click="login">{{ $t('login') }}</button>
				</view>

				<view style="height: 124rpx;"></view>

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
				},
				login() {
					uni.navigateTo({
						url: '/pages/account/login/login'
					});
				}
			}
		}
	</script>

	<style>

	</style>