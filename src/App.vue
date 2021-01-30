<template>
  <div :class="judge?'blacktop':'whitetop'">
    <div id="app">
      <van-popup class="tanchu" :style="{ height: '100%',width:'30%' }" position="left" v-model="show">
        <div class="tanchu">
          <p>开启夜间模式</p>
          <van-switch :value="judge" @click="changejg()" />
        </div>
        
      </van-popup>
      <div id="tou">
        <div id="tou1">
          <van-icon @click="showPopup()" size="7vh" color="#6e6d8c" class="diandian" name="more-o" />
          
          <!-- <van-button type="primary" text="显示遮罩层" @click="changezz()" /> -->
          <!-- <van-overlay :show="zhezhao" @click="changezz()" /> -->
          <p>CHORES</p>
        </div>
        <div id="tou2">
          <input placeholder="Add Item" v-model="adcontent" type="text">
          <van-icon color="#3b78af" size="7vh" @click="add" name="add-o" />
        </div>
      </div>
      <router-view style="overflow:auto"></router-view>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'App',
  data() {
    return {
      adcontent:'',
      show: false,
      show1: false,
      checked:false,
    }
  },
  methods: {
    ...mapMutations(['addthing','changejg']),
    add(){
      if(this.adcontent!=''){
        this.addthing(this.adcontent);
      }else{
        console.log("kong");
      }
      this.adcontent='';
    },
    showPopup() {
      this.show = true;
    },
  },
  computed:{
    ...mapState(['things','judge']),
  }
}

</script>

<style lang='scss' scoped>
$tou-height:20vh;
$tou-bt:1vh;

.blacktop{
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color:#6e6d8c;
    background-color:  #32315b;
  }
  #tou{
    height: $tou-height;
    width: 100%;
    background-color: #32315b;
    position: fixed;
    border-bottom: $tou-bt solid #6e6d8c;
  }
  #tou1{
    height: 37%;
    width: 100vw;
    background-color:  #32315b;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  #tou2{
    height: 63%;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .diandian{
    margin-left: 10px;
  }
  #tou p{
    margin-right: 10px;
  }
  #tou input{
    width: 90%;
    height: 50px;
    border-radius: 25px;
    border: 0;
    outline: none;
    margin-right: -13vw;
    font-size: 2em;
    padding-left: 3vw;
  } 
  #tou input::-webkit-input-placeholder{
    font: 10em;
  }
}

.whitetop{
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color:#6e6d8c;
    background-color: #ffffff;
  }
  #tou{
    height: $tou-height;
    width: 100%;
    background-color: #ffffff;
    position: fixed;
    border-bottom: $tou-bt solid #f9f7ff;
  }
  #tou1{
    height: 37%;
    width: 100vw;
    background-color:  #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  #tou2{
    height: 63%;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .diandian{
    margin-left: 10px;
  }
  #tou p{
    margin-right: 10px;
  }
  #tou input{
    width: 90%;
    height: 50px;
    border-radius: 25px;
    border: #f1f5f6 3px solid;
    outline: none;
    margin-right: -13vw;
    font-size: 2em;
    padding-left: 3vw;
    
  } 
  #tou input::-webkit-input-placeholder{
    font: 10em;
  }
}

#tanchu{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

</style>
