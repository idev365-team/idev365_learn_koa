const Koa = require('koa');
const app = new Koa();

app.context.baseUrl = "https://www.idev365.com/"
app.context.sayHi = function(){
    const websiteUrl = "https://www.idev365.com/"
    return `
        <html>
            <body>
                你好，山地人。欢迎访问站点:
                <a href="${websiteUrl}">${websiteUrl}</a>
            </body>
        </html>

    `;
}

app.use(async ctx =>{
    ctx.body = ctx.baseUrl;
});

app.listen(3000);