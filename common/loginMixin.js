export default {
	data() {
		return {
			isLogin: false // 初始登录状态为false
		};
	},
	methods: {
		setLoginStatus(status) {
			this.isLogin = status;
			uni.setStorage({
				key: 'isLogin',
				data: status
			});
		}
	},
	created() {
		uni.getStorage({
			key: 'isLogin',
			success: (res) => {
				this.isLogin = res.data;
			}
		});
	}
};	