<?php

if ($_POST) {
  require_once "photo_info.php";
  die();
}

define('title', '照片详情信息');
require_once dirname(__DIR__) . "/header.php";

?>
<link rel="stylesheet" href="/static/css/photo_info.min.css">
<div class="container mt-5" id="jt_container">
  <div id="photo_info_tool">
    <div class="mb-3 d-flex justify-content-center">
      <div class="custom-file col-11 col-sm-8">
        <input class="custom-file-input" type="file" id="photo_input" name="photo_input[]" multiple="multiple"
               accept="image/jpeg,image/tiff,image/png" style="cursor: pointer;">
        <label class="custom-file-label text-truncate text-info border border-info" for="photo_input" id="photo_label"
               data-browse="浏览">上传您的照片</label>
      </div>
    </div>
    <div class="mb-3 d-flex justify-content-center custom-control custom-checkbox" id="rule">
      <input class="custom-control-input is-invalid" type="checkbox" id="files_upload_rule_input">
      <label class="custom-control-label" for="files_upload_rule_input" style="cursor: pointer;">
        <span>勾选左侧选框视为同意</span>
        <a href="javascript:" class="text-danger" id="files_upload_rule_link" title="查看规则">《照片上传规则》</a>
      </label>
    </div>
    <div class="d-flex justify-content-center">
      <a href="javascript:" class="mx-2 btn btn-outline-success" id="photo_submit" style="z-index: 1;">
        <i class="fa-fw fas fa-image"></i>提交</a>
    </div>
  </div>

  <div class="mt-5 d-flex no-gutters justify-content-center sr-only">
    <div class="col-8">
      <div class="progress" id="upload_file_progress">
        <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 80%">80%</div>
      </div>
    </div>
  </div>

  <div class="mt-5 sr-only">
    <div class="upload_preview" id="preview">
      <div id="upload_list_0" class="upload_list">
        <a href="javascript:" class="upload_img">
          <img id="uploadImage_0" class="upload_image"
               src="data:image/png;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">
        </a>
      </div>
    </div>
  </div>

</div>
<div class="d-none">
  <?php require_once dirname(__DIR__) . "/javascript.php"; ?>
  <script src="/static/js/bs-custom-file-input.min.js"></script>
  <script src="/static/js/photo_info.min.js"></script>
</div>

<?php
require_once dirname(__DIR__) . "/footer.php";
?>
