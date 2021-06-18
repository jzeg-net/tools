<?php
if (!defined('SITE_HEAD')) die();
?>
<div class="card-body">
  <div class="mb-2 d-flex justify-content-between text-muted">
    <span class="font-weight-bold">基本信息</span>
    <i class="fas fa-minus" data-toggle="collapse" data-target="#base_information"></i>
  </div>
  <div class="ml-2 collapse show" id="base_information">
    <div class="mb-3">
      <div class="col-auto col-sm-3 col-md-2">
        <label class="mb-0 px-0 px-md-2 px-lg-3 min-w-100 text-align-last col-form-label-sm" for="user_name">用户名</label>
      </div>
      <div class="col-12 col-sm-9 col-md-10">
        <input class="border form-control form-control-sm" type="text" id="user_name" value="abc123" readonly>
      </div>
    </div>
    <div class="mb-3">
      <div class="col-auto col-sm-3 col-md-2">
        <label class="mb-0 px-0 px-md-2 px-lg-3 min-w-100 text-align-last col-form-label-sm" for="nick_name">昵称</label>
      </div>
      <div class="col-12 col-sm-9 col-md-10">
        <input class="border form-control form-control-sm" type="text" id="nick_name" value="杰格网用户">
      </div>
    </div>
    <div class="mb-3">
      <div class="col-auto col-sm-3 col-md-2">
        <div class="mb-0 px-0 px-md-2 px-lg-3 min-w-100 text-align-last col-form-label-sm">性别</div>
      </div>
      <div class="col-12 col-sm-9 col-md-10 d-flex align-items-center">
        <div class="px-2 py-1 w-100 rounded border d-flex justify-content-between justify-content-sm-start">
          <div class="mr-2 mr-sm-3 custom-control custom-radio">
            <input class="custom-control-input" type="radio" id="user_gender_x" name="user_gender" value="x">
            <label class="custom-control-label" for="user_gender_x">保密</label>
          </div>
          <div class="mr-2 mr-sm-3 custom-control custom-radio">
            <input class="custom-control-input" type="radio" id="user_gender_f" name="user_gender" value="f">
            <label class="custom-control-label" for="user_gender_f">女</label>
          </div>
          <div class="mr-2 mr-sm-3 custom-control custom-radio">
            <input class="custom-control-input" type="radio" id="user_gender_m" name="user_gender" value="m">
            <label class="custom-control-label" for="user_gender_m">男</label>
          </div>
        </div>
      </div>
    </div>
    <div class="mb-3 d-flex justify-content-center">
      <button class="w-50 w-md-25 btn btn-sm btn-outline-success font-weight-bold" type="button">保存</button>
    </div>
  </div>
  <hr class="my-4 border-secondary border-top-dotted">
  <div class="mb-2 d-flex justify-content-between text-muted">
    <span class="font-weight-bold">社交信息</span>
    <i class="fas fa-plus" data-toggle="collapse" data-target="#social_information"></i>
  </div>
  <div class="ml-2 collapse" id="social_information">
    <div class="mb-3">
      <div class="col-auto col-sm-3 col-md-2">
        <label class="mb-0 px-0 px-md-2 px-lg-3 min-w-100 text-align-last col-form-label-sm" for="dingtalk">钉钉</label>
      </div>
      <div class="col-12 col-sm-9 col-md-10">
        <input class="border form-control form-control-sm" type="text" id="dingtalk" value="ding123">
      </div>
    </div>
  </div>
</div>
