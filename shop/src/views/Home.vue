<template>
  <div class="container">
   <!--头部-->
   <van-nav-bar title="首页" class="nav-title">
      <van-icon name="search" slot="left"></van-icon>
      <van-icon name="cart" slot="right"></van-icon>
   </van-nav-bar> 

    <!--轮播图-->
    <div class="carousel">
    <van-swipe :autoplay="3000">
        <van-swipe-item class="carousel-item" v-for="(item,index) in carouselItem" :key="index">
        <img v-lazy="item.imgSrc" alt="">
        </van-swipe-item>
     </van-swipe>
     </div>
      <!--热门商品-->
        <div class="hot">
           <p class="hot-title">热门商品</p>
           <swiper class="hot-swiper" :options="swiperOption">
                 <swiper-slide v-for="(item,index) in hotProducts" :key="index">
                    <div class="hot-swiper-content">
                       <img :src="item.img">
                       <div>{{item.price}}</div>
                       <div>{{item.company}}</div>
                       <div>{{item.city}}</div>
                    </div>
                 </swiper-slide>
           </swiper>
         </div>
      <!--推荐商品-->
       <div class="variety" >
         <p>推荐商品</p>
         <ul>
          <li class="variety-item" v-for="(item,index) in varietyItem" :key="index">
            <img :src="item.img">
            <div>{{item.price}}</div>
            <div>{{item.company}}</div>
           </li>
          </ul>
          
         </div>

  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import axios from 'axios'

export default {
  data(){
    return{
      carouselItem:[
        { 
          name:'img1',
          imgSrc:'http://img2.imgtn.bdimg.com/it/u=1035601940,2943133338&fm=26&gp=0.jpg'
        },{
          name:'img2',
          imgSrc:'http://img1.imgtn.bdimg.com/it/u=1139630968,657460509&fm=26&gp=0.jpg'
        },{
          name:'img3',
          imgSrc:'http://img4.imgtn.bdimg.com/it/u=447554265,1744117513&fm=26&gp=0.jpg'
        },
      ],
      hotProducts:[//热门商品
        {
          name:"",
          img:"http://img1.imgtn.bdimg.com/it/u=352046356,2895492273&fm=26&gp=0.jpg",
          price:"￥310",
          company:"Giorgio Armani",
          city:"意大利米兰",
        },{
          name:"",
          img:"http://img1.imgtn.bdimg.com/it/u=3326618896,1626844195&fm=26&gp=0.jpg",
          price:"￥310",
          company:"Giorgio Armani",
          city:"意大利米兰",
        },{
          name:"",
          img:"http://img1.imgtn.bdimg.com/it/u=676100550,3692856317&fm=26&gp=0.jpg",
          price:"￥310",
          company:"Giorgio Armani",
          city:"意大利米兰",
        },{
          name:"",
          img:"http://img1.imgtn.bdimg.com/it/u=1554849174,884057983&fm=26&gp=0.jpg",
          price:"￥310",
          company:"Giorgio Armani",
          city:"意大利米兰",
        },{
          name:"",
          img:"http://img1.imgtn.bdimg.com/it/u=3674039644,1269261715&fm=26&gp=0.jpg",
          price:"￥310",
          company:"Giorgio Armani",
          city:"意大利米兰",
        },{
          name:"",
          img:"http://img2.imgtn.bdimg.com/it/u=1989748925,198554187&fm=26&gp=0.jpg",
          price:"￥310",
          company:"Giorgio Armani",
          city:"意大利米兰",
        },{
          name:"",
          img:"http://img4.imgtn.bdimg.com/it/u=2476988061,1237729339&fm=26&gp=0.jpg",
          price:"￥310",
          company:"Giorgio Armani",
          city:"意大利米兰",
        },{
          name:"",
          img:"http://img2.imgtn.bdimg.com/it/u=702093379,633826279&fm=11&gp=0.jpg",
          price:"￥310",
          company:"Giorgio Armani",
          city:"意大利米兰",
        },{
          name:"",
          img:"http://img1.imgtn.bdimg.com/it/u=3184464554,4179985047&fm=26&gp=0.jpg",
          price:"￥310",
          company:"Giorgio Armani",
          city:"意大利米兰",
        },
        
      ],
      varietyItem:[//推荐商品
        {
          name:"",
          img:"http://img1.imgtn.bdimg.com/it/u=352046356,2895492273&fm=26&gp=0.jpg",
          price:"￥310",
          company:"Giorgio Armani",
          city:"意大利米兰",
        },{
          name:"",
          img:"http://img1.imgtn.bdimg.com/it/u=352046356,2895492273&fm=26&gp=0.jpg",
          price:"￥310",
          company:"Giorgio Armani",
          city:"意大利米兰",
        },{
          name:"",
          img:"http://img1.imgtn.bdimg.com/it/u=3326618896,1626844195&fm=26&gp=0.jpg",
          price:"￥310",
          company:"Giorgio Armani",
          city:"意大利米兰",
        },{
          name:"",
          img:"http://img1.imgtn.bdimg.com/it/u=676100550,3692856317&fm=26&gp=0.jpg",
          price:"￥310",
          company:"Giorgio Armani",
          city:"意大利米兰",
        },{
          name:"",
          img:"http://img1.imgtn.bdimg.com/it/u=1554849174,884057983&fm=26&gp=0.jpg",
          price:"￥310",
          company:"Giorgio Armani",
          city:"意大利米兰",
        },{
          name:"",
          img:"http://img1.imgtn.bdimg.com/it/u=3674039644,1269261715&fm=26&gp=0.jpg",
          price:"￥310",
          company:"Giorgio Armani",
          city:"意大利米兰",
        },{
          name:"",
          img:"http://img2.imgtn.bdimg.com/it/u=1989748925,198554187&fm=26&gp=0.jpg",
          price:"￥310",
          company:"Giorgio Armani",
          city:"意大利米兰",
        },{
          name:"",
          img:"http://img4.imgtn.bdimg.com/it/u=2476988061,1237729339&fm=26&gp=0.jpg",
          price:"￥310",
          company:"Giorgio Armani",
          city:"意大利米兰",
        },{
          name:"",
          img:"http://img2.imgtn.bdimg.com/it/u=702093379,633826279&fm=11&gp=0.jpg",
          price:"￥310",
          company:"Giorgio Armani",
          city:"意大利米兰",
        },{
          name:"",
          img:"http://img1.imgtn.bdimg.com/it/u=3184464554,4179985047&fm=26&gp=0.jpg",
          price:"￥310",
          company:"Giorgio Armani",
          city:"意大利米兰",
        }, 
      ],
      swiperOption:{
        slidesPerView:'3',
      }
    };
  },
 components: {
    swiper,
    swiperSlide
  },
  created(){
    /* axios.get('https://bird.ioliu.cn/v2?url=https://api.douban.com/v2/movie/top250').then(res=>{
        console.log(res);
    }); */
    let url1="http://www.weichuang.com/getList";
     axios.get(url1).then(res=>{
       console.log(res);
     })
  },
}
</script>

<style lang="scss">
.container{
  background-color:#eee;
}
.carousel{
  margin-top:1rem;
  height:3rem;
  &-item{
    img{
      width:100%;
      height:3rem;
    }
  }
}
.hot{
  margin-top:0.2rem;
  background-color:#fff;
  &-title{
    width:100%;
    height:0.5rem;
    padding-left:0.2rem;
    line-height:0.5rem;
    -webkit-box-sizing:border-box;
  }
  &-swiper{
    &-content{
      width:2rem;
      text-align:center;
      img{
        width:2rem;
        height:2rem;
      }
    }
  }
} 
.nav-title{
  position:fixed;
  width:100%;
  top:0;
  left:0;
  z-index:999!important;
}
.variety{
  margin-top:0.2rem;
  background-color:#fff;
  text-align:center;
  ul{
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
    margin-bottom:1rem;
  }
  &-item{
    flex-basis:45%;
  }
  img{
    width:2rem;
    height:2rem;
  }
}
</style>