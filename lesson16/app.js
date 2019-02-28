const Koa = require('koa');
const app = new Koa();

app.use((ctx)=>{
    console.log( ctx.request.get('user-agent') )
   ctx.body = "www.idev365.com";
  
});

app.listen( 3000 );

