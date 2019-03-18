const Koa = require('koa')
const app = new Koa()

const port = 8080
app.use(async (ctx) => {
	ctx.body = 'hello顶顶顶的 wolrd!'
})

app.listen(port, () => {
	console.log(`koa test aleray start ${port} port!`)
})