<?php
define('title', '应急安全知识网络竞赛参考答案');
define('descriptionContent', '传播应急安全知识、增强应急安全意识、提升应急避险能力。');
define('keywordsContent', '应急安全知识网络竞赛,河北省,2020年,安全宣传咨询日,应急厅,应急管理,安全生产,防灾减灾救灾,参考答案,新浪,题库,解析,6月16日,传播应急安全知识,增强应急安全意识,提升应急避险能力');
require_once dirname(dirname(__DIR__)) . '/header.php';
?>
<link rel="stylesheet" href="/static/css/yjt/index.min.css">
<div class="mt-5 container min-vh-90">
  <div class="mb-3 d-flex justify-content-end align-items-center small">
    <a class="ml-3 rounded px-2 border text-decoration-none text-success" href="javascript:" data-toggle="collapse" data-target="#tool-explanation">说明</a>
    <a class="ml-3 rounded px-2 border text-decoration-none text-danger" href="javascript:" data-toggle="collapse" data-target="#tool-regulation">规则</a>
  </div>
  <div class="" id="tools-collapse">
    <div class="collapse small text-success" id="tool-explanation">
      <div class="d-flex justify-content-center">
        <ol>
          <li class="mb-2">如果答题时发现有错误答案，请及时通过钉钉群或者QQ群联系管理员。</li>
          <li class="mb-2">答题时将本页面通过浏览器打开即可。</li>
          <li class="mb-2">点击页面底部二维码图标，即可获取本页面网址的二维码。</li>
        </ol>
      </div>
    </div>
    <div class="collapse small text-danger" id="tool-regulation">
      <div class="d-flex justify-content-center">
        <ol>
          <li class="mb-2">内部使用，请勿扩大使用范围。</li>
          <li class="mb-2">如访问量过大，将考虑引入密码访问机制，或者引入账号系统。</li>
        </ol>
      </div>
    </div>
  </div>
  <div class="px-1 btn-group d-flex text-nowrap" style="overflow-x: auto;" id="categoryList">
    <input type="radio" class="btn-check" name="categories" id="categories_Public">
    <label class="btn btn-outline-secondary" for="categories_Public" data-question="QUESTION_BANK1">公共安全</label>
    <input type="radio" class="btn-check" name="categories" id="categories_Chemicals">
    <label class="btn btn-outline-secondary" for="categories_Chemicals" data-question="QUESTION_BANK2">自然灾害防范</label>
    <input type="radio" class="btn-check" name="categories" id="categories_mine">
    <label class="btn btn-outline-secondary" for="categories_mine" data-question="QUESTION_BANK3">危险品化学</label>
    <input type="radio" class="btn-check" name="categories" id="categories_Limited">
    <label class="btn btn-outline-secondary" for="categories_Limited" data-question="QUESTION_BANK4">有限空间作业</label>
  </div>
  <div class="mt-5 mb-3 py-2 rounded border">
    <div class="ml-0 ml-sm-3 d-flex justify-content-center justify-content-sm-start">
      <div class="small d-none" id="tip">
        <span class="text-info" id="category"></span>
        <span>题目数量为</span>
        <span class="text-primary" id="quantity"></span>
        <span>道题</span>
        <div class="dropdown-divider border-top-dashed border-info"></div>
      </div>
    </div>
    <div id="answer"></div>
  </div>
</div>

<div class="d-none">
  <?php require_once dirname(dirname(__DIR__)) . "/javascript.php"; ?>
  <script src="/static/js/yjt/index.min.js"></script>
</div>
<?php
require_once dirname(dirname(__DIR__)) . '/footer.php';
?>
