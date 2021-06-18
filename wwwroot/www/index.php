<?php
define('title', '');
define('descriptionContent', '杰格网致力于为冀中股份工人提供垂直的网络工具、生活信息查询和网络娱乐。');
define('keywordsContent', '冀中股份,冀中能源,东庞矿,葛泉矿,邢台矿,章村矿,显德汪矿,邢东矿,邢煤工人村');
require_once dirname(__DIR__) . '/header.php';
if (!defined('SITE_HEAD')) die();
?>
<link rel="stylesheet" href="static/css/www.min.css">

<div class="container">
  <div class="d-flex justify-content-center align-items-center min-vh-90">
    <div class="card bg-light">
      <div class="card-header">
        <strong class="text-dodgerblue">欢迎光临杰格网</strong>
      </div>
      <div class="card-body small">
        <div>杰格网正在建设中，请先加入页面底部的钉钉群进行主讨论，微信群和QQ群为辅助讨论。</div>
        <div>账号暂未开放，目前无需注册，内容访问不受影响。</div>
        <div>微信号：JZEG-NET</div>
        <div class="mt-2 d-flex justify-content-end">2020.10.06</div>
      </div>
    </div>
  </div>
</div>
<div class="d-none">
  <?php require_once dirname(__DIR__) . "/javascript.php"; ?>
  <script src="static/js/www.min.js"></script>
</div>

<?php
require_once dirname(__DIR__) . '/footer.php';
?>
