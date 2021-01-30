<style lang='scss' scoped>
.blackc{
    color: rgb(200, 200, 200);
    background-color:  #32315b;    
    #content li{
      width: 90%;
      height: 12vh;
      background-color: #45446c;
      border-radius: 40px;
      margin:0;padding:0;list-style:none;
      margin-bottom: 10px;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    #content span{
      align-self:flex-start;
      margin-left: 6vw;
    }
    #content ul{
      width: 100%;
      list-style: none;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    #content1,#content2{
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }
    #content{
      width: 100vw;
      margin-top: 21vh;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .day{
      font-size: 30px;
    }
    li p{
      font-size: 30px;
    }
}

.whitec{
    color: rgb(200, 200, 200);
    background-color: #ffffff;    
    #content li{
      width: 90%;
      height: 12vh;
      background-color: #ffffff;
      border-radius: 40px;
      border: #d0d0d3 2px solid;
      margin:0;padding:0;list-style:none;
      margin-bottom: 10px;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    #content span{
      align-self:flex-start;
      margin-left: 6vw;
    }
    #content ul{
      width: 100%;
      list-style: none;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    #content1,#content2{
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }
    #content{
      width: 100vw;
      margin-top: 21vh;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .day{
      font-size: 30px;
    }
    li p{
      font-size: 30px;
    }
}


</style>

<template>
  <div :class="judge?'blackc':'whitec'">
  <div id="content">
    <div id="content1">
      <span>TO DO</span>
      <ul>
        <li v-show="!things[index].flag" :key="index" v-for="(item,index) in things">
          <van-checkbox icon-size="35px" :value="things[index].flag" @click="xuanze(index,things[index].flag)"></van-checkbox>
          <p>{{things[index].thing}}</p>
          <van-icon size="40px" @click="show = true,weizhi(index)" name="calendar-o" />
          <div class="day" title=">" size="2px" :value="date">{{things[index].date2}}</div>
          <van-calendar v-model="show" @confirm="onConfirm" />
        </li>

      </ul>
    </div>
    <div id="content2">
      <span>COMPLETED</span>
      <ul>
        <li v-show="things[index].flag" :key="index" v-for="(item,index) in things">
          <van-checkbox icon-size="35px" :value="things[index].flag" @click="xuanze(index,things[index].flag)"></van-checkbox>
          <p>{{things[index].thing}}</p>
          <van-icon size="40px" @click="show = true,weizhi(index)" name="calendar-o" />
          <div class="day" title=">" size="2px" :value="date" >{{things[index].date2}}</div>
          <van-calendar v-model="show" @confirm="onConfirm" />
        </li>
      </ul>
    </div>
  </div>
</div>
  
</template>

<script>
// import { LOGIN } from '@/store/login'
// import { mapActions } from 'vuex'

import { mapState,mapMutations } from 'vuex'

export default {
  data() {
    return {
      checked:true,
      date: '',
      show: false,
      index1:1,
      flag0:false
    };
  },
  methods: {
    ...mapMutations(['riqi','xzflag']),
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      this.show = false;
      this.date = this.formatDate(date);
      const canshu={a:this.date,b:this.index1}
      this.riqi(canshu);
    },
    xuanze(index,tflag){
      this.flag0 = !tflag;
      // console.log(index);
      console.log(this.things);
      const canshu = {a:this.flag0,b:index};
      this.xzflag(canshu);
    },
    weizhi(index){
      this.index1 = index;
    }
  },
  computed:{
      ...mapState(['things','flag1','judge']),
    }
}
</script>
