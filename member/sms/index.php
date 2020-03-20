<?php
if (!defined('title')) define('title', '向用户发送短信提示');
require_once dirname(dirname(__DIR__)) . '/header.php';
if (!defined('JZEG_NET')) die();
?>
  <link rel="stylesheet" href="/static/css/sms_index.min.css">
  <div class="py-2 container" id="jt_sms_send">
    <div class="mb-2 font-weight-bolder">向用户发送短信提示</div>
    <form class="px-3 py-2 rounded border" action="/member/sms/send.php" method="post" enctype="multipart/form-data">
      <div class="form-row form-group">
        <div class="col-12 col-md-6 mb-2 mb-md-0 input-group">
          <div class="input-group-prepend">
            <label class="input-group-text" for="jt_sms_send_accessKeyId">KeyId</label>
          </div>
          <input type="text" class="form-control" name="jt_sms_send_accessKeyId" id="jt_sms_send_accessKeyId"
                 placeholder="RAM用户的AccessKeyId" required>
        </div>
        <div class="col-12 col-md-6 input-group">
          <div class="input-group-prepend">
            <label class="input-group-text" for="jt_sms_send_accessSecret">Secret</label>
          </div>
          <input type="text" class="form-control" name="jt_sms_send_accessSecret" id="jt_sms_send_accessSecret"
                 placeholder="RAM用户的AccessSecret" required>
        </div>
        <div class="col-12 form-text small text-muted">
          <span class="small">输入AccessKeyId和AccessSecret</span>
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <div class="input-group-prepend sr-only">
            <label class="input-group-text" for="jt_sms_send_PhoneNumbers">号码</label>
          </div>
          <div class="input-group-prepend">
            <div class="input-group-text">
              <div class="custom-control custom-switch">
                <input type="checkbox" class="custom-control-input" name="jt_sms_send_type"
                       id="jt_sms_send_type" value="batch">
                <label class="custom-control-label" for="jt_sms_send_type">批量</label>
              </div>
            </div>
          </div>
          <textarea class="form-control" name="jt_sms_send_PhoneNumbers" id="jt_sms_send_PhoneNumbers"
                    placeholder="纯手机号码" rows="1" required></textarea>
        </div>
        <div class="form-text small text-muted">
          <span class="small">手机号码，批量上限1000个，英文逗号（,）分隔</span>
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <div class="input-group-prepend">
            <label class="input-group-text" for="jt_sms_send_TemplateCode">短信类别</label>
          </div>
          <select class="p-0 custom-select" size="4" name="jt_sms_send_TemplateCode"
                  id="jt_sms_send_TemplateCode" required style="overflow: auto;">
            <option class="px-3 py-1" value="forget_user_info">找回用户信息</option>
            <option class="px-3 py-1" value="forget_user_name">找回用户名</option>
            <option class="px-3 py-1" value="forget_user_password">重置密码</option>
            <option class="px-3 py-1" value="user_register">验证码-注册</option>
            <option class="px-3 py-1" value="user_login">验证码-登录</option>
            <option class="px-3 py-1" value="change_user_password">验证码-修改密码</option>
            <option class="px-3 py-1" value="Sensitive_operation_notification">敏感操作通知</option>
          </select>
        </div>
        <div class="form-text small text-muted">
          <span class="small">发送短信的类别</span>
        </div>
      </div>
      <div class="form-group text-center">
        <input type="hidden" name="_token" id="_token">
        <button type="submit" class="btn btn-outline-success" id="jt_sms_send_submit">发送短信</button>
      </div>
    </form>
  </div>
  <div class="d-none">
    <?php require_once dirname(dirname(__DIR__)) . "/javascript.php"; ?>
    <script src="/static/js/sms_index.min.js"></script>
  </div>
<?php
require_once dirname(dirname(__DIR__)) . '/footer.php';
