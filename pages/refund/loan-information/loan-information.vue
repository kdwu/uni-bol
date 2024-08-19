<template>
	<view>
		<view>
			<status-bar></status-bar>
		</view>

		<view class="flex flex-row p-31 align-center">
			<image src="/static/icon/back.png" style="width: 45rpx; height: 45rpx;" @click="back"></image>
			<text class="w_fill"
				style="text-align: center; font-size: 36rpx; color: #060518;">{{ $t('loan.information') }}</text>
		</view>

		<view class="mx-30 px-30" style="background-color: white;">

			<view style="height: 30rpx;"></view>

			<view class="flex flex-row justify-between align-center" style="height: 100rpx;">
				<text style="font-size: 30rpx; color: #666666;">{{ $t('loan.amount') }}</text>
				<text
					style="font-size: 34rpx; color: #333333; font-weight: bolder;">{{ $t('currency.unit') }}{{loanAmount}}</text>
			</view>

			<view class="flex flex-row justify-between align-center" style="height: 100rpx;">
				<text style="font-size: 30rpx; color: #666666;">{{ $t('loan.term') }}</text>
				<text style="font-size: 34rpx; color: #333333; font-weight: bolder;">{{loanTerm}} Days</text>
			</view>

			<view class="flex flex-row justify-between align-center" style="height: 100rpx;">
				<view class="flex flex-column">
					<text style="font-size: 30rpx; color: #666666;">{{ $t('interest') }}</text>
					<text style="font-size: 26rpx; color: #999999;">(APR = {{ apr }}%)</text>
				</view>
				<text
					style="font-size: 34rpx; color: #333333; font-weight: bolder;">{{ $t('currency.unit') }}{{interest}}</text>
			</view>

			<view class="flex flex-row justify-between align-center" style="height: 100rpx;">
				<text style="font-size: 30rpx; color: #666666;">{{ $t('repayment.date') }}</text>
				<text style="font-size: 34rpx; color: #333333; font-weight: bolder;">{{ repaymentDate }}</text>
			</view>

			<view style="margin-top: 16rpx;">
				<text style="font-size: 28rpx; font-weight: 500; color: red;">
					{{ $t('loan.information.tips1') }}
				</text>
			</view>

			<view class="flex flex-row justify-between align-center" style="height: 100rpx;">
				<text style="font-size: 30rpx; color: #666666;">{{ $t('repayment.amount') }}</text>
				<text
					style="font-size: 34rpx; color: #333333; font-weight: bolder;">{{ $t('currency.unit') }}{{repaymentAmount}}</text>
			</view>

			<view style="margin-top: 16rpx;">
				<text style="font-size: 28rpx; font-weight: 500; color: red;">
					{{ $t('loan.information.tips2') }}
				</text>
			</view>

			<view style="width: 100%; margin-top: 32rpx;">
				<button type="primary" style="backgroundColor: #A2227F;height: 98rpx" class="rounded-10"
					@click="getLoan">{{ $t('get.the.loan') }}</button>
			</view>

			<view class="flex flex-row align-center" style="margin-top: 36rpx;">
				<checkbox border-color="#B41949" active-background-color="#B41949" icon-color="white" :checked="isChecked === true ? 'true' : 'false'" @click="changeChecked">
				</checkbox>
				<text style="margin-left: 12rpx; color: #4F4F4F; font-size: 26rpx;">{{ $t('policy.first') }}
					<text style="color: #9B284A;" @click="skipTpLoanAgreement">{{ $t('loan.agreement') }}</text></text>
			</view>

			<view style="height: 60rpx;"></view>

		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				loanAmount: '',
				loanTerm: '',
				apr: '',
				interest: '',
				repaymentDate: '',
				repaymentAmount: '',
				isChecked: true
			}
		},
		onLoad(option) {
			this.loanAmount = option.loanAmount;
			this.loanTerm = option.loanTerm;

			this.calcuShowData(this.loanAmount, this.loanTerm);
		},
		methods: {
			back() {
				uni.navigateBack();
			},
			skipTpLoanAgreement() {
				uni.navigateTo({
					url: '/pages/refund/loan-agreement/loan-agreement?loanAmount='+this.loanAmount + '&loanTerm=' + this.loanTerm 
					+ '&apr=' + this.apr + '&interest=' + this.interest + '&repaymentDate=' + this.repaymentDate + '&repaymentAmount=' + this.repaymentAmount
				});
			},
			changeChecked() {
				this.isChecked = !this.isChecked;
			},
			calcuShowData(loanAmount, loanTerm) {

				this.apr = uni.getStorageSync('apr')

				if (this.apr === '' || typeof this.apr === 'undefined') {
					// 生成20%到30%的随机数
					const min = 20;
					const max = 30;
					const randomPercentage = (Math.random() * (max - min) + min).toFixed(2);
					this.apr = randomPercentage;

					uni.setStorageSync('apr', this.apr);
				}

				const loanAmountFloat = parseFloat(loanAmount);
				const aprFloat = parseFloat(this.apr);
				const loanTermInt = parseInt(loanTerm);

				this.interest = (loanAmountFloat * aprFloat / 100 / 365 * loanTermInt).toFixed(2);

				const today = new Date();
				today.setDate(today.getDate() + parseInt(loanTerm));
				this.repaymentDate = today.toISOString().split('T')[0];

				this.repaymentAmount = (loanAmountFloat + parseFloat(this.interest)).toString();
			},
			getLoan() {
				if(!this.isChecked) {
					uni.showToast({
						title: this.$t('loan.agreement.not.checked.tips'),
						position:'bottom'
					});
					
					return;
				}
				
				uni.showLoading({
					title: this.$t('waiting'),
					mask: true
				});

				setTimeout(function() {
					uni.hideLoading();
					// 延时执行的代码
					uni.navigateTo({
						url: '/pages/refund/loan-result/loan-result'
					});
				}, 2000);


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
</style>