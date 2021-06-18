<?php
if ($_POST) {
  require_once dirname(dirname(dirname(__DIR__))) . '/functions/exam_answer_query/get_result.php';
  exit();
} elseif ($_GET) {
  exit('当前不认为需要支持此方式进行查询');
}

define('title', '获取参考');
require_once dirname(dirname(__DIR__)) . '/header.php';
?>
<link rel="stylesheet" href="/static/css/exam_answer_query/get_answer.min.css">
<div class="mt-5 container-fluid">
  <div class="mb-4 py-4 container rounded border" id="analytics">
    <div class="mb-1 input-group">
      <label class="input-group-text" for="analyticsLink">网址</label>
      <input class="form-control" type="text" id="analyticsLink" placeholder="考试链接" pattern="">
    </div>
  </div>
  <div class="mb-3 py-4 container rounded border" id="parameter">
    <div class="mb-3">
      <div class="input-group">
        <label class="input-group-text" for="mode">访问模式 MODE</label>
        <select class="form-select" id="mode">
          <optgroup label="基础功能">
            <option value="view">查阅</option>
            <option value="exam">测试</option>
          </optgroup>
          <optgroup label="免登录模式">
            <option value="exercise" selected>逐题</option>
          </optgroup>
        </select>
      </div>
    </div>
    <div>
      <div class="mb-2">
        <div class="mb-1 input-group">
          <label class="input-group-text" for="le_id">LE_ID</label>
          <input class="form-control" type="text" id="le_id" placeholder="答卷编号">
        </div>
        <div class="mb-1 input-group">
          <label class="input-group-text" for="token_le_id">TOKEN_LE_ID</label>
          <input class="form-control" type="text" id="token_le_id" placeholder="TOKEN_LE_ID">
        </div>
      </div>
      <div class="mb-2">
        <div class="mb-1 input-group">
          <label class="input-group-text" for="t_id">T_ID</label>
          <input class="form-control" type="text" id="t_id" placeholder="考试场次编号">
        </div>
        <div class="mb-1 input-group">
          <label class="input-group-text" for="token_t_id">TOKEN_T_ID</label>
          <input class="form-control" type="text" id="token_t_id" placeholder="TOKEN_T_ID">
        </div>
      </div>
      <div class="mb-2">
        <div class="mb-1 input-group">
          <label class="input-group-text" for="p_id">P_ID</label>
          <input class="form-control" type="text" id="p_id" placeholder="试卷编号">
        </div>
        <div class="mb-1 input-group">
          <label class="input-group-text" for="token_p_id">TOKEN_P_ID</label>
          <input class="form-control" type="text" id="token_p_id" placeholder="TOKEN_P_ID">
        </div>
      </div>
      <div class="mb-2">
        <div class="mb-1 input-group">
          <label class="input-group-text" for="c_id">C_ID</label>
          <input class="form-control" type="text" id="c_id" placeholder="班级编号">
        </div>
      </div>
      <div class="mb-2">
        <div class="mb-1 input-group">
          <label class="input-group-text" for="k_id">K_ID</label>
          <input class="form-control" type="text" id="k_id" placeholder="K_ID">
        </div>
      </div>
    </div>
  </div>
  <div class="mb-3 px-0 container card">
    <div class="card-header">
      <nav class="nav nav-tabs card-header-tabs">
        <a class="nav-link" data-bs-toggle="tab" href="#tabNumber">编号</a>
        <a class="nav-link" data-bs-toggle="tab" href="#tabInternetSite">网址</a>
        <a class="nav-link" data-bs-toggle="tab" href="#tabViewResult">成绩</a>
        <a class="nav-link small ml-auto text-muted fas fa-plus-square" data-bs-toggle="collapse" href="#collapse"
           role="button" aria-expanded="true" aria-controls="collapse"></a>
      </nav>
    </div>
    <div class="collapse fade show" id="collapse">
      <div class="card-body">
        <div class="tab-content">
          <div class="tab-pane fade" id="tabNumber" role="tabpanel">
            <div class="d-flex flex-column align-items-center justify-content-center">
              <button class="mb-2 py-2 btn btn-sm btn-secondary" type="button" id="get_no_logout">抓取对应的免登录信息</button>
              <button class="mb-2 py-2 btn btn-sm btn-secondary" type="button" id="get_exam_info">读取对应的试卷信息</button>
              <button class="mb-2 py-2 btn btn-sm btn-secondary" type="button" id="get_exam_answer">读取对应试卷的答案信息</button>
              <button class="mb-2 py-2 btn btn-sm btn-secondary" type="button" id="temp_save_exam">临时保存</button>
              <button class="mb-2 py-2 btn btn-sm btn-secondary" type="button" id="save_exam">提交试卷</button>
            </div>
          </div>
          <div class="tab-pane fade" id="tabInternetSite" role="tabpanel">
            <div class="d-flex flex-column align-items-center justify-content-center">
              <button class="mb-2 py-2 btn btn-sm btn-secondary" type="button" id="">查看</button>
            </div>
          </div>
          <div class="tab-pane fade" id="tabViewResult" role="tabpanel">
            <div class="d-flex flex-column align-items-center justify-content-center">
              <button class="mb-2 py-2 btn btn-sm btn-secondary" type="button" id="recur">查看成绩</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="d-flex flex-column align-items-center justify-content-center">
    <button class="mb-2 py-2 btn btn-sm btn-secondary" type="button" id="get_answer">抓取参考信息到服务器</button>
  </div>
  <div class="mb-3 pt-5 d-flex justify-content-center flex-column align-items-center">
    <div class="mb-2 px-4 py-2 border border-secondary shadow rounded-lg d-flex align-items-center user-select-none"
         id="crawlStatus" data-bs-toggle="collapse" data-bs-target="#help_color_circle">
      <span>抓取状态：</span>
      <i class="mx-2 text-black-50 fa-lg fas fa-circle"></i>
    </div>
    <div class="collapse show" id="help_color_circle">
      <div class="d-flex justify-content-center">
        <div data-bs-toggle="collapse" data-bs-target="#help_color_circle">
          <table
            class="text-center table table-sm table-bordered table-info table-striped table-hover table-responsive">
            <thead>
            <tr>
              <th>图形</th>
              <th>含义</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td><i class="px-4 text-dark fas fa-circle"></i></td>
              <td class="px-3">服务器故障，不可抓取</td>
            </tr>
            <tr>
              <td><i class="px-4 text-black-50 fas fa-circle"></i></td>
              <td class="px-3">等待抓取</td>
            </tr>
            <tr>
              <td><i class="px-4 text-warning fas fa-circle"></i></td>
              <td class="px-3">抓取中</td>
            </tr>
            <tr>
              <td><i class="px-4 text-primary fas fa-circle"></i></td>
              <td class="px-3">抓取故障</td>
            </tr>
            <tr>
              <td><i class="px-4 text-danger fas fa-circle"></i></td>
              <td class="px-3">抓取失败</td>
            </tr>
            <tr>
              <td><i class="px-4 text-success fas fa-circle"></i></td>
              <td class="px-3">抓取成功</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div class="container d-flex flex-column align-items-center">
      <a class="my-2" href="./index.php" target="_blank">查询参考</a>
    </div>
  </div>
</div>

<div class="d-none">
  <?php require_once dirname(dirname(__DIR__)) . "/javascript.php"; ?>
  <script src="/static/js/exam_answer_query/get_answer.min.js"></script>
</div>

<?php
require_once dirname(dirname(__DIR__)) . '/footer.php';
?>
