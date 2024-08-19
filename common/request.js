import $C from '@/common/config.js'
export default {
	headers: {
		'language': 'en',
		'app-name': $C.appName,
		'version': '1.0.0',
		'version-code': '1',
		'content-type': 'application/json'
	},
	request(options = {}) {
		options.url = $C.baseUrl + options.url;

		options.method = 'POST';
		
		let token = uni.getStorageSync('token');
		this.headers["token"] = token
		
		options.header = this.headers;
		
		return new Promise((res, rej)=> {
			uni.request({
				...options,
				success: (result) => {
					// console.log(result);
					// console.log(result.data.msg);
					
					if (typeof result.data.msg !== 'undefined') {
						uni.showToast({
							title:result.data.msg,
							position: 'bottom'
						});
						return rej(result.data.msg);
					}
					// 成功
					res(result.data.ret);
				},
				fail: (error) => {
					uni.showToast({
						title:error.errMsg,
						position: 'bottom'
					});
					return rej();
				}
			});
		});

	},
	post(url, data = {}, options = {}) {
		options.url = url;
		options.data = data;
		return this.request(options);
	}

}