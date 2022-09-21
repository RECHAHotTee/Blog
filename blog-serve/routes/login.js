const router = require('koa-router')()
router.post('/api/login', async (ctx, next) => {
  ctx.body={code:200,msg:"登录成功"}
})
module.exports = router
