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

		<view style="margin-left: 30rpx; margin-right: 30rpx; margin-bottom: 32rpx; background-color: white;"
			:style="'height:'+scrollH+ 'px;'" class="px-30">

			<scroll-view scroll-y="true" :style="'height:'+scrollH+ 'px;'">
				<view
					style="height: 85rpx; background-color: #F3F6F3; margin-top: 64rpx; color: #A2227F; font-size: 26rpx; font-weight: bolder;"
					class="flex align-center justify-center">
					{{ $t('data.secure') }}
				</view>

				<view style="margin-top: 45rpx;">
					<input type="text" v-model="firstName" class="border-bottom" :placeholder="$t('first.name')"
						placeholder-style="color:#B4B4B4; font-size:30rpx; font-weight:500; text-align: center;"
						style="height: 90rpx; color: #444444; font-weight: 500; font-size: 30rpx;text-align: center;" />
				</view>

				<view style="margin-top: 25rpx;">
					<input type="text" v-model="lastName" class="border-bottom" :placeholder="$t('last.name')"
						placeholder-style="color:#B4B4B4; font-size:30rpx; font-weight:500; text-align: center;"
						style="height: 90rpx; color: #444444; font-weight: 500; font-size: 30rpx;text-align: center;" />
				</view>

				<view style="margin-top: 25rpx;">
					<input type="number" v-model="nationalIdCardNumber" class="border-bottom"
						:placeholder="$t('id.number')"
						placeholder-style="color:#B4B4B4; font-size:30rpx; font-weight:500; text-align: center;"
						style="height: 90rpx; color: #444444; font-weight: 500; font-size: 30rpx;text-align: center;" />
				</view>

				<view style="margin-top: 25rpx;">
					<input type="number" v-model="phone" class="border-bottom" :placeholder="$t('phone')"
						placeholder-style="color:#B4B4B4; font-size:30rpx; font-weight:500; text-align: center;"
						style="height: 90rpx; color: #444444; font-weight: 500; font-size: 30rpx;text-align: center;" />
				</view>

				<view style="margin-top: 25rpx;">
					<input type="text" v-model="email" class="border-bottom" :placeholder="$t('e.mail')"
						placeholder-style="color:#B4B4B4; font-size:30rpx; font-weight:500; text-align: center;"
						style="height: 90rpx; color: #444444; font-weight: 500; font-size: 30rpx;text-align: center;" />
				</view>

				<view class="flex flex-column" style="margin-top: 36rpx;">
					<text style="font-size: 30rpx; color: #444444; font-weight: 500;">{{ $t('birth') }}</text>

					<view class="flex flex-row" style="margin-top: 30rpx;">
						<view class="flex align-center justify-end flex-1 border-bottom" style="position: relative;">
							<picker class="flex-1" mode="selector" :range="dayRange" @change="onPickerChangeDay">
								<view class="flex align-center justify-center"
									style="height: 80rpx; text-align: center;">
									<template v-if="selectedDay === ''">
										<text
											style="font-size: 30rpx; color: #B4B4B4; font-weight: 500;">{{ $t('day') }}</text>
									</template>
									<template v-else>
										{{ selectedDay }}
									</template>
								</view>
							</picker>

							<image src="/static/icon/spinner_tag.png"
								style="width: 23rpx; height: 23rpx; position: absolute; bottom: 12rpx;"
								mode="aspectFit"></image>
						</view>

						<view class="flex align-center justify-end flex-1 border-bottom" style="position: relative;">
							<picker class="flex-1" mode="selector" :range="monthRange" @change="onPickerChangeMonth">
								<view class="flex align-center justify-center"
									style="height: 80rpx; text-align: center;">
									<template v-if="selectedMonth === ''">
										<text
											style="font-size: 30rpx; color: #B4B4B4; font-weight: 500;">{{ $t('month') }}</text>
									</template>
									<template v-else>
										{{ selectedMonth }}
									</template>
								</view>
							</picker>

							<image src="/static/icon/spinner_tag.png"
								style="width: 23rpx; height: 23rpx; position: absolute; bottom: 12rpx;"
								mode="aspectFit"></image>
						</view>

						<view class="flex align-center justify-end flex-1 border-bottom" style="position: relative;">
							<picker class="flex-1" mode="selector" :range="yearRange" @change="onPickerChangeYear">
								<view class="flex align-center justify-center"
									style="height: 80rpx; text-align: center;">
									<template v-if="selectedYear === ''">
										<text
											style="font-size: 30rpx; color: #B4B4B4; font-weight: 500;">{{ $t('year') }}</text>
									</template>
									<template v-else>
										{{ selectedYear }}
									</template>
								</view>
							</picker>

							<image src="/static/icon/spinner_tag.png"
								style="width: 23rpx; height: 23rpx; position: absolute; bottom: 12rpx;"
								mode="aspectFit"></image>
						</view>
					</view>
				</view>

				<view style="margin-top: 36rpx;" class="border-bottom">
					<text style="font-size: 30rpx; color: #444444; font-weight: 500;">{{ $t('gender') }}</text>
					<view style="margin-top: 36rpx;">
						<radio-group class="flex flex-row" @change="onChange">
							<radio value="0" :checked="gender === '0'"
								style="font-size: 30rpx; color: #B4B4B4; font-weight: 500;"
								active-background-color="#B41949" border-color="#B41949">{{ $t('male') }}</radio>
							<view style="width: 100rpx;"></view>
							<radio value="1" :checked="gender === '1'"
								style="font-size: 30rpx; color: #B4B4B4; font-weight: 500;"
								active-background-color="#B41949" border-color="#B41949">{{ $t('female') }}</radio>
						</radio-group>
					</view>
					<view style="height: 24rpx;"></view>
				</view>

				<view class="flex flex-row align-center" style="margin-top: 36rpx;">
					<checkbox border-color="#B41949" active-background-color="#B41949" icon-color="white" :checked="isChecked === true ? 'true' : 'false'"
						@click="handleCheckboxClick"></checkbox>
					<text style="margin-left: 12rpx; color: #4F4F4F; font-size: 26rpx;">{{ $t('policy.first') }}
						<text style="color: #9B284A;" @click="skipToPolicy">{{ $t('privacy.policy') }}</text></text>
				</view>

				<view style="width: 100%; margin-top: 45rpx;">
					<button type="primary" :disabled="isButtonDisabled"
						:style="{ backgroundColor: isButtonDisabled ? '#CCCCCC' : '#A2227F', height: '98rpx' }"
						class="rounded-10" @click="register">{{ $t('register') }}</button>
				</view>

			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollH: 1000,
				firstName: "",
				lastName: "",
				nationalIdCardNumber: "",
				phone: "",
				email: "",
				dayRange: [],
				monthRange: [],
				yearRange: [],
				selectedDay: '',
				selectedMonth: '',
				selectedYear: '',
				gender: '0',
				isChecked: true
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success: res => {
					this.scrollH = res.windowHeight - res.statusBarHeight - uni.upx2px(140)
				}
			});

			// 构建 dayRange 数组
			const dayRange = [];
			for (let day = 1; day <= 31; day++) {
				dayRange.push(day);
			}
			this.dayRange = dayRange;

			// 构建 monthRange 数组
			const monthRange = [];
			for (let month = 1; month <= 12; month++) {
				monthRange.push(month);
			}
			this.monthRange = monthRange;

			// 获取当前年份
			const currentYear = new Date().getFullYear();

			// 构建 yearRange 数组
			const yearRange = [];
			for (let year = 1900; year <= currentYear; year++) {
				yearRange.push(year);
			}
			this.yearRange = yearRange;
		},
		computed: {
			isButtonDisabled() {
				return this.firstName === '' || this.lastName === '' || this.nationalIdCardNumber === '' || this.phone ===
					'' || this.email === '' || this.selectedDay === '' || this
					.selectedMonth === '' || this.selectedYear === '' || this.isChecked === false;
			}
		},
		methods: {
			back() {
				uni.navigateBack();
			},
			onPickerChangeDay(event) {
				const selectedIndex = event.detail.value;
				this.selectedDay = this.dayRange[selectedIndex];
			},
			onPickerChangeMonth(event) {
				const selectedIndex = event.detail.value;
				this.selectedMonth = this.monthRange[selectedIndex];
			},
			onPickerChangeYear(event) {
				const selectedIndex = event.detail.value;
				this.selectedYear = this.yearRange[selectedIndex];
			},
			onChange(event) {
				this.gender = event.detail.value;
			},
			skipToPolicy() {
				console.log('aaaaaaa');
			},
			validateDate() {
				let month = this.selectedMonth.toString().length === 1 ? "0" + this.selectedMonth : this.selectedMonth
				let day = this.selectedDay.toString().length === 1 ? "0" + this.selectedDay : this.selectedDay

				let dateString = this.selectedYear + '-' + month + '-' + day;
				const date = new Date(dateString);

				return (
					date.toString() !== 'Invalid Date' &&
					date.toISOString().slice(0, 10) === dateString
				);
			},
			handleCheckboxClick() {
				this.isChecked = !this.isChecked;
			},
			register() {
				if (!this.validateDate()) {
					uni.showToast({
						title: this.$t('date.error.tips'),
						position: 'bottom'
					});

					return;
				}

				let month = this.selectedMonth.toString().length === 1 ? "0" + this.selectedMonth : this.selectedMonth
				let day = this.selectedDay.toString().length === 1 ? "0" + this.selectedDay : this.selectedDay

				let data = {
					'first_name': this.firstName,
					'last_name': this.lastName,
					'nic': this.nationalIdCardNumber,
					'phone': this.phone,
					'email': this.email,
					'birth': this.selectedYear + '-' + month + '-' + day,
					'gender': parseInt(this.gender)
				};
				uni.showLoading({
					title: this.$t('waiting'),
					mask: true
				});

				this.$H.post('/user/register', data).then(res => {
					console.log(res);
					uni.hideLoading();


					let name = this.firstName + ' ' + this.lastName;
					let idNumber = this.nationalIdCardNumber;

					try {
						uni.setStorageSync("name", name);
						uni.setStorageSync("nationalIdNumber", idNumber);
					} catch (e) {

					}

					uni.navigateTo({
						url: '/pages/account/finish-register/finish-register?phone=' + this.phone
					});
				}).catch(err => {
					uni.hideLoading();
					if (err === 'ya registrado' || err === 'already registered') {
						uni.navigateTo({
							url: '/pages/account/already-register/already-register'
						});
					}
					console.log(err);
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