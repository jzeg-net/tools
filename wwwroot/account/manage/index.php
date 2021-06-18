<?php
define('title', '账号管理');
define('descriptionContent', '');
define('keywordsContent', '');
require_once dirname(dirname(__DIR__)) . '/header.php';
if (!defined('SITE_HEAD')) die();
?>
  <link rel="stylesheet" href="/static/css/account_manage.min.css">
  <div class="py-2 container-lg" id="account_manage">
    <div class="row">
      <div class="col-12 col-sm-4 col-md-3">
        <div class="mb-3 mb-sm-0 card">
          <div class="card-body">
            <div class="d-flex align-items-center flex-column">
              <img class="mb-1 rounded-circle img-thumbnail bg_square bg-light-50" width="150" height="150" alt="用户头像" style="min-height: 150px;">
              <span class="mb-1 card-title">用户名</span>
              <span class="card-subtitle mb-2 text-muted">123</span>
            </div>
          </div>
          <div class="dropdown-divider"></div>
          <div class="card-body">
            <div class="d-flex flex-column align-items-center">
              <i class="position-absolute align-self-end text-black-50 fas fa-edit"></i>
              <span>昵称</span>
              <span>abc@xyz.com</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-8 col-md-9">
        <div class="mb-2 card">
          <div class="nav nav-pills nav-justified flex-nowrap text-nowrap" style="overflow-x: auto;">
            <a class="nav-item rounded-0 text-reset nav-link active" href="#profile" data-toggle="tab">轮廓</a>
            <a class="nav-item rounded-0 text-reset nav-link" href="#preference" data-toggle="tab">偏好</a>
            <a class="nav-item rounded-0 text-reset nav-link" href="#cloudMemo" data-toggle="tab">云备忘</a>
            <a class="nav-item rounded-0 text-reset nav-link" href="#password" data-toggle="tab">密码</a>
            <a class="nav-item rounded-0 text-reset nav-link" href="#email" data-toggle="tab">邮箱</a>
            <a class="nav-item rounded-0 text-reset nav-link" href="#bindAccount" data-toggle="tab">绑定账号</a>
            <a class="nav-item rounded-0 text-reset nav-link" href="#twoFactorAuthentication" data-toggle="tab">双重验证</a>
            <a class="nav-item rounded-0 text-reset nav-link" href="#personalData" data-toggle="tab">个人数据</a>
          </div>
        </div>
        <div class="card">
          <div class="tab-content">
            <div class="tab-pane fade active show" id="profile">
              <?php include_once dirname(__FILE__) . '/content-profile.php'; ?>
            </div>
            <div class="tab-pane fade" id="preference">
              <?php include_once dirname(__FILE__) . '/content-preference.php'; ?>
            </div>
            <div class="tab-pane fade" id="cloudMemo">
              <?php include_once dirname(__FILE__) . '/content-cloudMemo.php'; ?>
            </div>
            <div class="tab-pane fade" id="password">
              <?php include_once dirname(__FILE__) . '/content-password.php'; ?>
            </div>
            <div class="tab-pane fade" id="email">
              <?php include_once dirname(__FILE__) . '/content-email.php'; ?>
            </div>
            <div class="tab-pane fade" id="bindAccount">
              <?php include_once dirname(__FILE__) . '/content-bindAccount.php'; ?>
            </div>
            <div class="tab-pane fade" id="twoFactorAuthentication">
              <?php include_once dirname(__FILE__) . '/content-twoFactorAuthentication.php'; ?>
            </div>
            <div class="tab-pane fade" id="personalData">
              <?php include_once dirname(__FILE__) . '/content-personalData.php'; ?>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="d-none">
    <?php require_once dirname(dirname(__DIR__)) . "/javascript.php"; ?>
    <script src="/static/js/account_manage.min.js"></script>
  </div>
<?php
require_once dirname(dirname(__DIR__)) . '/footer.php';
