const Koa =require ('koa');
const app =new Koa();
const Router = require('koa-router');
const router = new Router({
    prefix:'/sunruyue',
});

router.get('/sun',(ctx,next)=>{
    ctx.body ='Strawberry';
});

router.get('/moon',(ctx,next)=>{
    ctx.body ='Moon';
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000,()=>{
    console.log('服务开启成功在3000端口');
});