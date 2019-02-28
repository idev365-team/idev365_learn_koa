const Koa = require('koa');
const KeyGrip = require('keygrip');
const app = new Koa();



app.keys = ['abc', '123'];

app.use(async (ctx)=>{
    console.log(ctx.cookies.get('name',{signed:true}));

    // ctx.cookies.set('name','tobi',{signed:true});
    ctx.body = "Success";
})

app.listen(3000);