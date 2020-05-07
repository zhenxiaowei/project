<template>
  <div class="Companyprofile container">
    <div class="row conStyle">
      <h2>
        <span></span>公司简介
      </h2>
      <p> 北京应互科技有限公司（BeiJing INHO Technology Co.,
        Ltd.）成立于2009年。公司依托核心技术的研究开发，专注于政府机关、国防军工等行业，在建模仿真、智能识别、数据处理等技术领域内为客户提供有效的技术支撑及产品服务。
      </p>
      <p>
        应互科技自成立以来，一直将技术研发积累、产品应用创新作为公司首要发展任务，在项目执行过程中不断提升团队技术能力，增强团队服务质量及意识，现已形成在雷达系统建模仿真、红外仿真模拟、目标信息识别处理等专业应用领域内的先进技术，并具有一定的技术研发经验和定制化产品研制能力。</p>
    </div>
    <div class="row conStyle">
      <h2>
        <span></span>公司愿景
      </h2>
      <div class="col-xs-12 col-sm-offset-4 col-sm-4 col-md-offset-4 col-md-4">
        <img class="img" src="/static/img/about/aboutus_img1.png" alt="">
      </div>
    </div>
    <div class="row conStyle company">
      <h2>
        <span></span>核心价值观
      </h2>
      <div class="col-xs-12 col-sm-4 col-md-4" style="text-align: right">
        <img src="/static/img/about/1.png" alt="">
      </div>
      <div class="col-xs-12 col-sm-6 col-md-6">
        <p>不断吸收内外部建议，主动分享先进观点，积极开展合作，创建和谐的产业环境，积极推动产业发展。
        </p>
        <p> 不拘泥于现在，时刻洞察先进行业趋势，围绕客户需求创新，构筑坚实的技术实力，持续为企业追求创造新价值。
        </p>
        <p> 打造共同奋斗、积极进取、有高度执行力的团队，通过个人的责任引领，全力以赴实现团队的成功。
        </p>
        <p>信守和不同合作伙伴的承诺，构建良好的、相互依存的内外合作伙伴关系，实现多方共同受益。</p>
      </div>
    </div>
    <div class="row conStyle">
      <h2>
        <span></span>我们的团队
      </h2>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-12">
      <img class="img" src="/static/img/about/aboutus_img2.png" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "Companyprofile"
  }
</script>

<style scoped>
  .Companyprofile{
    padding: 30px 0 60px 0;
  }
  .conStyle {
    text-align: center;
    padding-bottom: 30px;
  }

  .conStyle h2 {
    line-height: 50px;
    font-size: 18px;
    text-align: left
  }

  .conStyle h2 span {
    display: inline-block;
    border: 5px solid #01d08c;
    border-radius: 50%;
    margin-right: 10px
  }

  .conStyle>p {
    text-align: left;
    color: #85888e;
    font-size: 16px;
    text-indent: 20px;
    line-height: 30px;
  }


  .company p{
    text-align: left;
    color: #85888e;
    font-size: 16px;
    line-height: 42px;
  }
  .imgBox{
    padding: 0 120px 31px 120px;
  }

  .img{
    width: 100%;
    height: 100%;
  }
</style>
