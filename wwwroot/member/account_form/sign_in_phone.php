<div id="account_sign_in_phone">
  <div class="mb-3">
    <label class="d-none d-sm-block col-2 mb-0 mb-sm-1 text-nowrap text-align-last" for="signIn_phone">手机号</label>
    <div class="col-sm-10 input-group">
      <div class="input-group-prepend">
        <div class="input-group-text dropdown-toggle" data-toggle="dropdown" id="phone_area">+86</div>
        <div class="dropdown-menu min-w-rem-2 text-center">
          <div class="btn-group-vertical btn-group-toggle" data-toggle="buttons">
            <label class="min-w-rem-2 border-0 rounded-0 btn btn-outline-secondary" for="phone_area_111">+111<input
                type="radio" id="phone_area_111" value="111"></label>
            <label class="min-w-rem-2 border-0 rounded-0 btn btn-outline-secondary" for="phone_area_222">+222<input
                type="radio" id="phone_area_222" value="222"></label>
            <label class="min-w-rem-2 border-0 rounded-0 btn btn-outline-secondary" for="phone_area_333">+333<input
                type="radio" id="phone_area_333" value="333"></label>
            <label class="min-w-rem-2 border-0 rounded-0 btn btn-outline-secondary" for="phone_area_444">+444<input
                type="radio" id="phone_area_444" value="444"></label>
            <label class="min-w-rem-2 border-0 rounded-0 btn btn-outline-secondary" for="phone_area_555">+555<input
                type="radio" id="phone_area_555" value="555"></label>
            <label class="min-w-rem-2 border-0 rounded-0 btn btn-outline-secondary" for="phone_area_666">+666<input
                type="radio" id="phone_area_666" value="666"></label>
          </div>
        </div>
      </div>
      <input class="form-control needs-validation" type="text" id="signIn_phone" placeholder="手机号码" minlength="11" maxlength="11" pattern="^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$" autocomplete="off" required>
    </div>
  </div>
  <?php include dirname(__FILE__) . "/captcha_form-group.php"; ?>
  <div class="d-flex justify-content-center">
    <button class="w-50 rounded-lg btn btn-secondary" type="button" id="sign_in_phone_submit" disabled>登录</button>
  </div>
</div>
