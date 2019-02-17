const Koa = require ('koa');
const app = new Koa;

app.use(async ctx =>{
    let url = ctx.url;
    let query = ctx.query;
    let queryString = ctx.querystring;

    ctx.body={
        url,
        query,
        queryString,
    };
});

app.listen(3001,()=>{
    console.log('服务开启成功在3001端口');
});