<?php
if ($_POST) {
  require_once dirname(__FILE__) . "/phone_number.php";
  die();
}

define('title', '公共电话本');
require_once dirname(__DIR__) . "/header.php";
?>
<link rel="stylesheet" href="/static/css/phone_number.min.css">

<div class="container mt-5" id="jt_container">
  <div id="search_number_tools">
    <div class="form-row justify-content-center">
      <div class="mb-3 input-group input-group-lg col-11 col-sm-10 col-md-8 col-lg-6">
        <div class="input-group-prepend">
          <button type="button" class="btn btn-light border text-success" title="区域" data-toggle="dropdown"
                  id="search_regional">
            <i class="text-danger fa-lg fa-fw fas fa-map-signs"></i>
          </button>
          <div class="dropdown-menu min-w-rem-7 shadow text-center" id="search_regional_dropdown_menu">
            <div class="btn-group-vertical btn-group-toggle" data-toggle="buttons">
              <label class="min-w-rem-9 border-0 rounded-0 btn btn-outline-danger" for="search_regional_dp">
                <input type="radio" name="search_regional" id="search_regional_dp" value="dp">东庞</label>
              <label class="min-w-rem-9 border-0 rounded-0 btn btn-outline-danger" for="search_regional_gq">
                <input type="radio" name="search_regional" id="search_regional_gq" value="gq">葛泉</label>
              <label class="min-w-rem-9 border-0 rounded-0 btn btn-outline-danger" for="search_regional_xdw">
                <input type="radio" name="search_regional" id="search_regional_xdw" value="xdw">显德汪</label>
              <label class="min-w-rem-9 border-0 rounded-0 btn btn-outline-danger" for="search_regional_xm">
                <input type="radio" name="search_regional" id="search_regional_xm" value="xm">邢煤</label>
              <label class="min-w-rem-9 border-0 rounded-0 btn btn-outline-danger" for="search_regional_xd">
                <input type="radio" name="search_regional" id="search_regional_xd" value="xd">邢东</label>
              <label class="min-w-rem-9 border-0 rounded-0 btn btn-outline-danger" for="search_regional_zc">
                <input type="radio" name="search_regional" id="search_regional_zc" value="zc">章村</label>
            </div>
            <div class="dropdown-divider border-secondary"></div>
            <div class="btn-group-vertical">
              <button class="min-w-rem-9 border-0 rounded-0 btn btn-outline-success" type="button" id="add_new_number">
                <i class="fas fa-plus-circle">&nbsp;添加新的号码</i></button>
            </div>
          </div>
        </div>
        <label class="sr-only" for="phone_number_input">单位名称、简称或者号码</label>
        <input class="border form-control fas text-center" type="search" id="phone_number_input" minlength="3"
               maxlength="10" placeholder="&#xf015;&#xf095;&#xf3cd;">
      </div>
    </div>
    <div class="d-flex justify-content-center" id="search_btn">
      <a href="javascript:" class="mx-2 btn btn-success name">
        <i class="fa-lg fas fa-home"></i>&nbsp;搜名称</a>
      <a href="javascript:" class="mx-2 btn btn-danger number">
        <i class="fa-lg fas fa-phone"></i>&nbsp;<i class="fa-lg fas fa-mobile-alt"></i>&nbsp;搜号码</a>
    </div>
  </div>
</div>

<div class="d-none">
  <?php require_once dirname(__DIR__) . "/javascript.php"; ?>
  <script src="/static/js/phone_number.min.js"></script>
</div>
<?php
require_once dirname(__DIR__) . "/footer.php";
?>
