<div id="account_password_reset">
  <div class="mb-3 form-row align-items-center align-items-sm-stretch">
    <label class="d-none d-sm-block col-2 mb-0 mb-sm-1 text-nowrap text-align-last" for="password_reset_account">账号</label>
    <div class="col-12 col-sm-10 input-group">
      <input class="form-control" type="text" id="password_reset_account" placeholder="请输入您的账号或者邮箱" minlength="5" maxlength="40" pattern="" autocomplete="off" required>
    </div>
  </div>
  <?php include dirname(__FILE__) . "/captcha_form-group.php"; ?>
  <div class="d-flex justify-content-center">
    <button class="rounded-pill btn btn-secondary" type="button" id="password_reset_submit" disabled>找回密码</button>
  </div>
</div>
