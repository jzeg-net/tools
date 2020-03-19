/**
 * 不同的短信发送方式下，修改默认占位符提示
 */
$().ready(function () {
  let jt_sms_send = document.querySelector('#jt_sms_send');
  if (jt_sms_send) {
    let jt_sms_send_type = document.querySelector('#jt_sms_send_type');
    let jt_sms_send_PhoneNumbers = document.querySelector('#jt_sms_send_PhoneNumbers');
    jt_sms_send_type.addEventListener('change', function () {
      if (jt_sms_send_type.checked) {
        jt_sms_send_PhoneNumbers.placeholder = '手机号码和英文逗号';
      } else {
        jt_sms_send_PhoneNumbers.placeholder = '纯手机号码';
      }
    });
  }
});

/**
 * 发送短信时候需要进一步确认
 */
$().ready(function () {
  let jt_sms_send = document.querySelector('#jt_sms_send');
  if (jt_sms_send) {
    let jt_sms_send_submit = document.querySelector('#jt_sms_send_submit');
    jt_sms_send_submit.addEventListener('click', function (e) {
      let aaa = confirm('您确认要发送短信吗？');
      if (true === aaa) {
        alert('您已经确认发送，立刻发送短信。');
      } else {
        alert('您已经取消发送，发送已经取消。');
        e.preventDefault();
      }
    })
  }
});
