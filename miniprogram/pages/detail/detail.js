// miniprogram/pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    product:{},

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: 'Loading...',
    })

    wx.cloud.callFunction({
      name:'productDetail',
      data:{
        id: options.id
      },
    }).then(result => {
      wx.hideLoading()
      const data = result.result

      if(data){
        this.setData({
          product:data
        })
      }
      else {
        setTimeout(()=>{
          wx.navigateBack()
        },2000)
      }

    }).catch(err => {
      console.error(err)
      wx.hideLoading()

      setTimeout(() => {
        wx.navigateBack()
      }, 2000)
    })

  },

})