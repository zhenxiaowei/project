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
      <form>
        <div class="col-sm-6">
          <div class="input-group">
            <span class="input-group-btn">
              <p>姓名 NAME：</p>
            </span>
            <input ref="content" name='name' type="text" v-model="name">
          </div>
        </div>
        <div class="col-sm-6">
          <div class="input-group">
            <span class="input-group-btn">
              <p>电话 TEL：</p>
            </span>
            <input name='number' type="text" v-model="tel">
          </div>
        </div>
        <div class="col-sm-6" style="padding-top: 40px;padding-bottom: 60px">
          <div class="input-group">
            <span class="input-group-btn">
              <p>留言主题 THEME：</p>
            </span>
            <input name='subject' type="text" v-model="theme">
          </div>
        </div>
        <div class="col-sm-6" style="padding-top: 40px;padding-bottom: 60px">
          <div class="input-group">
            <span class="input-group-btn">
              <p>留言内容 MESSAGE：</p>
            </span>
            <input name='body' type="text" v-model="message">
          </div>
        </div>
        <div class="row messagr">
          <a :href="mailto" @click="submitFn">提交留言</a>
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
        theme: '',
        message: '',
        mailto:''
      }
    },
    methods: {
      submitFn() {
        var data = JSON.stringify({"name": this.name, "tel": this.tel, "theme": this.theme, "message": this.message});
        var body="my name is:"+this.name+"%0a%0d"+"my phone is:"+this.tel+"%0a%0d"+"my message is:"+this.message;
        this.mailto="mailto:inho@inhotech.com?subject="+this.theme+"&body="+body;
      },
      getFocus() {
        this.$refs.content.focus()
      }
    }
  }
</script>

<style scoped lang="less">
  .contactus {
    .email {
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

  .input-group-btn {
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

  .messagr a {
    padding: 10px 40px;
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
