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
    let jt_sms_query_submit = document.querySelector('#jt_sms_query_submit');
    let jt_sms_query_smsContent = document.querySelector('#jt_sms_query_smsContent');

    jt_sms_query_submit.addEventListener('click', function (e) {
      let jt_sms_query_action = '/member/sms/query_send.php';
      let e_target = e.target;
      let x = {
        "e_target": e_target,
        "url": jt_sms_query_action,
      };
      let data = check_data(x);
      data['result_element'] = jt_sms_query_smsContent;
      add_spinner_icon(e_target);
      ajax_submit(data);
    });
  }

  function check_data(ajax_data) {
    let _token = document.querySelector('#_token');
    let jt_sms_query_accessKeyId = document.querySelector('#jt_sms_query_accessKeyId');
    let jt_sms_query_accessSecret = document.querySelector('#jt_sms_query_accessSecret');
    let jt_sms_query_BizId = document.querySelector('#jt_sms_query_BizId');
    let jt_sms_query_PhoneNumber = document.querySelector('#jt_sms_query_PhoneNumber');
    let jt_sms_query_SendDate = document.querySelector('#jt_sms_query_SendDate');
    let jt_sms_query_PageSize_number = document.querySelector('#jt_sms_query_PageSize_number');
    let jt_sms_query_CurrentPage_number = document.querySelector('#jt_sms_query_CurrentPage_number');

    let token = _token.value;
    let accessKeyId = jt_sms_query_accessKeyId.value;
    let accessSecret = jt_sms_query_accessSecret.value;
    let BizId = jt_sms_query_BizId.value;
    let PhoneNumber = jt_sms_query_PhoneNumber.value;
    let SendDate = jt_sms_query_SendDate.value;
    let PageSize_number = jt_sms_query_PageSize_number.value;
    let CurrentPage_number = jt_sms_query_CurrentPage_number.value;

    return {
      'ajax': ajax_data,
      'data': {
        '_token': token,
        'jt_sms_query_accessKeyId': accessKeyId,
        'jt_sms_query_accessSecret': accessSecret,
        'jt_sms_query_BizId': BizId,
        'jt_sms_query_PhoneNumber': PhoneNumber,
        'jt_sms_query_SendDate': SendDate,
        'jt_sms_query_PageSize_number': PageSize_number,
        'jt_sms_query_CurrentPage_number': CurrentPage_number,
      },
    };
  }

  function ajax_submit(query_data) {
    $.ajax({
      type: 'post',
      url: query_data['ajax']['url'],
      data: query_data['data'],
      timeout: 8000,
      dataType: 'json',
      success: function (data) {
        if ('OK' === data['sms_request']['Code']) {
          ajax_result_success(data['sms_request']);
        } else {
          bootstrapModalJs('', '连接服务器超时超时', '', 'sm', true);
        }
        remove_spinner_icon(query_data['ajax']['e_target']);
      },
      error: function (error) {
        console.log(error);
        remove_spinner_icon(query_data['ajax']['e_target']);
      },
    });
  }

  function ajax_result_success(result_data) {
    let jt_sms_query_content = document.querySelector('#jt_sms_query_content');
    let Message = jt_sms_query_content.querySelector('#Message');
    let Code = jt_sms_query_content.querySelector('#Code');
    let TotalCount = jt_sms_query_content.querySelector('#TotalCount');
    let RequestId = jt_sms_query_content.querySelector('#RequestId');
    let data = [];

    Message.innerHTML = result_data['Message'];
    Code.innerHTML = result_data['Code'];
    RequestId.innerHTML = result_data['RequestId'];
    TotalCount.innerHTML = result_data['TotalCount'];
    let SmsSendDetailDTO = result_data['SmsSendDetailDTOs']['SmsSendDetailDTO'];
    for (let x = SmsSendDetailDTO.length, i = 0; i < x; i++) {
      data.push({
        'TemplateCode': SmsSendDetailDTO[i]['TemplateCode'],
        'ReceiveDate': SmsSendDetailDTO[i]['ReceiveDate'],
        'PhoneNum': SmsSendDetailDTO[i]['PhoneNum'],
        'Content': SmsSendDetailDTO[i]['Content'],
        'SendStatus': SmsSendDetailDTO[i]['SendStatus'],
        'SendDate': SmsSendDetailDTO[i]['SendDate'],
        'ErrCode': SmsSendDetailDTO[i]['ErrCode'],
      });
    }

    $('#jt_sms_query_table').bootstrapTable({
      data: data,
      cache: false,
      classes: ' table-striped',
      // theadClasses: '',
      sortable: true,
      clickToSelect: true,
      headerStyle: true,
      rowStyle: true,
      height: 500,
      locale: 'zh-CN',
      method: 'post',
      pagination: true,
      showPaginationSwitch: true,
      minimumCountColumns: true,
      onlyInfoPagination: true,
      search: true,
      showSearchButton: true,
      showSearchClearButton: true,
      showRefresh: true,
      showFullscreen: true,
      columns: [{
        field: 'PhoneNum',
        title: '接收短信的手机号码'
      }, {
        field: 'Content',
        title: '短信内容'
      }, {
        field: 'SendDate',
        title: '短信发送日期和时间',
        sortable: true
      }, {
        field: 'ReceiveDate',
        title: '短信接收日期和时间',
        sortable: true
      }, {
        field: 'SendStatus',
        title: '短信发送状态'
      }, {
        field: 'ErrCode',
        title: '运营商短信状态码',
        sortable: true
      }, {
        field: 'TemplateCode',
        title: '短信模板ID',
        sortable: true
      }],
    });

    jt_sms_query_content.classList.remove('d-none');
  }

});
