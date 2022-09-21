const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const login = require('./routes/login')
// 错误监听
onerror(app)

// 中间件
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())

//静态资源访问
app.use(require('koa-static')(__dirname + '/public'))

//页面模板
app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

//路由控制
app.use(login.routes(), login.allowedMethods())
module.exports = app
