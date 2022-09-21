const router = require('koa-router')()
router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'dzp'
  })
})

router.post('/login', async (ctx, next) => {
  await ctx.render('index', {
    title: 'login'
  })
})

module.exports = router
