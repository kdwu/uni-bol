export function pathToBase64(path) {
    return new Promise(function(resolve, reject) {
        // app
        if (typeof plus === 'object') {
            plus.io.resolveLocalFileSystemURL(path, function(entry) {
                entry.file(function(file) {
                    var fileReader = new plus.io.FileReader()
                    fileReader.onload = function(evt) {
                        resolve(evt.target.result)
                    }
                    fileReader.onerror = function(error) {
                        reject(error)
                    }
                    fileReader.readAsDataURL(file)
                }, function(error) {
                    reject(error)
                })
            }, function(error) {
                reject(error)
            })
            
            return
        }
        
        // 微信小程序
        if (typeof wx === 'object' && wx.canIUse('getFileSystemManager')) {
            wx.getFileSystemManager().readFile({
                filePath: path,
                encoding: 'base64',
                success: function(res) {
                    resolve('data:image/png;base64,' + res.data)
                },
                fail: function(error) {
                    reject(error)
                }
            })
            
            return
        }
        
        reject(new Error('not support'))
    })
}
