<template>
	<view>
		<view>
			<web-view :src="url"></web-view>
		</view>

		<view class="flex flex-column" style="background-color: #3F3F3F;">
			<status-bar></status-bar>
			<view class="flex flex-row p-30 align-center" style="background-color: white;">
				<image src="/static/icon/back.png" style="width: 45rpx; height: 45rpx;" @click="back"></image>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				url: ""
			}
		},
		onLoad(option) {
			this.setWebviewHeight();
			this.url = option.url;
		},
		methods: {
			back() {
				uni.navigateBack();
			},
			setWebviewHeight() {
				let height = 0;
				let statusBar = 0;
				uni.getSystemInfo({
					success: sysinfo => {
						height = sysinfo.windowHeight - 47;
						statusBar = sysinfo.statusBarHeight;
					},
				});
				const currentWebview = this.$scope.$getAppWebview();
				setTimeout(function() {
					const wv = currentWebview.children()[0];
					wv.setStyle({
						top: uni.upx2px(105) + statusBar, // 设置 web-view 距离顶部的距离以及自己的高度，单位为 px
						height: height
					});
				}, 1000); // 如页面初始化调用需要写延迟
			}
		}
	}
</script>

<style>

</style>