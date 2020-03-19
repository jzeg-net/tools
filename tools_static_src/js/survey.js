/** 问卷调查 **/
$().ready(function () {
  let survey = '<div class="text-center" style="font-size: 85%;"><b>' +
    '<div class="mb-1"><a href="http://survey.jzeg.net/s/jMjUfeE/" target="_blank" class="text-decoration-none text-success">网站功能反馈</a></div>' +
    '<div class="mb-1"><a href="http://survey.jzeg.net/s/NbeMvqi/?user=site&repeat=1" target="_blank" class="text-decoration-none text-success">界面显示错误反馈表</a></div>' +
    '</b></div>';
  let alert_arr = {
    alert_heading: '用户调查表',
    innerHTML: survey,
    innerText: '',
    color: 'primary',
    Event_Type: 'hidden',
    Callback_Function: set_cookie_survey,
  };
  if (get_cookie('survey') !== '1') bootstrapModalJs_alert(alert_arr);

  function set_cookie_survey() {
    let attributes = {
      expires: 1 / 144,
    };
    set_cookie('survey', '1', attributes);
  }
});
