<?php
if (!defined('title')) define('title', '用户信息');
require_once dirname(dirname(__DIR__)) . '/header.php';
if (!defined('JZEG_NET')) die();
?>
  <link rel="stylesheet" href="/static/css/user_index.min.css">
  <div class="py-2 container" id="user_info">
    <div class="mb-2 font-weight-bolder">用户信息</div>
  </div>
  <div class="d-none">
    <?php require_once dirname(dirname(__DIR__)) . "/javascript.php"; ?>
    <script src="/static/js/user_index.min.js"></script>
  </div>
<?php
require_once dirname(dirname(__DIR__)) . '/footer.php';
