<template>
	<view class="popup-wrapper" v-show="visible">
		<view class="popup-content">
			<scroll-view class="content" scroll-y>
				<view class="text-section">
					<text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</text>
				</view>
				<view class="text-section">
					<text>Nullam bibendum sapien vitae lorem finibus, vitae scelerisque nulla aliquam.</text>
				</view>
				<view class="text-section">
					<text>Phasellus consectetur sem id velit egestas, ut laoreet nisl cursus.</text>
				</view>
				<view class="text-section">
					<text>Proin pharetra nunc at nisi tristique, nec consequat neque tristique.</text>
				</view>
				<view class="text-section">
					<text>Aenean sed tortor nec nisl vestibulum placerat.</text>
				</view>
				<view class="text-section">
					<text>Curabitur eget urna in mi dignissim ultricies.</text>
				</view>
				<view class="text-section">
					<text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</text>
				</view>
				<view class="text-section">
					<text>Nullam bibendum sapien vitae lorem finibus, vitae scelerisque nulla aliquam.</text>
				</view>
				<view class="text-section">
					<text>Phasellus consectetur sem id velit egestas, ut laoreet nisl cursus.</text>
				</view>
				<view class="text-section">
					<text>Proin pharetra nunc at nisi tristique, nec consequat neque tristique.</text>
				</view>
				<view class="text-section">
					<text>Aenean sed tortor nec nisl vestibulum placerat.</text>
				</view>
				<view class="text-section">
					<text>Curabitur eget urna in mi dignissim ultricies.</text>
				</view>
				<view class="text-section">
					<text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</text>
				</view>
				<view class="text-section">
					<text>Nullam bibendum sapien vitae lorem finibus, vitae scelerisque nulla aliquam.</text>
				</view>
				<view class="text-section">
					<text>Phasellus consectetur sem id velit egestas, ut laoreet nisl cursus.</text>
				</view>
				<view class="text-section">
					<text>Proin pharetra nunc at nisi tristique, nec consequat neque tristique.</text>
				</view>
				<view class="text-section">
					<text>Aenean sed tortor nec nisl vestibulum placerat.</text>
				</view>
				<view class="text-section">
					<text>Curabitur eget urna in mi dignissim ultricies.</text>
				</view>
				<view class="text-section">
					<text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</text>
				</view>
				<view class="text-section">
					<text>Nullam bibendum sapien vitae lorem finibus, vitae scelerisque nulla aliquam.</text>
				</view>
				<view class="text-section">
					<text>Phasellus consectetur sem id velit egestas, ut laoreet nisl cursus.</text>
				</view>
				<view class="text-section">
					<text>Proin pharetra nunc at nisi tristique, nec consequat neque tristique.</text>
				</view>
				<view class="text-section">
					<text>Aenean sed tortor nec nisl vestibulum placerat.</text>
				</view>
				<view class="text-section">
					<text>Curabitur eget urna in mi dignissim ultricies.</text>
				</view>
			</scroll-view>
			<view class="footer">
				<button class="agree-button" @click="handleAgree">Agree</button>
				<button class="disagree-button" @click="handleDisagree">Disagree</button>
			</view>
		</view>
	</view>
</template>

<style>
	.popup-wrapper {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 9999;
		/* 其他样式 */
	}

	.popup-content {
		height: 85%;
		width: 100%;
		margin-left: 30rpx;
		margin-right: 30rpx;
		background-color: #fff;
		border-radius: 10px;
		overflow: hidden;
	}

	.content {
		height: calc(100% - 80px);
	}

	.footer {
		display: flex;
		justify-content: flex-end;
		padding: 20px;
	}

	.agree-button,
	.disagree-button {
		padding: 10px 20px;
	}

	.text-section {
		margin-bottom: 10px;
	}
	
</style>

<script>
	export default {
		props: {
			visible: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			handleAgree() {
				this.$emit('agree');
			},
			handleDisagree() {
				this.$emit('disagree');
			}
		}
	};
</script>