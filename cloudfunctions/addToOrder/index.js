// 云函数入口文件



const cloud = require('wx-server-sdk')
// cloud.init()// location matters

cloud.init({
  traceUser: true,
  env: 'neo-kmh3o'
})
const db = cloud.database()




// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const user = wxContext.OPENID, //UserInfo included
    // event.userInfo.openId
  const productList = event.list || [] //或运算符，顺序赋值

  await db.collection('order').add({
    data:{
      user,
      createTime: +new Date(),
      productList
    }
  })

  return {}
  
}
