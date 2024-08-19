<template>
	<view>
		<view>
			<status-bar></status-bar>
		</view>

		<view class="flex flex-row p-31 align-center">
			<image src="/static/icon/back.png" style="width: 45rpx; height: 45rpx;" @click="back"></image>
			<text class="w_fill" style="text-align: center; font-size: 36rpx; color: #3C3C3C; font-weight: bolder;">{{ $t('set.password') }}</text>
		</view>

		<view
			style="margin-top: 225rpx; background: linear-gradient(to bottom, #DCE3DC, #F9FFF9, #FFFFFF); box-shadow: 0rpx 2rpx 4rpx 0rpx rgba(0,0,0,0.16);"
			class="mx-30 px-30 flex flex-column align-center rounded-20">
			<text style="font-size: 34rpx; font-weight: 500; color: #A2227F; margin-top: 58rpx; text-align: center;"
				class="flex justify-center align-center">{{ $t('set.password.tips') }}</text>

			<view class="flex align-center border-bottom" style="width: 100%; margin-top: 30rpx;">
				<input :type="isPassword ? 'password' : 'text'" v-model="password" class="flex-1" :placeholder="$t('password')"
					placeholder-style="color:#B4B4B4; font-size:30rpx; font-weight:500; text-align: center;"
					style="height: 90rpx; color: #444444; font-weight: 500; font-size: 30rpx;text-align: center;" />
				<view class="px-20 flex align-center justify-center" style="height: 90rpx;"
					@click="changePasswordVisiable">
					<image
						:src="isPassword ? '/static/icon/hide_password.png' : '/static/icon/show_password.png'"
						style="width: 46rpx; height: 46rpx;" mode="aspectFit"></image>
				</view>
			</view>

			<view class="flex align-center w_fill border-bottom" style="margin-top: 25rpx;">
				<input :type="isRepearPassword ? 'password' : 'text'" v-model="passwordRepeat" class="flex-1"
					:placeholder="$t('repeat.password')"
					placeholder-style="color:#B4B4B4; font-size:30rpx; font-weight:500; text-align: center;"
					style="height: 90rpx; color: #444444; font-weight: 500; font-size: 30rpx; text-align: center;" />
				<view class="px-20 flex align-center justify-center" style="height: 90rpx;"
					@click="changeRepeatPasswordVisiable">
					<image
						:src="isRepearPassword ? '/static/icon/hide_password.png' : '/static/icon/show_password.png'"
						style="width: 46rpx; height: 46rpx;" mode="aspectFit"></image>
				</view>
			</view>

			<template v-if="password !== ''">
				<template v-if="password !== passwordRepeat">
					<text style="margin-top: 24rpx; color: #EA1E1E; font-size: 30rpx; font-weight: 500; text-align: center;">{{ $t('set.password.tips2') }}</text>
				</template>
				<template v-else>
					<template v-if="password.toString().length < 6">
						<text style="margin-top: 24rpx; color: #EA1E1E; font-size: 30rpx; font-weight: 500; text-align: center;">{{ $t('set.password.tips3') }}</text>
					</template>
					<template v-else>
						<template v-if="password.toString().length > 12">
							<text style="margin-top: 24rpx; color: #EA1E1E; font-size: 30rpx; font-weight: 500; text-align: center;">{{ $t('set.password.tips4') }}</text>
						</template>
						<template v-else>
							<view style="height: 66rpx;"></view>
						</template>
					</template>
				</template>
			</template>
			<template v-else>
				<view style="height: 66rpx;"></view>
			</template>


			<view class="w_fill" style="margin-top: 18rpx;">
				<button type="primary" :disabled="isButtonDisabled"
					:style="{ backgroundColor: isButtonDisabled ? '#CCCCCC' : '#A2227F', height: '98rpx' }"
					class="rounded-10" @click="verify">{{ $t('verify') }}</button>
			</view>

			<view style="height: 23rpx;"></view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone: '',
				code: '',
				password: '',
				passwordRepeat: '',
				isPassword: true,
				isRepearPassword: true
			}
		},
		computed: {
			isButtonDisabled() {
				return this.password === '' || this.passwordRepeat === '' || this.password.length < 6 || this
					.passwordRepeat.length < 6 || this.password !== this.passwordRepeat;
			}
		},
		onLoad(option) {
			this.phone = option.phone;
			this.code = option.code;
		},
		methods: {
			back() {
				uni.navigateBack();
			},
			changePasswordVisiable() {
				this.isPassword = !this.isPassword;
			},
			changeRepeatPasswordVisiable() {
				this.isRepearPassword = !this.isRepearPassword;
			},
			verify() {
				let data = {
					'phone': this.phone,
					'code': this.code,
					'password': this.password
				};
				uni.showLoading({
					title: this.$t('waiting'),
					mask:true
				});
				//console.log(data);
				this.$H.post('/user/set_pwd', data).then(res => {
					uni.hideLoading();
					
					console.log(res);
					uni.setStorageSync("token", res.token)
					uni.navigateTo({
						url: '/pages/account/login/login'
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