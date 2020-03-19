<?php

define('title', '灵活码样式编辑');
require_once dirname(__DIR__) . '/header.php';
?>
<link rel="stylesheet" href="/static/css/bootstrap-colorpicker.min.css">
<link rel="stylesheet" href="/static/css/jt_qrcode.min.css">
<div class="py-3 container bg-white" id="jt_container">
  <div class="mb-4" id="jt_lhm_toolbar">
    <div class="mb-3 px-4 py-3 border rounded" id="lhm_editor">
      <div class="mb-3 font-weight-bolder text-warning">灵活码样式编辑</div>
      <div class="form-group">
        <div class="mb-1 input-group">
          <div class="input-group-prepend">
            <label class="input-group-text" for="lhm_editor_size_number">尺寸</label>
          </div>
          <input type="number" class="form-control text-right" min="100" max="3000" step="10" value="250" id="lhm_editor_size_number">
          <div class="input-group-append">
            <span class="input-group-text">px</span>
          </div>
        </div>
        <div class="form-text small text-muted">
          <span>生成的灵活码图片是正方形。</span>
        </div>
        <label class="sr-only" for="lhm_editor_size_range">尺寸范围</label>
        <input type="range" class="custom-range" min="100" max="3000" step="10" value="250" id="lhm_editor_size_range">
      </div>
      <div class="form-group">
        <div class="mb-1 input-group">
          <div class="input-group-prepend">
            <label class="input-group-text" for="lhm_editor_margin_number">边距</label>
          </div>
          <input type="number" class="form-control text-right" min="0" max="10" step="0.1" value="0" id="lhm_editor_margin_number">
          <div class="input-group-append">
            <span class="input-group-text">%</span>
          </div>
        </div>
        <div class="form-text small text-muted">
          <span>生成的灵活码图片四边的空白区域宽度。</span>
          <span class="d-block">不影响尺寸大小。</span>
        </div>
        <label class="sr-only" for="lhm_editor_margin_range">边距范围</label>
        <input type="range" class="custom-range" min="0" max="10" step="0.1" value="0" id="lhm_editor_margin_range">
      </div>
      <div class="form-group form-row">
        <div class="mb-2 mb-md-auto col-12 col-md-6 input-group" id="lhm_editor_color_dark_colorPicker">
          <div class="input-group-prepend">
            <label class="input-group-text" for="lhm_editor_color_dark">前景色</label>
          </div>
          <input type="text" class="form-control text-center" value="#000000" id="lhm_editor_color_dark">
          <div class="input-group-append">
            <span class="input-group-text colorpicker-input-addon"><i></i></span>
          </div>
        </div>
        <div class="col-12 col-md-6 input-group" id="lhm_editor_color_light_colorPicker">
          <div class="input-group-prepend">
            <label class="input-group-text" for="lhm_editor_color_light">背景色</label>
          </div>
          <input type="text" class="form-control text-center" value="#ffffff" id="lhm_editor_color_light">
          <div class="input-group-append">
            <span class="input-group-text colorpicker-input-addon"><i></i></span>
          </div>
        </div>
        <div class="col-auto form-text small text-muted">
          <span>默认情况下，前景色是黑色，背景色是白色。</span>
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <div class="input-group-prepend">
            <label class="input-group-text" for="lhm_editor_errorCorrectionLevel">容错级别</label>
          </div>
          <select class="p-0 custom-select" size="4" id="lhm_editor_errorCorrectionLevel">
            <option class="px-3 py-1" value="l">低（≈7%）</option>
            <option class="px-3 py-1" value="m">中（≈15%）</option>
            <option class="px-3 py-1" value="q">1/4（≈25%）</option>
            <option class="px-3 py-1" value="h">高（≈30%）</option>
          </select>
        </div>
        <div class="form-text small text-muted">
          <span>数值是指可遮挡范围的比例。</span>
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <div class="input-group-prepend">
            <label class="input-group-text" for="lhm_editor_img_format">格式</label>
          </div>
          <select class="p-0 custom-select" size="2" id="lhm_editor_img_format">
            <option class="px-3 py-1" value="png" selected>PNG&nbsp;(32位)</option>
            <option class="px-3 py-1" value="jpeg">JPEG&nbsp;(24位)</option>
          </select>
        </div>
        <div class="form-text small text-muted">
          <span>生成的图片文件格式。</span>
        </div>
      </div>
      <div class="form-group">
        <div class="mb-1 input-group">
          <div class="input-group-prepend">
            <label class="input-group-text" for="lhm_editor_quality_number">图片质量</label>
          </div>
          <input type="number" class="form-control text-right" min="1" max="100" step="1" value="90"
                 id="lhm_editor_quality_number">
          <div class="input-group-append">
            <span class="input-group-text">%</span>
          </div>
        </div>
        <div class="form-text small text-muted">
          <span>数值越高，清晰度越高，生成的文件越大。</span>
        </div>
        <label class="sr-only" for="lhm_editor_quality_range">质量范围</label>
        <input type="range" class="custom-range" min="1" max="100" step="1" value="90" id="lhm_editor_quality_range">
      </div>
    </div>
    <div class="position-sticky mb-3 px-4 pt-3 pb-4 border rounded bg-white" id="lhm_preview" style="bottom: 0;">
      <div class="mb-2 font-weight-bolder text-warning">灵活码实时样式预览</div>
      <div class="form-row">
        <div class="col-12 col-md-5 col-lg-4 mb-2 py-2 rounded bg_square bg-light-50 mb-md-0 text-center">
          <img src="data:image/png;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
               alt="灵活码实时效果预览" class="border img-fluid bg-white" id="lhm_preview_img"
               style="width:250px;max-width: 250px;">
        </div>
        <div class="col-12 col-md-7 col-lg-8 text-center">
          <a class="mb-2 btn btn-sm btn-success" id="lhm_download"
             download="data:image/png;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">下载</a>
          <details class="mb-2 px-3 py-1 py-md-2 rounded border small">
            <summary class="text-danger">查看当前信息</summary>
            <fieldset>
              <div class="small">标识符：<span id="lhm_preview_img_identifier">LHM-000000</span></div>
              <div class="small">尺寸：<span id="lhm_preview_img_size">250</span>px</div>
              <div class="small">格式：<span id="lhm_preview_img_format">PNG (32位)</span></div>
              <div class="small">边距：<span id="lhm_preview_img_margin">0</span></div>
              <div class="small">容错级别：<span id="lhm_preview_img_errorCorrectionLevel">1/4（≈25%）</span></div>
              <div class="small">图片质量：<span id="lhm_preview_img_quality">1</span></div>
              <div class="small">前景色：<span id="lhm_preview_img_color_dark">#000000</span></div>
              <div class="small">背景色：<span id="lhm_preview_img_color_light">#FFFFFF</span></div>
            </fieldset>
          </details>
        </div>
      </div>
    </div>
  </div>
</div>

<div>
  <?php require_once dirname(__DIR__) . "/javascript.php"; ?>
  <script src="/static/js/bootstrap-colorpicker.min.js"></script>
  <script src="/static/js/jt_qrcode.min.js"></script>
</div>

<?php
require_once dirname(__DIR__) . '/footer.php';
?>
