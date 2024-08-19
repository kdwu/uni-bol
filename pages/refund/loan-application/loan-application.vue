<template>
	<view>
		<view>
			<status-bar></status-bar>
		</view>

		<view class="flex flex-row p-31 align-center">
			<image src="/static/icon/back.png" style="width: 45rpx; height: 45rpx;" @click="back"></image>
			<text class="w_fill" style="text-align: center; font-size: 36rpx; color: #060518;">{{ $t('loan.application') }}</text>
		</view>

		<view class="mx-30 px-30" style="margin-top: 20rpx; background-color: white;">

			<view class="flex align-center justify-center"
				style="color: #A2227F; font-size: 40rpx; font-weight: 500; padding-top: 88rpx;">{{ $t('congratulations') }}<text
					style="font-size:  30rpx; color: #00C15D; font-weight: 500;">,</text></view>


			<view style="margin-top: 30rpx; text-align: center; font-size:  30rpx; color: #333333; font-weight: 500;">
				{{ $t('loan.application.tips') }}
			</view>

			<view class="flex align-center justify-center" style="margin-top: 95rpx; font-size: 30rpx; color: #666666;">
				{{ $t('select.amount') }}
			</view>

			<view class="flex align-center justify-center"
				style="margin-top: 50rpx; font-size:  90rpx; color: black; font-weight: bolder;">
				{{ $t('currency.unit') }}{{ value }}
			</view>

			<view>
				<slider :value="value" @change="onSliderChange" min="2000" max="10000" step="2000"
					active-color="#A2227F" background-color="#CCCCCC"></slider>
				<view class="flex flex-row" style="justify-content: space-between;">
					<text style="font-size: 30rpx; color: #666666;">2000</text>
					<text style="font-size: 30rpx; color: #666666;">10000</text>
				</view>
			</view>

			<view style="margin-top: 115rpx;">
				<text style="font-size: 30rpx; color: #444444; font-weight: 500;">{{ $t('loan.term') }}</text>
				<view class="flex flex-row" style="margin-top: 35rpx; justify-content: space-between;">
					<radio-group @change = "changeLoanTerm(0)">
						<label>
							<radio value="91_days" :checked="loanTerm === 0" style="font-size: 28rpx; color: #B4B4B4; font-weight: 500;"
								active-background-color="#B41949" border-color="#B41949">{{ $t('91.days') }}</radio>
						</label>
						
					</radio-group>
					
					<radio-group @change = "changeLoanTerm(1)">
						<label>
							<radio value="120_days" :checked="loanTerm === 1" style="font-size: 28rpx; color: #B4B4B4; font-weight: 500;"
								active-background-color="#B41949" border-color="#B41949">{{ $t('120.days') }}</radio>
						</label>
					</radio-group>
					
					<radio-group @change = "changeLoanTerm(2)">
						<label>
							<radio value="180_days" :checked="loanTerm === 2" style="font-size: 28rpx; color: #B4B4B4; font-weight: 500;"
								active-background-color="#B41949" border-color="#B41949">{{ $t('180.days') }}</radio>
						</label>
					</radio-group>
					
				</view>
				<view style="height: 2rpx; background-color: #B8B8B8; margin-top: 22rpx;"></view>
			</view>

			<view style="width: 100%; margin-top: 35rpx;">
				<button type="primary"
					style="backgroundColor: #A2227F;height: 98rpx"
					class="rounded-10" @click="confirm">{{ $t('confirm') }}</button>
			</view>
			
			<view style="height: 60rpx;"></view>
		</view>
		
		<view style="height: 40rpx;"></view>
			
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: 2000,
				loanTerm: 0,
				xLoanAmount: '2000',
				xLoanTerm: '91'
			}
		},
		methods: {
			back() {
				uni.navigateBack();
			},
			onSliderChange(event) {
				this.value = event.detail.value;
				
				this.xLoanAmount = this.value;
			},
			changeLoanTerm(e) {
				this.loanTerm = e;
				
				if (this.loanTerm === 0) {
					this.xLoanTerm = "91";
				} else if (this.loanTerm === 1) {
					this.xLoanTerm = "120";
				} else {
					this.xLoanTerm = "180";
				}
			},
			confirm() {
				uni.navigateTo({
					url: '/pages/refund/loan-information/loan-information?loanAmount=' + this.xLoanAmount + '&loanTerm=' + this.xLoanTerm
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

	/* 修改 slider 的高度 */
	.uni-slider-handle-wrapper {
		height: 21rpx !important;
	}
</style>