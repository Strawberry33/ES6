<template>
     <div>
         <div class="album">
             <div class="album-mask" :style="{background:'url('+albumImg+') no-repeat center/cover' }"></div>
             <div class="album-img">
                  <img :src="albumImg" alt="">
             </div>
             <div class="album-info">
                 <p class="album-info-title">{{albumTitle}}</p>
                 <p class="album-info-author">{{albumAuthor}}</p>
                  <div class="album-info-control clearfix">
                    <div class="album-info-control-icon">
                        <i class="icon iconfont icon-shangyishou" @click="prev"></i>
                        <i class="icon iconfont icon-bofang" v-show="!isPlay" @click="play"></i>
                        <i class="icon iconfont icon-zanting" v-show="isPlay" @click="pause"></i>
                        <i class="icon iconfont icon-xiayishou" @click="next"></i>
                    </div>
                    <span class="album-info-control-menu" @click="toggleList=!toggleList">歌单</span>
                    </div>
             </div>
         </div>
         <!-- 歌单 -->
          <transition name="slide">
            <ul class="music-list" v-show="toggleList">
               <li  @click="selectMusic(index)" :class="['music-list-item', nowIndex==index?'selected':'']" v-for="(music,index) in musicList" :key="index">
                    <span class="music-list-item-title">{{music.title}}&nbsp;-&nbsp;</span>
                    <span class="music-list-item-author">{{music.author}}</span>
                </li>
            </ul>
        </transition>
        <!-- 播放控件 -->
      <div class="audio">
           <audio ref="musicAudio" @play="isPlay=true" @pause="isPlay=false" class="audio-ctrl" :src="musicSrc" autoplay controls></audio>
      </div>
      <ul class="lrclist"  ref="lrclist">
          <li :class=" lrcIndex==index?'selected':'' " v-for="(lrc,index) in lrcList" :key="lrc.time" >
              {{lrc.lrc}}
          </li>
      </ul>
     </div>
</template>


<script>
import "@/assets/font/iconfont.css";
import axios from 'axios';
export default{
   props:["musicList"],
   data(){
       return{
            nowIndex: -1,
            albumImg: "http://img2.imgtn.bdimg.com/it/u=3072730499,2216076607&fm=27&gp=0.jpg",    
            albumTitle:'',
            albumAuthor:'',
            isPlay:false,
            toggleList:true,
            musicSrc:"",
            lrcList:[],//歌词的数组
            lrcIndex:-1,  
       };
   },
   methods: {
    selectMusic(index) {
      this.nowIndex = index;
    },
     play() {
         if(this.nowIndex != -1){
             this.$refs.musicAudio.play();
             }
     
    },
    pause() {
      this.$refs.musicAudio.pause();
    },
    prev(){
         this.nowIndex--;
      if (this.nowIndex == -1) {
        this.nowIndex = this.musicList.length - 1;
      }
    },
    next(){
          this.nowIndex++;
      if (this.nowIndex == this.musicList.length) {
        this.nowIndex = 0;
      }
    },
    //解析歌词
    parseLrc(text){
        // console.log(text);
        //按照行分隔
        let line=text.split('\n');
        // console.log(line);
        //时间 歌词 分隔
        line.forEach(elem=>{
            // reg.exec(str);正则表达式下面的方法
            // str.match(reg);字符下的reg正则表达式
            let time=elem.match(/\[\d{2}:\d{2}.\d{2}\]/);
            if (time!=null){
                let lrc=elem.split(time)[1];
                // console.log(time[0],lrc);
                let timeReg=time[0].match(/(\d{2}):(\d{2}).(\d{2})/);
                let time2Seconds=parseInt(timeReg[1])*60+parseInt(timeReg[2])+parseInt(timeReg[3])/1000;
                // console.log(time2Seconds,lrc);
                // this.lrcList.push([time2Seconds,lrc]);
                this.lrcList.push(
                    {
                        time:time2Seconds,
                        lrc:lrc,
                    }
                );
            } 
        });
    },
   },
watch: {
    nowIndex() {
      let nowMusic = this.musicList[this.nowIndex];
      this.albumImg = nowMusic.musicImgSrc;
      this.albumTitle = nowMusic.title;
      this.albumAuthor = nowMusic.author;
      this.musicSrc = nowMusic.src;
      this.lrcList=[];
      this.lrcIndex=-1;
    //   console.log(nowMusic.lrc); 默认的路径就是lrc
      axios.get('/' + nowMusic.lrc).then(res=>{
        //    console.log(res.data);
        this.parseLrc(res.data);
           //输出之后需要的是.data,所以res.data
      });
    }
  },
  mounted(){
      let musicAudio= this.$refs.musicAudio;
      this.$refs.musicAudio.addEventListener(
          'timeupdate',()=>{
            //   console.log(musicAudio.currentTime);
            let currentTime= musicAudio.currentTime;
            // console.log(this.lrcList[0]);
            // console.log(currentTime);
            this.lrcList.forEach((elem,index)=>{
                console.log(elem.time,currentTime);
                if(Math.ceil(elem.time) >= currentTime &&  Math.floor(elem.time) < currentTime){
                     this.lrcIndex = index;
                      this.$refs.lrclist.scrollTop = this.lrcIndex * 25;
                       }
            });
          }
      );//括号里绑定事件类型，然后箭头函数,timeupdate时间改变被触发的事件
  }
   
}
    
</script>

<style lang="scss" scoped>
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
.music-list{
    position:fixed;
    bottom:1.8rem;
    background-color:#fff;
    width:100%;
    height:4rem;
    overflow-y:scroll;
    &-item{
        color:rgb(199, 123, 199);
        border-bottom: 1px solid #fff;
        padding:0.1rem;

        &.selected{
            color:aquamarine;
        }
    }
}
.album{
    display:flex;
    position: relative;
    color:#fff;
     &-mask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    filter: blur(20px);
    z-index: -1;
  }
    &-img{
        flex-grow:1;
        width:0;
        img{
            width:100%;
        }
    }
    &-info{
        flex-grow:2;
        width:0;
        text-align: center;
        &-title{
            font-size: 0.5rem;
        }
        &-control{
            &-icon{
                float:left;
                margin-left: 15%;
            }
            &-menu{
                float:right;
                margin-right:15%;
            }
        }
    }
}
.slide{
    &-enter{
         transform: translateY(100%);

        &-to{
             transform: translateY(0);
        }
        &-active{
            transition: transform 1s ease;
        }
    }
    &-leave{
         transform: translateY(0);

        &-to{
             transform: translateY(100%);
        }
        &-active{
            transition: transform 1s ease;
        }
    }
}
.audio{
    position:fixed;
    bottom:1rem;
    width:100%;
  &-ctrl {
    width: 100%;
  }
}

.lrclist{
  text-align: center;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 2rem;
  top: 3.3rem;
  overflow-y: scroll;
  z-index: -1;
  padding-top: 2rem;

  .selected{
    color: #299557;
    font-size: 150%;
  }
}
</style>
