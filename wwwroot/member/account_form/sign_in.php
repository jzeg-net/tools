<div id="account_sign_in">
  <div class="mb-3">
    <label class="d-none d-sm-block col-2 mb-0 mb-sm-1 text-nowrap text-align-last" for="signIn_user_name">用户名</label>
    <div class="input-group">
      <input class="form-control" type="text" id="signIn_user_name" placeholder="请输入用户名" minlength="5" maxlength="20" pattern="" autocomplete="off" required>
    </div>
  </div>
  <div class="mb-3">
    <label class="d-none d-sm-block col-2 mb-0 mb-sm-1 text-nowrap text-align-last" for="signIn_password">密码</label>
    <div class="input-group">
      <input class="form-control" type="password" id="signIn_password" placeholder="请输入密码" minlength="8" maxlength="16" pattern="" autocomplete="off" required>
      <div class="input-group-text">
        <i class="text-muted fas fa-fw fa-lg fa-eye password_switch" title="显示密码"></i>
      </div>
    </div>
  </div>
<!--  --><?php //include dirname(__FILE__) . "/recaptcha_tools.php"; ?>
  <?php include dirname(__FILE__) . "/captcha_form-group.php"; ?>
  <div class="mb-3">
    <div class="d-flex align-items-center justify-content-end justify-content-sm-center custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="signIn_rememberMe">
      <label class="ml-2 custom-control-label" for="signIn_rememberMe">30天内免登录</label>
    </div>
  </div>
  <div class="d-flex justify-content-center">
    <button class="w-50 rounded-lg btn btn-secondary" type="button" id="signIn_submit">登录</button>
  </div>
</div>
