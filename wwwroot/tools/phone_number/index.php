<?php
if ($_POST) {
  require_once dirname(__FILE__) . "/phone_number.php";
  die();
}

define('title', '公共电话本');
require_once dirname(dirname(__DIR__)) . "/header.php";
?>
<link rel="stylesheet" href="/static/css/phone_number.min.css">

<div class="container mt-5 min-vh-90" id="jt_container"></div>

<div class="d-none">
  <?php require_once dirname(dirname(__DIR__)) . "/javascript.php"; ?>
  <script src="/static/js/bs-custom-file-input.min.js"></script>
  <script src="/static/js/cleave.min.js"></script>
  <script src="/static/js/cleave_addons/cleave-phone.cn.min.js"></script>
  <script src="/static/js/phone_number.min.js"></script>
</div>
<?php
require_once dirname(dirname(__DIR__)) . "/footer.php";
?>
