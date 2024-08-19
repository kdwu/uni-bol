<template>
	<view>
		<view>
			<status-bar></status-bar>
		</view>

		<view class="flex flex-row p-31 align-center">
			<image src="/static/icon/back.png" style="width: 45rpx; height: 45rpx;" @click="back"></image>
			<text class="w_fill" style="text-align: center; font-size: 36rpx; color: #3C3C3C; font-weight: bolder;">{{ $t('bank.information') }}</text>
		</view>

		<view class="mx-30"
			style="padding-left: 42rpx; padding-right: 42rpx; margin-top: 20rpx; background-color: white;">

			<view style="height: 59rpx;"></view>

			<view class="flex flex-column">
				<text style="font-size: 30rpx; color: #444444; font-weight: 500;">{{ $t('bank.card.tips') }}</text>
				<view class="flex align-center justify-end flex-1 border-bottom"
					style="position: relative; margin-top: 30rpx;">
					<picker class="flex-1" mode="selector" :range="bankCardRange" @change="onPickerChangeBankNum">
						<view class="flex align-center justify-center" style="height: 80rpx; text-align: center;">
							<template v-if="bankCardCount === -1">
								<text style="font-size: 30rpx; color: #B4B4B4; font-weight: 500;">{{ $t('select.card.tips') }}</text>
							</template>
							<template v-else>
								{{ bankCardCount }}
							</template>
						</view>
					</picker>

					<image src="/static/icon/spinner_tag.png"
						style="width: 23rpx; height: 23rpx; position: absolute; bottom: 12rpx;" mode="aspectFit">
					</image>
				</view>
			</view>

			<view class="flex flex-column" style="margin-top: 36rpx;">
				<text style="font-size: 30rpx; color: #444444; font-weight: 500;">{{ $t('credit.card.tips') }}</text>
				<view class="flex align-center justify-end flex-1 border-bottom"
					style="position: relative; margin-top: 30rpx;">
					<picker class="flex-1" mode="selector" :range="creditCardRange" @change="onPickerChangeCreditNum">
						<view class="flex align-center justify-center" style="height: 80rpx; text-align: center;">
							<template v-if="creditCardCount === -1">
								<text style="font-size: 30rpx; color: #B4B4B4; font-weight: 500;">{{ $t('select.card.tips') }}</text>
							</template>
							<template v-else>
								{{ creditCardCount }}
							</template>
						</view>
					</picker>

					<image src="/static/icon/spinner_tag.png"
						style="width: 23rpx; height: 23rpx; position: absolute; bottom: 12rpx;" mode="aspectFit">
					</image>
				</view>
			</view>

			<template v-if="bindBankName === '' || bindBankAccount === ''">
				<view class="flex flex-column" style="margin-top: 36rpx;" @click="addBank">
					<text style="font-size: 30rpx; color: #444444; font-weight: 500;">{{ $t('add.bank.card') }}</text>
					<view class="flex align-center justify-center" style="margin-top: 36rpx;">
						<view style="width: 436rpx; height: 248rpx; background-color: #EFEFEF;"
							class="flex align-center justify-center">
							<image src="/static/icon/add_bank.png" style="width: 88rpx; height: 88rpx;"
								mode="aspectFit"></image>
						</view>
					</view>
				</view>
			</template>
			<template v-else>
				<view class="flex flex-column" style="margin-top: 36rpx;">

					<view class="flex flex-row justify-between">
						<text style="font-size: 30rpx; color: #444444; font-weight: 500;">{{ $t('bound.bank.card') }}</text>
						<text style="font-size: 30rpx; color: #A2227F; font-weight: 500;" @click="addBank">{{ $t('change') }}</text>
					</view>

					<view style="margin-top: 25rpx; height: 248rpx; padding-left: 36rpx; padding-top: 30rpx;"
						class="border-bank flex flex-column">

						<text style="font-size: 34rpx; color: #444444; font-weight: 500;">{{ bindBankName }}</text>
						<text
							style="font-size: 34rpx; color: #444444; font-weight: 500; margin-top: 26rpx;">{{ bindBankAccount }}</text>

						<view class="flex justify-end">
							<image src="/static/icon/logo_top.png" style="width: 256rpx; height: 85rpx;"
								mode="aspectFit"></image>
						</view>

					</view>

				</view>
			</template>


			<view style="width: 100%; margin-top: 36rpx;">
				<button type="primary" :disabled="isButtonDisabled"
					:style="{ backgroundColor: isButtonDisabled ? '#CCCCCC' : '#A2227F', height: '98rpx' }"
					class="rounded-10" @click="confirm">{{ $t('confirm') }}</button>
			</view>

			<view style="height: 50rpx;"></view>

		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				bankCardCount: -1,
				bankCardRange: [
					1,
					2,
					3,
					4,
					5
				],
				creditCardCount: -1,
				creditCardRange: [
					1,
					2,
					3,
					4,
					5
				],
				bindBankName: '',
				bindBankAccount: '',
				bankNameRange: [
					"Banco Nacional de Bolivia",
					"Banco de Crédito de Bolivia",
					"Banco Mercantil Santa Cruz ",
					"Banco FIE",
					"Banco Ganadero"
				]
			}
		},
		computed: {
			isButtonDisabled() {
				return this.bankCardCount === -1 || this.creditCardCount === -1 || this.bindBankName === '' || this
					.bindBankAccount === '';
			}
		},
		onLoad() {
			uni.$on('dataFromNextPage', (data) => {
				// 在这里处理 back 回来的数据
				this.bindBankName = data.bankName;
				this.bindBankAccount = data.accountNumber;
			});

			uni.showLoading({
				title: this.$t('waiting'),
				mask: true
			});
			this.$H.post('/app/get_bank_data').then(res => {
				uni.hideLoading();

				if (typeof res.bankCardCount === 'undefined') return;
				
				this.bankCardCount = res.bankCardCount;
				this.creditCardCount = res.creditCardCount;
				this.bindBankName = res.bindBankName;
				this.bindBankAccount = res.bindBankAccount;

			}).catch(err => {
				uni.hideLoading();
			});
		},
		methods: {
			back() {
				uni.navigateBack();
			},
			onPickerChangeBankNum(event) {
				const selectedIndex = event.detail.value;
				this.bankCardCount = this.bankCardRange[selectedIndex];
			},
			onPickerChangeCreditNum(event) {
				const selectedIndex = event.detail.value;
				this.creditCardCount = this.creditCardRange[selectedIndex];
			},
			addBank() {
				uni.navigateTo({
					url: '/pages/information/add-bank/add-bank'
				});
			},
			confirm() {
				let data = {
					bankCardCount: this.bankCardCount,
					bankCardRange: [
						1,
						2,
						3,
						4,
						5
					],
					creditCardCount: this.creditCardCount,
					creditCardRange: [
						1,
						2,
						3,
						4,
						5
					],
					bindBankName: this.bindBankName,
					bindBankAccount: this.bindBankAccount,
					bankNameRange: [
						"Banco Nacional de Bolivia",
						"Banco de Crédito de Bolivia",
						"Banco Mercantil Santa Cruz ",
						"Banco FIE",
						"Banco Ganadero"
					]
				};
				
				uni.showLoading({
					title: this.$t('waiting'),
					mask: true
				});
				this.$H.post('/app/save_bank_data', data).then(res => {
					uni.hideLoading();
					
					uni.getStorage({
						key: 'flag',
						success: function (res) {
							if (res.data === 'onlyReview') {
								uni.reLaunch({
									url: '/pages/index/index'
								});
							} else {
								uni.navigateTo({
									url: '/pages/refund/loan-application/loan-application'
								});
							}
						}
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