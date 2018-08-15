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
     </div>
</template>


<script>
import "@/assets/font/iconfont.css";
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
            
       };
   },
   methods: {
    selectMusic(index) {
      this.nowIndex = index;
    },
     play() {
      this.$refs.musicAudio.play();
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
   },
watch: {
    nowIndex() {
      let nowMusic = this.musicList[this.nowIndex];
      this.albumImg = nowMusic.musicImgSrc;
      this.albumTitle = nowMusic.title;
      this.albumAuthor = nowMusic.author;
      this.musicSrc = nowMusic.src;
    }
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
    background-color: #2a2929;
    width:100%;
    height:4rem;
    overflow-y:scroll;
    &-item{
        color:#fff;
        border-bottom: 1px solid #343433;
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

</style>
