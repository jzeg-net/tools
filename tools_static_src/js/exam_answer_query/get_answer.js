$().ready(function () {
  let get_answer = document.querySelector('#get_answer');

  get_answer.addEventListener('click', function () {

    add_spinner_icon(get_answer);
    set_crawlStatus('text-warning');
    ajax_get('get_answer_result', get_answer);
  });
});
$().ready(function () {
  let recur = document.querySelector('#recur');

  recur.addEventListener('click', function () {
    let le_id = document.querySelector('#le_id');
    let token_le_id = document.querySelector('#token_le_id');

    if (le_id.value.length > 0 && token_le_id.value.length > 0) {
      let iframeSrcUrl = 'https://www.examcoo.com/editor/do/recur/id/' + le_id.value + '/tokenleid/' + token_le_id.value;
      let iframe = document.createElement("iframe");

      iframe.src = iframeSrcUrl;
      iframe.id = 'iframeViewResult';
      iframe.className = 'mx-n-3';
      iframe.style.border = 'none';
      iframe.onload = adjustIframe(iframe);

      bootstrapModalJs('查看成绩', iframe, '', 'modal-fullscreen');
    } else {
      bootstrapModalJs('', create_small_center_text('请输入答卷编号和答卷编号token', 'danger'), '', 'sm', true);
    }

  });
});
$().ready(function () {
  let get_no_logout = document.querySelector('#get_no_logout');
  let get_exam_info = document.querySelector('#get_exam_info');
  let get_exam_answer = document.querySelector('#get_exam_answer');

  get_no_logout.addEventListener('click', function () {
    let t_id = document.querySelector('#t_id');
    let token_t_id = document.querySelector('#token_t_id');

    if (!t_id.value.length && !token_t_id.value.length) {
      bootstrapModalJs('', create_small_center_text('请输入考试场次编号和对应token', 'danger'), '', 'sm', true);
      return;
    }
    let data = {
      'tid': t_id.value,
      'tokenTid': token_t_id.value,
    };
    let url = '/exam_answer_query/get_no_logout.php';
    $.ajax({
      method: 'post',
      url: url,
      cache: false,
      dataType: 'json',
      timeout: 4000,
      data: data,
      success: function (data) {
        let le_id = document.querySelector('#le_id');
        let token_le_id = document.querySelector('#token_le_id');

        le_id.value = data['leId'];
        token_le_id.value = data['tokenLeId'];
      },
      error: function (errorData) {
        commonAjaxErrorFeedback(errorData);
      },
    });
  });
  get_exam_info.addEventListener('click', function () {
    let le_id = document.querySelector('#le_id');
    let token_le_id = document.querySelector('#token_le_id');

    if (!le_id.value.length && !token_le_id.value.length) {
      bootstrapModalJs('', create_small_center_text('请输入答卷编号和答卷编号token', 'danger'), '', 'sm', true);
      return;
    }
    let url = '/exam_answer_query/get_exam_info.php';
    let data = {
      type: 'examInfo',
      leId: le_id.value,
      tokenLeId: token_le_id.value,
    };
    $.ajax({
      method: 'post',
      url: url,
      cache: false,
      dataType: 'json',
      timeout: 4000,
      data: data,
      success: function (data) {
        verifyResultStatus(data);
      },
      error: function (errorData) {
        commonAjaxErrorFeedback(errorData);
      },
    });
  });
  get_exam_answer.addEventListener('click', function () {
    let parameter = document.querySelector('#parameter');
    let data = {};
    [].slice.call(parameter.querySelectorAll("[id]")).forEach(function (currentInput) {
      data[currentInput.id] = currentInput.value;
    });
    let url = '/exam_answer_query/get_exam_answer.php';
    $.ajax({
      method: 'post',
      url: url,
      cache: false,
      dataType: 'json',
      timeout: 4000,
      data: data,
      success: function (data) {
        verifyResultStatus(data);
      },
      error: function (errorData) {
        commonAjaxErrorFeedback(errorData);
      },
    });

  });
});
$().ready(function () {
  let temp_save_exam = document.querySelector('#temp_save_exam');
  let save_exam = document.querySelector('#save_exam');

  temp_save_exam.addEventListener('click', function () {
  });
  save_exam.addEventListener('click', function () {
  });
});
$().ready(function () {
  let analyticsLink = document.querySelector('#analyticsLink');
  analyticsLink.addEventListener('blur', function () {
    console.log(analyticsLink.value);
  })
});

function verifyResultStatus(data = '') {
  if (0 > data) {
    switch (data) {
      case -2:
        bootstrapModalJs('', create_small_center_text('试卷信息不存在或TOKEN错误，请尝试更换新的TOKEN', 'danger'), '', 'sm', true);
        break;
      case -3:
        bootstrapModalJs('', create_small_center_text('试卷已经被删除或ID错误，请尝试更换新的ID', 'danger'), '', 'sm', true);
        break;
      default:
        bootstrapModalJs('', create_small_center_text('试卷信息出错，请尝试更换新的ID和TOKEN', 'danger'), '', 'sm', true);
        break;
    }
    return;
  }
  examInfo(data);
}

function examInfo(data) {
  // let data_a = data['a'];// 试卷考生已经填写的信息
  let data_b = data['b'];// 试卷考题信息列表
  // let data_c = data['c'];// 试卷已经作答的信息列表
  let newData = {
    answerData: [],
  };

  for (let x = data_b.length, i = 0; i < x; i++) {
    if (0 === i) {
      let data_b_0 = data_b[0];// 试卷信息列表
      // let ExamPaperNumber = data_b_0['id']; // 试卷编号
      // let PaperName = data_b_0['a']; // 试卷名称
      // let EditorById = data_b_0['b']; // 录入者ID
      // let EditorByNickName = data_b_0['c']; // 录入者名称
      // let EditorByDepartment = data_b_0['d']; // 录入者部门
      // let ExamTotalScore = data_b_0['e']; // 试卷总分
      // let ExamUnwindingTime = data_b_0['f']; // 出卷时间
      // let ExamAnswerTime = data_b_0['h']; // 答题时间
      // let Exam_Data_b_0_i = data_b_0['i']; // 未知
      // let Exam_Data_b_0_j = data_b_0['j']; // 未知
      // let Exam_Data_b_0_l = data_b_0['l']; // 未知
      // let Exam_Data_b_0_m = data_b_0['m']; // 未知
      // let Exam_Data_b_0_n = data_b_0['n']; // 未知
      let ExamStudentInfo = data_b_0['o'] ? JSON.parse(data_b_0['o']) : ''; // 考生信息
      // let Exam_Data_b_0_p = data_b_0['p']; // 未知
// 未知
      // console.log('试卷编号  ' + ExamPaperNumber);
      // console.log('试卷名称  ' + PaperName);
      // console.log('录入者ID  ' + EditorById);
      // console.log('录入者名称  ' + EditorByNickName);
      // console.log('录入者部门  ' + EditorByDepartment);
      // console.log('试卷总分  ' + ExamTotalScore);
      // console.log('出卷时间  ' + ExamUnwindingTime);
      // console.log('答题时间  ' + ExamAnswerTime);
      if (ExamStudentInfo) newData['ExamStudentInfo'] = ExamStudentInfo;
    } else {
      if (data_b[i].hasOwnProperty('a')) {
        newData['answerData'].push({a: data_b[i]['c']});
      }
    }
  }
  create_ExamStudentInfo_inputElement(newData);
}

function create_ExamStudentInfo_inputElement(Data) {
  let ExamStudentInfoData = Data['ExamStudentInfo'];
  let answerData = Data['answerData'];

  // 信息输入模态框
  let modalLockOption = {backdrop: 'static', keyboard: false};
  let numberID = bootstrapModalJs(create_small_center_text('请确认您的考试信息', 'danger'), '', ' ', 'sm', true, false, '', '', modalLockOption);
  let modal_Id = document.querySelector('#Modal_' + numberID);
  let modalBody_Id = document.querySelector('#modalBody_' + numberID);
  let modalFooter_Id = document.querySelector('#modalFooter_' + numberID);

  // 回答数据提示
  let div = document.createElement("div");
  let answerNumber = document.createElement("div");
  div.className = 'mb-2 small text-success';
  div.innerHTML = '很不错，已经成功获取到答案，下面请确认题目数量和填写考生信息，确认无误后点击保存，然后临时保存，再提交答卷，等待提交结果。';
  answerNumber.className = 'mt-2 font-weight-bolder text-danger';
  answerNumber.innerHTML = '题目数量：' + answerData.length;
  div.appendChild(answerNumber);
  modalBody_Id.appendChild(div);

  // 考生信息输入
  if (ExamStudentInfoData) {
    Object.keys(ExamStudentInfoData).forEach(function (currentValue) {
      let div = document.createElement("div");
      let label = document.createElement("label");
      let input = document.createElement("input");

      div.className = 'mb-2 input-group';

      input.className = 'form-control';
      input.type = 'text';
      input.id = currentValue;
      input.value = '';

      label.className = 'input-group-text';
      label.setAttribute('for', input.id);
      label.innerHTML = ExamStudentInfoData[currentValue];

      div.appendChild(label);
      div.appendChild(input);
      modalBody_Id.appendChild(div);
    });
  }

  // 保存按钮
  let btn_save = document.createElement("button");
  let btn_close = document.createElement("button");
  btn_save.className = 'btn btn-sm btn-success';
  btn_save.type = 'button';
  btn_save.innerHTML = '保存';
  btn_save.addEventListener('click', function () {
    let inputValueData = {};
    [].slice.call(modalBody_Id.querySelectorAll("input")).forEach(function (currentValue) {
      inputValueData[currentValue.id] = currentValue.value;
    });
    let data = {
      answerData: answerData,
      inputData: inputValueData,
    };
    get_ExamStudentInfo_inputElementValue(data);
    bootstrap.Modal.getInstance(modal_Id).hide();
  });
  btn_close.className = 'btn btn-sm btn-secondary';
  btn_close.type = 'button';
  btn_close.innerHTML = '退出';
  btn_close.addEventListener('click', function () {
    bootstrap.Modal.getInstance(modal_Id).hide();
  });
  modalFooter_Id.appendChild(btn_save);
  modalFooter_Id.appendChild(btn_close);
}

function get_ExamStudentInfo_inputElementValue(Data) {
  setSaveExamPaperData(Data);
}

function setSaveExamPaperData(data) {
  let saveData = {};
  let le_id = document.querySelector('#le_id');
  let token_le_id = document.querySelector('#token_le_id');

  saveData['leid'] = le_id.value;
  saveData['tokenleid'] = token_le_id.value;

  saveData['data'] = [];
  saveData['data'].unshift(
    {
      id: 'b',
      c: data['answerData'],
    }
  );

  if (data['inputData']) {
    // saveData['data'].unshift(data['inputData']);
    saveData['data'].unshift(
      {
        id: 'a',
        a: data['inputData']['c'] ? data['inputData']['c'] : '',
        b: data['inputData']['b'] ? data['inputData']['b'] : '',
        c: data['inputData']['a'] ? data['inputData']['a'] : '',
      }
    );
  }
  ExamSave(saveData);
}

function ExamSave(data) {
  let temp_save_exam = document.querySelector('#temp_save_exam');
  let save_exam = document.querySelector('#save_exam');

  temp_save_exam.addEventListener('click', function () {
    submitExamData(data, 'TempSaveExam');
  }, {once: true});
  save_exam.addEventListener('click', function () {
    submitExamData(data, 'SaveExam');
  }, {once: true});
}

function submitExamData(data, type) {
  let url = '/exam_answer_query/save_exam.php';
  $.ajax({
    method: 'post',
    url: url,
    cache: false,
    dataType: 'json',
    timeout: 4000,
    data: {
      type: type,
      data: data,
    },
    success: function (data) {
      ExamDataSubmitResult(data);
    },
    error: function (errorData) {
      commonAjaxErrorFeedback(errorData);
    },
  });
}

function ExamDataSubmitResult(data) {
  let leId = document.querySelector('#le_id');

  switch (data) {
    case leId.value:
      bootstrapModalJs('', create_small_center_text('临时保存成功', 'success'), '', 'sm', true);
      break;
    case 'recur_' + leId.value:
      bootstrapModalJs('', create_small_center_text('恭喜你，试卷已经成功提交。', 'success'), '', 'sm', true);
      break;
    default:
      funDebugFeedback('提交异常', data);
      bootstrapModalJs('', create_small_center_text('很抱歉，试卷提交失败，请及时告知管理员', 'danger'), '', 'sm', true);
  }
}

function ajax_get(query_data, trigger_element) {
  let url = '/exam_answer_query/get_answer.php';
  $.ajax({
    method: 'post',
    url: url,
    cache: false,
    dataType: 'json',
    timeout: 4000,
    data: {
      data: query_data,
    },
    success: function (data) {
      setTimeout(function () {
        remove_spinner_icon(trigger_element);
        set_crawlStatus('text-success');
      }, 3000);
      console.log(data);
      // extract_answers(data);
    },
    error: function (errorData) {
      remove_spinner_icon(trigger_element);
      set_crawlStatus('text-danger');
      commonAjaxErrorFeedback(errorData);
    },
  });
}

function set_crawlStatus(status_code) {
  let crawlStatus = document.querySelector('#crawlStatus > i');
  crawlStatus.removeAttribute('class');
  crawlStatus.classList.add('mx-2', 'fa-lg', 'fas', 'fa-circle');
  crawlStatus.classList.add(status_code);
}

function extract_answers(answers) {
  let c = answers['b'];
  //整理原始
  let result = {};
  let count = 0;
  c.forEach(function (cTriggerEL) {
    if ('object' !== typeof cTriggerEL.c && "葛泉矿职教中心" !== cTriggerEL.c) {
      count += 1;
      result[count] = {
        'id': cTriggerEL.id,
        'result': cTriggerEL.c,
        'text': cTriggerEL.a,
        'score': cTriggerEL.d,
        'options': cTriggerEL.b,
        'e': cTriggerEL.e,
        'f': cTriggerEL.e,
        'h': cTriggerEL.h,
      };
    }
  });

  console.log('获取数据 ' + count + ' 条');
  console.log(result);

  //分离题型
  let answer_data = [];
  let determine_data = [];
  let single_data = [];
  let multiple_data = [];
  for (let i = 0; i <= count; i++) {
    for (let resultElementKey in result[i]) {
      if (resultElementKey === 'score') {
        let score;
        if (result[i].hasOwnProperty(resultElementKey)) score = result[i][resultElementKey];
        switch (score) {
          case '1':
            result[i]['number'] = i;
            determine_data.push(result[i]);
            break;
          case '1.5':
            result[i]['number'] = i;
            single_data.push(result[i]);
            break;
          case '2':
            result[i]['number'] = i;
            multiple_data.push(result[i]);
            break;
          default:
            break;
        }
      }
    }
  }

  answer_data['determine'] = determine_data;
  answer_data['single'] = single_data;
  answer_data['multiple'] = multiple_data;
  answers_elements(answer_data);
}

function answers_elements(result_data) {
  let examcoo = document.querySelector('#examcoo');
  let determine = document.createElement("div");
  let single_choice = document.createElement("div");
  let multiple_choice = document.createElement("div");

  examcoo.innerHTML = '';

  determine.className = 'table-responsive';
  determine.id = 'determine';

  single_choice.className = 'table-responsive';
  single_choice.id = 'single';

  multiple_choice.className = 'table-responsive';
  multiple_choice.id = 'multiple';

  console.log(result_data);

  let tbody_determine = table_tbody(result_data['determine']);
  let tbody_single = table_tbody(result_data['single']);
  let tbody_multiple = table_tbody(result_data['multiple']);

  determine.appendChild(creat_table(table_thead, tbody_determine, determine.id, 'table-bordered table-dark table-hover'));
  single_choice.appendChild(creat_table(table_thead, tbody_single, single_choice.id, 'table-bordered table-dark table-hover'));
  multiple_choice.appendChild(creat_table(table_thead, tbody_multiple, multiple_choice.id, 'table-bordered table-dark table-hover'));
  examcoo.appendChild(determine);
  examcoo.appendChild(single_choice);
  examcoo.appendChild(multiple_choice);
}

function creat_table(t_head, t_body, table_id, table_class) {
  let table = document.createElement("table");

  table.className = table_class ? 'table ' + table_class : 'table';
  table.id = 'table_' + table_id;

  table.appendChild(t_head());
  table.appendChild(t_body);
  return table;
}

function table_thead() {
  let thead = document.createElement("thead");
  let tr = document.createElement("tr");
  let th_num = document.createElement("th");
  let th_id = document.createElement("th");
  let th_result = document.createElement("th");
  let th_text = document.createElement("th");
  let th_score = document.createElement("th");
  let th_options = document.createElement("th");
  let th_e = document.createElement("th");
  let th_f = document.createElement("th");
  let th_h = document.createElement("th");

  let th_sss = [th_num, th_id, th_result, th_text, th_score, th_options, th_e, th_f, th_h];
  let th_arr = [
    '序号',
    '编号',
    '答案',
    '问题',
    '分值',
    '选项',
    'E',
    'F',
    'H',
  ];

  for (let x = th_sss.length, i = 0; i < x; i++) {
    th_sss[i].scope = 'col';
    th_sss[i].innerHTML = th_arr[i];
  }

  tr.className = 'text-center';
  tr.appendChild(th_num);
  tr.appendChild(th_id);
  tr.appendChild(th_result);
  tr.appendChild(th_text);
  tr.appendChild(th_score);
  tr.appendChild(th_options);
  tr.appendChild(th_e);
  tr.appendChild(th_f);
  tr.appendChild(th_h);
  thead.appendChild(tr);

  return thead;
}

function table_tbody(tbody_data) {
  let tbody = document.createElement("tbody");
  let tr = table_tr(tbody_data);

  tbody.appendChild(tr);

  return tbody;
}

function table_tfoot() {
}

function table_caption() {
}

function table_tr(answers_data) {
  let tr = document.createElement("tr");
  let th_num = document.createElement("th");
  let td_id = document.createElement("td");
  let td_result = document.createElement("td");
  let td_text = document.createElement("td");
  let td_score = document.createElement("td");
  let td_options = document.createElement("td");
  let td_e = document.createElement("td");
  let td_f = document.createElement("td");
  let td_h = document.createElement("td");
  // let th_sss = [th_num, td_id, td_result, td_text, td_score, td_options, td_e, td_f, td_h];

  th_num.scope = 'row';
  console.log(answers_data);

  answers_data.forEach(function (answersTriggerEL) {
    for (let answersTriggerELElement in answersTriggerEL) {
      let x;
      if (answersTriggerEL.hasOwnProperty(answersTriggerELElement)) x = answersTriggerEL[answersTriggerELElement];
      console.log(answersTriggerELElement + ' ===== ' + x);
    }
  });

  tr.appendChild(th_num);
  tr.appendChild(td_id);
  tr.appendChild(td_result);
  tr.appendChild(td_text);
  tr.appendChild(td_score);
  tr.appendChild(td_options);
  tr.appendChild(td_e);
  tr.appendChild(td_f);
  tr.appendChild(td_h);
  return tr;
}

function adjustIframe(iframe) {
  iframe.height = document.documentElement.clientHeight;
  iframe.width = document.documentElement.clientWidth;
}
