const Koa = require('koa');
const app = new Koa();

app.use(async (ctx)=>{
    
    console.log(`${ctx.request.method} ${ctx.request.url}`)
    ctx.body = "Hello,Koa!"
    console.log("上下文环境context->",ctx);
})

app.listen(3000);