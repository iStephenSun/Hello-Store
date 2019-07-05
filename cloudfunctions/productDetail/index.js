// 云函数入口文件
const cloud = require('wx-server-sdk')

// cloud.init()//place first location
cloud.init({
  traceUser: true,
  env: 'neo-kmh3o'
})

const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  const id = event.id

  const productRes = await db.collection('product').doc(id).get()
  console.log("productRes",productRes)
  const product = productRes.data
  console.log("product", product)
  return product

}