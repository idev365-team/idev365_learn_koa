const Koa = require('koa');
const app = new Koa();
app.on("error",(err)=>{
    console.log(err);
})

app.use((ctx)=>{
    ctx.throw(400, 'name required', { user: {
        name:"unknow",
    } });
});

app.listen( 3000 );

