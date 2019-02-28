const Koa = require('koa');
const app = new Koa();
app.on("error",(err)=>{
    console.log(err);
})

app.use((ctx)=>{
    ctx.req.method = "POST";
   ctx.req.header= {
       'X-Custom-Headerfield': 'Its one header, with headerfields'
    };
   ctx.body = "www.idev365.com";
   console.log("request.host--->",ctx.request.protocol );
});

app.listen( 3000 );

