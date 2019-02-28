const Koa = require('koa');
const app = new Koa();

app.use((ctx)=>{
    ctx.status = 301;
    ctx.redirect('/cart');
    ctx.body = 'Redirecting to shopping cart';
});

app.listen( 3000 );

