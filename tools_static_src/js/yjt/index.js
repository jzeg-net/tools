let categoryList = document.querySelector('#categoryList');
if (categoryList) {
  $.getScript('/static/js/yjt/data.min.js');
  setTimeout(function () {
    if ('undefined' === typeof QUESTION_BANK1 &&
      'undefined' === typeof QUESTION_BANK2 &&
      'undefined' === typeof QUESTION_BANK3 &&
      'undefined' === typeof QUESTION_BANK4
    ) {
      bootstrapModalJs('', create_small_center_text('获取题库失败。', 'danger'), '', 'sm', true);
    } else {
      bootstrapModalJs('', create_small_center_text('获取题库成功，请选择题目类别进行查看。', 'success'), '', 'sm', true);
      categoryList.addEventListener('click', function (e) {
        let e_target = e.target;
        if (e_target.tagName === 'LABEL') {
          let question = e_target.dataset['question'];
          set_category_text(e_target);
          question_bank(question);
        }
      });
    }
  }, 1e3);
}

// 检查结果结构
function check_questions(questions = []) {
  if (!Array.isArray(questions)) throw bootstrapModalJs('', create_small_center_text('获取答案出错，请尝试请空浏览器的本页面缓存后重试，如仍出现本提示，那么暂时不能提供服务。'), '', 'sm', true);
  set_quantity(questions.length);
  remove_tip_dNone();
  questions.forEach(function (questionEL) {
    if (!Array.isArray(questionEL)) fundebug.notify('yjt-20200628_3 BUG', questionEL);
    if (questionEL.length !== 8) fundebug.notify('yjt-20200628_3 BUG Length', questionEL.length);
  });
  return true;
}

// 显示提示
function remove_tip_dNone() {
  document.querySelector('#tip').classList.remove('d-none');
}

// 题目数量
function set_quantity(quantity) {
  document.querySelector('#quantity').innerText = quantity;
}

// 题目分类
function set_category_text(category) {
  document.querySelector('#category').textContent = category.textContent;
}

// 整理结果
function question_bank(question_bank) {
  check_questions(eval(question_bank));
  let question_bank_code = eval(question_bank).map(function (e, t) {
    e.forEach(function (eTriggerEL, index) {
      if (true === RegExp_rules['video'].test(eTriggerEL)) {
        e[index] = "" +
          "<video class='embed-responsive' controls preload='none'>" +
          "<source src='" + e[index] + "' type='video/mp4'>" +
          "</video>";
      } else if (true === RegExp_rules['image'].test(eTriggerEL)) {
        e[index] = "<img class='my-1 img-fluid img-thumbnail' alt='img' src=" + e[index] + ">";
      }
    });
    return t % 2 === 0
      ? '<div class="px-2 py-3">' +
      '<p>' + e[0] + "</p>" +
      "<ul style='list-style-type: upper-latin;'>" +
      "<li" + (1 === e[5] ? ' class="px-2 py-1 text-success font-weight-bold rounded border border-success" title="' + e[6] + '"' : "") + ">" + e[1] + "</li>" +
      "<li" + (2 === e[5] ? ' class="px-2 py-1 text-success font-weight-bold rounded border border-success" title="' + e[6] + '"' : "") + ">" + e[2] + "</li>" +
      "<li" + (3 === e[5] ? ' class="px-2 py-1 text-success font-weight-bold rounded border border-success" title="' + e[6] + '"' : "") + "" + (e[3] === "" ? ' class="d-none"' : "") + ">" + e[3] + "</li>" +
      "<li" + (4 === e[5] ? ' class="px-2 py-1 text-success font-weight-bold rounded border border-success" title="' + e[6] + '"' : "") + "" + (e[4] === "" ? ' class="d-none"' : "") + ">" + e[4] + "</li>" +
      "</ul>"
      : "<p>" + e[0] + "</p>" +
      "<ol style='list-style-type: upper-latin;'>" +
      "<li" + (1 === e[5] ? ' class="px-2 py-1 text-success font-weight-bold rounded border border-success" title="' + e[6] + '"' : "") + ">" + e[1] + "</li>" +
      "<li" + (2 === e[5] ? ' class="px-2 py-1 text-success font-weight-bold rounded border border-success" title="' + e[6] + '"' : "") + ">" + e[2] + "</li>" +
      "<li" + (3 === e[5] ? ' class="px-2 py-1 text-success font-weight-bold rounded border border-success" title="' + e[6] + '"' : "") + "" + (e[3] === "" ? ' class="d-none"' : "") + ">" + e[3] + "</li>" +
      "<li" + (4 === e[5] ? ' class="px-2 py-1 text-success font-weight-bold rounded border border-success" title="' + e[6] + '"' : "") + "" + (e[4] === "" ? ' class="d-none"' : "") + ">" + e[4] + "</li>" +
      "</ol>" +
      "</div>";
  }).join("");
  question_bank.length % 2 === 1 && (question_bank_code += "</div>");
  $("#answer").html(question_bank_code);
}
