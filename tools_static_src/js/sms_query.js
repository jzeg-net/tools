/**
 * 关联滑动条和数值
 */
$().ready(function () {
  let jt_sms_query_send = document.querySelector('#jt_sms_query_send');
  if (jt_sms_query_send) {
    let jt_sms_query_send_PageSize_number = document.querySelector('#jt_sms_query_send_PageSize_number');
    let jt_sms_query_send_PageSize_range = document.querySelector('#jt_sms_query_send_PageSize_range');
    let jt_sms_query_send_CurrentPage_number = document.querySelector('#jt_sms_query_send_CurrentPage_number');
    let jt_sms_query_send_CurrentPage_range = document.querySelector('#jt_sms_query_send_CurrentPage_range');
    let lhm_editor_xxx_elements = [
      [jt_sms_query_send_PageSize_number, jt_sms_query_send_PageSize_range],
      [jt_sms_query_send_CurrentPage_number, jt_sms_query_send_CurrentPage_range],
    ];

    for (let x = lhm_editor_xxx_elements.length, i = 0; i < x; i++) {
      dynamic_synchronization_element(lhm_editor_xxx_elements[i]['0'], lhm_editor_xxx_elements[i]['1'], 'input');
      dynamic_synchronization_element(lhm_editor_xxx_elements[i]['1'], lhm_editor_xxx_elements[i]['0'], 'input');
    }
  }
});
