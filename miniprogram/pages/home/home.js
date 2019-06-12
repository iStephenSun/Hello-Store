// miniprogram/pages/home/home.js

const db = wx.cloud.database({
  env: 'neo-kmh3o'
})
Page({

  /**
   * 页面的初始数据
   */
  data: {
    productList: [], // Products List

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getProductList() 

  },

  getProductList(){
    wx.showLoading({
      title: 'Loading',
    })
    db.collection('product').get().then(result => {
      console.log(result)
      wx.hideLoading()
    
      const data = result.data
      // 2 digits for price
      data.forEach(product => product.price = parseFloat(Math.round(product.price * 100)/100) .toFixed(2))

      if (data.length){
        this.setData({
          productList:data
        })
      }
    }).catch(err =>{
      console.error(err)
      wx.hideLoading()
    })
  },

})