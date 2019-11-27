<?php

if ($_POST) {
    require_once "photo_info.php";
    die();
}

define('title', '照片信息解析');
require_once '../header.php';
?>
<link rel="stylesheet" href="/photo_info/css/photo_info.css">

<div class="container mt-5" id="jt_container">
    <form method="post" action="/photo_info/photo_info.php" enctype="multipart/form-data" class="mb-3 form-row justify-content-center">
        <div class="custom-file col-11 col-sm-8">
            <input type="hidden" name="MAX_FILE_SIZE" value="15728640">
            <input class="custom-file-input" type="file" id="photo_input" name="photo_input[]" multiple="multiple"
                   accept="image/jpeg,image/tiff,image/png" style="cursor: pointer;">
            <label class="custom-file-label text-truncate text-info border border-info" for="photo_input"
                   id="photo_label" data-browse="浏览">上传您的照片</label>
        </div>
    </form>
    <div class="mb-3 d-flex justify-content-center custom-control custom-checkbox sr-only" id="rule">
        <input class="custom-control-input is-invalid" type="checkbox" id="files_upload_rule_input">
        <label class="custom-control-label" for="files_upload_rule_input">
            勾选左侧选框视为同意
            <a href="javascript:" class="text-danger" id="files_upload_rule_btn" title="查看规则">《照片上传规则》</a>
        </label>
    </div>
    <div class="d-flex justify-content-center">
        <a href="javascript:" class="mx-2 btn btn-outline-success" id="photo_submit" style="z-index: 1;">
            <i class="fas fa-image">&nbsp;&nbsp;</i>提交</a>
    </div>
</div>

<div class="container mt-5 d-flex no-gutters justify-content-center sr-only">
    <div class="col-8">
        <div class="progress" id="upload_file_progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 80%">80%</div>
        </div>
    </div>
</div>

<div class="container mt-5 sr-only">
    <div class="upload_preview" id="preview">
        <div id="upload_list_0" class="upload_list">
            <a href="javascript:" class="upload_img">
                <img id="uploadImage_0" class="upload_image" src="">
            </a>
        </div>
    </div>
</div>


<div>
    <?php require_once dirname(dirname(__FILE__)) . "/javascript.php"; ?>
    <script src="/photo_info/js/photo_info.js"></script>
</div>

<?php
require_once '../footer.php';
?>
