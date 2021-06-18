<div id="account_sign_up">
  <div class="mb-3">
    <label class="d-none d-sm-block col-2 mb-0 mb-sm-1 text-nowrap text-align-last" for="signUp_user_name">用户名</label>
    <div class="input-group">
      <input class="form-control rounded-right needs-validation" type="text" id="signUp_user_name" placeholder="请设置你的用户名" minlength="5" maxlength="20" pattern="^[a-zA-Z]\w{4,19}$" autocomplete="off" required>
      <div class="invalid-feedback">字母开头的5-20位字母或数字</div>
    </div>
  </div>
  <div class="mb-3">
    <label class="d-none d-sm-block col-2 mb-0 mb-sm-1 text-nowrap text-align-last" for="signUp_email">邮箱</label>
    <div class="input-group">
      <input class="form-control rounded-right needs-validation" type="email" id="signUp_email" placeholder="请输入您的Email" minlength="6" maxlength="40" autocomplete="off" required>
      <div class="invalid-feedback">邮箱格式不正确</div>
    </div>
  </div>
  <div class="mb-3">
    <label class="d-none d-sm-block col-2 mb-0 mb-sm-1 text-nowrap text-align-last" for="signUp_password">密码</label>
    <div class="input-group">
      <input class="form-control needs-validation" type="password" id="signUp_password" placeholder="设置你的登录密码" minlength="8" maxlength="16" pattern="^\S*(?=\S{8,})(?=\S*\d)(?=\S*[a-zA-Z])(?=\S*[`.~!@#$%^&*? ])\S*$" autocomplete="off" required>
      <div class="input-group-text rounded-right">
        <i class="text-muted fas fa-fw fa-lg fa-eye password_switch" title="显示密码"></i>
      </div>
      <div class="invalid-feedback">大于8位，包含字母、数字、字符3种格式</div>
    </div>
  </div>
  <div class="mb-3">
    <label class="d-none d-sm-block col-2 mb-0 mb-sm-1 text-nowrap text-align-last" for="signUp_rePassword">确认密码</label>
    <div class="input-group">
      <input class="form-control needs-validation" type="password" id="signUp_rePassword" placeholder="请再次输入你的密码" minlength="8" maxlength="16" pattern="^\S*(?=\S{8,})(?=\S*\d)(?=\S*[a-zA-Z])(?=\S*[`.~!@#$%^&*? ])\S*$" autocomplete="off" required>
      <div class="input-group-text rounded-right">
        <i class="text-muted fas fa-fw fa-lg fa-eye password_switch" title="显示密码"></i>
      </div>
      <div class="invalid-feedback">两次的密码不一致</div>
    </div>
  </div>
  <?php include dirname(__FILE__) . "/captcha_form-group.php"; ?>
  <div class="mb-3">
    <div class="d-flex align-items-center justify-content-end justify-content-sm-center custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="signUp_tos" required>
      <label class="ml-2 custom-control-label" for="signUp_tos">同意服务条款</label>
    </div>
  </div>
  <div class="d-flex justify-content-center">
    <button class="w-50 rounded-lg btn btn-secondary" type="button" id="signUp_submit">注册</button>
  </div>
</div>
