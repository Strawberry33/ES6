<template>
<div>
<div class='top'>
<p class='a'> &lt;</p >
<p class='title'>农机租赁</p >
</div>
<hr>
<div class='middle'>
<div class='middle-img'>
<img src='./850.jpg'/>
</div>
<div class='info'>
<p class='info-name'>徽拖HT-2204轮式拖拉机 </p >
<p class='info-price'>500/天</p >
</div>
<div class='infos'>
<p class='infos-a'>驱动方式：四轮驱动</p >
<p class='infos-b'>马力：200hp</p >
<p class='infos-c'>品牌：红星</p >
</div>
<hr>
<div class="line">租赁人：<span class="line-text">西瓦尼</span></div><hr>
<div class="line">租金：<span class="line-text">3000</span></div><hr>
<div class="line">联系人：<span class="line-text">18888886888</span></div><hr>
<div class="line">取货方式：<span class="line-text">送货上门</span></div><hr>
<div class="line">收货地址：<span class="line-text">喀麦隆</span></div><hr>
<div class="line">租赁日期：<span class="line-text">10月3号星期三12:00——10月9号星期五12:00</span></div><hr>
</div>
<div class='bottom'>
<button class='save'  @click="isLogin=true">确认订单</button>
</div>
</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.top {
text-align: center;
font-size:0.3rem;
}
.a {
display: inline-block;
float: left;
margin-left:0.2rem;
}
.middle-img {
position: relative;
overflow: hidden;
height: 2.6rem;
}
img {
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
}
.title {
display: inline-block;
}
.info {
overflow: hidden;
}
.info-name {
float: left;
margin-left: 0.2rem;
font-size: 0.3rem;
}
.info-price {
float: right;
margin-right: 0.2rem;
font-size: 0.3rem;
color: red;
}
.infos {
display: flex;
flex-direction: row;
}
.infos-a {
flex-grow: 1;
margin-left: 0.2rem;
font-size: 0.25rem;
}
.infos-b {
flex-grow: 1;
font-size: 0.25rem;
}
.infos-c {
flex-grow: 1;
font-size: 0.25rem;
}
.line {
padding: 10px 10px;
box-sizing: border-box;
}
.line-text {
color: #666;
}
.bottom{
position:relative;
}
.save{
width: 2rem;
height: 0.6rem;
background:orange;
color: #ffffff;
border-radius: 0.5rem;
text-align: center;
line-height: 0.6rem;
position: absolute;
right: 0.2rem;
border: 0;
}

</style>