<template>
	<view>
		<view>
			<status-bar></status-bar>
		</view>

		<view class="flex flex-row p-31 align-center">
			<image src="/static/icon/back.png" style="width: 45rpx; height: 45rpx;" @click="back"></image>
			<text class="w_fill"
				style="text-align: center; font-size: 36rpx; color: #3C3C3C; font-weight: bolder;">{{ $t('authentication') }}</text>
		</view>


		<view class="mx-30"
			style="padding-left: 42rpx; padding-right: 42rpx; margin-top: 26rpx; background-color: white;">

			<view style="height: 29rpx;"></view>

			<!-- <view class="flex flex-column justify-center"
				style="background-color: #F3F6F3; height: 182rpx; padding-left: 37rpx;">
				<text style="font-size: 34rpx; color: #444444; font-weight: 500;">{{ $t('name') }}: {{name}}</text>
				<text
					style="font-size: 34rpx; color: #444444; font-weight: 500; margin-top: 20rpx;">{{ $t('id.number') }}:
					{{idNumber}}</text>
			</view> -->
			
			<view style="margin-top: 45rpx;">
				<input type="text" v-model="name" class="border-bottom" :placeholder="$t('name')"
					placeholder-style="color:#B4B4B4; font-size:30rpx; font-weight:500; text-align: center;"
					style="height: 90rpx; color: #444444; font-weight: 500; font-size: 30rpx;text-align: center;" />
			</view>
			
			<view style="margin-top: 25rpx;">
				<input type="number" v-model="nationalIdCardNumber" class="border-bottom" :placeholder="$t('id.number')"
					placeholder-style="color:#B4B4B4; font-size:30rpx; font-weight:500; text-align: center;"
					style="height: 90rpx; color: #444444; font-weight: 500; font-size: 30rpx;text-align: center;" />
			</view>

			<view class="flex align-center border-bottom"
				style="background-color: white; width: 100%; margin-top: 36rpx;" @click="takePhoto(1)">
				<image src="/static/icon/take_photo_tag.png	"
					style="width: 44rpx; height: 44rpx; margin-left: 16rpx; margin-right: 36rpx;" mode="aspectFit">
				</image>
				<template v-if="nicOssPath === ''">
					<input class="flex-1" disabled="true" :placeholder="$t('front.card')"
						placeholder-style="color:#B4B4B4; font-size:30rpx; font-weight:500;" style="height: 90rpx;" />
				</template>
				<template v-else>
					<image :src="nicOssPath" mode="aspectFit" style="width: 100rpx; height: 100rpx;"></image>
					
					<text class="flex flex-1 align-center justify-center" style="font-size: 30rpx; color: #444444; font-weight: 500;">{{ $t('front.success') }}</text>
					<image src="/static/icon/upload_success.png" mode="aspectFit" style="width: 30rpx; height: 30rpx;"></image>
				</template>
			</view>
			
			<view class="flex align-center border-bottom"
				style="background-color: white; width: 100%; margin-top: 36rpx;" @click="takePhoto(2)">
				<image src="/static/icon/take_photo_tag.png	"
					style="width: 44rpx; height: 44rpx; margin-left: 16rpx; margin-right: 36rpx;" mode="aspectFit">
				</image>
				<template v-if="nicOssPath2 === ''">
					<input class="flex-1" disabled="true" :placeholder="$t('back.card')"
						placeholder-style="color:#B4B4B4; font-size:30rpx; font-weight:500;" style="height: 90rpx;" />
				</template>
				<template v-else>
					<image :src="nicOssPath2" mode="aspectFit" style="width: 100rpx; height: 100rpx;"></image>
					<text class="flex flex-1 align-center justify-center" style="font-size: 30rpx; color: #444444; font-weight: 500;">{{ $t('back.success') }}</text>
					<image src="/static/icon/upload_success.png" mode="aspectFit" style="width: 30rpx; height: 30rpx;"></image>
			
				</template>
			</view>
			
			<view style="width: 100%; margin-top: 36rpx;">
				<button type="primary" :disabled="isButtonDisabled"
					:style="{ backgroundColor: isButtonDisabled ? '#CCCCCC' : '#A2227F', height: '98rpx' }"
					class="rounded-10" @click="submit">{{ $t('submit') }}</button>
			</view>
			
			<view style="height: 45rpx;"></view>
			
		</view>
	</view>
</template>

<script>
	import { pathToBase64 } from '@/common/convert.js'

	export default {
		data() {
			return {
				name: "",
				nationalIdCardNumber: "",
				type: 0,
				nicOssPath: '',
				nicOssPath2: ''
			}
		},
		onLoad() {
			try{
				this.name = uni.getStorageSync("name");
				this.nationalIdCardNumber = uni.getStorageSync("nationalIdNumber");
				
			}catch(e){
				
			}
			
			uni.showLoading({
				title: this.$t('waiting'),
				mask: true
			});
			this.$H.post('/app/get_image').then(res => {
				uni.hideLoading();

				console.log(res.nic_oss_path);
				this.nicOssPath = res.nic_oss_path;
				this.nicOssPath2 = res.nic_oss_path2;
			}).catch(err => {
				uni.hideLoading();
				console.log(err);
			});
		},
		computed: {
			isButtonDisabled() {
				return this.nicOssPath === '' || this.nicOssPath2 === '' || this.name === '' || this.nationalIdCardNumber === '';
			}
		},
		methods: {
			back() {
				uni.navigateBack();
			},
			takePhoto(e) {
				uni.chooseImage({
					count: 1,
					sourceType: ['camera'],
					 sizeType: ['compressed'],
					success: res => {
						this.type = e;
						
						const tempFilePaths = res.tempFilePaths;
						this.uploadPhoto(tempFilePaths[0]);
					}
				});
			},
			uploadPhoto(tempFilePath) {
				pathToBase64(tempFilePath).then(base64 => {
					if (this.type === 1) {
						// 上传正面
						this.uploadFront(base64);
					} else {
						// 上传背面
						this.uploadBack(base64);
					}
				}).catch(error => {
					console.error(error)
				})
			},
			uploadFront(imageContent) {
				const data = {
					"image_content": imageContent,
					"image_content2": "",
					"image_type": 8
				};
				this.upload(data, 1);
			},
			uploadBack(imageContent) {
				const data = {
					"image_content": "",
					"image_content2": imageContent,
					"image_type": 8
				};
				this.upload(data, 2);
			},
			upload(data, type) {
				uni.showLoading({
					title: this.$t('waiting'),
					mask: true
				});
				this.$H.post('/app/upload_image', data).then(res => {
					uni.hideLoading();
					
					
					//console.log(res);
					//console.log(res.nic_oss_path2);		
					if (type === 1) {
						this.nicOssPath = res.image_oss_path;
					} else {
						this.nicOssPath2 = res.image_oss_path2;
					}
					
				}).catch(err => {
					uni.hideLoading();
					console.log(err);
				});
			},
			submit() {
				try{
					uni.setStorageSync("name", this.name);
					uni.setStorageSync("nationalIdNumber", this.nationalIdCardNumber);
				}catch(e){
					
				}
				
				uni.navigateTo({
					url: '/pages/information/info-bank/info-bank'
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