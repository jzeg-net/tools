/** 提交图片 **/
let photo_input = document.body.querySelector('#photo_input');
let photo_submit = document.body.querySelector('#photo_submit');
let max_file_size_value = 1048576 * 15;
let allowed_extension_name = ['jpeg', 'jpg', 'tiff', 'tif'];

let photo_url = '/photo_info/photo_info.php';
let rule = document.body.querySelector('#rule');
let files_upload_rule_link = document.body.querySelector('#files_upload_rule_link');
let files_upload_rule_input = document.body.querySelector('#files_upload_rule_input');
let bootstrapModalJs_options = {'backdrop': 'static', 'keyboard': false};

let files_upload_rule_text = '<div class="small text-danger">' +
  '<span><b>如若您不同意以下规则任意一条，请不要上传照片即可。</b></span><br>' +
  '<span><b>本站不存储您上传的照片，请您保存好您自己的照片。</b></span><br>' +
  '<span><b><del>不接受重复监测同一张照片的信息。</del></b></span><br>' +
  `<span class="d-block mt-2"><b>上传规则：</b></span>` +
  `<span class='text-dark'><b>3个/次/${get_file_size(max_file_size_value)}/日/IP</b></span><br>` +
  `文件格式类型：<span class='text-success'><b>${allowed_extension_name.join('&nbsp;&nbsp;')}</b></span><br>` +
  '文件数量上限：<span class="text-success"><b>3</b></span><br>' +
  `文件尺寸上限：<span class='text-success'><b>${get_file_size(max_file_size_value)}</b></span><br>` +
  '每日上传次数上限：<span class="text-success"><b>1次/日/IP</b></span><br>' +
  '</div>';

if (files_upload_rule_link) {
  files_upload_rule_link.addEventListener('click', function () {
    bootstrapModalJs('', files_upload_rule_text, files_upload_rule_text_footer, '', true, false, 'shown', rules_status, bootstrapModalJs_options);
  });
}
$().ready(function () {
  if (files_upload_rule_input) {
    if (get_cookie('upload_rule') === 'yes') {
      files_upload_rule_input.checked = true;
      upload_files_rules_style(files_upload_rule_input);
    }
    files_upload_rule_input.addEventListener('input', function (e) {
      upload_files_rules_style(e.target);
    });
  }
});

// photo_submit.addEventListener("click", ajax_images);
photo_submit.addEventListener('click', function () {
  upload_files_rules();
});

function upload_files_rules_style(e) {
  if (e.checked === true) {
    rule.classList.add('was-validated');
    files_upload_rule_link.classList.remove('text-danger');
    files_upload_rule_link.classList.add('text-success');
    e.classList.remove('is-invalid');
    e.classList.add('is-valid');
  } else {
    rule.classList.remove('was-validated');
    files_upload_rule_link.classList.remove('text-success');
    files_upload_rule_link.classList.add('text-danger');
    e.classList.remove('is-valid');
    e.classList.add('is-invalid');
  }
}

function upload_files_rules() {
  if (files_upload_rule_input.checked === true) {
    upload_files_check(photo_input);
  } else {
    bootstrapModalJs('', files_upload_rule_text, files_upload_rule_text_footer, '', true, false, 'shown', rules_status, bootstrapModalJs_options);
  }
}

function files_upload_rule_text_footer() {
  return '<div>' +
    '<span class="mr-3"><input type="button" class="btn btn-sm btn-outline-success" data-dismiss="modal" id="rules_agree" value="同意"></span>' +
    '<span class="mr-3"><input type="button" class="btn btn-sm btn-outline-danger" data-dismiss="modal" id="rules_disagree" value="拒绝"></span>' +
    '<span class="mr-3"><input type="button" class="btn btn-sm btn-outline-secondary" data-dismiss="modal" id="rules_cancel" value="取消"></span>' +
    '</div>';
}

function rules_status() {
  let rules_agree = document.body.querySelector('#rules_agree');
  let rules_disagree = document.body.querySelector('#rules_disagree');
  let rules_cancel = document.body.querySelector('#rules_cancel');
  rules_agree.addEventListener('click', function () {
    agree_rules(files_upload_rule_input);
  });
  rules_disagree.addEventListener('click', function () {
    disagree_rules(files_upload_rule_input);
  });
  rules_cancel.addEventListener('click', cancel_rules);
}

function agree_rules(e) {
  if (!e.hasAttribute('checked')) e.checked = true;
  set_cookie('upload_rule', 'yes');
  upload_files_rules_style(e);
}

function disagree_rules(e) {
  if (e.checked === true) e.checked = '';
  set_cookie('upload_rule', 'no');
  upload_files_rules_style(e);
}

function cancel_rules() {
}

function ajax_images() {
  set_recaptcha_action('photo_info');

  let form_data = new FormData();

  for (let i = 0; i < photo_input.files.length; i++) {
    form_data.append('photo_input[]', photo_input.files[i]);
  }
  form_data.append('MAX_FILE_SIZE', max_file_size_value.toString());

  $.ajax({
    url: photo_url,
    method: 'post',
    cache: false,
    processData: false,
    contentType: false,
    timeout: 20000,
    // dataType: "json",
    data: form_data,
    beforeSend: function () {
      add_spinner_icon(photo_submit);
    },
    success: function (data) {
      remove_spinner_icon(photo_submit);
      ajax_result_success(data);
    },
    error: function (error) {
      ajax_result_failed(error);
      if (error.length) bootstrapModalJs('', error, '', '', true);
      console.log('失败');
      console.log(error);
    },
  });
}

function upload_files_check(input) {
  let upload_check_result = '';
  let files = input.files;
  let files_length = input.files.length;

  let files_size_tips = [];
  let disallow_files = [];

  let no_upload_files__text = '<div class="text-center small text-danger">' +
    '请先选择您要查看信息的照片<br>' +
    '然后后点击提交按钮上传图片<br>' +
    '</div>';

  let files_length_text = '<div class="text-center small text-danger">' +
    '上传文件数量请不要超过3个。<br>' +
    '</div>';

  if (files_length === 0) upload_check_result += no_upload_files__text;

  for (let i = 0; i < files_length; i++) {
    if (!allowed_extension_name.includes(get_file_ext_name(files[i]['name']))) {
      disallow_files.push(files[i]['name']);
      // files.splice(i, 1);
    }
  }

  if (files_length > 3) {
    upload_check_result += files_length_text;
  } else {
    for (let i = 0; i < files_length; i++) {
      if (files[i]['size'] > max_file_size_value) {
        files_size_tips.push(files[i]['name']);
      }
    }
  }

  if (disallow_files.length > 0) {
    upload_check_result += '<div class="text-center small text-danger">' +
      '以下文件格式不符&nbsp;' +
      `<span class='text-success'>` +
      `${allowed_extension_name.join('&nbsp;')}` +
      `</span> ：<br>` +
      `<span class='text-danger'>` +
      `${disallow_files.join('<br>')}` +
      `</span>` +
      '</div>';
  }
  if (files_size_tips.length > 0) {
    upload_check_result += '<div class="text-center small text-danger">' +
      '以下文件尺寸超过&nbsp;' +
      `<span class='text-success'>` +
      `${get_file_size(max_file_size_value)}` +
      `</span> ：<br>` +
      `<span class='text-danger'>` +
      `${files_size_tips.join('<br>')}` +
      `</span>` +
      `</div>`;
  }

  if (upload_check_result) {
    bootstrapModalJs('', upload_check_result, '', '', true);
  } else {
    ajax_images();
  }

}

function ajax_result_failed(data) {
}

function ajax_result_error(data) {
}

function ajax_result_success(data) {
  let result = JSON.parse(data);
  console.log(JSON.parse(data));
  let result_text;
  let result_error = '';
  let result_upload_message_success = '';
  let result_upload_message_failure = '';
  let result_upload_message_repeat = '';

  let result_error_length = result['error'] ? result['error'].length : '';
  let result_upload_success_length = result['message']['upload']['success'] ? result['message']['upload']['success'].length : '';
  let result_upload_failure_length = result['message']['upload']['failure'] ? result['message']['upload']['failure'].length : '';
  let result_upload_repeat_length = result['message']['upload']['repeat'] ? result['message']['upload']['repeat'].length : '';

  if (result_error_length > 0) {
    for (let x = result_error_length, i = 0; i < x; i++) {
      result_error += result['error'][i] + '<br>';
    }
  }

  if (result_upload_success_length > 0) {
    for (let x = result_upload_success_length, i = 0; i < x; i++) {
      result_upload_message_success += result['message']['upload']['success'][i] + '<br>';
    }
  }

  if (result_upload_failure_length > 0) {
    for (let x = result_upload_failure_length, i = 0; i < x; i++) {
      result_upload_message_failure += result['message']['upload']['failure'][i] + '<br>';
    }
  }
  if (result_upload_repeat_length > 0) {
    for (let x = result_upload_repeat_length, i = 0; i < x; i++) {
      result_upload_message_repeat += result['message']['upload']['repeat'][i] + '<br>';
    }
  }

  result_text = result_error + result_upload_message_success + result_upload_message_failure + result_upload_message_repeat;

  if (result_error_length + result_upload_success_length + result_upload_failure_length + result_upload_repeat_length > 0) {
    bootstrapModalJs('', result_text, '', '', true);
  }
}

function is_Array(any) {
  if (Array.isArray(any)) {
    for (let x = any.length, i = 0; i < x; i++) {

    }
  }
}


/** 进度条 **/
let upload_file_progress = document.body.querySelector('#upload_file_progress');
