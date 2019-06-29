// cloud function

const db = wx.cloud.database({
  env:"neo-kmh3o"
})

// for reference

module.exports = {
  // home.js
  getProductList(){
    return db.collection("product").get()
  },
  // detail.js
  getProductDetail(id) {
    return wx.cloud.callFunction({
      name:'productDetail',
      data:{
        id : id
      }
    })
  }

  

}