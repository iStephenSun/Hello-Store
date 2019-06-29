module.exports = {
  // make price with 2 digits
  formatPrice(price) {
    return parseFloat(Math.round(price * 100) / 100).toFixed(2)
  },
// 加入一项功能：系统在到登录页面后，先检查一下我们的授权信息，如果用户的授权信息已经显示被同意，那我们直接获取用户的昵称和头像，无需需要触发点击登录按钮实现。
  getUserInfo(){
    return new Promise((resolve,reject)=> {
      wx.getSetting({
        success(res) {
          if (res.authSetting['scope.userInfo'] === false){
            //reject
            reject()
          }
          //authorized
          else{
            wx.getUserInfo({
              success(res) {
                const userInfo = res.userInfo
                resolve(userInfo)
              }
            })
          }
        }
      })
    })
  }
}



