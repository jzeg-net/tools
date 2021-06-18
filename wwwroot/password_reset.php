<?php
define('title', '找回密码');
define('descriptionContent', '杰格网致力于为冀中股份工人提供垂直的网络工具、生活信息查询和网络娱乐。');
define('keywordsContent', '');
require_once dirname(__FILE__) . '/common/blank/header.php';
if (!defined('SITE_HEAD')) die();
?>

<div class="container">
  <div class="d-flex flex-column flex-md-row align-items-md-center justify-content-md-between min-vh-100">
    <div class="mb-4 mb-md-0 mr-md-5 d-flex flex-md-grow-1 justify-content-center align-items-center">
      <div class="card bg-transparent border-0">
        <div class="card-body">
          <?php include_once dirname(__FILE__) . '/common/ad/member_sign_ad.php'; ?>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center align-items-center">
      <div class="card">
        <div class="card-body">
          <?php include_once dirname(__FILE__) . '/member/account_form/password_reset.php'; ?>
          <?php include_once dirname(__FILE__) . '/member/account_form/oauth_sign_in.php'; ?>
          <?php include_once dirname(__FILE__) . '/member/account_form/footer_password_reset_link.php'; ?>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="d-none">
  <?php require_once dirname(__FILE__) . "/common/blank/javascript.php"; ?>
</div>

<?php
require_once dirname(__FILE__) . '/common/blank/footer.php';
?>
