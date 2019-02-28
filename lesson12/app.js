const Koa = require("koa");
const app = new Koa();


async function fetchUserInfo(){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            resolve("山地人")
        },300)
    })
}

app.use(async (ctx,next)=>{
    ctx.state.user = await fetchUserInfo()
    await next();
})

app.on("findARequest",(value)=>{
    console.log("findARequest got->",value)
})

app.use((ctx)=>{
    console.log("ctx.app->",ctx.app)
    ctx.app.emit("findARequest",ctx.req.url);
    ctx.body = ctx.state.user;
})

app.listen(3000)