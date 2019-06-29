// miniprogram/pages/me/me.js
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

})