<template>
  <div class="contactus">
    <div class="row technology">
      <div class="col-sm-4">
        <img src="/static/img/home/icon_add.png" alt="">
        <p>北京市海淀区西郊半壁店５９号凯宾科技大厦</p>
        <p>５００８室</p>
      </div>
      <div class="col-sm-4">
        <img src="/static/img/home/icon_tel.png" alt="">
        <p>０１０－６８２１９０６７</p>
      </div>
      <div class="col-sm-4 email" @click="getFocus">
        <img src="/static/img/home/icon_mail.png" alt="">
        <p>INHO@INHOTECH.COM</p>
      </div>
    </div>
    <div class="row technology messagrCon">
      <form name='sendmail' action='mailto:inho@inhotech.com'>
        <div class="col-sm-4">
          <div class="input-group">
            <span class="input-group-btn">
              <p>姓名 NAME：</p>
            </span>
            <input ref="content" name='body' type="text" v-model="name">
          </div>
        </div>
        <div class="col-sm-4">
          <div class="input-group">
            <span class="input-group-btn">
              <p>电话 TEL：</p>
            </span>
            <input name='body' type="text" v-model="tel">
          </div>
        </div>
        <div class="col-sm-4">
          <div class="input-group">
            <span class="input-group-btn">
              <p>邮箱 EMAIL：</p>
            </span>
            <input name='cc' type="text" v-model="email">
          </div>
        </div>
        <div class="col-sm-12" style="padding-top: 40px;padding-bottom: 60px">
          <div class="input-group">
            <span class="input-group-btn">
              <p>留言内容 MESSAGE：</p>
            </span>
            <input name='body' type="text" v-model="messagr">
          </div>
        </div>
        <div class="row messagr">
          <input type="submit" value="提交留言">
        </div>
      </form>
    </div>

  </div>
</template>

<script>
  export default {
    name: "Contactus",
    data() {
      return {
        name: '',
        tel: '',
        email: '',
        messagr: ''
      }
    },
    methods: {
      submitFn() {
        var data = JSON.stringify({"name": this.name, "tel": this.tel, "eamil": this.email, "messagr": this.messagr});
        console.log(data);
        post("api/", data, function (msg) {
          console.log(msg);
        }, function (msg) {
          showError(msg.msg);
        })
      },
      getFocus(){
        this.$refs.content.focus()
      }
    }
  }
</script>

<style scoped lang="less">
  .contactus{
    .email{
      cursor: pointer;
    }
  }



  .technology {
    text-align: center;
    padding-bottom: 77px;
  }

  .technology h2 {
    padding-top: 62px;
    font-size: 22px;
    font-weight: bold;
  }


  .technology p {
    line-height: 30px;
    color: #85888e;
    font-size: 14px;
  }

  .Solution p:nth-child(1) {
    font-size: 36px;
    line-height: 50px;
  }

  .Solution p:nth-child(2) {
    font-size: 28px;
    line-height: 50px;
  }

  .Solution p:nth-child(3) {
    font-size: 14px;
    color: #85888e;
    line-height: 50px;
  }


  .img img {
    width: 100%;
    height: 100%;
  }

  .Products ul {
    width: 480px;
    margin: 0 auto;
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
  }

  .Products ul li {
    width: 160px;
    text-align: center;
  }

  .Products ul li a {
    font-size: 12px;
    color: #818388;
    cursor: pointer;
    padding-bottom: 7px;
  }

  .Products ul li a:hover {
    border-bottom: 2px solid #008c3c;
  }

.input-group-btn{
  border-bottom: 1px solid #b8b8b8;
}
  .messagrCon input {
    border: none;
    border-bottom: 1px solid #b8b8b8;
    width: 100%;
    height: 50px;
  }


  .messagr {
    text-align: center;
  }

  .messagr input {
    width: 210px;
    height: 50px;
    background: none;
    border: 1px solid #666970;
    border-radius: 20px;
    color: #464a53;
    font-size: 16px;
  }

  .on a {
    border-bottom: 2px solid #008c3c;
    color: #008c3c !important;
  }
</style>
