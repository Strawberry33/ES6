const Koa = require ('koa');
const app = new Koa;

app.use(async ctx=>{
    //叠加数据
    let data ='';

    //监听事件，收到数据表单的时候会执行
    ctx.req.on('data', chunk=>{
        data += chunk;
    })

    //接收表单提交数据完成后
    ctx.req.on('end',()=>{
        data = decodeURI(data);
        console.log(data);
    })
    //ctx.body必须写，否则会造成404错误
    ctx.body ='12345';
});

app.listen(3000,()=>{
    console.log('服务成功启动在3000端口');
});