<template>
	<view>
		<status-bar></status-bar>

		<view style="width: 100%; height: 116rpx; background: linear-gradient(to bottom, #FFFFFE, #B6BEBA);"
			class="flex align-center">

			<view class="flex align-center justify-center" style="width: 100%;">
				<!-- padding-left: 104rpx; -->
				<image src="/static/icon/logo_top.png" style="width: 306rpx; height: 80rpx;" mode="aspectFit">
				</image>
			</view>

			<!-- <view class="flex align-center justify-end">
				<image src="/static/icon/refresh.png"
					style="width: 44rpx; height: 44rpx; padding-top: 36rpx; padding-bottom: 36rpx;" class="px-30"
					mode="aspectFit"></image>
			</view> -->

		</view>

		<view style="background-color: #A2227F;">
			<view style="display: flex; justify-content: space-between;">
				<view style="display: flex; flex: 1; flex-direction: column; align-items: center;"
					@click="switchTab(0)">
					<image src="/static/tabbar/tab_home.png" style="width: 54rpx; height: 54rpx; margin-top: 15rpx;">
					</image>
					<text
						style="font-size:  22rpx; color: white; font-weight: 500; margin-top: 4rpx; margin-bottom: 11rpx;"
						:style="currentTab === 0 ? 'margin-bottom: 11rpx;' : 'margin-bottom: 15rpx;' ">{{ $t('tab.home') }}</text>
					<template v-if="currentTab === 0">
						<view style="height: 4rpx; width: 100%; background-color: white;"></view>
					</template>
				</view>
				<view style="display: flex; flex: 1; flex-direction: column; align-items: center;"
					@click="skipMessagePage">
					<image src="/static/tabbar/tab_msg.png" style="width: 54rpx; height: 54rpx; margin-top: 15rpx;">
					</image>
					<text
						style="font-size:  22rpx; color: white; font-weight: 500; margin-top: 4rpx; margin-bottom: 11rpx;"
						:style="currentTab === 1 ? 'margin-bottom: 11rpx;' : 'margin-bottom: 15rpx;' ">{{ $t('tab.message') }}</text>
					<template v-if="currentTab === 1">
						<view style="height: 4rpx; width: 100%; background-color: white;"></view>
					</template>
				</view>
			</view>
		</view>

		<view style="width: 100%; height: 171rpx; background-color: #10162C; justify-content: space-between;"
			class="flex flex-row align-center">
			<template v-if="phone !== ''">
				<view class="flex flex-column pl-30">
					<text style="font-size: 26rpx; font-weight: 500; color: white;">{{ $t('my.account') }}</text>
					<view style="height: 5rpx;"></view>
					<text style="font-size: 30rpx; font-weight: 500; color: white;">{{ phone }}</text>
				</view>
			</template>
			<template v-else>
				<view class="flex flex-column pl-30">
					<text style="font-size: 26rpx; font-weight: 500; color: white;">{{ $t('welcome') }}</text>
				</view>
			</template>


			<view class="flex flex-column pr-30">
				<text
					style="font-size: 26rpx; font-weight: 500; color: white; text-align: right;">{{ $t('show.max') }}</text>
				<view style="height: 5rpx;"></view>
				<text style="font-size: 30rpx; font-weight: 500; color: white; text-align: right;">Bs. 10000</text>
			</view>
		</view>

		<view style="width: 100%; height: 230rpx; background-color: #A2227F;"></view>

		<view style="margin-top: 5rpx; display: flex; justify-content: center;">
			<view style="display: flex; flex-wrap: wrap;">
				<view style="display: flex; width: 100%;" v-for="(row, rowIndex) in gridData" :key="rowIndex">
					<view class="border-login"
						style="height: 296rpx; width: 100%; display: flex; flex-direction: column; align-items: center;"
						v-for="(item, itemIndex) in row" :key="itemIndex" @click="operate(rowIndex, itemIndex)">
						<image style="width: 112rpx; height: 112rpx; margin-top: 55rpx;" :src="item.imageSrc"></image>
						<text
							style="margin-top: 45rpx; text-align: center; font-size: 30rpx; color: black;">{{ item.title }}</text>
					</view>
				</view>
			</view>
		</view>

		<!-- 第一次安装的弹框 -->
		<popup :visible="showPopup" @agree="handleAgree" @disagree="handleDisagree"></popup>
		
	</view>
</template>

<script>
	import popup from '@/components/popup.vue';

	export default {
		components: {
			popup
		},
		data() {
			return {
				currentTab: 0,
				gridData: [
					[{
							imageSrc: '/static/operation/1_1_refund.png',
							title: this.$t('loan')
						},
						{
							imageSrc: '/static/operation/1_2_pay.png',
							title: this.$t('repayment')
						},
						{
							imageSrc: '/static/operation/1_3_increase_amount.png',
							title: this.$t('increase.amount')
						},
						{
							imageSrc: '/static/operation/1_4_point.png',
							title: this.$t('points.discount')
						},
					],
					[{
							imageSrc: '/static/operation/2_1_his_order.png',
							title: this.$t('history.loan')
						},
						{
							imageSrc: '/static/operation/2_2_me.png',
							title: this.$t('material')
						},
						{
							imageSrc: '/static/operation/2_3_bank_card.png',
							title: this.$t('bank.card')
						},
						{
							imageSrc: '/static/operation/2_4_faq.png',
							title: 'FAQ'
						},
					],
					[{
							imageSrc: '/static/operation/3_1_about_us.png',
							title: this.$t('about.us')
						},
						{
							imageSrc: '/static/operation/3_2_version.png',
							title: this.$t('version.update')
						},
						{
							imageSrc: '/static/operation/3_3_policy.png',
							title: this.$t('privacy.policy')
						},
						{
							imageSrc: '/static/operation/3_4_logout.png',
							title: this.$t('logout')
						},
					]
				],
				policyUrl: "",
				faqUrl: "https://hl.hotlending.net/hotlending/application/views/h5/faq?app_name=Hot Lending",
				aboutUsUrl: "https://hl.hotlending.net/hotlending/application/views/h5/aboutUs?app_name=Hot Lending",
				agreementUrl: "",
				phone: "",
				showPopup: false
			}
		},
		onLoad() {

			try {
				// 检查用户是否是第一次安装
				const isFirstTime = uni.getStorageSync('isFirstTime');
				if (!isFirstTime) {
					// 第一次安装
					this.showPopup = true;
					uni.setStorageSync('isFirstTime', true);
				}
			} catch (e) {
				
			}

			uni.getStorage({
				key: 'phone',
				success: (res) => {
					if (typeof res.data !== '' && typeof res.data !== 'undefined') {
						this.phone = res.data.replace(/(\d{2})\d{4}(\d{2})/, '$1****$2');
					}
				}
			});


			uni.getSystemInfo({
				success: function(res) {
					var language = res.language.includes('en') ? 'en' : 'es';
					uni.setLocale(language);
				}
			});
		},
		methods: {
			//skipToLogin() {
			//	uni.navigateTo({
			//		url: '/pages/account/login/login'
			//	});
			//},
			loginCheck() {
				if (!this.isLogin) {
					uni.navigateTo({
						url: '/pages/account/login/login'
					});

					return true;
				}
				return false;
			},
			appHome() {
				this.$H.post('/app/home111').then(res => {
					console.log(res);
				}).catch(err => {
					console.log(err);
				});
			},
			switchTab(index) {
				this.currentTab = index;
			},
			skipMessagePage() {
				if (!this.loginCheck()) {
					uni.navigateTo({
						url: '/pages/message/message'
					});
				}
			},
			handleAgree() {
				this.showPopup = false;
			},
			handleDisagree() {
				// 执行退出整个app的逻辑
				uni.exit();
			},
			operate(rowIndex, columnIndex) {
				switch (rowIndex.toString() + columnIndex.toString()) {
					// 借款
					case "00":
						if (!this.loginCheck()) {
							uni.navigateTo({
								url: '/pages/information/premise-agree/premise-agree'
							});
						}
						break;
						// 还款
					case "01":
						if (!this.loginCheck()) {
							uni.navigateTo({
								url: '/pages/repay/repay'
							});
						}
						break;
						// 提额
					case "02":
						if (!this.loginCheck()) {
							uni.navigateTo({
								url: '/pages/increase-amount/increase-amount'
							});
						}
						break;
						// 积分|优惠
					case "03":
						if (!this.loginCheck()) {
							uni.navigateTo({
								url: '/pages/coupons/my-coupons/my-coupons'
							});
						}
						break;
						// 历史借款
					case "10":
						if (!this.loginCheck()) {
							uni.navigateTo({
								url: '/pages/history-loan/history-loan'
							});
						}
						break;
						// 我的资料
					case "11":
						if (!this.loginCheck()) {
							uni.setStorage({
								key: 'flag',
								data: 'onlyReview',
								success: function() {
									uni.navigateTo({
										url: '/pages/information/info-basic/info-basic'
									});
								}
							});
						}
						break;
						// 银行卡
					case "12":
						if (!this.loginCheck()) {
							uni.setStorage({
								key: 'flag',
								data: 'onlyReview',
								success: function() {
									uni.navigateTo({
										url: '/pages/information/info-bank/info-bank'
									});
								}
							});
						}
						break;
						// FAQ
					case "13":
						uni.navigateTo({
							url: `/pages/web-view/web-view?url=${this.faqUrl}`
						});
						break;
						// 关于我们
					case "20":
						uni.navigateTo({
							url: `/pages/web-view/web-view?url=${this.aboutUsUrl}`
						});
						break;
						// 版本更新
					case "21":
						plus.nativeUI.confirm(
							this.$t('app.update.tips'),
							function(e) {

							});
						break;
						// 隐私协议
					case "22":
						uni.navigateTo({
							url: `/pages/web-view/web-view?url=${this.policyUrl}`
						});
						break;
						// 退出登录
					case "23":
						if (!this.isLogin) {
							uni.showToast({
								title: this.$t('not.login.tips'),
								position: 'bottom'
							});
							return;
						}
						var self = this;

						plus.nativeUI.confirm(
							this.$t('logout.tips'),
							function(e) {
								if (e.index === 0) {
									// 用户点击了确定按钮
									self.setLoginStatus(false);

									self.phone = '';

									try {
										uni.removeStorageSync('phone');
										uni.removeStorageSync('token');
									} catch (e) {}

									uni.navigateTo({
										url: '/pages/account/login/login'
									});
								}
							});

						break;
				}
			}
		}
	}
</script>

<style>
</style>