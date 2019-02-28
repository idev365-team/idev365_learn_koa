const Koa = require('koa');
const app = new Koa();

app.on('error',(err,ctx)=>{
    // console.error('server error',err);
})

app.use(async (ctx,next)=>{
    try{
        await next(); 
    }catch(err){
        const errorMsg = "status:"+err.status+"\tmessage:"+err.message;
        console.log(errorMsg);
        ctx.body = errorMsg
    }
})

app.use(async ctx=>{
    ctx.body = "你好,山地人！";
    ctx.throw(500,"出错啦~~~");
});

app.listen(3000)

