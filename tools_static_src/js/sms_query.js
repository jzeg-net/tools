/**
 * 关联滑动条和数值
 */
$().ready(function () {
  let jt_sms_query = document.querySelector('#jt_sms_query');
  if (jt_sms_query) {
    let jt_sms_query_PageSize_number = document.querySelector('#jt_sms_query_PageSize_number');
    let jt_sms_query_PageSize_range = document.querySelector('#jt_sms_query_PageSize_range');
    let jt_sms_query_CurrentPage_number = document.querySelector('#jt_sms_query_CurrentPage_number');
    let jt_sms_query_CurrentPage_range = document.querySelector('#jt_sms_query_CurrentPage_range');
    let xxx_elements = [
      [jt_sms_query_PageSize_number, jt_sms_query_PageSize_range],
      [jt_sms_query_CurrentPage_number, jt_sms_query_CurrentPage_range],
    ];

    for (let x = xxx_elements.length, i = 0; i < x; i++) {
      dynamic_synchronization_element(xxx_elements[i]['0'], xxx_elements[i]['1'], 'input');
      dynamic_synchronization_element(xxx_elements[i]['1'], xxx_elements[i]['0'], 'input');
    }
  }
});

/**
 * 发送查询短信时候需要进一步确认
 */
// $().ready(function () {
//   let jt_sms_query = document.querySelector('#jt_sms_query');
//   if (jt_sms_query) {
//     let jt_sms_query_submit = document.querySelector('#jt_sms_query_submit');
//     jt_sms_query_submit.addEventListener('click', function (e) {
//       let aaa = confirm('您确认要查询短信内容吗？');
//       if (true === aaa) {
//         alert('您已经确认查询，查询将开始。');
//       } else {
//         alert('您已经取消查询，查询将取消。');
//         e.preventDefault();
//       }
//     })
//   }
// });

/**
 * 提交
 */
$().ready(function () {
  let jt_sms_query = document.querySelector('#jt_sms_query');
  if (jt_sms_query) {
    let jt_sms_query_action = '/member/sms/query_send.php';
    let _token = document.querySelector('#_token');
    let jt_sms_query_accessKeyId = document.querySelector('#jt_sms_query_accessKeyId');
    let jt_sms_query_accessSecret = document.querySelector('#jt_sms_query_accessSecret');
    let jt_sms_query_BizId = document.querySelector('#jt_sms_query_BizId');
    let jt_sms_query_PhoneNumber = document.querySelector('#jt_sms_query_PhoneNumber');
    let jt_sms_query_SendDate = document.querySelector('#jt_sms_query_SendDate');
    let jt_sms_query_PageSize_number = document.querySelector('#jt_sms_query_PageSize_number');
    let jt_sms_query_CurrentPage_number = document.querySelector('#jt_sms_query_CurrentPage_number');
    let jt_sms_query_submit = document.querySelector('#jt_sms_query_submit');

    jt_sms_query_submit.addEventListener('click', function () {
      let confirm_options = {
        'text': '您确认要查询短信内容吗？',
        'true': '您已经确认查询，查询将开始。？',
        'false': '您已经取消查询，查询将取1消。',
      };
      // let confirm = form_confirm(confirm_options);
      // if (form_confirm(confirm_options)) {
      let data = check_data();
      ajax_submit(jt_sms_query_action, data);
      // }
    });

    function check_data() {
      let token = _token.value;
      let accessKeyId = jt_sms_query_accessKeyId.value;
      let accessSecret = jt_sms_query_accessSecret.value;
      let BizId = jt_sms_query_BizId.value;
      let PhoneNumber = jt_sms_query_PhoneNumber.value;
      let SendDate = jt_sms_query_SendDate.value;
      let PageSize_number = jt_sms_query_PageSize_number.value;
      let CurrentPage_number = jt_sms_query_CurrentPage_number.value;

      return {
        '_token': token,
        'jt_sms_query_accessKeyId': accessKeyId,
        'jt_sms_query_accessSecret': accessSecret,
        'jt_sms_query_BizId': BizId,
        'jt_sms_query_PhoneNumber': PhoneNumber,
        'jt_sms_query_SendDate': SendDate,
        'jt_sms_query_PageSize_number': PageSize_number,
        'jt_sms_query_CurrentPage_number': CurrentPage_number,
      };
    }

    function ajax_submit(query_url, query_data) {
      $.ajax({
        type: 'post',
        url: query_url,
        data: query_data,
        dataType: 'json',
        success: function (data) {
          console.log(data);
        },
        error: function (error) {
          console.log(error);
        },
      });
    }

    function form_confirm(options = {}) {
      let confirm = confirm(options['text']);
      if (true === confirm) {
        alert(options['true']);
        return true;
      } else {
        alert(options['false']);
        return false;
      }
    }

  }
});
