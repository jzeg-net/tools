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
$().ready(function () {
  let jt_sms_query = document.querySelector('#jt_sms_query');
  if (jt_sms_query) {
    let jt_sms_query_submit = document.querySelector('#jt_sms_query_submit');
    jt_sms_query_submit.addEventListener('click', function (e) {
      let aaa = confirm('您确认要查询短信内容吗？');
      if (true === aaa) {
        alert('您已经确认查询，查询将开始。');
      } else {
        alert('您已经取消查询，查询将取消。');
        e.preventDefault();
      }
    })
  }
});
