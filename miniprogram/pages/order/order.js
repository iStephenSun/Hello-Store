// miniprogram/pages/order/order.js
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


  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    util.getUserInfo().then(userInfo => {
      this.setData({
        userInfo
      })
    })
  },

 
})