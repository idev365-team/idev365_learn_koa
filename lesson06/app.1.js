const Koa = require('koa');
const app = new Koa();

app.use(async ctx=>{
    ctx.body = "你好,山地人";
})

app.listen(3000);