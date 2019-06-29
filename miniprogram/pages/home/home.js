// miniprogram/pages/home/home.js

const db = require("../../utils/db.js")
const util = require('../../utils/util.js')

// const db = wx.cloud.database({
//   env: 'neo-kmh3o'
// })
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
    db.getProductList().then(result => {
      console.log(result)
      wx.hideLoading()
    
      const productList = result.data
      // 2 digits for price
      productList.forEach(product => product.price = util.formatPrice(product.price))

      if (productList.length){
        this.setData({
          productList: productList
        })
      }
    }).catch(err =>{
      console.error(err)
      wx.hideLoading()
    })
  },

})