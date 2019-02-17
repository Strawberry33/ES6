const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const path = require('path');

//加载模板
app.use(views(path.join(__dirname,'./views'),{
    extension:'ejs',
}));

app.use(async ctx=>{
    let title ="Strawberry33";

    await ctx.render('index',{
        title,
        list:[
            {
                name:'sunruyue',
                age:18,
            },{
                name:'moon',
                age:'19',
            },{
                name:'sun',
                age:'20',
            }
        ],
    });
});

app.listen(3000, () => {
    console.log('服务开启成功在3000端口');
});