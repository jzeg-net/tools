<?php
if (!defined('title')) define('title', '查询向用户发送的短信内容');
require_once dirname(dirname(__DIR__)) . '/header.php';
if (!defined('JZEG_NET')) die();
?>
  <link rel="stylesheet" href="/static/css/sms_query.min.css">
  <div class="py-2 container" id="jt_sms_query">
    <div class="mb-2 font-weight-bolder">查询向用户发送的短信内容</div>
    <form class="mb-2 px-3 py-2 rounded border" action="/member/sms/query_send.php" method="post"
          enctype="multipart/form-data">
      <div class="form-row form-group">
        <div class="col-12 col-md-6 mb-2 mb-md-0 input-group">
          <div class="input-group-prepend">
            <label class="input-group-text" for="jt_sms_query_accessKeyId">KeyId</label>
          </div>
          <input type="text" class="form-control" name="jt_sms_query_accessKeyId" id="jt_sms_query_accessKeyId"
                 placeholder="RAM用户的AccessKeyId" required>
        </div>
        <div class="col-12 col-md-6 input-group">
          <div class="input-group-prepend">
            <label class="input-group-text" for="jt_sms_query_accessSecret">Secret</label>
          </div>
          <input type="text" class="form-control" name="jt_sms_query_accessSecret" id="jt_sms_query_accessSecret"
                 placeholder="RAM用户的AccessSecret" required>
        </div>
        <div class="col-12 form-text small text-muted">
          <span class="small">输入AccessKeyId和AccessSecret</span>
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <div class="input-group-prepend">
            <label class="input-group-text" for="jt_sms_query_BizId">BizId</label>
          </div>
          <input type="text" class="form-control" name="jt_sms_query_BizId"
                 id="jt_sms_query_BizId" placeholder="BizId">
        </div>
        <div class="form-text small text-muted">
          <span class="small">发送回执ID，即发送流水号</span>
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <div class="input-group-prepend">
            <label class="input-group-text" for="jt_sms_query_PhoneNumber">号码</label>
          </div>
          <input type="number" class="form-control" name="jt_sms_query_PhoneNumber"
                 id="jt_sms_query_PhoneNumber" placeholder="纯手机号码" required>
        </div>
        <div class="form-text small text-muted">
          <span class="small">单个手机号码</span>
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <div class="input-group-prepend">
            <label class="input-group-text" for="jt_sms_query_SendDate">发送日期</label>
          </div>
          <input type="date" class="form-control" name="jt_sms_query_SendDate" id="jt_sms_query_SendDate"
                 value="2020-03-01" required>
        </div>
        <div class="form-text small text-muted">
          <span class="small">发送日期</span>
        </div>
      </div>
      <div class="form-row form-group">
        <div class="col-12 col-md-6 mb-2">
          <div class="mb-1 input-group">
            <div class="input-group-prepend">
              <label class="input-group-text" for="jt_sms_query_PageSize_number">记录数量</label>
            </div>
            <input type="number" class="form-control text-right" min="1" max="50" step="1" value="1"
                   name="jt_sms_query_PageSize_number" id="jt_sms_query_PageSize_number">
            <div class="input-group-append">
              <span class="input-group-text">条</span>
            </div>
          </div>
          <div class="form-text small text-muted">
            <span>分页查看发送记录，指定每页显示的短信记录数量</span>
          </div>
          <label class="sr-only" for="jt_sms_query_PageSize_range">记录数量滑动条</label>
          <input type="range" class="custom-range" min="1" max="50" step="1" value="1"
                 id="jt_sms_query_PageSize_range">
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
                   name="jt_sms_query_CurrentPage_number" id="jt_sms_query_CurrentPage_number">
            <div class="input-group-append">
              <span class="input-group-text">页</span>
            </div>
          </div>
          <div class="form-text small text-muted">
            <span>分页查看发送记录，指定发送记录的的当前页码。</span>
          </div>
          <label class="sr-only" for="jt_sms_query_CurrentPage_range">记录数量滑动条</label>
          <input type="range" class="custom-range" min="1" max="10" step="1" value="1"
                 id="jt_sms_query_CurrentPage_range">
        </div>
      </div>
      <div class="form-group text-center">
        <input type="hidden" name="_token" id="_token">
        <button type="submit" class="btn btn-outline-success" id="jt_sms_query_submit">查询</button>
      </div>
    </form>
    <div class="mb-2">
      <div class="font-weight-bolder">查询结果</div>
      <div class="px-3 py-2 rounded border small" id="jt_sms_query_smsContent">发送的短信内容</div>
    </div>
  </div>
  <div class="d-none">
    <?php require_once dirname(dirname(__DIR__)) . "/javascript.php"; ?>
    <script src="/static/js/sms_query.min.js"></script>
  </div>
<?php
require_once dirname(dirname(__DIR__)) . '/footer.php';
