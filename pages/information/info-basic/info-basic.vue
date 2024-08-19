<template>
	<view>
		<view>
			<status-bar></status-bar>
		</view>

		<view class="flex flex-row p-31 align-center">
			<image src="/static/icon/back.png" style="width: 45rpx; height: 45rpx;" @click="back"></image>
			<text class="w_fill"
				style="text-align: center; font-size: 36rpx; color: #3C3C3C; font-weight: bolder;">{{ $t('income') }}</text>
		</view>

		<view class="mx-30"
			style="padding-left: 42rpx; padding-right: 42rpx; margin-top: 20rpx; background-color: white;">

			<view style="height: 35rpx;"></view>

			<view class="flex align-center justify-center" style="background-color: #F3F6F3; height: 100rpx;">
				<text style="font-size: 26rpx; color: #A2227F; font-weight: bolder; line-height: 1.5;"
					class="px-20">{{ $t('income.tips') }}</text>
			</view>

			<view class="flex flex-column" style="margin-top: 33rpx;">
				<text style="font-size: 30rpx; color: #444444; font-weight: 500;">{{ $t('loan.purpose') }}</text>
				<view class="flex align-center justify-end flex-1 border-bottom"
					style="position: relative; margin-top: 30rpx;">
					<picker class="flex-1" mode="selector" :range="loanPurposeRange"
						@change="onPickerChangeLoanPurpose">
						<view class="flex align-center justify-center" style="height: 80rpx; text-align: center;">
							<template v-if="loanPurpose === ''">
								<text style="font-size: 30rpx; color: #B4B4B4; font-weight: 500;">{{ $t('loan.purpose') }}</text>
							</template>
							<template v-else>
								{{ loanPurpose }}
							</template>
						</view>
					</picker>

					<image src="/static/icon/spinner_tag.png"
						style="width: 23rpx; height: 23rpx; position: absolute; bottom: 12rpx;" mode="aspectFit">
					</image>
				</view>
			</view>

			<view class="flex flex-column" style="margin-top: 30rpx;">
				<text style="font-size: 30rpx; color: #444444; font-weight: 500;">{{ $t('educational.qualifications') }}</text>
				<view class="flex align-center justify-end flex-1 border-bottom"
					style="position: relative; margin-top: 30rpx;">
					<picker class="flex-1" mode="selector" :range="educationalQualificationsRange"
						@change="onPickerChangeEducation">
						<view class="flex align-center justify-center" style="height: 80rpx; text-align: center;">
							<template v-if="educationalQualifications === ''">
								<text style="font-size: 30rpx; color: #B4B4B4; font-weight: 500;">{{ $t('educational.qualifications') }}</text>
							</template>
							<template v-else>
								{{ educationalQualifications }}
							</template>
						</view>
					</picker>

					<image src="/static/icon/spinner_tag.png"
						style="width: 23rpx; height: 23rpx; position: absolute; bottom: 12rpx;" mode="aspectFit">
					</image>
				</view>
			</view>

			<view class="flex flex-column" style="margin-top: 30rpx;">
				<text style="font-size: 30rpx; color: #444444; font-weight: 500;">{{ $t('employment.type') }}</text>
				<view class="flex align-center justify-end flex-1 border-bottom"
					style="position: relative; margin-top: 30rpx;">
					<picker class="flex-1" mode="selector" :range="employmentTypeRange"
						@change="onPickerChangeEmployment">
						<view class="flex align-center justify-center" style="height: 80rpx; text-align: center;">
							<template v-if="employmentType === ''">
								<text style="font-size: 30rpx; color: #B4B4B4; font-weight: 500;">{{ $t('employment.type') }}</text>
							</template>
							<template v-else>
								{{ employmentType }}
							</template>
						</view>
					</picker>

					<image src="/static/icon/spinner_tag.png"
						style="width: 23rpx; height: 23rpx; position: absolute; bottom: 12rpx;" mode="aspectFit">
					</image>
				</view>
			</view>


			<view class="flex flex-column" style="margin-top: 30rpx;">
				<text style="font-size: 30rpx; color: #444444; font-weight: 500; padding-top: 5rpx;">{{ $t('income.type') }}</text>
				<checkbox-group @change="changeIncomeType(0)" style="margin-top: 50rpx;">
					<label>
						<checkbox :checked="incomeType === 0"
							style="font-size: 28rpx; color: #B4B4B4; font-weight: 500;"
							active-background-color="#B41949" border-color="#B41949" icon-color="white">{{ $t('no.income') }}
						</checkbox>
					</label>

				</checkbox-group>

				<checkbox-group @change="changeIncomeType(1)" style="margin-top: 50rpx;">
					<label>
						<checkbox :checked="incomeType === 1"
							style="font-size: 28rpx; color: #B4B4B4; font-weight: 500;"
							active-background-color="#B41949" border-color="#B41949" icon-color="white">{{ $t('variable.income') }}
						</checkbox>
					</label>
				</checkbox-group>

				<checkbox-group @change="changeIncomeType(2)" style="margin-top: 50rpx;">
					<label>
						<checkbox :checked="incomeType === 2"
							style="font-size: 28rpx; color: #B4B4B4; font-weight: 500;"
							active-background-color="#B41949" border-color="#B41949" icon-color="white">{{ $t('fixed.income') }}
						</checkbox>
					</label>
				</checkbox-group>
			</view>

			<template v-if="incomeType === 0">
				<view style="width: 100%; margin-top: 30rpx;">
					<button type="primary" style="backgroundColor: #A2227F;height: 98rpx" class="rounded-10"
						@click="confirm">{{ $t('save') }}</button>
				</view>

				<view style="height: 50rpx;"></view>
			</template>
			<template v-else>
				<view class="flex flex-column">
					<view style="margin-top: 30rpx;">
						<input type="number" v-model="monthlySalary" class="border-bottom" :placeholder="$t('monthly.salary')"
							placeholder-style="color:#B4B4B4; font-size:30rpx; font-weight:500; text-align: center;"
							style="height: 90rpx; color: #444444; font-weight: 500; font-size: 30rpx;text-align: center;" />
					</view>
					<view class="flex flex-column" style="margin-top: 30rpx;">
						<text style="font-size: 30rpx; color: #444444; font-weight: 500;">{{ $t('revenue.cycle') }}</text>
						<view class="flex align-center justify-end flex-1 border-bottom"
							style="position: relative; margin-top: 30rpx;">
							<picker class="flex-1" mode="selector" :range="revenueCycleRange"
								@change="onPickerChangeRevenueCycle">
								<view class="flex align-center justify-center"
									style="height: 80rpx; text-align: center;">
									<template v-if="revenueCycle === ''">
										<text style="font-size: 30rpx; color: #B4B4B4; font-weight: 500;">{{ $t('revenue.cycle') }}</text>
									</template>
									<template v-else>
										{{ revenueCycle }}
									</template>
								</view>
							</picker>

							<image src="/static/icon/spinner_tag.png"
								style="width: 23rpx; height: 23rpx; position: absolute; bottom: 12rpx;"
								mode="aspectFit"></image>
						</view>
					</view>


					<template v-if="revenueCycleIndex === 0">
						<view class="flex align-center justify-end flex-1 border-bottom"
							style="position: relative; margin-top: 30rpx;">
							<picker class="flex-1" mode="date"
								@change="selectPayDay1" :end="endDate">
								<view class="flex align-center justify-center"
									style="height: 80rpx; text-align: center;">
									<template v-if="payDay1 === ''">
										<text style="font-size: 30rpx; color: #B4B4B4; font-weight: 500;">{{ $t('pay.day') }}</text>
									</template>
									<template v-else>
										{{ payDay1 }}
									</template>
								</view>
							</picker>
							

							<image src="/static/icon/spinner_tag.png"
								style="width: 23rpx; height: 23rpx; position: absolute; bottom: 12rpx;"
								mode="aspectFit"></image>
						</view>
					</template>
					<template v-else-if="revenueCycleIndex === 1">
						<view class="flex flex-column">
							<view class="flex align-center justify-end flex-1 border-bottom"
								style="position: relative; margin-top: 30rpx;">
								<picker class="flex-1" mode="date"
									@change="selectPayDay1" :end="endDate">
									<view class="flex align-center justify-center"
										style="height: 80rpx; text-align: center;">
										<template v-if="payDay1 === ''">
											<text style="font-size: 30rpx; color: #B4B4B4; font-weight: 500;">{{ $t('pay.day') }}</text>
										</template>
										<template v-else>
											{{ payDay1 }}
										</template>
									</view>
								</picker>

								<image src="/static/icon/spinner_tag.png"
									style="width: 23rpx; height: 23rpx; position: absolute; bottom: 12rpx;"
									mode="aspectFit"></image>
							</view>

							<view class="flex align-center justify-end flex-1 border-bottom"
								style="position: relative; margin-top: 30rpx;">
								<picker class="flex-1" mode="date"
									@change="selectPayDay2" :end="endDate">
									<view class="flex align-center justify-center"
										style="height: 80rpx; text-align: center;">
										<template v-if="payDay2 === ''">
											<text style="font-size: 30rpx; color: #B4B4B4; font-weight: 500;">{{ $t('pay.day') }}</text>
										</template>
										<template v-else>
											{{ payDay2 }}
										</template>
									</view>
								</picker>

								<image src="/static/icon/spinner_tag.png"
									style="width: 23rpx; height: 23rpx; position: absolute; bottom: 12rpx;"
									mode="aspectFit"></image>
							</view>
						</view>
					</template>

					<view style="width: 100%; margin-top: 30rpx;">
						<button type="primary" style="backgroundColor: #A2227F;height: 98rpx" class="rounded-10"
							@click="save">Save</button>
					</view>

					<view style="height: 50rpx;"></view>
				</view>
			</template>

		</view>
	</view>
</template>

<script>
	export default {
		components: {
			
		},
		data() {
			return {
				loanPurpose: "",
				loanPurposeRange: [
					"Education expenses",
					"Home renovation",
					"Debt consolidation",
					"Medical expenses",
					"Travel plans"
				],
				educationalQualifications: "",
				educationalQualificationsRange: [
					"Bachelor's degree",
					"Master's degree",
					"Doctorate degree",
					"High school diploma",
					"Vocational skill certificate",
					"Associate degree"
				],
				employmentType: "",
				employmentTypeRange: [
					"Administrative staff",
					"Sales representative",
					"Teacher",
					"Technical support engineer",
					"Nurse",
					"Engineer",
					"Accountant",
					"Business consultant"
				],
				incomeType: 0,
				monthlySalary: "",
				revenueCycle: "",
				revenueCycleRange: [
					"Once a month",
					"Twice a month"
				],
				revenueCycleIndex: -1,
				payDay1: "",
				payDay2: "",
				endDate: ""
			}
		},
		onLoad(option) {
			this.endDate = new Date().toISOString().split('T')[0];
			
			uni.showLoading({
				title: this.$t('waiting'),
				mask: true
			});
			this.$H.post('/app/get_income_info').then(res => {
				uni.hideLoading();
				console.log(res);
				
				if (typeof res.loanPurpose === 'undefined') return;
				
				if (res.incomeType == 0) {
					this.loanPurpose = res.loanPurpose;
					this.educationalQualifications = res.educationalQualifications;
					this.employmentType = res.employmentType;
					this.incomeType = res.incomeType;
				} else {
					this.loanPurpose = res.loanPurpose;
					this.educationalQualifications = res.educationalQualifications;
					this.employmentType = res.employmentType;
					this.incomeType = res.incomeType;
					this.monthlySalary = res.monthlySalary;
					this.revenueCycleIndex = res.revenueCycleIndex;
					this.revenueCycle = res.revenueCycle;
					if (this.revenueCycleIndex == 0) {
						this.payDay1 = res.payDay1;
					} else {
						this.payDay1 = res.payDay1;
						this.payDay2 = res.payDay2;
					}
				}
			}).catch(err => {
				uni.hideLoading();
			});
		},
		methods: {
			back() {
				uni.navigateBack();
			},
			changeIncomeType(t) {
				this.incomeType = t;
			},
			onPickerChangeLoanPurpose(event) {
				const selectedIndex = event.detail.value;
				this.loanPurpose = this.loanPurposeRange[selectedIndex];
			},
			onPickerChangeEducation(event) {
				const selectedIndex = event.detail.value;
				this.educationalQualifications = this.educationalQualificationsRange[selectedIndex];
			},
			onPickerChangeEmployment(event) {
				const selectedIndex = event.detail.value;
				this.employmentType = this.employmentTypeRange[selectedIndex];
			},
			onPickerChangeRevenueCycle(event) {
				const selectedIndex = event.detail.value;
				this.revenueCycleIndex = selectedIndex;
				this.revenueCycle = this.revenueCycleRange[selectedIndex];
			},
			selectPayDay1(event) {
				this.payDay1 = event.detail.value;
			},
			selectPayDay2(event) {
				this.payDay2 = event.detail.value;
			},
			confirm() {
				let data = {
					loanPurpose: this.loanPurpose,
					loanPurposeRange: [
						"Education expenses",
						"Home renovation",
						"Debt consolidation",
						"Medical expenses",
						"Travel plans"
					],
					educationalQualifications: this.educationalQualifications,
					educationalQualificationsRange: [
						"Bachelor's degree",
						"Master's degree",
						"Doctorate degree",
						"High school diploma",
						"Vocational skill certificate",
						"Associate degree"
					],
					employmentType: this.employmentType,
					employmentTypeRange: [
						"Administrative staff",
						"Sales representative",
						"Teacher",
						"Technical support engineer",
						"Nurse",
						"Engineer",
						"Accountant",
						"Business consultant"
					],
					incomeType: this.incomeType
				};
				this.request(data);
			},
			save() {
				//uni.navigateTo({
				//	url: '/pages/information/info-upload/info-upload'
				//});
				let data = {
					loanPurpose: this.loanPurpose,
					loanPurposeRange: [
						"Education expenses",
						"Home renovation",
						"Debt consolidation",
						"Medical expenses",
						"Travel plans"
					],
					educationalQualifications: this.educationalQualifications,
					educationalQualificationsRange: [
						"Bachelor's degree",
						"Master's degree",
						"Doctorate degree",
						"High school diploma",
						"Vocational skill certificate",
						"Associate degree"
					],
					employmentType: this.employmentType,
					employmentTypeRange: [
						"Administrative staff",
						"Sales representative",
						"Teacher",
						"Technical support engineer",
						"Nurse",
						"Engineer",
						"Accountant",
						"Business consultant"
					],
					incomeType: this.incomeType,
					monthlySalary: this.monthlySalary,
					revenueCycle: this.revenueCycle,
					revenueCycleRange: [
						"Once a month",
						"Twice a month"
					],
					revenueCycleIndex: this.revenueCycleIndex,
					payDay1: this.payDay1,
					payDay2: this.payDay2
				};
				this.request(data)
			},
			request(data = {}) {
				uni.showLoading({
					title: this.$t('waiting'),
					mask: true
				});
				this.$H.post('/app/save_income_info', data).then(res => {
					uni.hideLoading();
					//console.log(res);
					
					uni.navigateTo({
						url: '/pages/information/info-upload/info-upload'
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