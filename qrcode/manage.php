<?php

define('title', '管理灵活码');
require_once dirname(__DIR__) . '/header.php';
?>
<link rel="stylesheet" href="/static/css/jt_qrcode.min.css">
<div class="py-3 container bg-white" id="jt_container">
  <div class="mb-3 p-3 border rounded" id="lhm_manage">
    <div class="mb-1 font-weight-bolder text-warning">管理灵活码</div>
    <form action="update.php" method="post" enctype="multipart/form-data">
      <div class="mb-2 small text-success">灵活码图片和标识符输入任意其中一项即可</div>
      <div class="form-group">
        <div class="custom-file">
          <input class="custom-file-input" type="file" id="lhm_manage_img"
                 accept="image/jpeg,image/png">
          <label class="custom-file-label text-truncate" for="lhm_manage_img" data-browse="浏览">需要调整的灵活码</label>
        </div>
        <div class="form-text small text-muted">提示：请上传需要管理更新的灵活码图片</div>
        <div class="text-center" id="lhm_manage_img_preview"></div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <div class="input-group-prepend">
            <label class="input-group-text" for="lhm_manage_identifier">标识</label>
          </div>
          <input class="form-control" type="text" name="lhm_manage_identifier" id="lhm_manage_identifier"
                 placeholder="格式示例：LHM-1582813209" maxlength="10" value="LHM-0001" required>
        </div>
        <div class="form-text small text-muted">提示：请输入在您获得灵活码时对应的标识符</div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <div class="input-group-prepend">
            <label class="input-group-text" for="lhm_manage_password">密码</label>
          </div>
          <input class="form-control" type="password" name="lhm_manage_password" id="lhm_manage_password"
                 placeholder="请输入您之前设置的管理密码" required>
        </div>
        <div class="form-text small text-muted">提示：请输入在您提交二维码时，设置的管理密码</div>
      </div>
      <div class="mb-3 form-group text-center">
        <input type="hidden" name="token" id="lhm_manage_token" value="">
        <input class="btn btn-sm btn-outline-dark" type="submit" id="lhm_manage_submit" value="登录后调整">
        <a href="javascript:" class="ml-4 btn-link small text-reset" id="lhm_forget_password">忘记密码</a>
      </div>
    </form>
  </div>
  <div class="mb-3 p-3 border rounded" id="lhm_manage_result">
    <div class="mb-1 font-weight-bolder text-success">修改灵活码结果</div>
    <div class="mb-3">
      <div class="form-group row">
        <div class="col-12 small text-muted">提示：您当前正在维护的灵活码标识符</div>
        <label class="col-12 col-md-2 col-form-label" for="lhm_manage_result_identifier">当前标识符</label>
        <div class="col-6 col-md-2">
          <input class="form-control-plaintext" type="text" name="lhm_manage_result_identifier"
                 id="lhm_manage_result_identifier" placeholder="LHM-1582813209" value="LHM-1582813209">
        </div>
      </div>
      <div id="result_img">
        <button type="button" class="btn btn-sm btn-secondary lhm_img">查看您的灵活码</button>
        <button type="button" class="btn btn-sm btn-secondary old_qrcode_img">查看将要替换的二维码</button>
      </div>
    </div>
    <form action="update.php">
      <div class="form-group">
        <div class="custom-file">
          <input class="custom-file-input" type="file" name="new_qrcode_img" id="new_qrcode_img"
                 accept="image/jpeg,image/png">
          <label class="custom-file-label text-truncate" for="new_qrcode_img" data-browse="浏览">新的二维码图片</label>
        </div>
        <div class="form-text small text-muted">提示：请上传新的二维码图片</div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <div class="input-group-prepend">
            <label class="input-group-text" for="lhm_manage_new_title">新的标题</label>
          </div>
          <input class="form-control" type="text" name="lhm_manage_new_title" id="lhm_manage_new_title"
                 placeholder="新的灵活码标题" maxlength="10" value="新的灵活码标题" required>
        </div>
        <div class="form-text small text-muted">提示：文字上限15个字</div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <div class="input-group-prepend">
            <label class="input-group-text" for="lhm_manage_new_description">新的介绍</label>
          </div>
          <textarea class="form-control" type="text" name="lhm_manage_new_description" id="lhm_manage_new_description"
                    rows="6" cols="" wrap="soft" maxlength="150" placeholder="新的灵活码介绍" required>新的灵活码介绍</textarea>
        </div>
        <div class="form-text small text-muted">提示：文字上限150个字</div>
      </div>
      <div class="form-group text-center">
        <input type="hidden" name="token" id="lhm_manage_result_token" value="">
        <input class="btn btn-sm btn-outline-success" type="submit" name="" id="lhm_manage_result_submit" value="提交更新">
      </div>
    </form>
  </div>
</div>
<div>
  <?php require_once dirname(__DIR__) . "/javascript.php"; ?>
  <script src="/static/js/jt_qrcode.min.js"></script>

  <script>
    $().ready(function () {
      let result_img = document.querySelector('#result_img');

      result_img.addEventListener('click', function (e) {
        let e_target = e.target;
        if (e_target.classList.contains('lhm_img')) {
          let lhm_id = 'LHM-SADFAFS';
          let img_url = location.origin + '/qrcode/q.php?q=' + lhm_id;
          let img = create_lhm_manage_result_img(img_url);
          let modal_title = '<span class="font-weight-bolder text-success">当前灵活码</span>';
          bootstrapModalJs(modal_title, img, '', '', true, true);
        } else if (e_target.classList.contains('old_qrcode_img')) {
          let img_url = 'http://tools.jzeg.org/upload/qrcode_img/2020/02/27/dd.jpg';
          let img = create_lhm_manage_result_img(img_url);
          let modal_title = '<span class="font-weight-bolder text-success">正在使用的二维码</span>';
          bootstrapModalJs(modal_title, img, '', '', true, true);
        }
      });

      function create_lhm_manage_result_img(img_url) {
        let img = document.createElement("img");

        img.className = 'img-thumbnail shadow-lg';
        img.src = img_url;
        img.alt = '';

        return img;
      }
    });
  </script>
</div>

<?php
require_once dirname(__DIR__) . '/footer.php';
?>
