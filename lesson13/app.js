const Koa = require('koa');
const app = new Koa();

app.use( ctx =>{
    const url = ctx.req.url;
    if(url=="/setcookie"){
        ctx.cookies.set("user","vip",{
            httpOnly:false,
            overwrite:true,
        });
        ctx.body = "cookie 设定完毕！";
    }else{
        ctx.body = ctx.cookies.get('user');
    }
    
});

app.listen(3000);