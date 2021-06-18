<?php
if (!defined('title')) define('title', '查询发送短信的相关信息');
require_once dirname(dirname(__DIR__)) . '/header.php';
if (!defined('JZEG-NET')) die();
?>
  <link rel="stylesheet" href="/static/css/sms_query.min.css">
  <div class="py-2 container" id="jt_sms_query">
    <div class="mb-2 font-weight-bolder">查询发送短信的相关信息</div>
    <div class="mb-2 px-3 py-2 rounded border">
      <div class="mb-3">
        <div class="col-12 col-md-6 mb-2 mb-md-0 input-group">
          <div class="input-group-prepend">
            <label class="input-group-text" for="jt_sms_query_accessKeyId">KeyId</label>
          </div>
          <input type="text" class="form-control" id="jt_sms_query_accessKeyId" placeholder="RAM用户的AccessKeyId"
                 required>
        </div>
        <div class="col-12 col-md-6 input-group">
          <div class="input-group-prepend">
            <label class="input-group-text" for="jt_sms_query_accessSecret">Secret</label>
          </div>
          <input type="text" class="form-control" id="jt_sms_query_accessSecret" placeholder="RAM用户的AccessSecret"
                 required>
        </div>
        <div class="col-12 form-text small text-muted">
          <span class="small">输入AccessKeyId和AccessSecret</span>
        </div>
      </div>
      <div class="mb-3">
        <div class="input-group">
          <div class="input-group-prepend">
            <label class="input-group-text" for="jt_sms_query_BizId">BizId</label>
          </div>
          <input type="text" class="form-control" id="jt_sms_query_BizId" placeholder="BizId">
        </div>
        <div class="form-text small text-muted">
          <span class="small">发送回执ID，即发送流水号</span>
        </div>
      </div>
      <div class="mb-3">
        <div class="input-group">
          <div class="input-group-prepend">
            <label class="input-group-text" for="jt_sms_query_PhoneNumber">号码</label>
          </div>
          <input type="number" class="form-control" id="jt_sms_query_PhoneNumber" placeholder="纯手机号码" required>
        </div>
        <div class="form-text small text-muted">
          <span class="small">单个手机号码</span>
        </div>
      </div>
      <div class="mb-3">
        <div class="input-group">
          <div class="input-group-prepend">
            <label class="input-group-text" for="jt_sms_query_SendDate">发送日期</label>
          </div>
          <input type="text" class="form-control" id="jt_sms_query_SendDate" value="20200318" required>
        </div>
        <div class="form-text small text-muted">
          <span class="small">发送日期</span>
        </div>
      </div>
      <div class="mb-3">
        <div class="col-12 col-md-6 mb-2">
          <div class="mb-1 input-group">
            <div class="input-group-prepend">
              <label class="input-group-text" for="jt_sms_query_PageSize_number">记录数量</label>
            </div>
            <input type="number" class="form-control text-right" min="1" max="50" step="1" value="25"
                   id="jt_sms_query_PageSize_number">
            <div class="input-group-append">
              <span class="input-group-text">条</span>
            </div>
          </div>
          <div class="form-text small text-muted">
            <span>分页查看发送记录，指定每页显示的短信记录数量</span>
          </div>
          <div>
            <label class="sr-only" for="jt_sms_query_PageSize_range">记录数量滑动条</label>
            <input type="range" class="custom-range" min="1" max="50" step="1" value="25"

                   id="jt_sms_query_PageSize_range">
          </div>
        </div>
        <div class="col-12 col-md-6 mb-2">
          <div class="mb-1 input-group">
            <div class="input-group-prepend">
              <label class="input-group-text" for="jt_sms_query_CurrentPage_number">当前页码</label>
            </div>
            <div class="input-group-prepend">
              <span class="input-group-text">第</span>
            </div>
            <input type="number" class="form-control text-right" min="1" max="10" step="1" value="1"
                   id="jt_sms_query_CurrentPage_number">
            <div class="input-group-append">
              <span class="input-group-text">页</span>
            </div>
          </div>
          <div class="form-text small text-muted">
            <span>分页查看发送记录，指定发送记录的的当前页码。</span>
          </div>
          <div>
            <label class="sr-only" for="jt_sms_query_CurrentPage_range">记录数量滑动条</label>
            <input type="range" class="custom-range" min="1" max="10" step="1" value="1"
                   id="jt_sms_query_CurrentPage_range">
          </div>
        </div>
      </div>
      <div class="mb-3 d-flex justify-content-center">
        <input type="hidden" id="_token">
        <button type="button" class="btn btn-outline-success" id="jt_sms_query_submit">查询</button>
      </div>
    </div>
    <div class="mb-3 d-none" id="jt_sms_query_content">
      <div class="mb-2 font-weight-bolder">查询结果</div>
      <div id="table_set">
        <div class="input-group">
          <div class="input-group-prepend">
            <button class="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown"
                    id="table-classes">表单样式</button>
            <div class="dropdown-menu min-w-rem-7 shadow text-center">
              <div class="btn-group-sm btn-group-vertical btn-group-toggle" data-toggle="buttons">
                <label class="min-w-rem-9 border-0 rounded-0 btn btn-outline-secondary active"><input type="checkbox" id="table" checked disabled>table</label>
                <div class="dropdown-divider border-secondary"></div>
                <label class="min-w-rem-9 border-0 rounded-0 btn btn-outline-secondary"><input type="checkbox" id="table-bordered">table-bordered</label>
                <label class="min-w-rem-9 border-0 rounded-0 btn btn-outline-secondary"><input type="checkbox" id="table-borderless">table-borderless</label>
                <div class="dropdown-divider border-secondary"></div>
                <label class="min-w-rem-9 border-0 rounded-0 btn btn-outline-secondary"><input type="checkbox" id="table-hover">table-hover</label>
                <label class="min-w-rem-9 border-0 rounded-0 btn btn-outline-secondary"><input type="checkbox" id="table-striped">table-striped</label>
                <div class="dropdown-divider border-secondary"></div>
                <label class="min-w-rem-9 border-0 rounded-0 btn btn-outline-secondary"><input type="checkbox" id="table-dark">table-dark</label>
                <label class="min-w-rem-9 border-0 rounded-0 btn btn-outline-secondary"><input type="checkbox" id="table-sm">table-sm</label>
              </div>
            </div>
          </div>
          <div class="input-group-append">
            <button class="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown"
                    id="thead-classes">表格样式</button>
            <div class="dropdown-menu min-w-rem-7 shadow text-center">
              <div class="btn-group-sm btn-group-vertical btn-group-toggle" data-toggle="buttons">
                <label class="min-w-rem-9 border-0 rounded-0 btn btn-outline-secondary active"><input type="radio" id="undefined" checked>undefined</label>
                <label class="min-w-rem-9 border-0 rounded-0 btn btn-outline-secondary"><input type="radio" id="thead-light">thead-light</label>
                <label class="min-w-rem-9 border-0 rounded-0 btn btn-outline-secondary"><input type="radio" id="thead-dark">thead-dark</label>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div>
        <div>
          <div id="RequestId"></div>
          <div id="TotalCount"></div>
          <div id="Message"></div>
          <div id="Code"></div>
        </div>
        <table id="jt_sms_query_table"></table>
      </div>
    </div>
  </div>
  <div class="d-none">
    <?php require_once dirname(dirname(__DIR__)) . "/javascript.php"; ?>
    <script src="/static/js/bootstrap-table.min.js"></script>
    <script src="/static/js/bootstrap-table-zh-CN.min.js"></script>
    <script src="/static/js/sms_query.min.js"></script>
  </div>
<?php
require_once dirname(dirname(__DIR__)) . '/footer.php';
