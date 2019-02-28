const Koa = require('koa');
const app = new Koa();
const appName = "课11.理解koa中API——ctx.req和res";

app.use((ctx)=>{
    // ctx.body = `
    //     <html>
    //     <head>
    //         <title>${appName}</title>
    //     </head>
    //     <body>
    //         <a href="https://www.idev365.com/">前往 idev365</a>
    //     </body>
    //     </html>
    // `
    ctx.res.end("hello");
})

app.listen(3000)