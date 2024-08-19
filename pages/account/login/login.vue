<template>
	<view>
		<view>
			<status-bar></status-bar>
		</view>

		<view class="flex p-31">
			<image src="/static/icon/close.png" style="width: 45rpx; height: 45rpx;" @click="back"></image>
		</view>
		
		<view class="flex align-center justify-center">
			<image src="/static/icon/logo_top.png" style="width: 560rpx; height: 186rpx; margin-top: 16rpx;"></image>
		</view>

		<view
			style="margin-top: 22rpx; background: linear-gradient(to bottom, #DCE3DC, #F9FFF9, #FFFFFF); box-shadow: 0rpx 2rpx 4rpx 0rpx rgba(0,0,0,0.16);"
			class="mx-30 px-24 flex flex-column align-center rounded-20">
			<text style="font-size: 36rpx; font-weight: bolder; color: #A2227F; height: 96rpx;"
				class="flex justify-center align-center">{{ $t('login') }}</text>

			<view class="flex align-center" style="background-color: #DCE3DC; width: 100%;">
				<image src="/static/icon/phone_tag.png"
					style="width: 46rpx; height: 46rpx; margin-left: 16rpx; margin-right: 36rpx;" mode="aspectFit">
				</image>
				<!--<text style="font-size: 30rpx; color: #060518; margin-right: 12rpx;">+591</text>-->
				<input type="number" v-model="phone" class="flex-1" :placeholder="$t('phone.number')"
					placeholder-style="color:#B4B4B4; font-size:30rpx; font-weight:500;"
					style="height: 90rpx; color: #444444; font-weight: 500; font-size: 30rpx;" />
			</view>

			<view class="flex align-center w_fill" style="margin-top: 20rpx; background-color: #DCE3DC;">
				<image src="/static/icon/password_tag.png"
					style="width: 46rpx; height: 46rpx; margin-left: 16rpx; margin-right: 36rpx;" mode="aspectFit">
				</image>
				<input :type="isPassword ? 'password' : 'text'" v-model="password" class="flex-1"
					:placeholder="$t('password')" placeholder-style="color:#B4B4B4; font-size:30rpx; font-weight:500;"
					style="height: 90rpx; color: #444444; font-weight: 500; font-size: 30rpx;" />
				<view class="px-20 flex align-center justify-center" style="height: 90rpx;"
					@click="changePasswordVisiable">
					<image
						:src="isPassword ? '/static/icon/hide_password.png' : '/static/icon/show_password.png'"
						style="width: 46rpx; height: 46rpx;" mode="aspectFit"></image>
				</view>
			</view>

			<view class="w_fill mt-20">
				<button type="primary" :disabled="isButtonDisabled"
					:style="{ backgroundColor: isButtonDisabled ? '#CCCCCC' : '#A2227F', height: '98rpx' }"
					class="rounded-10" @click="login">{{ $t('login') }}</button>
			</view>

			<view class="flex justify-end w_fill">
				<text
					style="font-size: 26rpx; color: #9B284A; padding-top: 27rpx; padding-bottom: 27rpx;" @click="toForgetPage">{{ $t('forget.password') }}</text>
			</view>

			<view style="height: 30rpx;"></view>

		</view>

		<view style="margin-top: 41rpx;" class="flex justify-center align-center">
			<text style="font-size: 26rpx; color: #A2227F;">{{ $t('no.account') }}</text>
		</view>

		<view style="margin-top: 43rpx;" class="w_fill flex justify-center align-center">
			<button type="primary"
				style="height: 100rpx; width: 471rpx; background: linear-gradient(to bottom left, #E6EBE5, #ECEFE9, #F5FBF4); color: #A2227F; font-size: 30rpx; box-shadow: 0rpx 2rpx 4rpx 0rpx rgba(0,0,0,0.16);"
				class="rounded-8 flex justify-center align-center" @click="register">{{ $t('register') }}</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone: "",
				password: "",
				isPassword: true
			}
		},
		computed: {
			isButtonDisabled() {
				return this.phone === '' || this.password === '';
			}
		},
		methods: {
			back() {
				uni.navigateBack();
			},
			changePasswordVisiable() {
				this.isPassword = !this.isPassword;
			},
			register() {
				uni.navigateTo({
					url: '/pages/account/register/register'
				});
			},
			toForgetPage() {
				uni.navigateTo({
					url: '/pages/account/forget-password/forget-password'
				});
			},
			login() {
				// uni.navigateTo({
				// 	url: "/pages/account/already-register/already-register"
				// });
				let data = {
					'phone': this.phone,
					'password': btoa(this.password)
				};
				uni.showLoading({
					title: this.$t('waiting'),
					mask: true
				});
				this.$H.post('/user/login_by_pwd', data).then(res => {
					uni.hideLoading();
					
					this.setLoginStatus(true);
					
					uni.setStorage({
						key: 'phone',
						 data: this.phone
					});
					
					uni.setStorageSync('token', res.token);
					
					uni.reLaunch({
						url: '/pages/index/index?phone='+this.phone
					});
				}).catch(err => {
					uni.hideLoading();
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