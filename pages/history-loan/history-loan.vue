<template>
	<view>
<view>
			<status-bar></status-bar>
		</view>

		<view class="flex flex-row p-31 align-center">
			<image src="/static/icon/back.png" style="width: 45rpx; height: 45rpx;" @click="back" mode="aspectFit"></image>
			<text class="w_fill"
				style="text-align: center; font-size: 36rpx; color: #3C3C3C; font-weight: bolder;">{{ $t('history.loan') }}</text>
		</view>
		
		<view style="height: 20rpx;"></view>
		
		<block v-for="(item, index) in list" :key="index">
			
			<view class="mx-30" style="height: 350rpx; background-color: white; padding-left: 42rpx; padding-right: 42rpx;">
				
				<view style="height: 42rpx;"></view>
				
				<view class="flex flex-row justify-between">
					<text style="font-size: 30rpx; color: #666666;">{{ $t('borrowing.time') }}</text>
					<text style="font-size: 30rpx; color: #333333; font-weight: 500;">{{ item.borrowing_time }}</text>
				</view>
				
				<view class="flex flex-row justify-between" style="margin-top: 20rpx;">
					<text style="font-size: 30rpx; color: #666666;">{{ $t('loan.term') }}</text>
					<text style="font-size: 30rpx; color: #333333; font-weight: 500;">{{ item.loan_term }} {{$t('days')}}</text>
				</view>
				
				<view class="dashed-line" style="margin-top: 20rpx;"></view>
				
				<view class="flex flex-row justify-between align-center" style="margin-top: 31rpx;">
					
					<view class="flex flex-column">
						<text style="font-size: 58rpx; color: #22232B; font-weight: bolder;">{{ $t('currency.unit') }}{{ item.loan_amount }}</text>
						<text style="font-size: 30rpx; color: #666666; margin-top: 7rpx;">{{ $t('loan.amount') }}</text>
					</view>
					
					<text style="font-size: 32rpx; font-weight: bolder;" :style = "item.loan_status === 'Cleared' ? 'color: #A2227F;' : 'color: #2C3643;' ">{{ item.loan_status }}</text>
					
				</view>
				
			</view>
			
			<view style="height: 30rpx;"></view>
			
		</block>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: []
			}
		},
		onLoad() {
			uni.showLoading({
				title: this.$t('waiting'),
				mask: true
			});
			this.$H.post('/user/get_order_list').then(res => {
				uni.hideLoading();
				
				this.list = res.list;
			}).catch(err => {
				uni.hideLoading();
			});
		},
		methods: {
			back() {
				uni.navigateBack();
			}
		}
	}
</script>

<style>
	body {
		background-image: url('/static/icon/bg.png');
		background-size: cover;
	}
	.dashed-line {
	  border-bottom: 1px dashed #999999;
	}
</style>