module.exports = {
  // make price with 2 digits
  formatPrice(price) {
    return parseFloat(Math.round(price * 100) / 100).toFixed(2)
  },
// 检测授权状态
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



