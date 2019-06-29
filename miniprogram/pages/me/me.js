// miniprogram/pages/me/me.js
const util = require('../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:null,
  },
  onTapLogin(event){
    this.setData({
      userInfo:event.detail.userInfo
    })

  },
  onTapAddress() {
    wx.showToast({
      icon: 'none',
      title: 'This function is not open yet.'
    })
  },

  onTapService() {
    wx.showToast({
      icon: 'none',
      title: 'This function is not open yet.'
    })
  },
// onShow 生命周期函数表示页面被打开时触发的功能，onLoad 函数表示页面在加载时触发的功能。也就是说，前者在页面加载、反复打开的过程中，会触发多次。而后者则只会被触发一次。
  onShow: function () {
    util.getUserInfo().then(userInfo => {
      this.setData({
        userInfo
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  

})