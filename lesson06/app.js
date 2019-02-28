
const Koa = require('koa');
const app = new Koa();

app.proxy = true;

app.use(async ctx=>{
    ctx.body = "你好,山地人";
    console.log(ctx.ip)
})

app.listen(3000);
