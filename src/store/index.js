import Vue from 'vue'
import Vuex from 'vuex'

// import Login from './login/index'
Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  // strict: debug,
  state:{
    flag1:false,
    thing1:'',
    date1:'',
    judge:false,
    things:[
      {
        flag:false,
        thing:'抄作业',
        date2:null
      },
      {
        flag:false,
        thing:'玩游戏',
        date2:null
      },
      {
        flag:false,
        thing:'读书',
        date2:null
      },
      {
        flag:true,
        thing:'看报',
        date2:null
      },
      {
        flag:true,
        thing:'看电视',
        date2:null
      }
    ]
  },
  mutations:{
    riqi(state,canshu){
      console.log(canshu);
      state.things[canshu.b].date2= canshu.a;
    },
    xzflag(state,canshu){
      state.things[canshu.b].flag = canshu.a;
      console.log(canshu);
    },
    addthing(state,adthing){
      state.things.unshift({flag:false,thing:adthing,date2:null});
    },
    changejg(state){
      state.judge = !state.judge;
    }
  }
})
