<template>
  <div class="recruit container">
    <table class="table">
      <thead>
      <tr>
        <th>职位名称</th>
        <th>职位类型</th>
        <th>所属部门</th>
        <th>工作地点</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="recruit in recruitData">
        <td>{{recruit.name}}</td>
        <td>{{recruit.position}}</td>
        <td>{{recruit.department}}</td>
        <td>{{recruit.place}}</td>
        <td><a href="javascript:;" data-toggle="modal" data-target="#myModal" @click="getCurDataFn(recruit)">查看详情</a></td>
      </tr>
      </tbody>
    </table>
    <!-- 模态框（Modal） -->
    <div class="modal" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
              &times;
            </button>
            <h4 class="modal-title" id="myModalLabel">
              职位详情
            </h4>
          </div>
          <div class="modal-body">
            <form class="form-horizontal">
              <div class="form-group">
                <label for="" class="col-sm-2 control-label">职位名称</label>
                <div class="col-sm-10">
                  <p>{{curData.name}}</p>
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-2 control-label">职位类型</label>
                <div class="col-sm-10">
                  <p>{{curData.position}}</p>
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-2 control-label">所属部门</label>
                <div class="col-sm-10">
                  <p>{{curData.department}}</p>
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-2 control-label">职位描述</label>
                <div class="col-sm-10">
                  <ul v-for="item in curData.jobdescription">
                    <li>{{item}}</li>
                  </ul>
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-2 control-label">任职要求</label>
                <div class="col-sm-10">
                  <ul v-for="item in curData.jobrequirements">
                    <li>{{item}}</li>
                  </ul>
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-2 control-label">工作地点</label>
                <div class="col-sm-10">
                  <p>{{curData.place}}</p>
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-2 control-label">投递简历</label>
                <div class="col-sm-10">
                  <p>inho@inhotech.com</p>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">关闭
            </button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>
  </div>
</template>

<script>
  export default {
    name: "Recruit",
    data() {
      return {
        recruitData:[],
        curData:{}
      }
    },
    created() {
      this.getRecruitFn();
    },
    methods: {
      getRecruitFn() {
        get("/api/recruitData", (msg) => {
          this.recruitData=msg;
          console.log(msg);
        }, (msg) => {
          showError(msg.msg)
        })
      },
      getCurDataFn(data){
        this.curData=data;
      }
    }
  }
</script>

<style scoped lang="less">
  .recruit{
    padding: 30px 0 60px 0;
    .table {
      thead{
        th {
          text-align: center;
          color: #221815;
          font-size: 16px;
          height: 50px;
          line-height: 50px;
          border-bottom: 1px solid #e4e4e4;
          font-weight: normal;
        }
      }


      td {
        text-align: center;
        font-size: 14px;
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid #e4e4e4;
        color: #221815;
        a{
          text-decoration: none;
          color: #00dd9e;
        }
      }
    }
    .modal{
      p{
        height: 34px;
        line-height: 34px;
      }
      ul{
        padding-top: 5px;
        li{
          line-height: 30px;
        }
      }
    }
  }


</style>
