<template>
	<view>
		<view class="flex flex-column" style="background-color: #3F3F3F;">
			<status-bar></status-bar>
			<view class="flex flex-row p-31 align-center" style="background-color: #A2227F;">
				<image src="/static/icon/back_white.png" style="width: 45rpx; height: 45rpx;" @click="back"></image>
				<text class="w_fill" style="text-align: center; font-size: 36rpx; color: white;">{{ $t('loan.agreement2') }}</text>
			</view>
		</view>
		
		<view class="flex flex-column px-30">
			<view style="height: 16rpx;"></view>
			
			<text style="font-size: 28rpx; color: #666666; line-height: 1.5;">{{ $t('loan.agreement.tips1') }}</text>
			
			<text style="font-size: 30rpx; color: #333333; font-weight: bold; margin-top: 32rpx;">{{ $t('name') }}:  {{ name }}</text>
			<text style="font-size: 30rpx; color: #333333; font-weight: bold; margin-top: 16rpx;">{{ $t('id.number') }}:  {{ idNumber }}</text>
			<text style="font-size: 30rpx; color: #333333; font-weight: bold; margin-top: 16rpx;">{{ $t('phone') }}:  {{ phone }}</text>
			
			<text style="font-size: 28rpx; color: #666666; margin-top: 32rpx;">{{ $t('loan.agreement.tips2') }}</text>
			
			<text style="font-size: 30rpx; color: #333333; font-weight: bold; margin-top: 32rpx;">{{ $t('loan.amount') }}:  {{ $t('currency.unit') }}{{ loanAmount }}</text>
			<text style="font-size: 30rpx; color: #333333; font-weight: bold; margin-top: 16rpx;">{{ $t('loan.term') }}:  {{ loanTerm }} {{$t('days')}}</text>
			<text style="font-size: 30rpx; color: #333333; font-weight: bold; margin-top: 16rpx;">{{ $t('annual.interest.rate') }}:  {{ apr }}%</text>
			<text style="font-size: 30rpx; color: #333333; font-weight: bold; margin-top: 16rpx;">{{ $t('interest') }}:  {{ $t('currency.unit') }}{{ interest }}</text>
			<text style="font-size: 30rpx; color: #333333; font-weight: bold; margin-top: 16rpx;">{{ $t('repayment.date') }}:  {{ repaymentDate }}</text>
			<text style="font-size: 30rpx; color: #333333; font-weight: bold; margin-top: 16rpx;">{{ $t('repayment.amount') }}:  {{ $t('currency.unit') }}{{ repaymentAmount }}</text>
			
			<text style="font-size: 28rpx; color: #666666; margin-top: 32rpx; line-height: 1.5;">{{ $t('loan.agreement.tips3') }}</text>
			
			<text style="font-size: 26rpx; color: #999999; margin-top: 32rpx; line-height: 1.5;">{{ $t('loan.agreement.tips4') }}</text>
			<text style="font-size: 26rpx; color: #999999; margin-top: 32rpx; line-height: 1.5;">{{ $t('loan.agreement.tips5') }}</text>
			<text style="font-size: 26rpx; color: #999999; margin-top: 32rpx; line-height: 1.5;">{{ $t('loan.agreement.tips6') }}</text>
			<text style="font-size: 26rpx; color: #999999; margin-top: 32rpx; line-height: 1.5;">{{ $t('loan.agreement.tips7') }}</text>
			
			<view style="height: 60rpx;"></view>
			
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name: '',
				idNumber: '',
				phone: '',
				loanAmount: '',
				loanTerm: '',
				apr: '',
				interest: '',
				repaymentDate: '',
				repaymentAmount: ''
			}
		},
		onLoad(option) {
			try{
				this.name = uni.getStorageSync("name");
				this.idNumber = uni.getStorageSync("nationalIdNumber");
				this.phone = uni.getStorageSync("phone");
				
			}catch(e){
				
			}
			
			this.loanAmount = option.loanAmount;
			this.loanTerm = option.loanTerm;
			this.apr = option.apr;
			this.interest = option.interest;
			this.repaymentDate = option.repaymentDate;
			this.repaymentAmount = option.repaymentAmount;
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
