<template>
  <div id="apps">
    <img src="/static/img/gouwu/jdlogo.png">
    <h3>全部商品{{length}}</h3>
    <div class="biaoti" >
      <ul  >

        <li> <input type="checkbox" id="sure" v-model="fv" @click="sd"  ><label for="checkbox">全选</label></li>
        <li>商品</li>
        <li>单价</li>
        <li>数量</li>
        <li>小计</li>
        <li>操作</li>
      </ul>
    </div>
    <div class="liebiao" id="list">
      <ul id="fff" class="et"  v-for="(e,index) in we">
        <li> <input type="checkbox" id="be" v-model="e.checked" @click="wq(index)"></li>

        <li><img :src="e.url"></li>
        <li>{{e.message}}</li>
        <li>{{e.price}}</li>
        <li>
          <button v-on:click="subtract(index)">-</button>
          <input type="text" value="0" size="1" id="ef" v-model="e.num">
          <button v-on:click="add(index)">+</button>
        </li>
        <li>{{wer(index)}}</li>
        <li @click="fun(index)">删除</li>

      </ul>

      <div v-if="!we.length">当前没有商品，请添加商品。</div>
      <div id="aq"  :class={ghj:but}>
        <span > 已选择{{sde()}}件商品</span>  <span class="weq">合计{{wry()}}</span> <button  @click="ed">清空购物车</button>
      </div>

    </div>
  </div>
</template>

<script>
    export default {
        name: "gouwu",
      data(){
          return {
            fv:false,
            arr:[],
            et:"df",
            bb:"",
            ws:"",
            wert:0,
            er:"",
            but:false,
            we:[
              {url:"/static/img/gouwu/5adef3e6N3b3d085a.jpg",message:"开间茶馆吧。在某个临水的地方，不招摇，不繁闹。有一些古旧，一些单薄,生意冷清，甚至被人",price:32.90,num:0,checked:false},
              {url:"/static/img/gouwu/5b6299fdNa2588a6a.jpg",message:"开间茶馆吧。在某个临水的地方，不招摇，不繁闹。有一些古旧，一些单薄,生意冷清，甚至被人",price:109.00,num:0,checked:false},
              {url:"/static/img/gouwu/5b779a23N8e4604a5.jpg",message:"开间茶馆吧。在某个临水的地方，不招摇，不繁闹。有一些古旧，一些单薄,生意冷清，甚至被人",price:59.90,num:0,checked:false},
              {url:"/static/img/gouwu/5b7cb4b6Nce1debe2.jpg",message:"开间茶馆吧。在某个临水的地方，不招摇，不繁闹。有一些古旧，一些单薄,生意冷清，甚至被人",price:37.90,num:0,checked:false},
              {url:"/static/img/gouwu/5bc040b3N96bdc3cd.jpg",message:"开间茶馆吧。在某个临水的地方，不招摇，不繁闹。有一些古旧，一些单薄,生意冷清，甚至被人",price:19.90,num:0,checked:false}
            ]
          }

      },methods:{
        ed:function(){
          this.we="";
          this.but=true;
          this.fv=false;
          document.getElementById("sure").disabled="disabled";

        },
        add:function(e){
          this.we[e].num++;


        },
        subtract:function(e){
          if (this.we[e].num<=0){
            alert('受不了啦，宝贝不能再减少啦')
            this.count=0;
          }else {
            this.we[e].num-=1;
          }
        },
        wq:function(e){
          //点击方框
          //console.log(this.we[e].checked)
          var  arrs=[];
          this.we[e].checked=!this.we[e].checked
          if(this.we[e].checked){
            document.getElementById("list").getElementsByClassName("et")[e].style.backgroundColor="red";

          }else{
            document.getElementById("list").getElementsByClassName("et")[e].style.backgroundColor="";
            //this.fv=false;
          }
          for (var i = 0;i<this.we.length;i++){

            arrs.push(this.we[i].checked);

          }
          if(arrs.indexOf(false)==-1){
            this.fv=true

          }else{
            this.fv=false
          }

        },

        fun:function(e){
          var  arrs=[];
          this.ws=e;
          //console.log(this.ws==0)
          //删除

          if(this.ws !==(this.we.length-1)){
            this.we[this.ws].checked== this.we[this.ws+1].checked;

          }else{

          }
          this.we.splice(e,1)
          for (var i = 0;i<this.we.length;i++){

            arrs.push(this.we[i].checked);

          }
          if(arrs.indexOf(false)==-1){
            this.fv=true
          }else{
            this.fv=false
          }
          for(var i=0;i<this.we.length;i++){
            if(this.we[i].checked){
              document.getElementById("list").getElementsByClassName("et")[i].style.backgroundColor="red";
            }else{
              document.getElementById("list").getElementsByClassName("et")[i].style.backgroundColor="";
            }
          }

          if(this.we==""){
            //this.ert=true;
            this.but=true;
            this.fv=false;
            document.getElementById("sure").disabled="disabled";


          }


        },
        sd:function(){
          console.log(this.we.length)
          if(this.fv){
            for(var i =0;i<this.we.length;i++){
              this.we[i].checked=false
              document.getElementById("list").getElementsByClassName("et")[i].style.backgroundColor="";
            }

          }else{
            for(var i =0;i<this.we.length;i++){
              console.log(i)

              this.we[i].checked=true
              this.fv=true;
              document.getElementById("list").getElementsByClassName("et")[i].style.backgroundColor="red";
            }
          }
        },
        wer:function(index){
          //this.sxc(index);
          //	console.log(Math.floor(this.we[index].price*Number(this.we[index].num)))
          return Math.floor(this.we[index].price*Number(this.we[index].num));

        },

        sde:function(){
          var  total=0;
          for(var i=0;i<this.we.length;i++){
            if(this.we[i].checked){
              total+=parseInt(this.we[i].num);
            }
          }
          return total;
        },
        wry:function(){
          var  totall=0;
          for(var i=0;i<this.we.length;i++){
            if(this.we[i].checked){
              totall+=parseInt(this.we[i].num*this.we[i].price);
            }
          }
          return totall;
        }



      },computed:{
        length:function(){
          return this.we.length;
        }


      },mounted:function() {
        /*for (var i = 0; i < this.we.length; i++) {
                this.arr.push(this.we[i].checked);
                console.log(this.arr[0]);
            }*/
        /*for (var i = 0;i<this.we.length;i++){
                var  arrs=[];
                arrs.push(this.we[i].checked);
                console.log(arrs)
            }*/
      }
    }
</script>

<style scoped>
  *{
    margin:0px;
    padding:0px ;
  }
  #apps{
    width: 1200px;
    padding:20px 0px;
    margin: 0 auto;

  }

  #apps .biaoti{
    width: 1200px;
    margin: 0 auto;
    background: #f3f3f3;
    height: 40px;
    line-height: 40px;
    overflow: hidden;
  }
  #apps .biaoti ul li{
    float: left;
    height: 80px;
    list-style: none;
    margin-left: 20px;

  }
  #apps .biaoti ul li:nth-child(2){
    margin-left: 84px;
  }
  #apps .biaoti ul li:nth-child(3){
    margin-left: 530px;
  }
  #apps .biaoti ul li:nth-child(4){
    margin-left: 103px;
  }
  #apps .biaoti ul li:nth-child(5){
    margin-left: 104px;
  }
  #apps .biaotiul li:nth-child(6){
    margin-left: 90px;
  }
  #apps .biaoti ul li:last-child{
    margin-left: 82px;
  }

  #apps .liebiao{
    width: 1200px;
    margin: 0 auto;
    /*background: red;*/
    padding: 0px 0px;


  }
  #apps .liebiao ul{
    padding: 20px 0px;
    height: 100px;
    /*background: deepskyblue;*/
  }
  #apps .liebiao ul li{
    float: left;
    list-style: none;
    margin-left: 20px;
    font-size: 12px;

  }
  #apps .liebiao ul li:first-child{
    margin-left: 0px;
  }
  #apps .liebiao ul li:nth-child(2){
    margin-left: 0px;

  }
  #apps .liebiao ul li:nth-child(3){
    width: 338px;
    white-space: pre-wrap;

  }
  #apps .liebiao ul li:nth-child(4){
    margin-left: 191px;
    /*background: red;*/
    width: 100px;

    text-align: center;
  }
  #apps .liebiao ul li:nth-child(5){
    margin-left: 26px;


  }

  #apps .liebiao ul li:nth-child(6){
    margin-left: 29px;
    width: 100px;
    text-align: center;
    /*background: red;*/
  }
  #apps .liebiao ul li:last-child{
    margin-left: 55px;
  }
  #apps .liebiao ul li{
    overflow: hidden;
  }
  #apps .liebiao ul li button:first-child{
    float: left;

  }
  #apps .liebiao ul li button{
    width:30px;
    height:30px;
  }
  #apps .liebiao ul li input{
    width: 50px;
    height:26px;
    text-align: center;
    float: left;

  }
  #aq{
    width: 389px;
    height: 100px;
    /*background: gray;*/
    float: right;

  }
  #aq span{
    display: block;
    float: left;

  }
  #aq .weq{
    margin-left: 55px;
  }
  #aq button{
    width: 100px;
    height: 80px;
    background: red;
    line-height: 80px;
    text-align: center;
    color: white;
    margin-left: 39px;
  }
  .ghj{
    display: none;
  }
  .rf{
    background: deepskyblue;
  }

</style>
