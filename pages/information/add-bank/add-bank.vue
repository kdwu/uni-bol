<template>
	<view>
		<view class="flex flex-column" style="background-color: #3F3F3F;">
			<status-bar></status-bar>
			<view class="flex flex-row p-31 align-center" style="background-color: #A2227F;">
				<image src="/static/icon/back_white.png" style="width: 45rpx; height: 45rpx;" @click="back">
				</image>
				<text class="w_fill" style="text-align: center; font-size: 36rpx; color: white;">{{ $t('add.bank.card') }}</text>
			</view>
		</view>
		
		
		<view class="mx-30" style="padding-left: 42rpx; padding-right: 42rpx;	 background-color: white; margin-top: 49rpx;">
		
			<view style="height: 25rpx;"></view>
		
			<view
				style="height: 100rpx; background-color: #F3F6F3; color: #A2227F; font-size: 26rpx; font-weight: bolder;"
				class="flex align-center justify-center px-30">
				{{ $t('add.bank.tips') }}
			</view>
		
			<view class="flex flex-column" style="margin-top: 54rpx;">
				<text style="font-size: 30rpx; color: #444444; font-weight: 500;">{{ $t('bank.name') }}</text>
				<view class="flex align-center justify-end flex-1 border-bottom"
					style="position: relative; margin-top: 30rpx;">
					<picker class="flex-1" mode="selector" :range="bankNameRange"
						@change="onPickerChangeBankName">
						<view class="flex align-center justify-center" style="height: 80rpx; text-align: center;">
							<template v-if="bankName === ''">
								<text style="font-size: 30rpx; color: #B4B4B4; font-weight: 500;">{{ $t('bank.name') }}</text>
							</template>
							<template v-else>
								{{ bankName }}
							</template>
						</view>
					</picker>
			
					<image src="/static/icon/spinner_tag.png"
						style="width: 23rpx; height: 23rpx; position: absolute; bottom: 12rpx;" mode="aspectFit">
					</image>
				</view>
			</view>
		
			<view style="margin-top: 60rpx;">
				<input type="number" v-model="account" class="border-bottom" :placeholder= "$t('account.number')"
					placeholder-style="color:#B4B4B4; font-size:30rpx; font-weight:500; text-align: center;"
					style="height: 90rpx; color: #444444; font-weight: 500; font-size: 30rpx;text-align: center;" />
			</view>
		
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
				bankName: "",
				bankNameRange: [
					"Banco Nacional de Bolivia",
					"Banco de Crédito de Bolivia",
					"Banco Mercantil Santa Cruz ",
					"Banco FIE",
					"Banco Ganadero"
				],
				account: ""
			}
		},
		computed: {
			isButtonDisabled() {
				return this.bankName === '' || this.account === '';
			}
		},
		methods: {
			back() {
				uni.navigateBack();
			},
			onPickerChangeBankName(event) {
				const selectedIndex = event.detail.value;
				this.bankName = this.bankNameRange[selectedIndex];
			},
			confirm() {
				const data = {
				  bankName: this.bankName,
				  accountNumber: this.account
				};
				
				uni.$emit('dataFromNextPage', data);
				
				uni.navigateBack();
			}
		}
	}
</script>

<style>
body {
		background-color: #F1F4F1;
	}

	button::after {
		border: none;
	}
</style>
